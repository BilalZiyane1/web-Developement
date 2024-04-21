let tbody= document.getElementById("tbody")


let addtodo=(todo)=>{//to do is an object
    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")
    let td4=document.createElement("td")
    tbody.appendChild(tr)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    td1.innerText=todo.userId
    td2.innerText=todo.id 
    td3.innerText=todo.title
    td4.innerText=todo.completed

}
let load =()=>{
    //ajax
    let ajax = new XMLHttpRequest()
    ajax.open("GET","https://jsonplaceholder.typicode.com/todos",false)
    ajax.send()
    let todos = JSON.parse(ajax.response)
    for (let i=0;i<todos.length;i++)
       addtodo(todos[i])
}
let btn =document.getElementById("btn")
btn.addEventListener('click',()=>{
    load()
})