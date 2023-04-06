import logic from "./components/calculeLogic.js"
import localStorage from "./components/localStorage.js"
import grafic from "./components/grafic.js"

logic.calcule();
localStorage.localStorage();
grafic.showGrafic();


let submit = document.querySelector("#submit");

submit.addEventListener("click", () => {

    let select = document.querySelector("#select");
    let price = parseInt(document.querySelector("#price").value);
    let amount = 0;

    if (select.value === "plus") {

        let tableIncome = document.querySelector("#tableIncome tbody");
        let input = document.querySelector("#type").value;

        let newRow = document.createElement("tr");
        let newCell1 = document.createElement("td");
        let newCell2 = document.createElement("td");

        newCell1.textContent = input;
        newCell2.textContent = `$ ${price}`;

        newRow.appendChild(newCell1);
        newRow.appendChild(newCell2);
        tableIncome.appendChild(newRow);

    }

    if (select.value === "minus") {
    
        let tableOutgoing = document.querySelector("#tableOutgoing tbody");
        let input = document.querySelector("#type").value;

        let newRow = document.createElement("tr");
        let newCell1 = document.createElement("td");
        let newCell2 = document.createElement("td");

        newCell1.textContent = input;
        newCell2.textContent = `-$ ${price}`;

        newRow.appendChild(newCell1);
        newRow.appendChild(newCell2);
        tableOutgoing.appendChild(newRow);
    }
})