let letterColor = prompt("Veuillez saisir la couleur du texte.")
let backgroundColorDiv = prompt("Veuillez saisir la couleur du fond pour le texte")

let divColor = document.getElementsByTagName("div")

for(let colorTextBackground of divColor){
  colorTextBackground.style.color = letterColor
  colorTextBackground.style.backgroundColor = backgroundColorDiv
}

