 // portfolio


const galleryLink = Array.from(document.querySelectorAll('.row ul li a'));
const closeButton = document.querySelector('.close');

galleryLink.map(item => item.addEventListener("click", function() {
     document.querySelector('#item01').classList.add('item_open');
 //   document.querySelector('.close').top =" top:0px;";
    document.querySelector('.close').classList.add('item_open');
    
    
 }));

closeButton.addEventListener("click",function(){
  document.querySelector('#item01').classList.remove('item_open');
  document.querySelector('.close').classList.remove('item_open');
});

 /*
 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });

 $(".gallery ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 });
 
 

 // portfolio
 $('.gallery ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });

 $(".gallery ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 }); */