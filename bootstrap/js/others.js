
const scriptChangeClass = () => {

    function changeClass(element, old, nova) {
    
       element.classList.remove(old);
       element.classList.add(nova) 
    }
    
    setTimeout(function() {
    
    let buttonhome = document.getElementById('buttonhome');
    
    changeClass(buttonhome, 'btn-secondary', 'btn-dark');
    
  
    
    }, 3000);
    
    }
    
    scriptChangeClass()


  const scriptHeader = () => {

    function changeColorHeader(element, nova, nova2) {

      element.classList.add(nova)
      element.classList.add(nova2)



    }

    setTimeout(function() {

      let effectTransparent = document.getElementById('nav');
      changeColorHeader(effectTransparent, 'opacity-50', 'efTransition');

    }, 5000)

  }
  scriptHeader()


  // POPUP

  const popup = () => {

    function addPop(element, nova) {

      element.classList.add(nova)    

    }

    setTimeout(function() {

      let popUp = document.getElementById('popUp');
      addPop(popUp, 'popUp');

    }, 1990)

  }
  popup()



// REMOVE POP

const removePop = () => {

document.getElementById('popUp').remove('popUp')

}



// CARROSSEL 
    
const myCarousel = document.querySelector('#carouselExampleIndicators') //initial id carousel
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5200,
  wrap: true // true para voltar ao inicio e executar novamente
})