// import { smoothscroll } from 'smoothscroll-polyfill';

// // kick off the polyfill!
// smoothscroll.polyfill();

const navbar       = document.querySelector('.navbar')
const navbarHeight = navbar.offsetHeight
const navbarItems  = navbar.querySelectorAll('.navbar-menu .navbar-item')

navbarItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault()
    const section = document.querySelector(item.getAttribute('href'))
    window.scroll({ top: section.offsetTop - navbar.offsetHeight, left: 0, behavior: 'smooth' })
    // window.scroll(0, section.offsetTop - navbar.offsetHeight)
    setActiveNavbarItem(item)
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
