// Elements
const btnEl = document.getElementById("btn");
const resetBtnEl = document.getElementById("reset-btn");
const themeSwitchEl = document.getElementById("theme-switch");

const bmiInputEl = document.getElementById("bmi-result");
const bodyFatEl = document.getElementById("body-fat");
const idealWeightEl = document.getElementById("ideal-weight");

const weightConditionEl = document.getElementById("weight-condition");
const healthInsightEl = document.getElementById("health-insight");
const recommendationEl = document.getElementById("recommendations");
const bmiProgressEl = document.getElementById("bmi-progress");

const workoutPlanEl = document.getElementById("workout-plan");
const sampleMealPlanEl = document.getElementById("sample-meal-plan");
const healthAlertsEl = document.getElementById("health-alerts");
const fatBMIInsightsEl = document.getElementById("fat-bmi-insights");
const ageGenderAdviceEl = document.getElementById("age-gender-advice");

// Tabs
const tabs = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        tabContents.forEach(tc => tc.style.display = "none");
        document.getElementById(tab.dataset.tab).style.display = "block";
        if(tab.dataset.tab === "analytics-tab") renderBMIChart();
        if(tab.dataset.tab === "workout-tab") displayWorkoutHistory();
        if(tab.dataset.tab === "meal-tab") displayMealHistory();
    });
});

// Theme toggle
themeSwitchEl.addEventListener("change", () => document.body.classList.toggle("dark-theme"));

// BMI Calculation
btnEl.addEventListener("click", calculateBMI);
resetBtnEl.addEventListener("click", resetInputs);

function calculateBMI(){
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value)/100;
    const weight = parseFloat(document.getElementById("weight").value);

    if(!height||!weight||!age){ alert("Please enter valid inputs"); return; }

    const bmi = weight/(height*height);
    bmiInputEl.value = bmi.toFixed(2);
    const bodyFat = gender==="male" ? (1.20*bmi)+(0.23*age)-16.2 : (1.20*bmi)+(0.23*age)-5.4;
    bodyFatEl.value = bodyFat.toFixed(1)+"%";

    // BMI Category
    let condition="", insight="", advice="", color="";
    if(bmi<18.5){ condition="Underweight 😟"; color="#1e90ff"; insight="Below healthy range."; advice="Increase calorie intake."; }
    else if(bmi<=24.9){ condition="Normal 😊"; color="#32cd32"; insight="Healthy range."; advice="Maintain diet & exercise."; }
    else if(bmi<=29.9){ condition="Overweight 😐"; color="#ffa500"; insight="Slightly above healthy range."; advice="Moderate cardio & diet."; }
    else{ condition="Obesity ⚠️"; color="#ff4500"; insight="High risk."; advice="Consult a healthcare professional."; }

    weightConditionEl.textContent = condition;
    weightConditionEl.style.color = color;
    healthInsightEl.textContent = insight;
    recommendationEl.textContent = advice;

    bmiProgressEl.style.width = Math.min((bmi/40)*100,100)+"%";
    bmiProgressEl.style.backgroundColor = color;

    // Ideal Weight
    const minIdeal = 21*height*height;
    const maxIdeal = 23*height*height;
    idealWeightEl.value = `${minIdeal.toFixed(1)} kg - ${maxIdeal.toFixed(1)} kg`;

    // Personalized Guidance
    generatePersonalizedGuidance(bmi, bodyFat, age, gender);

    // Save BMI history
    const history = JSON.parse(localStorage.getItem("bmiHistory")||"[]");
    history.push({ date:new Date().toLocaleString(), bmi:bmi.toFixed(2), condition:condition });
    localStorage.setItem("bmiHistory", JSON.stringify(history));
    displayHistory();
    renderBMIChart();
}

// Reset Inputs
function resetInputs(){
    document.getElementById("age").value="";
    document.getElementById("height").value="";
    document.getElementById("weight").value="";
    bmiInputEl.value="";
    bodyFatEl.value="";
    idealWeightEl.value="";
    weightConditionEl.textContent="";
    healthInsightEl.textContent="";
    recommendationEl.textContent="";
    bmiProgressEl.style.width="0%";
    workoutPlanEl.textContent="";
    sampleMealPlanEl.textContent="";
    healthAlertsEl.textContent="";
    fatBMIInsightsEl.textContent="";
    ageGenderAdviceEl.textContent="";
}

// Personalized Guidance
function generatePersonalizedGuidance(bmi, bodyFat, age, gender){
    let workoutPlan="", mealPlan="", healthAlerts="", fatInsights="", ageGenderAdvice="";

    if(bmi<18.5){
        workoutPlan = "3-4 days/week, 45-60 min, Muscle gain & strength. Exercises: Squats, Deadlifts, Bench Press";
        mealPlan = "High-calorie protein meals: Eggs, Chicken, Nuts, Whole grains";
        healthAlerts = "Underweight may reduce immunity.";
    } else if(bmi<=24.9){
        workoutPlan = "4-5 days/week, 30-60 min, Balanced cardio & strength. Exercises: Running, Push-ups, Lunges";
        mealPlan = "Balanced meals: Lean protein, complex carbs, vegetables";
        healthAlerts = "Normal BMI. Maintain habits.";
    } else if(bmi<=29.9){
        workoutPlan = "4-5 days/week, 30-50 min, Moderate cardio & strength. Exercises: Brisk walk, Bodyweight exercises, Dumbbell rows";
        mealPlan = "Reduce processed foods; include fiber-rich meals: Oats, Lentils, Veggies";
        healthAlerts = "Monitor cardiovascular health.";
    } else{
        workoutPlan = "3-4 days/week, 20-40 min, Low-impact cardio & flexibility. Exercises: Swimming, Yoga, Resistance bands";
        mealPlan = "Low-calorie high-fiber diet: Vegetables, Beans, Lean protein";
        healthAlerts = "High risk of diabetes, heart disease.";
    }

    if(bodyFat<10){ fatInsights = "Low body fat. Focus on strength training & nutrition."; }
    else if(bodyFat<=25){ fatInsights = "Healthy body fat percentage."; }
    else{ fatInsights = "High body fat. Emphasize cardio & weight management."; }

    ageGenderAdvice = age>50 ? "Monitor cardiovascular health closely." : "Maintain regular exercise.";
    if(gender==="female"){ ageGenderAdvice += " Include iron & calcium-rich foods."; }

    workoutPlanEl.textContent = "Workout Plan: " + workoutPlan;
    sampleMealPlanEl.textContent = "Sample Meal Plan: " + mealPlan;
    healthAlertsEl.textContent = "Health Alerts: " + healthAlerts;
    fatBMIInsightsEl.textContent = "Body Fat Analysis: " + fatInsights;
    ageGenderAdviceEl.textContent = "Age & Gender Advice: " + ageGenderAdvice;
}

// Display BMI history
function displayHistory(){
    const list=document.getElementById("bmi-history");
    list.innerHTML="";
    const history=JSON.parse(localStorage.getItem("bmiHistory")||"[]");
    history.slice(-5).reverse().forEach(entry=>{
        const li=document.createElement("li");
        li.textContent=`${entry.date} - BMI: ${entry.bmi} (${entry.condition})`;
        list.appendChild(li);
    });
}

// BMI Chart
let bmiChart;
function renderBMIChart(){
    const history = JSON.parse(localStorage.getItem("bmiHistory")||"[]");
    const labels = history.map(h=>h.date);
    const data = history.map(h=>parseFloat(h.bmi));
    const ctx = document.getElementById('bmiChart').getContext('2d');
    if(bmiChart) bmiChart.destroy();
    bmiChart = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets:[{ label:'BMI', data, borderColor:'purple', fill:false }] },
        options:{ scales:{ y:{ beginAtZero:true, suggestedMax:40 } } }
    });
}