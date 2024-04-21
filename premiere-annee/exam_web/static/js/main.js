const input = document.getElementById("input")
const vider = document.getElementById('vider')
const submit = document.getElementById("submit")
const dvPosts= document.getElementById('dv-posts')
const url = "http://localhost:3000/posts";

const createpost =(post)=>{
  const maindiv =document.createElement('div')
  const div1= document.createElement("div")
  const txt = document.createElement('h3')
  const div2 = document.createElement('div')
  const img = document.createElement('img')
  const profilename = document.createElement('h4')
  
  const ul = document.createElement('ul')
  const li1 = document.createElement('li')
  const button1 = document.createElement('button')
  const i1 = document.createElement('i')
  const li2 = document.createElement('li')
  const button2 = document.createElement('button')
  const i2 = document.createElement('i')

  maindiv.classList.add('dv')
  div1.classList.add("dv-2")
  profilename.classList.add('h')
  img.setAttribute('src',"./img/profil.jpg ")
  img.classList.add(profil)
  div1.appendChild(img)
  div1.appendChild(profilename)
  ul



}
