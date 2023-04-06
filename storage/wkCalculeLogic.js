self.addEventListener("message", (e) => {
    console.log("Datos recibidos en el worker: ", e.data);

    let available = parseInt(e.data.available)|| 0;
    let income =  parseInt(e.data.income)|| 0;
    let outgoing = parseInt(e.data.outgoing)|| 0;
    let percentage = 0;


    let select = e.data.select;
    let price = parseInt(e.data.price);

    
    if (select === "plus") {
        available = parseInt(available) + price, income += price;
        percentage = outgoing * 100 / income;
    }
    else if (select === "minus") {
        available = parseInt(available) - price, outgoing += price;  
        percentage = outgoing * 100 / income;
    }
    console.log("Worker Message: ", { available, income, outgoing, percentage });
    self.postMessage({available, income, outgoing, percentage});
})

