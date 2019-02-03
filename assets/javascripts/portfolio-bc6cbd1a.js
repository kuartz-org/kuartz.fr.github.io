const portfolioImages = document.querySelectorAll('.portfolio-image')

portfolioImages.forEach(img => {
  const referenceCardContainer  = img.parentElement.parentElement.parentElement
  const portfolioModalContainer = referenceCardContainer.querySelector('.portfolio-modal-container')
  const closeBtn                = portfolioModalContainer.querySelector('.close-btn')
  const previousBtn             = portfolioModalContainer.querySelector('.previous-btn')
  const nextBtn                 = portfolioModalContainer.querySelector('.next-btn')

  closeBtn.addEventListener('click', event => hideActivePortfolioModal())
  previousBtn.addEventListener('click', event => previousPortfolioModal())
  nextBtn.addEventListener('click', event => nextPortfolioModal())

  portfolioModalContainer.addEventListener('click', event => {
    if(event.target === portfolioModalContainer) hideActivePortfolioModal()
  })
  
  img.addEventListener('click', event => displayPortfolioModal(portfolioModalContainer))
})

function displayPortfolioModal(portfolioModalContainer){
  portfolioModalContainer.style.display = 'flex'
  portfolioModalContainer.classList.add('is-active')
}

function hideActivePortfolioModal(){
  const portfolioModalContainer  = document.querySelector('.portfolio-modal-container.is-active')

  portfolioModalContainer.style.display    = 'none'
  portfolioModalContainer.classList.remove('is-active')
}

function previousPortfolioModal(){
  const portfolioModalContainers = document.querySelectorAll('.portfolio-modal-container')
  const portfolioModalContainer  = document.querySelector('.portfolio-modal-container.is-active')
  
  if(portfolioModalContainer){
    const modalIndex = Array.from(portfolioModalContainers).indexOf(portfolioModalContainer)
    
    if(modalIndex !== 0){
      hideActivePortfolioModal()
      displayPortfolioModal(portfolioModalContainers[modalIndex - 1])
    }
  }
}

function nextPortfolioModal(){
  const portfolioModalContainers = document.querySelectorAll('.portfolio-modal-container')
  const portfolioModalContainer  = document.querySelector('.portfolio-modal-container.is-active')

  if(portfolioModalContainer){
    const modalIndex = Array.from(portfolioModalContainers).indexOf(portfolioModalContainer)

    if(modalIndex !== portfolioModalContainers.length - 1){
      hideActivePortfolioModal(portfolioModalContainer)
      displayPortfolioModal(portfolioModalContainers[modalIndex + 1])
    }
  }
}

document.addEventListener('keyup', event => {
  const portfolioModalContainers = document.querySelectorAll('.portfolio-modal-container')
  const portfolioModalContainer  = document.querySelector('.portfolio-modal-container.is-active')
  
  if(portfolioModalContainer){
    if(event.key === 'ArrowDown' || event.key === 'ArrowRight'){
      nextPortfolioModal()
    } else if(event.key === 'ArrowUp' || event.key === 'ArrowLeft'){
      previousPortfolioModal()
    } else if(event.key === 'Escape'){
      hideActivePortfolioModal()
    }
  }
})

window.addEventListener('resize', event => {
  console.log(window.innerWidth)
})