let divCouleur = document.getElementsByTagName("div")


const colorChange = () => {
  document.addEventListener("keypress", (e) => {
    let codeTouch = e.charCode
    let backgroundColorTouch = ""
    
    switch (codeTouch) {
      case 114: 
        backgroundColorTouch = "red"
      break
      case 106:
        backgroundColorTouch = "yellow"
      break
      case 118:
        backgroundColorTouch = "green"
      break
      case 98:
        backgroundColorTouch = "blue"
      break
      default:
        backgroundColorTouch = "none"
      }
      
      for (let backColor of divCouleur) {
        backColor.style.backgroundColor = backgroundColorTouch
      }  
  })
}

colorChange()