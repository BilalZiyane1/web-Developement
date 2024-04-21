let nb1 = document.getElementById("nbr1");
let nbr2 = document.getElementById("nbr2");

let btn1 = document.getElementById("plus");
let btn2 = document.getElementById("minus");
let btn3 = document.getElementById("divi");
let btn4 = document.getElementById("multi");

let cle = document.getElementById("clear");
let list = document.querySelector(".result"); 

btn1.addEventListener("click", () => {
  
  if(!nb1.value || !nbr2.value){
    alert('Veuillez remplir les champs');
  }
  else{
    let result = parseFloat(nb1.value) + parseFloat(nbr2.value);
    displayResult(nb1.value, nbr2.value, '+', result);
    cle.style.display= "";
  }
});

btn2.addEventListener("click", () => {
  if(!nb1.value || !nbr2.value ){
    alert('Veuillez remplir les champs');
  }
  else{
    let result = parseFloat(nb1.value) - parseFloat(nbr2.value);
    displayResult(nb1.value, nbr2.value, '-', result);
    cle.style.display= "";
  }
});

btn3.addEventListener("click", () => {
  if(!nb1.value || !nbr2.value ){
    alert('Veuillez remplir les champs');
  }
  else {
    let result = parseFloat(nb1.value) / parseFloat(nbr2.value);
    displayResult(nb1.value, nbr2.value, '/', result);
    cle.style.display= "";
  }
});

btn4.addEventListener("click", () => {
  if(!nb1.value  || !nbr2.value ){
    alert('Veuillez remplir les champs');
  }
  else{
    let result = parseFloat(nb1.value) * parseFloat(nbr2.value);
    displayResult(nb1.value, nbr2.value, '*', result);
    cle.style.display= "";
  }
});


let btn0 = document.createElement("button");
let displayResult = (num1, num2, operator, result) =>{
  let li = document.createElement("li");
  let dip = document.createTextNode(`${num1} ${operator} ${num2} = ${result} `);
  li.appendChild(dip);
  btn0.innerText="X";
  li.appendChild(btn0);
  list.appendChild(li);
}

if (list.children.length == 0){
  //cle.style.display= "none";
  cle.style.display= "none";
}
cle.addEventListener("click" ,()=>
{
    if(list.children.length == 0)
    {
      cle.style.display= "none";
        alert("Input field is empty!");
        return;
    }
    let wastes = cle.parentNode.querySelectorAll('li');

    wastes.forEach(waste => {waste.remove()});
    //list.innerHTML = ""
    cle.style.display="none"

})