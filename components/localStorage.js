export default {
    localStorage() {
        let income = [];
        let outgoing = [];

        const wk = new Worker("./storage/wkLocalStorage.js", {type: "module"});

        loadLocalStorage();

        let submit = document.querySelector("#submit");

        submit.addEventListener("click", () => {
            let select = document.querySelector("#select").value;
            let description = document.querySelector("#type").value;
            let price = document.querySelector("#price").value;
       
            if(!isNaN(parseInt(price)) && price > 0) {
                wk.postMessage({select: select, description: description, price: parseInt(price)})
            } else {
                console.log("none")
            }
        })
        wk.onmessage = ((e) => {
            let select = e.data.select;
            let data = e.data.data;
            let template = e.data.template;
            
            if (select === "load") {
                let iTemplate = e.data.data.iTemplate;
                let oTemplate = e.data.data.oTemplate;

                updateTable("tableIncome", iTemplate);
                updateTable("tableOutgoing", oTemplate);
            }

            if (select === "plus") {
                income = data;
                updateTable("tableIncome", template);
            } else if (select === "minus") {
                outgoing = data;
                updateTable("tableOutgoing", template);
            }
        }),
        
        function updateTable(id, template) {
            document.querySelector(`#${id} tbody`).innerHTML = template;
            setLocalStorage();
        }
        function setLocalStorage() {
            localStorage.setItem("incomeList", JSON.stringify(income));
            localStorage.setItem("outgoingList", JSON.stringify(outgoing));
        
        }
        function loadLocalStorage() {
            income = JSON.parse(localStorage.getItem("incomeList")) || [];
            outgoing = JSON.parse(localStorage.getItem("outgoingList")) || [];
            wk.postMessage({ type: "load", data: { income: income, outgoing: outgoing } })
        }
    }
} 
