

let wkCalcule = {
    listCalcule(element) {
        return `
        <div class="col-1">
        <div class="input-group" >
            <select class="form-select py-3" id="select">
              <option value="plus">+</option>
              <option value="minus">-</option>
            </select>
          </div>
    </div>
    <div class="col-4" >
        <input id="type" class="form-control py-3" type="text" placeholder="Type" aria-label="default input example">
    </div>
 
   
   
        `
    }
    
    
}

self.addEventListener("message", (e) => {
    postMessage(wkCalcule[`${e.data.module}`](e.data.data));
})
