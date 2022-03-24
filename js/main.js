var mybutton = document.getElementById("scroll-to-top");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
    navigation: {
      nextEl: ".right-side",
      prevEl: ".left-side",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 2.5,
      },
    }
  });

  function scrollHeader(){
    let navBottom = document.getElementById('header-menu')
    if(this.scrollY >= 50) navBottom.classList.add('main-menu-container'); else navBottom.classList.remove('main-menu-container')
  }
  window.addEventListener('scroll', scrollHeader)

const toggleButton = document.getElementsByClassName('menubar')[0]
const navbarLinks = document.getElementsByClassName('mobile-main-menu')[0]

if(toggleButton){
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('mobile-active')
    toggleButton.classList.toggle('change')
  })
}


  function on() {
    document.getElementById("overlay").style.display = "flex";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  