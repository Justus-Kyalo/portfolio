const menuBtn= document.getElementsByClassName('menu-btn'); 
const  navLinks =document.getElementById('nav-links');
const menuIcon = document.querySelector("i")

menuBtn.addEventListener('click',() =>{ 
  
navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");

menuIcon.setAttribute("class",isOpen ? "ri-close-line" :"ri-menu-line");
});

