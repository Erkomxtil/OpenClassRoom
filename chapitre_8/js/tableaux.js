ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", (reponse) =>{
  let tableaux = JSON.parse(reponse)
  let tableauxContainer = document.getElementById("tableaux")
  let nomLigne1 = document.createElement("tr")

  nomLigne1.innerHTML = "<th>Nom</th><th>Auteur</th><th>Année</>"

  tableauxContainer.appendChild(nomLigne1)

  for (let tableau of tableaux) {
    let ligne = document.createElement("tr")
    ligne.innerHTML += "<td>" + tableau.nom + "</td><td>" + tableau.auteur + "</td><td>" + tableau.annee + "</td>"
    tableauxContainer.appendChild(ligne)
  }
})