// Get references to the button, BMI result input, and weight condition text
const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

// Function to calculate BMI
function calculateBMI() {
  // Get the height value from input and convert cm to meters
  const heightValue = document.getElementById("height").value / 100;
  
  // Get the weight value from input
  const weightValue = document.getElementById("weight").value;

  // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
  const bmiValue = weightValue / (heightValue * heightValue);

  // Display the calculated BMI in the input field
  bmiInputEl.value = bmiValue;

  // Determine weight condition based on BMI value and display corresponding text
  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obesity";
  }
}

// Add an event listener to the button to trigger BMI calculation when clicked
btnEl.addEventListener("click", calculateBMI);
