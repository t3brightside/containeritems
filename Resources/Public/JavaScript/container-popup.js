document.addEventListener('DOMContentLoaded', function() {
  const documentBody = document.body;
  const cPopupAllAnchorLinks = document.querySelectorAll('a[href*="#"]');
  const cPopupCloseButtons = document.querySelectorAll('.c-popup-close');
  const cPopupAllPopups = document.querySelectorAll('.c-popup');

  let cPopupCurrentZIndex = 99999;
  let openPopups = JSON.parse(sessionStorage.getItem('openPopups')) || []; // Track open popups in session storage

  function cPopupSetZIndex(popup, zIndex) {
    popup.style.zIndex = zIndex;
  }

  function cPopupSetTabIndex(container, value) {
    const focusableElements = container.querySelectorAll('a, button, details, input:not([aria-hidden="true"]), select, textarea');
    focusableElements.forEach(element => {
      element.setAttribute('tabindex', value);
    });
  }

  function cPopupOpen(popup, addToHistory = true) {
    documentBody.style.overflow = 'hidden';
    popup.style.visibility = 'visible';
    cPopupSetTabIndex(documentBody, '-1');
    popup.classList.add('open');
    cPopupCurrentZIndex += 1;
    cPopupSetZIndex(popup, cPopupCurrentZIndex);
    cPopupSetTabIndex(popup, '0');

    // Push to session storage
    const popupId = popup.id;
    if (!openPopups.includes(popupId)) {
      openPopups.push(popupId);
      sessionStorage.setItem('openPopups', JSON.stringify(openPopups));
    }

    // Update URL if required
    if (addToHistory) {
      const subpageUrl = window.location.pathname + window.location.search;
      const popupUrl = `${subpageUrl}#${popupId}`;
      history.pushState({ popupId }, '', popupUrl);
    }
  }

  function cPopupClose(popup) {
    cPopupSetTabIndex(popup, '-1');
    popup.classList.remove('open');
    setTimeout(function() {
      popup.style.visibility = 'hidden';
    }, 400);

    // Remove from session storage
    const popupId = popup.id;
    openPopups = openPopups.filter(id => id !== popupId);
    sessionStorage.setItem('openPopups', JSON.stringify(openPopups));

    // If no popups are left, restore document body
    if (openPopups.length === 0) {
      cPopupResumeDocumentBody();
    }
  }

  function cPopupResumeDocumentBody() {
    documentBody.style.overflow = '';
    cPopupSetTabIndex(documentBody, '0');
  }

  // Open popup when link is clicked
  for (const popupLink of cPopupAllAnchorLinks) {
    const href = popupLink.getAttribute('href');
    if (href && href.indexOf('#') !== -1) {
      popupLink.addEventListener('click', function (event) {
        const targetId = href.substring(href.indexOf('#') + 1);
        const target = Array.from(cPopupAllPopups).find(popup => popup.id === targetId);
        if (target) {
          event.preventDefault();
          popupLink.id = 'trigger-link-' + targetId;
          cPopupOpen(target);
        }
      });
    }
  }

  // Close the topmost popup and update the session storage
  function cPopupCloseTopmost() {
    const allOpenPopups = document.querySelectorAll('.c-popup.open');
    const topMostPopup = cPopupFindTopmost(allOpenPopups);

    if (topMostPopup) {
      cPopupClose(topMostPopup);

      const newTopMostPopup = cPopupFindTopmost(document.querySelectorAll('.c-popup.open'));

      if (newTopMostPopup) {
        const popupUrl = `${window.location.pathname + window.location.search}#${newTopMostPopup.id}`;
        history.replaceState({ popupId: newTopMostPopup.id }, '', popupUrl);
      } else {
        const currentUrlWithoutHash = window.location.pathname + window.location.search;
        history.replaceState(null, '', currentUrlWithoutHash); // Clear hash when no more popups
      }
    }
  }

  function cPopupFindTopmost(elements) {
    return Array.from(elements).reduce((topmostPopup, popup) => {
      const zIndex = parseInt(window.getComputedStyle(popup).getPropertyValue('z-index'));
      return zIndex > (topmostPopup ? parseInt(window.getComputedStyle(topmostPopup).getPropertyValue('z-index')) : -1) ?
        popup :
        topmostPopup;
    }, null);
  }

  // Handle close button click events
  cPopupCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
      cPopupCloseTopmost();
    });
  });

  // Handle back button (popstate) event to close topmost popup
  window.addEventListener('popstate', function (event) {
    if (openPopups.length > 0) {
      // Close the topmost popup
      cPopupCloseTopmost();
    }
  });

  // Load popup from anchor on page load
  if (window.location.hash) {
    const cPopupTargetId = window.location.hash.substring(1);
    const cPopupTarget = document.getElementById(cPopupTargetId);
    if (cPopupTarget && cPopupTarget.classList.contains('c-popup')) {
      cPopupOpen(cPopupTarget, false); // Don't push history for initial load
    }
  }

  // Reopen all popups saved in sessionStorage on page load (except the last one already opened by URL)
  openPopups.forEach(popupId => {
    if (popupId !== window.location.hash.substring(1)) {
      const popup = document.getElementById(popupId);
      if (popup && popup.classList.contains('c-popup')) {
        cPopupOpen(popup, false); // Don't push to history when restoring
      }
    }
  });
});
