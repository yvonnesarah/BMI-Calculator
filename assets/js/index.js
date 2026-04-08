const btnEl=document.getElementById("btn");
const resetBtnEl=document.getElementById("reset-btn");

const bmiInputEl=document.getElementById("bmi-result");
const bodyFatEl=document.getElementById("body-fat");
const idealWeightEl=document.getElementById("ideal-weight");

const weightConditionEl=document.getElementById("weight-condition");
const healthInsightEl=document.getElementById("health-insight");
const recommendationEl=document.getElementById("recommendations");

const bmiProgressEl=document.getElementById("bmi-progress");
const themeSwitchEl=document.getElementById("theme-switch");

function calculateBMI(){

const age=parseInt(document.getElementById("age").value);
const gender=document.getElementById("gender").value;
const height=parseFloat(document.getElementById("height").value)/100;
const weight=parseFloat(document.getElementById("weight").value);

if(!height||!weight||!age){
alert("Please enter valid inputs");
return;
}

const bmi=weight/(height*height);
bmiInputEl.value=bmi.toFixed(2);

/* Body fat */

let bodyFat=0;

if(gender==="male"){
bodyFat=(1.20*bmi)+(0.23*age)-16.2;
}else{
bodyFat=(1.20*bmi)+(0.23*age)-5.4;
}

bodyFatEl.value=bodyFat.toFixed(1)+"%";

/* Ideal weight (basic calculation) */

const minIdeal=21*height*height;
const maxIdeal=23*height*height;

idealWeightEl.value=`${minIdeal.toFixed(1)} kg - ${maxIdeal.toFixed(1)} kg`;

/* BMI category */

let condition="";
let insight="";
let advice="";
let color="";

if(bmi<18.5){

condition="Underweight 😟";
color="#1e90ff";

insight="You are below the healthy weight range.";

advice="Eat nutrient rich foods and increase calorie intake.";

}

else if(bmi<=24.9){

condition="Normal Weight 😊";
color="#32cd32";

insight="Your BMI is within the healthy range.";

advice="Maintain a balanced diet and regular exercise.";

}

else if(bmi<=29.9){

condition="Overweight 😐";
color="#ffa500";

insight="You are slightly above the healthy weight range.";

advice="Increase physical activity and monitor diet.";

}

else{

condition="Obesity ⚠️";
color="#ff4500";

insight="BMI indicates obesity which may increase health risks.";

advice="Consult a healthcare professional and adopt healthier habits.";

}

/* Age insight */

if(age>50){
insight+=" Adults over 50 should monitor weight regularly.";
}

/* Gender advice (basic) */

if(gender==="female"){
advice+=" Ensure balanced nutrition including iron rich foods.";
}

/* Display results */

weightConditionEl.textContent=condition;
weightConditionEl.style.color=color;

healthInsightEl.textContent=insight;
recommendationEl.textContent=advice;

/* Progress bar */

const progress=Math.min((bmi/40)*100,100);

bmiProgressEl.style.width=progress+"%";
bmiProgressEl.style.backgroundColor=color;

/* Save history */

const history=JSON.parse(localStorage.getItem("bmiHistory")||"[]");

history.push({
date:new Date().toLocaleString(),
bmi:bmi.toFixed(2),
condition:condition
});

localStorage.setItem("bmiHistory",JSON.stringify(history));

displayHistory();

}

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

}

function toggleTheme(){

document.body.classList.toggle("dark-theme");
document.body.classList.toggle("light-theme");

}

btnEl.addEventListener("click",calculateBMI);
resetBtnEl.addEventListener("click",resetInputs);
themeSwitchEl.addEventListener("change",toggleTheme);

displayHistory();