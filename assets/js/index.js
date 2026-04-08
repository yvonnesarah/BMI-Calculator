const btnEl = document.getElementById("btn");
const resetBtnEl = document.getElementById("reset-btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");
const healthInsightEl = document.getElementById("health-insight");
const themeSwitchEl = document.getElementById("theme-switch");

function calculateBMI() {
    const heightValue = parseFloat(document.getElementById("height").value) / 100;
    const weightValue = parseFloat(document.getElementById("weight").value);

    if (!heightValue || !weightValue) {
        alert("Please enter valid height and weight!");
        return;
    }

    const bmiValue = weightValue / (heightValue * heightValue);
    const bmiRounded = bmiValue.toFixed(2);
    bmiInputEl.value = bmiRounded;

    let condition = '';
    let insight = '';

    if (bmiValue < 18.5) {
        condition = 'Underweight';
        insight = 'You are underweight. Consider a balanced diet to gain healthy weight.';
        weightConditionEl.className = 'underweight';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        condition = 'Normal weight';
        insight = 'You have a healthy weight. Keep maintaining your lifestyle!';
        weightConditionEl.className = 'normal';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        condition = 'Overweight';
        insight = 'You are overweight. Consider regular exercise and a healthy diet.';
        weightConditionEl.className = 'overweight';
    } else {
        condition = 'Obesity';
        insight = 'You are in the obesity range. Consult a healthcare professional for guidance.';
        weightConditionEl.className = 'obesity';
    }

    weightConditionEl.textContent = condition;
    healthInsightEl.textContent = insight;
}

// Reset function
function resetInputs() {
    document.getElementById("height").value = '';
    document.getElementById("weight").value = '';
    bmiInputEl.value = '';
    weightConditionEl.textContent = '';
    weightConditionEl.className = '';
    healthInsightEl.textContent = '';
}

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}

btnEl.addEventListener("click", calculateBMI);
resetBtnEl.addEventListener("click", resetInputs);
themeSwitchEl.addEventListener("change", toggleTheme);