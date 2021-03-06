/* ABRE E FECHA O MENU QUANDO CLICAR NOS ICONES MENU E X
 */

const nav = document.querySelector('#header nav')
//document.querySelctor procura o primeiro elemento dentro do documento, usando seletores css. Nesse caso, vai colocar a informação dentro da const nav
const toggle = document.querySelectorAll('nav .toggle')
//document.querySelctor procura todos elemento dentro do documento, usando seletores css. Nesse caso, vai colocar essas informações na const toggle

// Esse processo é chamado de DOM: transformar elementos HTML em objetos no JS

for (const element of toggle) {
  // traduzindo: pra todos elementos de toglle, ou seja, vai colocar todos os elementos de toggle na const element
  element.addEventListener('click', function () {
    //Elemento.addEventListener é uma função que chama um evento. Nesse caso, o evento é um click e, em seguida, uma função
    nav.classList.toggle('show')
    //Nesse caso, toglle é uma palavra-chave/metodo que alterna entre os elementos (não confundir com a class). Os elementos da class toglle (icon-menu e icon-close) estão configurados no css para mostrar e fechar o menu. Quando houver um click, essa função vai buscar no nav a class show e alternar (toggle) entre elas. Se ela não tiver a class show, vai listar, e quando listar, vai aparecer o menu. Se o nav tiver a class show, ele vai remover o show, consequentemente, removendo o menu
  })
}
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    // Aqui vai acontecer algo bem parecido com element. Só que ao invés de alternar(toggle) entre os elementos da class toggle(mostrar ou não mostrar a class show), ele vai simplesmete remover a class show
  })
}

/* ADICIONA SOMBRA NO HEARDER */

const header = document.querySelector('#header')
const navHeight =
  header.offsetHeight /* offset seria o deslocamento e Height é altura, ou seja, a variavel vai pegar o valor da altura no header.  */

/* ADICIONA SCROLL */
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    /* Se a rolagem vertical da tela(window.scrolly) for maior ou igual a altura do header */
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 1, // Quantas páginas irão aparecerna tela
  pagination: {
    el: '.swiper-pagination' // A paginação em si
  },
  mouseswheel: true, // Ativa o swiper com a bolinha do mouse
  keyboard: true, // Ativa o swiper com o mouse
  breakpoints: {
    // Muda a regra quando chegar na margem de pixels selecionada
    767: {
      slidesPerView: 3,
      setwrapperSize: true // Ativa a regra, já q o wrapper é o container dos swipers
    }
  }
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duratiom: 700,
  reset: true
})
scrollReveal.reveal(
  `#home .imagem, #home .text,
  #about .imagem, #about .text,
  #services header, #services .cards,
  #testimonials header,
  #contact .text, #contact .button, #contact .links,
  footer .text, footer .redes
  `,
  {
    interval: 100
  }
)

// Bottom back to top
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* WHEN SCROLL */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
