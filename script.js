function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substitruir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adiciona a imagem light
    img.setAttribute("src", "/assets/assets/avatar-light.png.png")
  } else {
    //Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "/assets/assets/avatar.png.png")
  }
}
