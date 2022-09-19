const todoForm = document.querySelector(".todo-form")
const toList = document.querySelector("todo-list");
const toDoInput = todoForm.querySelector("input");
var toDos =[];


function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos))



}

function deletToDo (event){

    const liRemove = event.target.parentElement;
    const removeId=liRemove.id;
    toDos= toDos.filter(toDo=>toDo.id!==parseInt(removeId));
    saveToDos()
    
    

    liRemove.remove();

}
function re(a)
{
    if(a.id===b)
    {
        a.ox=1;
        saveToDo();
    }
}
function reTextToDo (event)
{
    if(event.target.innerText ==="❗"){
    event.target.innerText ="✔️"
    event.target.parentElement.classList.remove("x")
    event.target.parentElement.classList.add("o");
    const checkId=event.target.parentElement.id
    toDos.forEach(re);
    console.log(toDos)
    
    
    
    }
    else{
        event.target.innerText ="❗"
        event.target.parentElement.classList.remove("o")
    event.target.parentElement.classList.add("x");
    }
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button =document.createElement("button");
    const reText = document.createElement("button");
   
    button.innerText = "❌"
    if(newToDoObj.ox===0){
        reText.innerText = "❗"
        li.classList.add("x");
    }
    else{
        button.innerText = "✔️"
        li.classList.remove("x")
        li.classList.add("o");
    }
    li.id =newToDoObj.id;
   
    

    li.appendChild(span);
    li.appendChild(reText)
    li.appendChild(button);
    span.innerText = newToDoObj.text;
    document.body.appendChild(li);

    button.addEventListener("click",deletToDo);
    reText.addEventListener("click",reTextToDo);

}

function handleToDoSubmit(event)
{
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj ={
        text:newToDo,
        id:Date.now(),
        ox:0
    }
    paintToDo(newToDoObj);
    toDos.push(newToDoObj);
    saveToDos();

}

todoForm.addEventListener("submit",handleToDoSubmit);



const saveToDo =localStorage.getItem("todos");
if(saveToDo !==null){
    const parseToDos = JSON.parse(saveToDo);
    console.log(parseToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}


