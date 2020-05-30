const toggle = document.querySelector('#toggle'),
  year = document.querySelector('#year'),
  moneyInput = document.querySelector('#money'),
  monthsInput = document.querySelector('#months'),
  calculateBtn = document.querySelector('#calculate'),
  moneyOutput = document.querySelector('#pmoney'),
  monthsOutput = document.querySelector('#pmonths'),
  payback = document.querySelector('#payback');

year.innerText = new Date().getFullYear();

const calculatePayback = (input) => {
  return +input * 0.3 + +input;
};

// Toggle nav
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

calculateBtn.addEventListener('click', () => {
  moneyOutput.innerText = moneyInput.value;
  monthsOutput.innerText = monthsInput.value;

  payback.innerText = calculatePayback(moneyInput.value);
});
