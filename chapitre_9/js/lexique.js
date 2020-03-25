let lettres = document.getElementsByTagName("a")
let mots = document.getElementById("mots")

for (let lettre of lettres) {
  lettre.addEventListener("click", (e) => {
    let choixLettre = e.target.textContent
    mots.innerHTML = ""


    ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/" + choixLettre, (reponse) => {
      let infos = JSON.parse(reponse)
      console.log(infos)
      if(infos.length > 0){
        for (let info of infos) {
          mots.innerHTML += "<h3>" + info.term + "</h3><p>" + info.definition + "</p>"
        }
        mots.appendChild(mots)
      } else {
        let nope = document.createElement("p")
        nope.innerHTML = "Pas de référence pour la lettre " + choixLettre
        mots.appendChild(nope)
      }
    })
  })
}