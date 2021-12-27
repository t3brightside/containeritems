// fade out function
function ciFadeOut(el) {
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

// fade in function
function ciFadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";
  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};

// fix view height for mobile screens
function ciVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
ciVh();
window.addEventListener('resize', ciVh);

// check if container is in viewport
function ciIsVisible(el) {
  const {
    top,
    bottom
  } = el.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);

  return (
    (top > 0 || bottom > 0) &&
    top < vHeight
  );
}

// actions to take if item is in or out of viewport
let sections = document.querySelectorAll('.containerSection');
let videoSections = document.querySelectorAll('.bg-video');
let frames = document.querySelectorAll('.frame');

document.addEventListener('scroll', function() {
  sections.forEach(function(s) {
    if (ciIsVisible(s)) {
      s.classList.add("isInViewport");
    } else {
      s.classList.remove("isInViewport");
      if (s.classList.contains('active')) {
        ciFadeIn(document.getElementById('header'));
        s.querySelectorAll('.contentWidth')[0].style.display = 'block';
        s.querySelectorAll('.overlay')[0].style.display = 'block';
        s.querySelectorAll('.clearframe')[0].classList.remove('active');
        s.classList.remove('active');
      }
    }
  });
  // pause lay video if in viewport
  videoSections.forEach(function(s) {
    if (ciIsVisible(s)) {
      s.play();
    } else {
      s.pause();
    }
  });
  frames.forEach(function(s) {
    if (ciIsVisible(s)) {
      s.classList.add("isInViewport");
    } else {
      s.classList.remove("isInViewport");
    }
  });
}, {
  passive: true
});

/* funtions for video sound and clear frame content buttons
   plan to remove jQuery dependency here */
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
