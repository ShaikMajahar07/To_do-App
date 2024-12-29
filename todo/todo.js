inp = document.getElementById("inp_box");
btn = document.getElementById("bttn");
listContainer = document.getElementById("ul_list");
function Add(){
    if(inp.value == ''){
        alert("Enter your list");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inp.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inp.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);
function saveData(){
    localStorage.setItem("Data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("Data");
}
showTask();