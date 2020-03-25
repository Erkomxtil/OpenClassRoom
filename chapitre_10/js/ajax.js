/*----- Pour une requête asynchrone -------- */
//Exécute un appel AJAX GET
// Prend en paramètre l'URL cible et la fonction callback appelé en cas de succès
function ajaxGet(url, callback){
  let req = new XMLHttpRequest()
  // La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent 
  req.open("GET", url)
  // Gestion de l'événement indiquant la fin de la requête
  req.addEventListener("load", () => {
    if (req.status >= 200 && req.status < 400) { // le serveur a réussi à traiter la requête
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(req.responseText)
    } else {
      // Affichage des informations sur l'échec du traitement de la requête
      console.error(req.status + " " + req.statusText + " " + url)
    }
  })
  req.addEventListener("error", () => {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau avec l'URL " + url )
  })
  req.send(null)
}

/*------ Pour l'envoi de donnée vers un serveur -----*/
// Exécute en appel AJAX POST
// Prend en paramètre l'URL cible, la donnée à envoyer et la fonction callback appelé en cas de succès

function ajaxPost(url, data, callback, isJson) {
  let req = new XMLHttpRequest()
  req.open("POST", url)
  req.addEventListener("load", () => {
    if (req.status >= 200 && req.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(req.responseText)
    } else {
      console.error(req.status + " " + req.statusText + " " + url)
    }
  })
  req.addEventListener("error", () => {
    console.error("Erreur réseau avec l'URL " + url)
  })
  if (isJson) {
    // Définit le contenu de la requête comme étant JSON
    req.setRequestHeader("Content-Type", "application/json")
    // Transforme la donné du format JSON vers le format texte avant l'envoi
    data = JSON.stringify(data)
  }
  req.send(data)
}