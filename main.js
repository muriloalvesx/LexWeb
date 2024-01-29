// Menu Open Close
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('move');
    navbar.classList.toggle('open-menu');
};

// On Scroll Remove Menu

window.onscroll = () => {
    menu.classList.remove('move');
    navbar.classList.remove('open-menu');
    //dropLogin.classList.remove('drop-login-open');
};


// Header Backgroung Change
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY);
});

// Home Swiper
var swiper = new Swiper('.home', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

  // Accordion
  const accordionItems = document.addEventListener('DOMContentLoaded', 
  
  function () {
    const accordionContainer = document.querySelector('.accordion-container');
  
    accordionContainer.addEventListener('click', (event) => {
      const accordionHeader = event.target.closest('.accordion-header');
      if (accordionHeader) {
        const item = accordionHeader.closest('.accordion-item');
        const openItem = document.querySelector('.accordion-open');
  
        toggleItem(item);
  
        if (openItem && openItem !== item) {
          toggleItem(openItem);
        }
      }
    });
  });

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.accordion-content');

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
};

// Control Panel
var swiper = new Swiper(".control-images", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});