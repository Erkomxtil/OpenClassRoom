let infos = document.getElementById("infos")

let titre = document.createElement("h1")
titre.textContent = "Informations sur l'élément"

let hauteur = document.getElementById("contenu").offsetHeight
let largeur = document.getElementById("contenu").offsetWidth
console.log(hauteur, largeur)


infos.appendChild(titre)
infos.insertAdjacentHTML("beforeend", '<ul><li> hauteur : ' + hauteur + 'px</li><li> largeur : ' + largeur + 'px</li></ul>')