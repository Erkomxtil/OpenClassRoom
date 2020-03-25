// Liste des mots du dictionnaire
var mots = [
  {
      terme: "Procrastination",
      definition: "Tendance pathologique à remettre systématiquement au lendemain"
  },
  {
      terme: "Tautologie",
      definition: "Phrase dont la formulation ne peut être que vraie"
  },
  {
      terme: "Oxymore",
      definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
  }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

let contenu = document.getElementById("contenu")
let definitions = document.createElement("dl")

for(let item of mots){
  contenu.insertAdjacentHTML("beforeend", '<dt><strong>'+ item.terme + '</strong></dt><dd>' + item.definition +'</dd>')
}
