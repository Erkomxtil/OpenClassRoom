// Ajout de contenu html
document.getElementById("langages").innerHTML += '<li id="c">C</li>'

// suppression de contenu html
/* document.getElementById("langages").innerHTML = "" */

// Modification du contenu textuel 
document.querySelector("h1").textContent += " de programmation"

// definition de l'attribut "id" du 1er titre
document.querySelector("h1").setAttribute("id", "titre")
document.querySelector("h1").id = "title"

// changement pour les classes
let titreElt = document.querySelector("h1")
titreElt.classList.remove("debut")
titreElt.classList.add("title")

// Ajout d'élément dans la page
let python = document.createElement("li")
python.id = "python"
python.textContent = "Python"

document.getElementById("langages").appendChild(python)

// Ajout d'élément avec createTextNode
let ruby = document.createElement("li")
ruby.id = "ruby"
ruby.appendChild(document.createTextNode("Ruby"))
document.getElementById("langages").appendChild(ruby)

// Ajout d'un noeud avant un autre noeud
let perl = document.createElement("li")
perl.id = "perl"
perl.textContent = "Perl"
document.getElementById("langages").insertBefore(perl, document.getElementById("php"))

// Choix de la position exacte du nouveau noeud
document.getElementById("langages").insertAdjacentHTML("afterbegin", '<li id="javascript">JavaScript</li>')

// Remplacer ou supprimer un noeud
let bash = document.createElement("li")
bash.id = "bash"
bash.textContent = "Bash"
document.getElementById("langages").replaceChild(bash, document.getElementById("perl"))

document.getElementById("langages").removeChild(document.getElementById("bash"))


document.getElementById("langages").insertAdjacentHTML("afterend", '<p>En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation"> liste</a> plus complète.</p>')