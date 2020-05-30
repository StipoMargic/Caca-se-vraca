const toggle = document.querySelector('#toggle'),
  year = document.querySelector('#year');

year.innerText = new Date().getFullYear();

// Toggle nav
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);
