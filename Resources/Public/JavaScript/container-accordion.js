function initAccordion(accordion) {
  const accordionItems = accordion.querySelectorAll('.c-accordion-item');

  accordionItems.forEach(item => {
      const titleButton = item.querySelector('.c-accordion-title');
      const content = item.querySelector('.c-accordion-content');

      // Check if the item has 'act' class on page load
      if (item.classList.contains('act')) {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.setAttribute('aria-hidden', 'false');
      } else {
          content.setAttribute('aria-hidden', 'true');
      }

      titleButton.addEventListener('click', () => {
          if (item.classList.contains('act')) {
              content.style.maxHeight = '0';
              content.setAttribute('aria-hidden', 'true');
              item.classList.remove('act');
              titleButton.setAttribute('aria-expanded', 'false');
          } else {
              if (accordion.classList.contains('autocollapse')) {
                  accordionItems.forEach(otherItem => {
                      if (otherItem !== item) {
                          otherItem.querySelector('.c-accordion-content').style.maxHeight = '0';
                          otherItem.querySelector('.c-accordion-content').setAttribute('aria-hidden', 'true');
                          otherItem.classList.remove('act');
                          otherItem.querySelector('.c-accordion-title').setAttribute('aria-expanded', 'false');
                      }
                  });
              }
              content.style.maxHeight = content.scrollHeight + 'px';
              content.setAttribute('aria-hidden', 'false');
              item.classList.add('act');
              titleButton.setAttribute('aria-expanded', 'true');
          }
      });
  });
}

// Initialize all accordions on the page
document.querySelectorAll('.c-accordion').forEach(initAccordion);
