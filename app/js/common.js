$(function() {
  $('.reviews-slider').owlCarousel({
    responsive: {
      0: {
        items: 1
      },
      419: {
        items: 1
      },
      420: {
        items: 2
      },
      992: {
        items: 3
      }
    },
    loop: true,
    smartSpeed: 700,
    nav: false,
    autoHeight: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 30,
    dots: true
  });

  $('[name="Телефон"]').mask('+7 (999) 999 99 99');
  
  $('form.mail').submit(function() { 
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", 
      data: th.serialize()
    }).done(function() {
      th.trigger("reset");
    });
    return false;
  });
  $('a[href^="#"]').mPageScroll2id({
    scrollEasing: 'swing'
  });
});
