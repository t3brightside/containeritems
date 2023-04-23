const accordions = document.querySelectorAll('.c-accordion');
accordions.forEach(item => {
  item.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('c-accordion-title')) {
      const accordionItem = target.parentElement;
      let el = accordionItem.querySelector('.c-accordion-content');
      let height = el.scrollHeight;
      el.style.setProperty('--max-height', height + 'px');
      if (accordionItem.classList.contains('stayopen-1')) {
        accordionItem.classList.toggle('act');
      }
      else {
        if (accordionItem.classList.contains('act')) {
          Array.from(accordionItem.parentElement.querySelectorAll('.act')).forEach(function(el) {
            el.classList.remove('act');
          });
        }
        else {
          Array.from(accordionItem.parentElement.querySelectorAll('.act')).forEach(function(el) {
            el.classList.remove('act');
          });
          accordionItem.classList.toggle('act');
        }
      }
    }
  })
});
