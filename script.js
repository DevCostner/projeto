function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substitruir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adiciona a imagem light
    img.setAttribute("src", "/assets/logo/avatar-logo.png")
  } else {
    //Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "/assets/logo/avatar-logo-blue.png")
  }
}
