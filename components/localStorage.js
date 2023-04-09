export default {
    localStorage() {
        /* Variables */
        let income = [];
        let outgoing = [];
        const wk = new Worker("./storage/wkLocalStorage.js", { type: "module" });
        /* Call Functions */
        setLocalStorage();
        loadLocalStorage();
        /* Event Update Table*/
        let submit = document.querySelector("#submit");
        submit.addEventListener("click", () => {

            let select = document.querySelector("#select");
            let price = document.querySelector("#price").value;
            if (isNaN(price)) {
                return;
            }

            else if (price <= 0) {
                return;
            }

            if (select.value === "plus") {
                let tableIncome = document.querySelector("#tableIncome tbody");
                let description = document.querySelector("#type").value;

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
            }
        })
        /* Functions */
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
