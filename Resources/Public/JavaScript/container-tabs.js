document.addEventListener('DOMContentLoaded', function () {
  // Get all tabs containers
  const tabsContainers = document.querySelectorAll('.frame-container-tabs');

  tabsContainers.forEach(tabsContainer => {
      // Get tab items and content within each tabs container
      const tabTitles = tabsContainer.querySelectorAll('.c-tabs-title');
      const tabContents = tabsContainer.querySelectorAll('.c-tabs-content');

      // Add "active" class to the first tab and its content
      tabTitles[0].classList.add('active');
      tabContents[0].classList.add('active');

      // Add click event listener to each tab within the current tabs container
      tabTitles.forEach((tab, index) => {
          tab.addEventListener('click', function () {
              // Remove active class from all tabs and contents within the current tabs container
              tabTitles.forEach(title => title.classList.remove('active'));
              tabContents.forEach(content => content.classList.remove('active'));

              // Add active class to the clicked tab and corresponding content within the current tabs container
              this.classList.add('active');
              tabContents[index].classList.add('active');
          });
      });
  });
});
