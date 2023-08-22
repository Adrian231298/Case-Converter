const text = document.querySelector("textarea")
const uppercase = document.querySelector("#upper-case")
const lowercase = document.querySelector("#lower-case")
const sentenceCase = document.querySelector("#sentence-case")
const properCase = document.querySelector("#proper-case")
const  d = document.querySelector("#save-text-file")



function toUpperCase(textarea) {
    textarea.value = textarea.value.toUpperCase()
}

function toLow(textarea) {
   textarea.value = textarea.value.toLowerCase()
}

function proper(te) {
    let arr = te.value.toLowerCase().split(" ");

    for(let i = 0; i < arr.length; i++) {
        let word = arr[i];
        arr[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    let res = arr.join(" ");
    te.value = res;
}

function sen(te) {
    let arr = te.value.split(/(?<=[.?!])\s+/);
    for (let i = 0; i < arr.length; i++) {
        let sentence = arr[i].trim();
        let capitalizedSentece = sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        arr[i] = capitalizedSentece
    }
    let res = arr.join(" ");
    te.value = res;
}

function download(filename, t) {
    let element = document.createElement("a");
    element.setAttribute("href","data:text/plain;charset=utf-8," + encodeURIComponent(t));
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

uppercase.addEventListener("click",function() {toUpperCase(text)})
lowercase.addEventListener("click",function() {toLow(text)})
properCase.addEventListener("click", function() {proper(text)})
sentenceCase.addEventListener("click",function() {sen(text)})
d.addEventListener("click", function() {download("text.txt",text.value)})
