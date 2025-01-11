function calculateArea() {
    // Get user inputs
    const base1 = Number(document.getElementById('base1').value);
    const base2 = Number(document.getElementById('base2').value);
    const height = Number(document.getElementById('height').value);
    const unit = document.getElementById('units').value;
  
    // Validate inputs
    if (isNaN(base1) || isNaN(base2) || isNaN(height) || base1 <= 0 || base2 <= 0 || height <= 0) {
      alert("Please enter valid positive numbers for all fields.");
      return;
    }
  
    // Calculate area
    const area = ((base1 + base2) * height) / 2;
    const roundedArea = area.toFixed(2);
  
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `The area of the trapezoid is <span class="result">${roundedArea} ${unit}²</span>.`;
  
    // Clear inputs
    document.getElementById('base1').value = '';
    document.getElementById('base2').value = '';
    document.getElementById('height').value = '';
  }
  