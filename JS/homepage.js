$('.carousel').carousel({
    pause: "false" 
});
// 
$(document).ready(function(){
    $('.navbar-toggler').click(function(){
     $('.navbar').toggleClass("back_color");
    });

    
   
});
const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};