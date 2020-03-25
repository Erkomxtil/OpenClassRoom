// Liste des pays
var listePays = [
  "Afghanistan",
  "Afrique du Sud",
  "Albanie",
  "Algérie",
  "Allemagne",
  "Andorre",
  "Angola",
  "Anguilla",
  "Antarctique",
  "Antigua-et-Barbuda",
  "Antilles néerlandaises",
  "Arabie saoudite",
  "Argentine",
  "Arménie",
  "Aruba",
  "Australie",
  "Autriche",
  "Azerbaïdjan"
];

// saisie du pays
let saisiePays = document.getElementById("pays")
let suggestions = document.getElementById("suggestions")

saisiePays.addEventListener("input", (e) => {
  suggestions.innerHTML = ""
  for (let pays of listePays) {
    if (pays.indexOf(saisiePays.value) === 0) {
      let divPaysSuggestions = document.createElement("div")
      divPaysSuggestions.className = "suggestion"
      divPaysSuggestions.textContent = pays

      suggestions.appendChild(divPaysSuggestions)
      divPaysSuggestions.addEventListener("click", (e) => {
        saisiePays.value = e.target.textContent
        suggestions.innerHTML = ""
      })
    }
  }
})


