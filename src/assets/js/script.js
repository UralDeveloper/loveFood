const oldPriceElements = document.querySelectorAll('.oldPrice');

oldPriceElements.forEach(oldPriceElement => {
  const spanElement = oldPriceElement.querySelector('span');
  
  if (parseInt(spanElement.innerText) <= 0) {
    oldPriceElement.parentNode.removeChild(oldPriceElement);
  }
});