import smoothscroll from 'smoothscroll-polyfill'

// kick off the polyfill!
smoothscroll.polyfill()

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})

const navbar       = document.querySelector('.navbar')
const navbarHeight = navbar.offsetHeight
const navbarItems  = navbar.querySelectorAll('.navbar-menu .navbar-item')

navbarItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault()
    const section      = document.querySelector(item.getAttribute('href'))
    const navbarBurger = document.querySelector('.navbar-burger')
    const navbarMenu   = document.getElementById('navbarMenu')
    
    navbarBurger.classList.remove('is-active')
    navbarMenu.classList.remove('is-active')
    setActiveNavbarItem(item)
    window.scroll({ top: section.offsetTop - navbar.offsetHeight, left: 0, behavior: 'smooth' })
  })
})

document.addEventListener('scroll', event => {
  setActiveNavbarItem(getActiveNavbarItem())
})

setActiveNavbarItem(getActiveNavbarItem())

function getActiveNavbarItem() {
  const windowPosition = window.pageYOffset
  const windowHeight   = window.innerHeight
  const bodyHeight     = document.querySelector('body').offsetHeight

  let activeNavbarItem
  Array.from(navbarItems).forEach(item => {
    const section      = document.querySelector(item.getAttribute('href'))
    const itemPosition = section.offsetTop - navbarHeight
    if (itemPosition <= windowPosition) {
      activeNavbarItem = item
    }
  })

  if (windowPosition === 0) {
    activeNavbarItem = navbarItems[0]
  } else if (windowPosition === bodyHeight - windowHeight) {
    activeNavbarItem = navbarItems[navbarItems.length - 1]
  }

  return activeNavbarItem
}

function setActiveNavbarItem(activeNavbarItem) {
  navbarItems.forEach(item => item.classList.remove('active'))
  activeNavbarItem.classList.add('active')
}
