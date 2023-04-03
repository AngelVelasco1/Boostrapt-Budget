let wkBanner = {
    listBanner(element) {
        return `
        <div class="mt-5" >

        <h2 class="fs-4">${element.availableTitle}</h2>
        <h2 class="display-4 text-dark" id="available">${element.availableAmount}</h2>
        </div>
       

        <div class="mb-4">
        <div class="d-flex align-items-center justify-content-around bg-info w-25 mx-auto py-3 my-3 rounded">
        <div class="">${element.incomeTitle}</div>
        <div class="" id="income">${element.incomeAmount}</div>
    </div>
    <div class="d-flex align-items-center justify-content-around bg-danger w-25 mx-auto py-3 rounded">
        <div>${element.outgoingTitle}</div>
        <div id="outgoing">${element.outgoingAmount}</div>
        <div id="percentage">${element.outgoingPercentage}</div>
    </div>
        </div>
 
    `
    }
};
self.addEventListener("message", (e) => {
    postMessage(wkBanner[`${e.data.module}`](e.data.data));
})