// TODO : écrire la fonction compterElements

const compterElements = (element) => {
  let resultat = document.querySelectorAll(element)
  return resultat.length
}

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2