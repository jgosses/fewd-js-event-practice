(function () {
  const button = document.querySelector('button');
  const button2 = document.querySelector('.button-success');
  const button3 = document.querySelector('.button-warning');

  button.addEventListener('click', function (event1) {
    button.classList.toggle('button-danger');
  });

  button2.addEventListener('click', function (event2) {
    button2.innerText = 'You Clicked Me';
  });

  button3.addEventListener('click', function (event3) {
    button2.innerText = 'button two';
  });
})();
