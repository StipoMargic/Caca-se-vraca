const toggle = document.querySelector('#toggle'),
  year = document.querySelector('#year'),
  moneyInput = document.querySelector('#money'),
  monthsInput = document.querySelector('#months'),
  calculateBtn = document.querySelector('#calculate'),
  moneyOutput = document.querySelector('#pmoney'),
  monthsOutput = document.querySelector('#pmonths'),
  alert = document.querySelector('#alert'),
  payback = document.querySelector('#payback');

year.innerText = new Date().getFullYear();

const calculatePayback = (input) => {
  return +input * 0.3 + +input;
};

const showMsg = (msg) => {
  alert.classList.add('show');
  alert.innerText = msg;

  setTimeout(() => {
    alert.classList.remove('show');
    alert.innerText = '';
  }, 3000);
};

const checkInputs = () => {
  if (+moneyInput.value < 10000 || +moneyInput.value > 100000) {
    console.log(1);

    showMsg(
      'Wrong input! Money should be between 10.000 - 100.000 and months should be between 12-60.'
    );

    return false;
  } else if (+monthsInput < 12 || +monthsInput < 60) {
    showMsg(
      'Wrong input! Money should be between 10.000 - 100.000 and months should be between 12-60.'
    );
    return false;
  } else {
    return true;
  }
};

// Toggle nav
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

calculateBtn.addEventListener('click', () => {
  if (checkInputs()) {
    moneyOutput.innerText = moneyInput.value;
    monthsOutput.innerText = monthsInput.value;

    payback.innerText = calculatePayback(moneyInput.value);

    moneyInput.value = '';
    monthsInput.value = '';
  }
});
