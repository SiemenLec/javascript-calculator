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
      console.log(equation);
    } else if (event.target.value === '-') {
      numOnScreen = '0';
      equation += event.target.value;
      output.innerText = numOnScreen;
      console.log(equation);
    } else if (event.target.value === '+') {
      numOnScreen = '0';
      equation += event.target.value;
      output.innerText = numOnScreen;
      console.log(equation);
    } else if (event.target.value === '/') {
      numOnScreen = '0';
      equation += event.target.value;
      output.innerText = numOnScreen;
      console.log(equation);
    } else if (event.target.value === '*') {
      numOnScreen = '0';
      equation += event.target.value;
      output.innerText = numOnScreen;
      console.log(equation);
    } else if (event.target.value === '-') {
      numOnScreen = '0';
      equation += event.target.value;
      output.innerText = numOnScreen;
      console.log(equation);
    } else if (event.target.value === 'clear') {
      numOnScreen = '0';
      equation = '0';
      output.innerText = numOnScreen;
      console.info('CLEARED');
    } else if (event.target.value === '=') {
      const outcome = eval(equation);
      console.log(`Equals: ${outcome}`);
      output.innerText = outcome;
      equation = outcome.toString();
      numOnScreen = '0';
    }
  });
