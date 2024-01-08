const accordionContainers = document.querySelectorAll('.c-accordion');

accordionContainers.forEach(item => {
    item.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('c-accordion-title')) {
            const accordionItem = target.parentElement;
            let el = accordionItem.querySelector('.c-accordion-content');
            let height = el.scrollHeight;
            el.style.setProperty('--max-height', height + 'px');

            const isStayOpen = item.classList.contains('stayopen');
            const isAccordionItemActive = accordionItem.classList.contains('act');

            // Toggle 'act' class on accordionItem based on whether it stays open or not
            if (isStayOpen) {
                accordionItem.classList.toggle('act');
            } else {
                Array.from(accordionItem.parentElement.querySelectorAll('.act')).forEach(el => {
                    el.classList.remove('act');
                });
                accordionItem.classList.toggle('act');
            }

            // Toggle aria-expanded attribute on the title
            target.setAttribute('aria-expanded', isAccordionItemActive ? 'false' : 'true');
        }
    });
});
