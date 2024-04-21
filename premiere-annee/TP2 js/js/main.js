let cninpu=getElementById('cneinput')
let noinput=getElementById('nominput')
let preinput=getElementById('prenominput')
let buffa=getElementById('buttoneffa')
let buajou=getElementById('buttonajou')
let listsect=getElementById('listeSection')
let tbody=getElementById('tbody')
let vider=()=>{
    cninpu.valeur=""
    noinput.value=""
    preinput.value=""
}

buffa.addEventListener('click',()=>
    vider()
)

let addetudiant=(cne,nom,prenom)=>{
    let tr=document.createElement('tr')
    let tdcne=document.createElement('td')
    let tdnom=document.createElement('td')
    let tdprenom=document.createElement('td')
    let optiontd=document.createElement('td')
    let deletebtn=document.createElement('button')

    optiontd.appendChild(deletebtn)
    tr.appendChild(tdcne)
    tr.appendChild(tdnom)
    tr.appendChild(tdprenom)
    tr.appendChild(optiontd)

    tdcne.innerText=cne
    tdnom.innerText=nom
    tdprenom.innerText=prenom
    deletebtn.innerText="delete"
    deletebtn.addEventListener('click',()=>{
        tr.remove()
    })
    tbody.appendChild(tr)
}