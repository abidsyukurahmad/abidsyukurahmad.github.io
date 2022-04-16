// Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbwAPODF6bT6hJA3__xAwqCLJ0IbL5q5JbAlL91QMZJB53NQBZ_ZbJvayUKloLYb5IqYXQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    const btnSubmit = document.querySelector('.submit');
    btnSubmit.innerHTML = 'Loading...'
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        form.reset();
        modal.classList.add('active');
        modal.style.animation = 'muncul 0.5s';
        btnSubmit.innerHTML = 'Send';
    })
      .catch(error => {
        alert('Error!', error.message)
        btnSubmit.innerHTML = 'Send';
    })
  })
const modal = document.querySelector('.bg-modal');
const closeModal = document.querySelector('.modal span');
closeModal.addEventListener('click', function(){
  modal.classList.remove('active');
  modal.style.animation = '';
  form.reset();
})
// End Contact

// Hamburger Menu
const menuToggle = document.querySelector('.menu-toggle');
const span1 = document.getElementsByTagName('span')[0];
const span2 = document.getElementsByTagName('span')[1];
const span3 = document.getElementsByTagName('span')[2];

menuToggle.addEventListener('click', function(){
  menuToggle.classList.toggle('active');
})
// End Hamburger