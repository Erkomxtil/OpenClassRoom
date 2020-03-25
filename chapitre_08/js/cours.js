/*----- Pour une requêtes synchrone  ------- */ 
/* // Création d'une requête HTTP
var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false);
// Envoi de la requête
req.send(null);
// Affiche la réponse reçue pour la requête
console.log(req.responseText); */

function afficher(reponse) {
  console.log(reponse)
}

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", (reponse) => {
  let langages = reponse
  let tabLangages = langages.split(";")

  for (let langage of tabLangages) {
    let listLangage = document.getElementById("langages")
    let createLi = document.createElement("li")
    createLi.textContent += langage
    listLangage.appendChild(createLi)
    console.log(langage)
  }
})

let avion = [
  {
    marque: "Airbus",
    couleur: "A320"
  },
  {
    marque: "Airbus",
    couleur: "A380"
  }
]
console.log(avion)
// Transforme l'objet Javascript en chaîne de caractère JSON
var texteAvion = JSON.stringify(avion)
console.log(texteAvion)
// Transforme la chaîne de caractère JSON en objet Javascript
console.log(JSON.parse(texteAvion))

ajaxGet("http://localhost/javascript-web-srv/data/films.json", (reponse) => {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    for (let film of films) {
      console.log(film.titre)
      console.log(film.annee)
    }
});

