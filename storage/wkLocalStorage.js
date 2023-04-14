/* Only for localstorage */
let income = [];
let outgoing = [];

class Income {
    constructor(description, price) {
        this.description = description;
        this.price = price;
    }
}
class Outgoing {
    constructor(description, price) {
        this.description = description;
        this.price = price;
    }
}

self.onmessage = (e) => {
    let select = e.data.select;
    let description = e.data.description;

    if (select === "load") {

        income = e.data.data.income.map((incomee) => new Income(incomee.description, incomee.price));
        outgoing = e.data.data.outgoing.map((outgoingg) => new Outgoing(outgoingg.description, outgoingg.price));

        const Itemplate = income
            .map(
                (val, index) => `
            <tr>
              <td>${val.description}</td>
              <td>$ ${val.price}</td>

            </tr>
          `
            )
            .join("");

        const Otemplate = outgoing
            .map(
                (val, index) => `
            <tr>
              <td>${val.description}</td>
              <td>-$ ${val.price}</td>
              <td><button class= "delete-button "  data-index="${index}"><span>Delete</span></button></td>
            </tr>
          `
            )
            .join("");

        self.postMessage({ select: "load", data: { Itemplate: Itemplate, Otemplate: Otemplate } });

    }

    if (select === "plus") {
        let price = parseInt(e.data.price);
        let newIncome = new Income(description, price);
        income.unshift(newIncome);

        const Itemplate = income
            .map(
                (val, index) => `
            <tr>
              <td>${val.description}</td>
              <td>${val.price}</td>
            </tr>
          `
            )
            .join("");

        self.postMessage({ select: "incomee", data: income, template: Itemplate });

    }
    else if (select === "minus") {
        let price = parseInt(e.data.price)
        let newOutgoing = new Outgoing(description, price);
        outgoing.unshift(newOutgoing);

        const Otemplate = outgoing
            .map(
                (val, index) => `
            <tr>
              <td>${val.description}</td>
              <td>${val.price}</td>
              <td><button class= "delete-button " data-index="${index}"><span>Delete</span></button></td></tr>
          `
            )
            .join("");

        self.postMessage({ select: "outgoingg", data: outgoing, template: Otemplate });
    }


};
