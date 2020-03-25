// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
  {
      code: "ST",
      nom: "Stark"
  },
  {
      code: "LA",
      nom: "Lannister"
  },
  {
      code: "BA",
      nom: "Baratheon"
  },
  {
      code: "TA",
      nom: "Targaryen"
  },
  {   code: "KO",
      nom: "Kohler ♥"
  }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
  switch (codeMaison) {
  case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
  case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
  case "BA":
      return ["Robert", "Stannis", "Renly"];
  case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
  case "KO": 
      return ["Stefanie", "Sasha","Monika"];
  default:
      return [];
  }
}

// liste familles des personnages
let listePersos = document.getElementById("maison")
let listePrenom = document.getElementById("persos")

for (let maison of maisons) {
  let liPerso = document.createElement("option")
  liPerso.textContent = maison.nom
  liPerso.value = maison.code

  listePersos.appendChild(liPerso)
}

// selection de la maison 
listePersos.addEventListener("change", (e) => {
  listePrenom.textContent = "" // On remet à zéro la liste 
  let codeMaison = e.target.value
  let prenomMaison = getPersonnages(codeMaison)
  
  for (let prenom of prenomMaison){
    let liPerso = document.createElement("li")
    liPerso.textContent += prenom
    listePrenom.appendChild(liPerso)
  }
})
