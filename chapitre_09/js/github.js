let info = document.getElementById("search")
let rechercher = document.getElementById("btn")
let infos = document.getElementById("infos")

info.addEventListener("change", (e) =>{
  let userSearch = e.target.value

  rechercher.addEventListener("click", () => {
    ajaxGet("https://api.github.com/users/" + userSearch, (reponse) => {
      infos.innerHTML = ""
      let informations = JSON.parse(reponse)
      console.log(informations)
      let picture = document.createElement("figure")
      picture.innerHTML = '<img src="'+ informations.avatar_url + '" alt="User picture">'
      let userInfos = document.createElement("p")
      userInfos.innerHTML = "<h2>"+ informations.name + "</h2><br/>" + '<a href="'+ informations.html_url +'">' + informations.html_url +"</a>"
      infos.appendChild(picture)
      infos.appendChild(userInfos)

    })
  })
})