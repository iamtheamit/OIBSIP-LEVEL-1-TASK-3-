const form = document.getElementById('converter');
const typeSelect = document.getElementById('type');
const degInput = document.getElementById('deg');
const result = document.getElementById('result');

form.addEventListener('submit',function(event){
  event.preventDefault();
  const selectedType = typeSelect.value;
  const enteredDegrees = parseFloat(degInput.value);

  let convertedValue;
  if (selectedType==='Celsius') {
    convertedValue=convertToFahrenheit(enteredDegrees);
    result.textContent =`${convertedValue} Fahrenheit.`;
  } else if (selectedType==='Fahrenheit') {
    convertedValue=convertToCelsius(enteredDegrees);
    result.textContent=`${convertedValue} Celsius.`;
  } else {
    result.textContent='Please select a valid conversion type.';
  }

});
function convertToFahrenheit(celsius)
{
  return(celsius * 9 / 5) + 32;
}
function convertToCelsius(fahrenheit)
{
  return(fahrenheit - 32) * 5 / 9;
}
