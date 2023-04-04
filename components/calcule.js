import config from "../storage/config.js"


export default {
    
    showCalcule() {
        
        config.dataCalcule();

        Object.assign(this, JSON.parse(localStorage.getItem("Calcule")));

        const worker = new Worker("../storage/wkCalcule.js", {type: "module"});
        worker.postMessage({module: "listCalcule", data: this.input});



        worker.addEventListener("message", (e) => {
            let docCalcule = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#calcule").append(...docCalcule.body.children);
        })       
    }
}
