const infosLiens = () => {
  let liens = document.querySelectorAll("a")
  let lien1 = document.querySelector("a")
  let lienFinal = ""

  for (let i = 0; i < liens.length; i++){
    let lastLink = liens.length - 1
    lienFinal = liens[lastLink]
  }
  console.log(liens.length)
  console.log(lien1)
  console.log(lienFinal)
}

infosLiens()

// Affiche si un élément possède une classe
function possede(id, classe) {
  var instrument = document.getElementById(id);
  if (instrument !== null) {
      console.log(instrument.classList.contains(classe));
  } else {
      console.log("Aucun élément ne possède l'identifiant " + id);
  }
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher false
