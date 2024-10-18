document.addEventListener('DOMContentLoaded', function() {
  const documentBody = document.body;

  // Select all anchor links with an href containing "#"
  const cPopupAllAnchorLinks = document.querySelectorAll('a[href*="#"]');
  const cPopupCloseButtons = document.querySelectorAll('.c-popup-close');
  const cPopupAllPopups = document.querySelectorAll('.c-popup');

  let cPopupCurrentZIndex = 99999;
  let openPopups = [];

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

    const popupId = popup.id;

    if (!openPopups.includes(popupId)) {
      openPopups.push(popupId);
    }

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

    const popupId = popup.id;
    openPopups = openPopups.filter(id => id !== popupId);

    if (openPopups.length === 0) {
      cPopupResumeDocumentBody();
    }
  }

  function cPopupResumeDocumentBody() {
    documentBody.style.overflow = '';
    cPopupSetTabIndex(documentBody, '0');
  }

  // Open popup when link is clicked, but only if the target matches a popup ID
  for (const popupLink of cPopupAllAnchorLinks) {
    const href = popupLink.getAttribute('href');
    if (href && href.indexOf('#') !== -1) {
      const targetId = href.substring(href.indexOf('#') + 1);
      const target = Array.from(cPopupAllPopups).find(popup => popup.id === targetId);
      if (target) {
        popupLink.addEventListener('click', function (event) {
          event.preventDefault();
          popupLink.id = 'trigger-link-' + targetId;
          cPopupOpen(target);
        });
      }
    }
  }

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
        history.replaceState(null, '', currentUrlWithoutHash);
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

  cPopupCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
      cPopupCloseTopmost();
    });
  });

  window.addEventListener('popstate', function(event) {
    if (openPopups.length > 0) {
      cPopupCloseTopmost();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && openPopups.length > 0) {
      cPopupCloseTopmost();
    }
  });

  if (window.location.hash) {
    const cPopupTargetId = window.location.hash.substring(1);
    const cPopupTarget = document.getElementById(cPopupTargetId);

    if (cPopupTarget && cPopupTarget.classList.contains('c-popup')) {
      openPopups = [cPopupTargetId];
      cPopupOpen(cPopupTarget, false);
    }
  }
});
