let abrir = document.querySelector('#abrir')

abrir.onclick = abrirOuFecharMenu

let menuMobile = document.querySelector('.menuMobile')
let aberto = false

function abrirOuFecharMenu() {
  menuMobile.classList.toggle('aberto')
}

const elementosBoasVindas = document.querySelectorAll('.divBoasVindas');

elementosBoasVindas.forEach((elemento, index) => {
  setTimeout(() => {
    console.log('funcionando')
    elemento.classList.add('inicio')
  }, index * 500)
})