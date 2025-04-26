let equation = '0';
let numOnScreen = '0';
const output = document.querySelector('.output');

document
  .querySelector('.calculator-buttons')
  .addEventListener('click', function (event) {
    if (
      event.target.tagName.toLowerCase() === 'button' &&
      event.target.value !== 'back' &&
      event.target.value !== 'clear' &&
      event.target.value !== '=' &&
      event.target.value !== '/' &&
      event.target.value !== '+' &&
      event.target.value !== '*' &&
      event.target.value !== '-'
    ) {
      if (numOnScreen === '0') {
        numOnScreen = '';
      }
      equation += event.target.value;
      numOnScreen += event.target.value;
      output.innerText = numOnScreen;
    } else if (event.target.value === '-') {
      numOnScreen = '0';
      equation += event.target.value;
      output.innerText = numOnScreen;
    } else if (event.target.value === '+') {
      numOnScreen = '0';
      equation += event.target.value;
      output.innerText = numOnScreen;
    } else if (event.target.value === '/') {
      numOnScreen = '0';
      equation += event.target.value;
      output.innerText = numOnScreen;
    } else if (event.target.value === '*') {
      numOnScreen = '0';
      equation += event.target.value;
      output.innerText = numOnScreen;
    } else if (event.target.value === 'clear') {
      numOnScreen = '0';
      equation = '0';
      output.innerText = numOnScreen;
    } else if (event.target.value === 'back') {
      numOnScreen = numOnScreen.slice(0, -1);
      output.innerText = numOnScreen;
      equation = equation.slice(0, -1);
    } else if (event.target.value === '=') {
      try {
        const outcome = eval(equation);
        output.innerText = outcome;
        equation = outcome.toString();
        numOnScreen = outcome.toString();
      } catch (error) {
        output.innerText = 'ERROR';
        equation = '0';
        numOnScreen = '0';
      }
    }
  });
