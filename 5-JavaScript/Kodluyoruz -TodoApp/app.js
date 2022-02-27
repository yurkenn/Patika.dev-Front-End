window.addEventListener("load", load)


function load() {
    let memory = JSON.parse(localStorage.getItem("task"));
    if (memory) {
        list.innerHTML = memory
    }}

//create a close button and append it to each list item
let myNodeList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodeList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

//click on close button to hide the current list item
let close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElemen;
        div.style.display = "none";
        saveList(list);
    }
    
}

// add a checked symbol when clicking on a list item
let list = document.querySelector("ul");
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle("checked")
        saveList(list);
    }
}, false);




//crate a new list item when clicking on the "Ekle" button
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.querySelector("#task").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        $('#errorToast').toast('show')
    } else {
        document.querySelector("#list").appendChild(li);
        $('#successToast').toast('show')

    }

    document.querySelector("#task").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            saveList(list);
        }
    }
}

// Save with Local Storage
function saveList(list) {
    localStorage.setItem("task", JSON.stringify(list.innerHTML));
}

