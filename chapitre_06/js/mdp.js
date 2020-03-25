// récupération des éléments du formulaire
let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  let mdp1 = form.elements.mdp1.value // valeur saisie 1er champs
  let mdp2 = form.elements.mdp2.value // valeur saisie 2ème champs
  let infoMdp = document.getElementById("infoMdp")
  let regexMdp = /[0-9]/ // Pour vérifier s'il contient un chiffre
  let message = ""

  if (mdp1 === mdp2) {
    if (mdp1.length < 6) {
      message = "Le mot de passe doit être supérieur à 6 caractères"
    } else {
      if (regexMdp.test(mdp1)){
        message ="Le mot de passe est ok"
      } else {
        message = "Le mot de passe doit contenir au moins un chiffre"
      }
    }
  } else {
    message = "Les mots de passe saisis sont différents"
  }
  infoMdp.textContent = message
  e.preventDefault()
})