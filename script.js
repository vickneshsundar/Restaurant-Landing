$(document).ready(function(){
    $('.food-slider').slick({
       autoplay:true,
       slidesToShow:3,
    });
 
    $('.nav-trigger').click(function(){
       $('.site-content-wrapper').toggleClass('scaled');
    })
 });