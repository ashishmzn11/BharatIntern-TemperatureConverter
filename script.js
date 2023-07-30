function convert(unit) {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');
  
    if (unit === 'C') {
      if (celsiusInput.value !== '') {
        const celsiusTemp = parseFloat(celsiusInput.value);
  
        // Convert to Fahrenheit
        const fahrenheitTemp = (celsiusTemp * 9/5) + 32;
        fahrenheitInput.value = fahrenheitTemp.toFixed(2);
  
        // Convert to Kelvin
        const kelvinTemp = celsiusTemp + 273.15;
        kelvinInput.value = kelvinTemp.toFixed(2);
      } else {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
      }
    } else if (unit === 'F') {
      if (fahrenheitInput.value !== '') {
        const fahrenheitTemp = parseFloat(fahrenheitInput.value);
  
        // Convert to Celsius
        const celsiusTemp = (fahrenheitTemp - 32) * 5/9;
        celsiusInput.value = celsiusTemp.toFixed(2);
  
        // Convert to Kelvin
        const kelvinTemp = (fahrenheitTemp + 459.67) * 5/9;
        kelvinInput.value = kelvinTemp.toFixed(2);
      } else {
        celsiusInput.value = '';
        kelvinInput.value = '';
      }
    } else if (unit === 'K') {
      if (kelvinInput.value !== '') {
        const kelvinTemp = parseFloat(kelvinInput.value);
  
        // Convert to Celsius
        const celsiusTemp = kelvinTemp - 273.15;
        celsiusInput.value = celsiusTemp.toFixed(2);
  
        // Convert to Fahrenheit
        const fahrenheitTemp = (kelvinTemp * 9/5) - 459.67;
        fahrenheitInput.value = fahrenheitTemp.toFixed(2);
      } else {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
      }
    }
  }