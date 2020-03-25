// Création d'un objet FormData
var identite = new FormData();
// Ajout d'information dans l'objet
identite.append("login", "Dela");
identite.append("password", "deltax");
// Création et configuration d'une requête HTTP POST vers le fichier post_form.php
var req = new XMLHttpRequest();
req.open("POST", "http://localhost/javascript-web-srv/post_form.php");
// Envoi de la requête en y incluant l'objet
req.send(identite);

// Nouvelle commande envoyée au serveur
let commande = new FormData()
commande.append("couleur", "rouge")
commande.append("pointure", "45")
// Envoi de l'objet FormData au serveur
ajaxPost("http://localhost/javascript-web-srv/post_form.php", commande, (reponse) =>{
  // Affichage dans la console en cas de succès
  console.log("Commande envoyée au serveur")
})

let form = document.querySelector("form")
// Gestion de la soumission du formulaire
form.addEventListener("submit", (e) =>{
  e.preventDefault()
  // Récupération des champs du formulaire dans l'objet formData
  let data = new FormData(form)
  // Envoi des données du formulaire au serveur
  // La fonction callback est ici vide
  ajaxPost("http://localhost/javascript-web-srv/post_form.php", data, () => {})
})

// Création d'un objet représentant un film
let film = {
  titre: "Zootopie",
  annee: "2016",
  realisateur: "Byron Howard et Rich Moore"
}
// Envoi de l'objet au serveur
ajaxPost("http://localhost/javascript-web-srv/post_json.php", film, (reponse) => {
  // Le film est affiché dans la console en cas de succès
  console.log("Le film " + JSON.stringify(film) + " a été envoyé au serveur.")
  },
  true
)