let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.preventDefault() // j'annule l'action du bouton
  let infos = document.getElementById("informations")
  infos.innerHTML = ""
  let ajout = new FormData(form)  
  // Requête pour envoyer le formulaire au serveur
  ajaxPost("https://oc-jswebsrv.herokuapp.com/article", ajout, (reponse) => {
    infos.innerHTML = "<p>L'article a été ajouté</p>"
  })
})
