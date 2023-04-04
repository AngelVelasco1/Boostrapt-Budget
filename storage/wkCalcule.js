let wkCalcule = {
    listCalcule(element) {
        return `
        <div class="col-1">
        <div class="input-group" >
            <select class="form-select py-3" id="select">
                <option selected disabled></option>
              <option value="plus">${element.plus}</option>
              <option value="minus">${element.minus}</option>
            </select>
          </div>
    </div>
    <div class="col-4" >
        <input id="type" class="form-control py-3" type="text" placeholder="Type" aria-label="default input example">
    </div>
    <div class="col-2">
        <div class="input-group">
            <span class="input-group-text">${element.symbol}</span>
            <span class="input-group-text" id="input">${element.amount}</span>
            <input type="text" class="form-control py-3" id="price">
          </div>
    </div> 
    <div class="col-1">
        <button type="button" class="btn btn-primary btn-md py-3 px-5" id="submit">${element.text}</button>
    </div>
        `
    }
}
self.addEventListener("message", (e) => {
    postMessage(wkCalcule[`${e.data.module}`](e.data.data));
})