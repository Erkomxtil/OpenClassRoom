let demarrer = document.getElementById("demarrer")
let arreter = document.getElementById("arreter")
let vitesse = 5
let direction = 1
let interval = null
let cadre = document.getElementById("cadre")
let ballon = document.getElementById("ballon")
let largeurCadre = parseFloat(getComputedStyle(cadre).width)
let largeurBallon = parseFloat(getComputedStyle(ballon).width)

const bouge = () => {
  let ballonPositionLeft = parseFloat(getComputedStyle(ballon).left)
  if ((ballonPositionLeft + largeurBallon > largeurCadre) || (ballonPositionLeft < 0 )){
    direction *= -1
  }
  ballon.style.left = (ballonPositionLeft + vitesse * direction + "px")
  animation = requestAnimationFrame(bouge)
}

demarrer.addEventListener("click", () => {
  arreter.disabled = false
  demarrer.disabled = true
  requestAnimationFrame(bouge)
})

arreter.addEventListener("click", () => {
  arreter.disabled = true
  demarrer.disabled = false
  cancelAnimationFrame(animation)
})