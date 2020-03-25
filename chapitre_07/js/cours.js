let compteur =  document.getElementById("compteur")

// Diminue le compteur jusqu'à 0
const diminuerCompteur = () => {
  // Conversion du texte en nombre
  let compteurPage = Number(compteur.textContent)
  if (compteurPage > 1) {
    compteur.textContent = compteurPage - 1
  } else {
    // Annule l'exécution répétée
    clearInterval(intervalId)
    // Modifie le titre de la page
    let titre = document.getElementById("titre")
    titre.textContent = "Boum !!!"
    setTimeout( () => {
      titre.textContent = "Tout est cassé :("
    }, 2000)

  }
  compteur.textContent = compteurPage - 1
}

let intervalId = setInterval(diminuerCompteur, 1000)

// Déplacement du block rouge 
let bloc = document.getElementById("bloc")
let cadre = document.getElementById("cadre")
let vitesse = 7 // valeur du déplacement en pixels
// Conversion en nombre de la largeur du bloc (valeur de la forme "XXpx")
let largeurBloc = parseFloat(getComputedStyle(bloc).width)
let animationId = null

// Déplace le bloc rouge sur la gauche
const deplacerBloc = () => {
  // conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
  let xBloc = parseFloat(getComputedStyle(bloc).left)
  // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
  let xMax = parseFloat(getComputedStyle(cadre).width)
  if (xBloc + largeurBloc <= xMax) { //Si le bloc n'est pas encore au bout du cadre
    //Déplacement du bloc
    bloc.style.left = (xBloc + vitesse + "px")
    // Demande au navigateur d'appeler deplacerBloc dès que possible
    animationId = requestAnimationFrame(deplacerBloc)
  } else {
    // Annulation de l'animation
    cancelAnimationFrame(animationId)
  }
}

//animationId = requestAnimationFrame(deplacerBloc)

