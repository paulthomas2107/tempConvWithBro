const testBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');

let temp;

const convert = () => {
  if (toFahrenheit.checked) {
    temp = Number(testBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + '°F';
  } else if (toCelsius.checked) {
    temp = Number(testBox.value);
    temp = ((temp - 32) * 5) / 9;
    result.textContent = temp.toFixed(1) + '°C';
  } else {
    result.textContent = 'Select a unit.';
  }
};
