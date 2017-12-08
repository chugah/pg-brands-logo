var circle = document.querySelector('#icon'),
    loader = document.querySelector('.useraccount');

circle.addEventListener('click', function() {
  loader.classList.toggle('is-bloomed');
});