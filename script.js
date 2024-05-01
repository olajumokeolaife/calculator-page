let expression = '';

function appendCharacter(char) {
  expression += char;
  document.getElementById ('output').value=expression;
}

function performOperation(operator) {
  if (expression !== '') {
      expression += operator;
      document.getElementById('output').value = expression;
  }
}

function calculate() {
  if (expression !== '') {
      try {
          const result = eval(expression);
          document.getElementById('output').value = result;
          expression = '';
      } catch (error) {
          document.getElementById('output').value = 'Error';
          expression = '';
      }
  }
}

function clearOutput() {
  expression = '';
  document.getElementById('output').value = '';
}