(function () {

const button = document.querySelector('button');

  button.addEventListener('click',function(event1) {
    button.classList.toggle('button-danger');
});


const button2 = document.querySelector('.button-success');
button2.addEventListener('click',function(event2) {
  button2.innerText = 'You Clicked Me';
  
});



})();

/*var button2 = document.querySelector('button-success');

  button2.addEventListener('click',function(event2) {
    button2.innerText("You Clicked Me"); */