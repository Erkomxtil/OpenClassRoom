let titre = document.getElementsByTagName("h2")
console.log(titre[0])
console.log(titre.length)

let merveilles = document.getElementsByClassName("merveilles")

for(let i = 0; i < merveilles.length; i++){
  console.log(merveilles[i])
}

for(let paragraphe of merveilles){
  let one = document.createElement("li")
  one.innerHTML = "Je teste"
  paragraphe.appendChild(one)
}

// Elément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));

// Le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").textContent);

// L'attribut href du premier lien
console.log(document.querySelector("li").getAttribute("class"));

if (document.querySelector("li").hasAttribute("class")) {
  console.log("Le premier lien possède l'attribut class");
} else {
  console.log("Le premier lien ne possède pas l'attribut class");
}

// Liste des classes de l'élément identifié par "antiques"
var classes = document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"

if (document.getElementById("antiques").classList.contains("merveille")) {
  console.log("L'élément identifié par antiques possède la classe merveille");
} else {
  console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}