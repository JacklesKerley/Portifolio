let abrir = document.querySelector('#abrir')

abrir.onclick = abrirOuFecharMenu

let menuMobile = document.querySelector('.menuMobile')
let aberto = false

function abrirOuFecharMenu() {
  menuMobile.classList.toggle('aberto')
}