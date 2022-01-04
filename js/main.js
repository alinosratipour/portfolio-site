// Select item from DOM
const menubtn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const branding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial State of the Menu

let showMenu = false;



function toggleMenu() {
    if(!showMenu){
      menubtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      branding.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));

      // Reset Menu State
      showMenu= true;
    }else{
        menubtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        branding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
  
        // Reset Menu State
        showMenu= false;
    }
}

menubtn.addEventListener('click', toggleMenu);
smcontact.addEventListener('click',toggleMenu);
smabout.addEventListener('click',toggleMenu);
smportfolio.addEventListener('click',toggleMenu);
smhome.addEventListener('click',toggleMenu);

/*
function scrollappear(){
  var introtext = document.querySelector('.loader');
  var introtext2 = document.querySelector('.loader2');
  var introposition = introtext.getBoundingClientRect().top;
  var screenposition = window.innerHeight / 2;
  
  if(introposition < screenposition){
    introtext.classList.add('appear');
    introtext2.classList.add('appear');
  }
}

window.addEventListener('scroll',scrollappear);*/
