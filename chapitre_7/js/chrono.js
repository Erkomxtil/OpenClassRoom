let onOff = document.querySelector("button")
let chrono = document.getElementById("secondes")
let interval = null

const chronometre = () => {
  let compteur = Number(chrono.textContent) + 1
  chrono.textContent = compteur
}

onOff.addEventListener("click", () => {
  if (onOff.textContent === "Arrêter") {
    onOff.textContent = "Démarrer"
    clearInterval(interval)
  } else {
    onOff.textContent = "Arrêter"
    interval = setInterval(chronometre, 1000);
  }
})

document.getElementById("input").addEventListener("input", () => {
  console.log("coucou")
})
