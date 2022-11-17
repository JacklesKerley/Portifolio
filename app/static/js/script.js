let abrir = document.querySelector('#abrir')

abrir.onclick = abrirOuFecharMenu

let menuMobile = document.querySelector('.menuMobile')
let aberto = false

function abrirOuFecharMenu() {
  if (aberto === false) {
    aberto = true
    menuMobile.classList.add('aberto')
  } else {
    aberto = false
    menuMobile.classList.remove('aberto')
  }
}