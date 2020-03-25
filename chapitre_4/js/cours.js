let paragraphe = document.querySelector("p")
paragraphe.style.color = "red"
paragraphe.style.margin = "50px"
paragraphe.style.fontFamily ="Arial"
paragraphe.style.backgroundColor = "black"

let paragraphes = document.getElementsByTagName("p")
console.log(paragraphes[0].style.color)
console.log(paragraphes[1].style.color)
console.log(paragraphes[2].style.color)

let styleParagraphes = getComputedStyle(document.getElementById("para"))
console.log(styleParagraphes.fontStyle)
console.log(styleParagraphes.color)