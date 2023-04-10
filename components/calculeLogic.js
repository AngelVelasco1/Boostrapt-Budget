export default {
    calcule() {
        let refresh = () => {

            /* Worker */
            const wk = new Worker("./storage/wkCalculeLogic.js", { type: "module" })
            /* Variables */
            let available = parseInt(localStorage.getItem('available')) || 0;
            let income = parseInt(localStorage.getItem('income')) || 0;
            let outgoing = parseInt(localStorage.getItem('outgoing')) || 0;

            /* DOM Elements */
            let select = document.querySelector("#select").value
            let price = parseInt(document.querySelector("#price").value);

            if (isNaN(price)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Enter a number',
                })
                return;
            }

            else if (price <= 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Enter a number greater than 0',
                })
                return;
            }

            wk.postMessage({ available, income, outgoing, select, price });
            wk.addEventListener("message", (e) => {
                const { available, income, outgoing, percentage } = e.data;
                document.querySelector("#available").innerHTML = available.toLocaleString('es-CO', {style: 'currency', currency: 'COP'});
                document.querySelector("#income").innerHTML = + income.toLocaleString('es-CO', {style: 'currency', currency: 'COP'});
                document.querySelector("#outgoing").innerHTML = + outgoing.toLocaleString('es-CO', {style: 'currency', currency: 'COP'});
                document.querySelector("#percentage").innerHTML = percentage.toFixed(2) + "% ";

                localStorage.setItem('available', available);
                localStorage.setItem('income', income);
                localStorage.setItem('outgoing', outgoing);
                localStorage.setItem('percentage', percentage);


            })


        }
        let submit = document.querySelector("#submit");

        /* Events */
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            refresh();
            document.querySelector("#tables").reset();


        }),

            window.addEventListener("unload", () => {
                const { available, income, outgoing, percentage } = localStorage;
                const wk = new Worker("./storage/wkCalculeLogic.js", { type: "module" })

                wk.addEventListener("message", () => {
                    wk.terminate;
                });
                wk.postMessage({ available, income, outgoing, percentage });

            })
        window.addEventListener("load", () => {
            const available = parseInt(localStorage.getItem('available')) || 0;
            const income = parseInt(localStorage.getItem('income')) || 0;
            const outgoing = parseInt(localStorage.getItem('outgoing')) || 0;
            const percentage = parseInt(localStorage.getItem('percentage')) || 0;

            document.querySelector("#available").innerHTML =  + available;
            document.querySelector("#income").innerHTML =  + income
            document.querySelector("#outgoing").innerHTML = "$" + outgoing
            document.querySelector("#percentage").innerHTML = percentage.toFixed(2) + "%";

        })


    }
}
