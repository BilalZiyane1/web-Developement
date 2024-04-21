
let hi=()=>{
    console.log("hi")
    
}
let salut=()=>{
    console.log("salut")
}
let btr= document.getElementById("salut")
btr.addEventListener(("click"),()=>
{
    salut();
})

let hiButton = document.getElementById('hi');
let salutButton = document.getElementById('salut');
let iutput = document.getElementById('input');


hiButton.addEventListener('click', ()=>
{
   input.value='HI'
   alert(input.value)
});
salutButton.addEventListener('click', ()=>
{
   input.value='SALUT'
 });


let nom=document.getElementById('nom');
let prenom=document.getElementById('prenom');
let but=document.getElementById('button');
let message = document.getElementById("message");


but.addEventListener('click',()=>
{
     let nomvalu=nom.value
     let prevalu=prenom.value
     let ch="je suis " + nomvalu +" "+prevalu
     message.innerText=ch
     nom.value=""
     prenom.value=""
});

let nombre1=document.getElementById('nbr1');
let nombre2=document.getElementById('nbr2');
let button2=document.getElementById('butt');
let sommme=document.getElementById('somme');


button2.addEventListener('click',()=>
{
    let x=parseFloat(nombre1.value);
    let y=parseFloat(nombre2.value);
    let z= x+y
    sommme.innerText=z
})

let nam=document.getElementById('name');
let clr=document.getElementById('clr')
let bt=document.getElementById('bt')
let span=document.getElementById('span')

bt.addEventListener('click',()=>
{
    let calval=clr.value
    span.setAttribute("style","color:"+calval)
    span.innerText=nam.value
    nam.value=""
})

let lname=document.getElementById('lname');
let fname=document.getElementById('fname')
let bto=document.getElementById('bto')
let ul=document.getElementById('ul')
bto.addEventListener('click',()=>
{
    let li=document.createElement('li')
    li.innerText=lname.value+" " +fname.value
    ul.appendChild(li)
    lname.value=""
    fname.value=""
})

let inc=document.getElementById('inc')
let dec=document.getElementById('dec')
let inp=document.getElementById('inp')

inc.addEventListener('click',()=>
{
   // let x =parseFloat(inp.value)
    inp.value = parseFloat(inp.value)+1
    
})
dec.addEventListener('click',()=>
{
    //let a =parseFloat(inp.value)
    inp.value = parseFloat(inp.value) - 1
})

function incrementer() {
    var input = document.getElementById("nombre");
    var valeur = parseInt(input.value);
    input.value = valeur + 1;
  }
  
  function decrementer() {
    var input = document.getElementById("nombre");
    var valeur = parseInt(input.value);
    input.value = valeur - 1;
}




