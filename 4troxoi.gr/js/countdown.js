var urlParams = new URLSearchParams(window.location.search);
var hasCountdown = urlParams.get('countdown');
var notCollapsedOnTier, referenceElement;
  
var section = '<section class="countdown"> <div class="container"> <div class="row g-0"> <div class="col-' + notCollapsedOnTier + '-6"> <span class="countdown__title">Το Ιστορικό Ράλλυ Ακρόπολις ξεκινάει σε:</span> </div><div class="col-' + notCollapsedOnTier + '-6"> <div class="countdown__timer"> <div id="flipdown" class="flipdown"></div></div></div></div></div></section>';

if ((document.body.classList.contains('home')) && (hasCountdown)) {
    notCollapsedOnTier = 'md';
    referenceElement = document.getElementsByClassName('mkdf-row-grid-section-wrapper')[0];
    referenceElement.insertAdjacentHTML('beforebegin', section);
}
else if ((document.body.classList.contains('single-post')) && (hasCountdown)) {
    notCollapsedOnTier = 'lg';
    referenceElement = document.getElementsByClassName('nx_google_news_tag')[0];
    referenceElement.insertAdjacentHTML('afterend', section);
}
  
new FlipDown(1654325400, {
    headings: ['Ημέρες', 'Ώρες', 'Λεπτά', 'Δευτερόλεπτα'],
}).start();