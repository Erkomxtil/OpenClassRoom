// Nombre de click 
let boutonClic = document.getElementById("clic")
let compteurSpan = document.getElementById("compteurClics")
let desactive = document.getElementById("desactiver")
let compteur = 0
let react = document.getElementById("react")

const clickButton = () => {
  compteur++
  compteurSpan.textContent = compteur
}

boutonClic.addEventListener("click", clickButton)

desactive.addEventListener("click", () => {
  console.log("Je stop le compteur")
  boutonClic.removeEventListener("click", clickButton)
})

react.addEventListener("click", () => {
  console.log("Je reactive le compteur")
  boutonClic.addEventListener("click", clickButton)
})
