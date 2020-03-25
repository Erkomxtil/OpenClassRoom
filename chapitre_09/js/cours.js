var articlesElt = document.getElementById("articles");
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var articles = JSON.parse(reponse);
    articles.forEach(function (article) {
        // Ajout du titre et du contenu de chaque article
        var titreElt = document.createElement("h2");
        titreElt.textContent = article.titre;
        var contenuElt = document.createElement("p");
        contenuElt.textContent = article.contenu;
        articlesElt.appendChild(titreElt);
        articlesElt.appendChild(contenuElt);
    });
});

var premMinElt = document.getElementById("premMin");
// Accès aux informations publiques sur le Premier Ministre
ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function (reponse) {
    var premierMinistre = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = premierMinistre.description;
    var logoElt = document.createElement("img");
    logoElt.src = premierMinistre.logo;
    premMinElt.appendChild(descriptionElt);
    premMinElt.appendChild(logoElt);
});

ajaxGet("https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6be57a14fd0f2d6e45d83e409624f901&user_id=187542357@N07&page=1&format=json&nojsoncallback=1", (reponse) => {
  let informations = JSON.parse(reponse)
  let photosTitle = informations.photos.photo
    console.log(photosTitle)
    for (let i = 0; i < photosTitle.length; i++){
        let photos = document.getElementById("photos")
        let photo = document.createElement("ul")
        photo.innerHTML += "<li>" + photosTitle[i].title + "</li>"
    }
})
/* request cross site 
https://cors-anywhere.herokuapp.com/
*/

/* clé api flickr :
6be57a14fd0f2d6e45d83e409624f901
mdp api flickr :
6052bfb358850ec3
ID utilisateur :
187542357@N07
*/