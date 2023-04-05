let wkData = {
    listData(element) {
        return `
        <div id="tables" class="row">
        <table class="table col mx-5" id="tableIncome">
            <thead>
              <tr>
                <th scope="col" class="fs-4 text-info">${element.titleIncome}</th>     
                <th></th>
            </tr>             
            </thead>
            <tbody class="table-group-divider">

            </tbody>
          </table>

          <table class="table col mx-5" id="tableOutgoing">
            <thead class="outgoing">
                <tr>                
                    <th scope="col" class="text-danger fs-4">${element.titleOutgoing}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
             
            </tbody>

          </table>
    </div>
    `
    }
};
self.addEventListener("message", (e) => {
    postMessage(wkData[`${e.data.module}`](e.data.data));
})