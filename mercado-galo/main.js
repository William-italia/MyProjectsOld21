// DOM document object model
//abre e fecha o menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const elementento of toggle) {
  elementento.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
// quando clicar em um item, faz esconder o men

const li = document.querySelectorAll('nav ul li a')

for (const link of li) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// mudar o header da pagina quando usar o scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // altura é maior que o header
    header.classList.add('scroll')
  } else {
    //menor
    header.classList.remove('scroll')
  }
})

// Testimonials corousel slider swiper
const swiper = new swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewhell: true,
  Keyboard: true
})
