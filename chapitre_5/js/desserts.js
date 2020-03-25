let bouton = document.querySelector("button")
bouton.addEventListener("click", () => {
let ajoutDessert = prompt("Veuillez inscrire un nouveau dessert !")
let desserts = document.getElementById("desserts")
let listeLi = document.createElement("li")

listeLi.textContent = ajoutDessert
desserts.appendChild(listeLi)
})

let changeLi = document.getElementsByTagName("li")

for(let item of changeLi){
  item.addEventListener("click", (e) => {
    let changerDessert = prompt("Changer de dessert")
  })
}