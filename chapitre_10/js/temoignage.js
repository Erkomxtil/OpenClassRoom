let form = document.querySelector("form")
let infos = document.getElementById("infos")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  infos.innerHTML = ""
  let temoignage = {
    pseudo: form.elements.pseudo.value,
    evaluation: form.elements.evaluation.value,
    message: form.elements.message.value
  }

  ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", temoignage, (reponse) => {
    let paragraphe = document.createElement("p")
    paragraphe.textContent = "Le message a bien été envoyé."

    infos.appendChild(paragraphe)
  },
  true
  )
})