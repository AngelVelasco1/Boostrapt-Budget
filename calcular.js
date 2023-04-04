import banner from "./components/banner.js" 
import calcule from "./components/calcule.js"
 
banner.showBanner();
calcule.showCalcule();


let available = 0;
let income = 0;
let outgoing = 0;
let percentage = 0;

let submit = document.querySelector("#submit");
let price = document.querySelector("#price");

submit.addEventListener("click", function() {
    let select = document.querySelector("#select");
    let price = parseInt(document.querySelector("#price").value);
    let amount = 0;
    
    if(select.value === "plus" ) {
        available = parseInt(document.querySelector("#available").innerHTML);
        amount = available + price;
        income += price;
        percentage = outgoing * 100 / income;

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
    
    if(select.value === "minus") {
            available = parseInt(document.querySelector("#available").innerHTML);
            amount =  available - price;
            outgoing += price;
            percentage = outgoing * 100 / income;   
            
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
        document.querySelector("#available").innerHTML = amount;
        document.querySelector("#income").innerHTML = "$ " + income;
        document.querySelector("#outgoing").innerHTML = "$ " + outgoing;
        document.querySelector("#percentage").innerHTML =  "% " + percentage.toFixed(1) ;

})


price.addEventListener("input", function(){
    let price = parseInt(document.querySelector("#price").value);
    document.querySelector("#input").innerHTML = price;

})