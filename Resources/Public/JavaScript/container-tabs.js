document.addEventListener('DOMContentLoaded', function () {
  // Get all tabs containers
  const tabsContainers = document.querySelectorAll('.frame-container-tabs');

  tabsContainers.forEach(tabsContainer => {
    // Get tab items and content within each tabs container
    const tabTitles = tabsContainer.querySelectorAll('.c-tabs-title');
    const tabContents = tabsContainer.querySelectorAll('.c-tabs-content');

    // Add click event listener to each tab within the current tabs container
    tabTitles.forEach((tab, index) => {
      tab.addEventListener('click', function () {
        // Remove active class from all tabs and contents within the current tabs container
        tabTitles.forEach(title => {
          title.classList.remove('act');
          title.setAttribute('aria-selected', 'false');
          title.setAttribute('aria-expanded', 'false');
        });
        tabContents.forEach(content => content.classList.remove('act'));

        // Add active class and aria attributes to the clicked tab and corresponding content within the current tabs container
        this.classList.add('act');
        this.setAttribute('aria-selected', 'true');
        this.setAttribute('aria-expanded', 'true');
        tabContents[index].classList.add('act');
      });
    });
  });
});
