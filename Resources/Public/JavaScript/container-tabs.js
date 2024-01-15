// Get all tabs containers
const tabsContainers = document.querySelectorAll('.c-tabs');

tabsContainers.forEach(tabsContainer => {
  // Get tab items and content within each tabs container
  const tabTitles = tabsContainer.querySelectorAll('.c-tabs-title');
  const tabContents = tabsContainer.querySelectorAll('.c-tabs-content');
  const headerContainer = tabsContainer.querySelector('.c-tabs-header');

  let activeTabIndex = 0;

  const setActiveTab = (index) => {
    // Remove active class from all tabs and contents within the current tabs container
    tabTitles.forEach(title => {
      title.classList.remove('act');
      title.setAttribute('aria-selected', 'false');
      title.setAttribute('aria-expanded', 'false');
      title.setAttribute('tabindex', '-1');
    });
    tabContents.forEach(content => content.classList.remove('act'));

    // Add active class and aria attributes to the clicked tab and corresponding content within the current tabs container
    tabTitles[index].classList.add('act');
    tabTitles[index].setAttribute('aria-selected', 'true');
    tabTitles[index].setAttribute('aria-expanded', 'true');
    tabTitles[index].setAttribute('tabindex', '0');
    tabContents[index].classList.add('act');
    tabTitles[index].focus();
  };

  // Add click event listener to each tab within the current tabs container
  tabTitles.forEach((tab, index) => {
    tab.addEventListener('click', function () {
      setActiveTab(index);
      activeTabIndex = index;
    });
  });

  headerContainer.addEventListener('keydown', function (e) {
    // Check if the pressed key is an arrow key
    if (['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(e.key)) {
      e.preventDefault(); // Prevent the default behavior of arrow keys from scrolling the page

      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          activeTabIndex = (activeTabIndex - 1 + tabTitles.length) % tabTitles.length;
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          activeTabIndex = (activeTabIndex + 1) % tabTitles.length;
          break;
        default:
          return;
      }

      setActiveTab(activeTabIndex);
    }
  });
});
