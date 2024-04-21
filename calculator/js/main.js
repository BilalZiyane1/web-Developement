function addToDisplay(value) {
  const display = document.getElementById('display');
  if(display.textContent == "0"){
    display.textContent = value;
  }else {
    display.textContent += value;
  }
  
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.textContent = '0';
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
      const result = eval(display.textContent);
      display.textContent = result;
  } catch (error) {
      display.textContent = 'Error';
  }
}
