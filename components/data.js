import config from "../storage/config.js"

export default {
    showData() {
        config.dataData();

        Object.assign(this, JSON.parse(localStorage.getItem("Data")));

        const worker = new Worker("../storage/wkData.js", {type: "module"});
        worker.postMessage({module: "listData", data: this.table});

        worker.addEventListener("message", (e) => {
            let docData = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#data").append(...docData.body.children);
        })       
    }
}