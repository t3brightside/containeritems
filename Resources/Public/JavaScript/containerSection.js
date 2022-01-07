// fix view height for mobile screens
function ciVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
ciVh();
window.addEventListener('resize', ciVh);

// check if container is in viewport
function isIsInViewport(el) {
  const {top,bottom} = el.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);
  return ((top > 0 || bottom > 0) && top < vHeight);
}

function onVisibilityChange(el, callback) {
   var old_visible;
   return function() {
      var visible = isElementInViewport(el);
      if (visible != old_visible) {
         old_visible = visible;
         if (typeof callback == 'function') {
            callback();
         }
      }
   }
}

function toggleViewportClass(el) {
  el.forEach(function(i) {
    if (isIsInViewport(i)) {
      i.classList.add("isInViewport");
    } else {
      i.classList.remove("isInViewport");
    }
  });
}

function restoreHidden(el) {
  el.forEach(function(i) {
    if (!isIsInViewport(i)) {
      // restore hidden content and header if section is scrolled out of viewport
      if (i.classList.contains('contentIsHidden')) {
        if (window.jQuery) {
          $('#header').fadeToggle();
          $(i).children('.content, .overlay').fadeToggle();
        }
        i.querySelectorAll('.clearframe')[0].classList.remove('active');
        document.getElementById('header').classList.remove('hidden');
        i.classList.remove('contentIsHidden');
        $(i).css('height', '');
      }
    }
  });
}

// pause bg video if section is out of the viewport
function pauseBgVideos(el) {
  el.forEach(function(i) {
    if (isIsInViewport(i)) {
      i.play();
    } else {
      i.pause();
    }
  });
}

let sections = document.querySelectorAll('.c-section');
let bgVideos = document.querySelectorAll('.bg-video');
let frames = document.querySelectorAll('.frame');

document.addEventListener('scroll', function() {
  toggleViewportClass(frames);
  toggleViewportClass(sections);
  restoreHidden(sections);
  pauseBgVideos(bgVideos);
}, {
  passive: true
});

// add isInViewport on page load
window.addEventListener('DOMContentLoaded', (event) => {
  toggleViewportClass(frames);
});

// hide header and content if clear button is clicked */
function hideButton(el) {
  if (window.jQuery) {
    $('#header').fadeToggle();
    $(el).parent().children('.content, .overlay').fadeToggle();
  }
  el.parentNode.classList.toggle('contentIsHidden');
  el.classList.toggle('active');
  var parent = el.parentNode;
  var height = parseFloat(getComputedStyle(parent, null).height.replace("px", ""));
  if ($(el).parent().hasClass('fullheight') && parent.classList.contains('contentIsHidden')) {
    parent.style.height = '';
  }
  if (parent.style.height) {
    parent.style.height = '';
  } else if (!parent.classList.contains('fullHeight')) {
    parent.style.height = height + 'px';
  }
  toggleViewportClass(frames);
}

// unmute/mute bg video sound
function soundButton(el) {
  const video = el.parentNode.querySelectorAll('.bg-video')[0];
  const muted = el.parentNode.querySelectorAll('.bg-video')[0].muted;
  if (muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  el.classList.toggle('active');
}
