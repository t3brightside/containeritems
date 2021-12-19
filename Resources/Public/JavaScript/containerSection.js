function vh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
vh();
window.addEventListener('resize',vh);

$(window).scroll(function() {
  /* play background videos only if in viewport */
  $('.bg-video').each(function() {
    var top_of_element = $(this).offset().top;
    var bottom_of_element = $(this).offset().top + $(this).parent().outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();
    if (
      (bottom_of_screen > top_of_element) &&
      (top_of_screen < bottom_of_element)
    ) {
      $(this)[0].play();
    } else {
      $(this)[0].pause();
    }
  });
  $('.containerSection').each(function() {
    var top_of_element = $(this).offset().top;
    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();
    if (
      (bottom_of_screen > top_of_element) &&
      (top_of_screen < bottom_of_element)
    ) {} else {
/* bring back hidden menu and content if out of viewport */
      if ($(this).hasClass('active')) {
        $('#header').fadeToggle();
        $(this).children('.contentWidth, .overlay').fadeToggle();
        $(this).children('.clearframe').removeClass('active');
        $(this).removeClass('active');
        $(this).css('height', '');
      }
    }
  });
});

$(document).ready(function() {
/* unmute/mute bg video sound */
  $(".sound").click(function() {
    if ($(this).parent().children('.bg-video').prop('muted')) {
      $(this).parent().children('.bg-video').prop('muted', false);
    } else {
      $(this).parent().children('.bg-video').prop('muted', true);
    }
    $(this).toggleClass('active');
  });
/* hide header and content if clear button is clicked */
  $(".clearframe").click(function() {
    var height = $(this).parent().height();
    if (!$(this).parent().hasClass('fullheight')) {
      $(this).parent().height(height);
    }
    if ($(this).parent().css('height') && $(this).parent().hasClass('active')) {
      $(this).parent().css('height', '');
    }
    $("#header").fadeToggle();
    $(this).toggleClass('active');
    $(this).parent().toggleClass('active');
    $(this).parent().children('.contentWidth, .overlay').fadeToggle();
  });
});
