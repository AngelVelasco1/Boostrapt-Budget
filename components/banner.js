import config from "../storage/config.js"

export default {
    showBanner() {
        config.dataBanner();

        Object.assign(this, JSON.parse(localStorage.getItem("Banner")));

        const worker = new Worker("./storage/wkBanner.js", {type: "module"});
        worker.postMessage({module: "listBanner", data: this.banner});

        worker.addEventListener("message", (e) => {
            let docBanner = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#banner").append(...docBanner.body.children);
        })       
    }
}