// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

let contenu = document.getElementById("contenu")

for (let journal of journaux){
  let line = '<a href="'+ journal +'"> '+ journal +' </a><br/>' 
  contenu.insertAdjacentHTML("beforeend", line)
}
