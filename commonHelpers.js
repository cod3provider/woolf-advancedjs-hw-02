import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */function o(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyStyle:document.body.style};t.stopBtn.setAttribute("disabled","");let e=null;const n=()=>{e=setInterval(()=>t.bodyStyle.backgroundColor=o(),1e3),e&&(t.startBtn.setAttribute("disabled",""),t.stopBtn.removeAttribute("disabled"))},r=()=>{clearInterval(e),t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled","")};t.startBtn.addEventListener("click",n);t.stopBtn.addEventListener("click",r);
//# sourceMappingURL=commonHelpers.js.map
