(function () {
  /* const button = document.querySelector('button');
  const button2 = document.querySelector('.button-success');
  const button3 = document.querySelector('.button-warning'); */

  const row = document.querySelector('.row');
  const buttons = row.querySelectorAll('button');

  row.addEventListener('click', function (e) {
    if (e.target == buttons[0]) {
      e.target.classList.toggle('button-danger');
    }
    if (e.target == buttons[1]) {
      e.target.innerText = 'you clicked me!';
    }
    if (e.target == buttons [2]) {
      buttons[1].innerText = 'button two';
    }
  });

  /* button.addEventListener('click', function (event1) {
    button.classList.toggle('button-danger');
  });

  button2.addEventListener('click', function (event2) {
    button2.innerText = 'You Clicked Me';
  });

  button3.addEventListener('click', function (event3) {
    button2.innerText = 'button two';
  }); */

})();
