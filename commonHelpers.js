import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */function n(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyStyle:document.body.style};let e=null;const o=()=>{e=setInterval(()=>t.bodyStyle.backgroundColor=n(),1e3),e&&t.startBtn.setAttribute("disabled","")},r=()=>{clearInterval(e),t.startBtn.removeAttribute("disabled")};t.startBtn.addEventListener("click",o);t.stopBtn.addEventListener("click",r);
//# sourceMappingURL=commonHelpers.js.map