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
    }
}