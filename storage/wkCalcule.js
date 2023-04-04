

let wkCalcule = {
    listCalcule(element) {
        return `
      
        `
    }
    
    
}

self.addEventListener("message", (e) => {
    postMessage(wkCalcule[`${e.data.module}`](e.data.data));
})
