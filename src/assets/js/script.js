const oldPriceElements = document.querySelectorAll('.oldPrice');

oldPriceElements.forEach(oldPriceElement => {
  const spanElement = oldPriceElement.querySelector('span');
  
  if (parseInt(spanElement.innerText) <= 0) {
    oldPriceElement.parentNode.removeChild(oldPriceElement);
  }
});

// Получаем все элементы с ID, содержащим "product_id_"
var elements = document.querySelectorAll('[id^="product_id_"]');

// Перебираем все элементы
elements.forEach(function(element) {
  // Находим элементы внутри текущего элемента
  var input = element.querySelector('input.counter_number');
  var minusButton = element.querySelector('.counter_minus');
  var plusButton = element.querySelector('.counter_plus');

  // Обработчик для кнопки "Минус"
  minusButton.addEventListener('click', function() {
    if (input.value > 0) {
      input.value--;
    }
  });

  // Обработчик для кнопки "Плюс"
  plusButton.addEventListener('click', function() {
    input.value++;
  });
});