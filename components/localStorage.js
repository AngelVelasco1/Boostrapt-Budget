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
                updateTable("tableIncome", template);
            }else if (select === "outgoingg") {
                outgoing = data;
                updateTable("tableOutgoing", template);
            }
        });


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
            wk.postMessage({ select: "load", data: { income: income, outgoing: outgoing } })
        }
    }
} 

            /*     if (select.value === "plus") {
                    let tableIncome = document.querySelector("#tableIncome tbody");
        
                    let newHead = document.createElement("th")
                    let newRow = document.createElement("tr");
                    let newCell1 = document.createElement("td");
                    let newCell2 = document.createElement("td");
        
                    newCell1.textContent = description;
                    newCell2.textContent = `$${price}`;
        
                    newRow.appendChild(newCell1);
                    newRow.appendChild(newCell2);
                    tableIncome.appendChild(newRow);
                }
        
                if (select.value === "minus") {
                    let tableOutgoing = document.querySelector("#tableOutgoing tbody");
                    let description = document.querySelector("#type").value;
        
                    let newRow = document.createElement("tr");
                    let newCell1 = document.createElement("td");
                    let newCell2 = document.createElement("td");
        
                    newCell1.textContent = description;
                    newCell2.textContent = `-$${price}`;
        
                    newRow.appendChild(newCell1);
                    newRow.appendChild(newCell2);
                    tableOutgoing.appendChild(newRow);
                } */