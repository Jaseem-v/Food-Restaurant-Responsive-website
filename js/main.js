
// ------loader-----------
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});



// ------------scroll----------

  $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
          $('header').addClass('sticky')
      } else {
          $('header').removeClass('sticky')

      }

  })
  
//   ------------menu-toggle

  function menuToggle(){
      const menu =document.querySelector('.menu-toggle');
      const navigation = document.querySelector('nav ul');
      menu.classList.toggle('active');
      navigation.classList.toggle('active');
  }

