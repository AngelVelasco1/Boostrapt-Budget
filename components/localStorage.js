export default {
    localStorage() {
        /* Variables */
        let income = [];
        let outgoing = [];
        const wk = new Worker("storage/wkLocalStorage.js", { type: "module" });
        /* Call Functions */
        loadLocalStorage();
        /* Event Update Table*/
        let submit = document.querySelector("#submit");
        submit.addEventListener("click", (e) => {

            let select = document.querySelector("#select").value;
            let description = document.querySelector("#description").value;
            let price = document.querySelector("#price").value;

            if (!isNaN(parseInt(price)) && price > 0) {
                wk.postMessage({ select: select, description: description, price: parseInt(price) })
            }
            else {
                ("nada");
            }
        });
        
        wk.onmessage = ((e) => {
            let select = e.data.select;
            let data = e.data.data;
            let template = e.data.template;

            if (select === "load") {
                let Itemplate = e.data.data.Itemplate;
                let Otemplate = e.data.data.Otemplate;

                updateTable("tableIncome", Itemplate);
                updateTable("tableOutgoing", Otemplate);
            }
            if (select === "incomee") {
                income = data;
                updateTable(" tableIncome", template);
            }else if (select === "outgoingg") {
                outgoing = data;
                updateTable("tableOutgoing", template);
            }
        });
        document.addEventListener("click", (e) => {
            if (e.target.classList.contains('delete-button')) {

                Swal.fire({
                    title: 'Attention',
                    text: "If you delete you will not be able to recover your movement.",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete'
                }).then((result) => {
                    if(result.isConfirmed) {
                        let tr = e.target.closest('tr');
                        const buttons = Array.from(document.querySelectorAll(".delete-button"))
                        const index = buttons.indexOf(e.target)
                        tr.remove(index, 1);

                        let price = 0;
                        let outgoing = JSON.parse(localStorage.getItem("outgoingList"));
                        price = parseInt(outgoing[index]["price"]);
                        outgoing.splice(index, 1);
                        localStorage.setItem("outgoingList", JSON.stringify(outgoing));
                        Oupdate(price);
                        location.reload();

                    }
                })
            }

        })

        /* Functions */
        function updateTable(tableId, template) {
            document.querySelector(`#${tableId} tbody`).innerHTML = template;
            setLocalStorage();
        }

        function setLocalStorage() {
            localStorage.setItem("incomeList", JSON.stringify(income));
            localStorage.setItem("outgoingList", JSON.stringify(outgoing));

        }
        function loadLocalStorage() {
            income = JSON.parse(localStorage.getItem("incomeList")) || [];
            outgoing = JSON.parse(localStorage.getItem("outgoingList")) || [];
            wk.postMessage({ select: "load", data: { income: income, outgoing: outgoing } });
        }
    
        function Oupdate(price) {
          let available = parseInt(localStorage.getItem("available"))
          let outgoing = parseInt(localStorage.getItem("outgoing"));
            let percentage = localStorage.getItem("percentage");

          available += price;
          outgoing -= price;
          percentage = (outgoing * 100) / income;
          localStorage.setItem("available", available);
          localStorage.setItem("outgoing", outgoing);
        }
    }
};