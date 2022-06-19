(function () {
  // your page initialization code here
  // the DOM will be available here

  const otherPageEl = document.getElementById('other-page');
  otherPageEl.inert = true;

  setTimeout(() => (otherPageEl.inert = false), 4000);
})();
