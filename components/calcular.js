let available = 0;
let income = 0;
let outgoing = 0;
let percentage = 0;

let submit = document.querySelector("#submit");
let select = document.querySelector("#select");

submit.addEventListener("click", function() {
    let select = document.querySelector("#select");
    let price = parseInt(document.querySelector("#price").value);
    let amount = 0;

        if(select.value === "plus") {
            available = parseInt(document.querySelector("#available").innerHTML);
            amount = available + price;
            income += price;
            percentage = outgoing * 100 / income;

        }
        if(select.value === "minus") {
            available = parseInt(document.querySelector("#available").innerHTML);
            amount =  available - price;
            outgoing += price;
            percentage = outgoing * 100 / income;

        }
        document.querySelector("#available").innerHTML = amount;
        document.querySelector("#income").innerHTML = income;
        document.querySelector("#outgoing").innerHTML = outgoing;
        document.querySelector("#percentage").innerHTML =  "%" + percentage.toFixed(1) ;
})