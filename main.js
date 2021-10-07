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
