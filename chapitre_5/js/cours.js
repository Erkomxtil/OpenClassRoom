const clic = () => {
  console.log("Clic 2 !")
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);

// Suppression du gestionnaire pour l'événement click
boutonElt.removeEventListener("click", clic);

// // Ajout d'un gestionnaire qui affiche le type et la cible de l'événement

document.getElementById("bouton").addEventListener("click", (e) => {
  console.log("type de l'évènement : " + e.type + " texte du bouton : " + e.target.textContent)
})

document.addEventListener("keypress", (e) => {
  console.log("Vous avez appuyer sur la touche : " + String.fromCharCode(e.charCode))
})

const infoClavier = (e) => {
  console.log("Evènement clavier : " + e.type, "touche : " + e.keyCode)  
}

document.addEventListener("keydown", infoClavier)
document.addEventListener("keyup", infoClavier)

// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
  var bouton = "inconnu";
  switch (code) {
  case 0: // 0 est le code du bouton gauche
      bouton = "gauche";
      break;
  case 1: // 1 est le code du bouton du milieu
      bouton = "milieu";
      break;
  case 2: // 2 est le code du bouton droit
      bouton = "droit";
      break;
  }
  return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) { 
  console.log("Evènement souris : " + e.type + ", bouton " +
    getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}
// Gestion du clic souris
document.addEventListener("click", infosSouris);

// Gestion de l'appui et du relâchement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);

// Gestion de la fin du chargement de la page web
window.addEventListener("load", function () {
  console.log("Page entièrement chargée");
});

// Gestion de la fermeture de la page web
/* window.addEventListener("beforeunload", (e) =>{
  let message = "On est bien ici !"
  e.returnValue = message
  return message
}) */

// Gestion du click sur le document
document.addEventListener("click", () =>{
  console.log("Gestionnaire du document")
})

// Gestion du click sur le paragraphe
document.getElementById("para").addEventListener("click", () =>{
  console.log("Gestionnaire du paragraphe")
})

// Gestion du click sur le bouton
document.getElementById("propa").addEventListener("click", (e) =>{
  console.log("Gestionnaire bouton")
  e.stopPropagation()
})

document.getElementById("interdit").addEventListener("click", (e) => {
  console.log("Continuez à lire le cours.")
  e.preventDefault()
})

