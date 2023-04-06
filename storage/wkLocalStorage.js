let income = [];
let outgoing = [];

class Income {
    constructor(description, price) {
        this["description"] = description;
        this["price"] = price;
    }
}

class Outcome {
    constructor(description, price) {
        this["description"] = description;
        this["price"] = price;
    }
}

self.onmessage = (e) => {
    let select = e.data.select;
    let description = e.data.description;
    let price = e.data.price;

    if (select === "load") {
        income = e.data.data.income.map((incomee) => new Income(incomee.description, incomee.price));
        outgoing = e.data.data.outgoing.map((outgoingg) => new Outcome(outgoingg.description, outgoingg.price));

        const iTemplate = income.map(
            (val) => `
            <tr>
            <th>${val.description}</th>
            <td>${val.price}</td>
          </tr>
            `
        ).join("");

        const oTemplate = outgoing.map(
            (val) => `
            <tr>
            <th>${val.description}</th>
            <td>${val.price}</td>
          </tr>
            `
        ).join("");
        self.postMessage({ type: "load", data: { iTemplate: iTemplate, oTemplate: oTemplate } })
    } else if (select === "plus") {
        let newIncome = new Income(description, price);
        income.unshift(newIncome);

        const iTemplate = income.map(
            (val) => `
            <tr>
            <th>${val.description}</th>
            <td>${val.amount}</td>
          </tr>
            `
        ).join("");
        self.postMessage({ type: "load", data: income,  iTemplate: iTemplate});
    } else if (select === "minus") {
        let newOutgoing = new Outcome(description, price);
        outgoing.unshift(newOutgoing);

        const oTemplate = outgoing.map(
            (val) => `
            <tr>
            <th>${val.description}</th>
            <td>${val.amount}</td>
          </tr>
            `
        ).join("");
        self.postMessage({ type: "load", data: outgoing,  oTemplate: oTemplate});
    } 
}