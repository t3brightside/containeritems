const documentBody = document.body;
const cPopupAllAnchorLinks = document.querySelectorAll('a[href*="#"]');
const cPopupCloseButtons = document.querySelectorAll('.c-popup-close');
const cPopupAllPopups = document.querySelectorAll('.c-popup');
let cPopupCurrentZIndex = 99999;

function cPopupSetZIndex(popup, zIndex) {
  popup.style.zIndex = zIndex;
}

function cPopupSetTabIndex(container, value) {
  container.querySelectorAll('a, button, details, input:not([aria-hidden="true"]), select, textarea')
    .forEach(element => element.setAttribute('tabindex', value));
}

function cPopupFindTopmost(elements) {
  return Array.from(elements).reduce((topmostPopup, popup) => {
    const zIndex = parseInt(window.getComputedStyle(popup).getPropertyValue('z-index'));
    return zIndex > (topmostPopup ? parseInt(window.getComputedStyle(topmostPopup).getPropertyValue('z-index')) : -1) ? popup : topmostPopup;
  }, null);
}

function cPopupOpen(popup) {
  documentBody.style.overflow = 'hidden';
  cPopupSetTabIndex(documentBody, '-1');
  popup.classList.add('open');
  cPopupSetZIndex(popup, ++cPopupCurrentZIndex);
  cPopupSetTabIndex(popup, '0');
}

function cPopupClose(popup) {
  cPopupSetTabIndex(popup, '-1');
  popup.classList.remove('open');
}

function cPopupHandleLinkClick(event, popupLink) {
  const href = popupLink.getAttribute('href');
  if (href && href.includes('#')) {
    event.preventDefault();
    const targetId = href.substring(href.indexOf('#') + 1);
    const target = Array.from(cPopupAllPopups).find(popup => popup.id === targetId);
    if (target) {
      popupLink.id = 'trigger-link-' + targetId;
      const subpageUrl = window.location.pathname + window.location.search;
      const popupUrl = `${subpageUrl}#${targetId}`;
      history.pushState(popupUrl, '', popupUrl);
      cPopupOpen(target);
    }
  }
}

function cPopupCloseTopmost() {
  const htmlTag = document.documentElement;
  if (htmlTag.classList.contains('has-lightbox')) {
    return;
  }

  const allOpenPopups = document.querySelectorAll('.c-popup.open');
  const topMostPopup = cPopupFindTopmost(allOpenPopups);

  if (topMostPopup) {
    const popupId = topMostPopup.id;
    const openerLink = document.getElementById('trigger-link-' + popupId);

    if (openerLink) {
      openerLink.focus();
      openerLink.removeAttribute('id');
    }

    const openedFromLink = history.state && history.state.endsWith(`#${popupId}`);

    openedFromLink ? history.back() : cPopupClose(topMostPopup);
  }

  const newTopMostPopup = cPopupFindTopmost(document.querySelectorAll('.c-popup.open'));

  if (newTopMostPopup) {
    cPopupSetTabIndex(newTopMostPopup, '0');
    cPopupUpdateHistory(newTopMostPopup.id);
  } else {
    cPopupResetDocumentBody();
  }
}

function cPopupUpdateHistory(popupId) {
  const subpageUrl = window.location.pathname + window.location.search;
  const popupUrl = `${subpageUrl}#${popupId}`;
  history.pushState(popupUrl, '', popupUrl);
}

function cPopupResetDocumentBody() {
  documentBody.style.overflow = '';
  cPopupSetTabIndex(documentBody, '0');
  const subpageUrl = window.location.pathname + window.location.search;
  history.pushState(subpageUrl, '', subpageUrl);
}

cPopupCloseButtons.forEach(button => button.addEventListener('click', cPopupCloseTopmost));

document.addEventListener('keydown', event => event.key === 'Escape' && cPopupCloseTopmost());

window.addEventListener('popstate', cPopupCloseTopmost);

const cPopupTargetId = window.location.hash.substring(1);
const cPopupTarget = document.getElementById(cPopupTargetId);
if (cPopupTarget && cPopupTarget.classList.contains('c-popup')) {
  cPopupOpen(cPopupTarget);
}

cPopupAllAnchorLinks.forEach(popupLink => popupLink.addEventListener('click', event => cPopupHandleLinkClick(event, popupLink)));
