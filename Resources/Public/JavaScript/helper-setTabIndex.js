
// Helper function to set tabindex for all focusable elements within a container
function setTabIndex(container, value) {
  const focusableElements = container.querySelectorAll('a, button, details, input:not([aria-hidden="true"]), select, textarea');
  focusableElements.forEach(element => {
    element.setAttribute('tabindex', value);
  });
}
