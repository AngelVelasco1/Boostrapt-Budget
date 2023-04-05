export default {
    dataBanner() {
        localStorage.setItem("Banner", JSON.stringify({
            banner: {
                availableTitle: "Available Budget",
                availableAmount: "0",

                incomeTitle: "Income",
                incomeAmount: "0",

                outgoingTitle: "Outgoing",
                outgoingAmount: "0",
                outgoingPercentage: "$ 0"

            }
        }))
    },

    dataCalcule() {
        localStorage.setItem("Calcule", JSON.stringify({
            input: { 
                plus: "+",
                minus: "-",
                symbol: "$",
                amount: "0",
                
                id: "submit",
                text: "Calcule"    
        },


    }))
    },

    dataData() {
        localStorage.setItem("Data", JSON.stringify({
            table: {
                titleIncome: "Income",
                titleOutgoing: "Outgoing",
        },
    
    }))
    

}
}
