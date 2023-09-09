$(document).ready(function(){

    AOS.init();
    
    // 서브메뉴버튼
    $('.header #hamburger').click(function(){
        $('.menu-gallery-box').addClass('active');
      });
  
      $('.box #hamburger').click(function(){
        $('.menu-gallery-box').removeClass('active');
      });


})