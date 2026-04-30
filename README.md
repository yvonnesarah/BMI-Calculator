# Fitness Web App

## 📌 Description
The Fitness Web App is an advanced health and wellness application built using HTML, CSS, and JavaScript.
It began as a simple BMI Calculator and has evolved into a multi-feature fitness tracker that helps users monitor their BMI, body fat percentage, workouts, meals, and health trends.

The application provides personalized health insights, visual feedback, analytics charts, and lifestyle recommendations based on user inputs such as age, gender, height, and weight.

The goal of this project is to demonstrate interactive front-end development, data persistence with LocalStorage, and dynamic health analytics using Chart.js.

## 🛠 Prerequisites
* A modern web browser (Chrome, Firefox, Safari, Edge)

## 📋 Features
🧮 Advanced BMI Calculator
* Calculates Body Mass Index (BMI)
* Displays BMI category: Underweight, Normal, Overweight, Obesity
* Shows BMI with two decimal precision
* Body Fat Percentage estimation
* Ideal Weight Range calculation
* Dynamic BMI progress meter
* Emoji indicators for weight condition
* Personalized health insights and recommendations

🧠 Personalized Health Guidance

Based on BMI, body fat, age, and gender, the app generates:
* Workout plan suggestions
* Sample meal recommendations
* Health alerts
* Body fat insights
* Age and gender specific advice

🏋️ Workout Log

Users can:
* Record daily workouts
* Save workout notes
* View workout history

All entries are stored locally using LocalStorage.

🍽 Meal Tracker

Users can:
* Log meals and calorie information
* Track daily calorie intake
* View meal history
* Receive meal suggestions

📊 BMI Analytics 

The app includes a dynamic BMI trend chart powered by Chart.js.

Features include:
* Automatic BMI trend visualization
* Historical BMI tracking
* Real-time chart updates when new BMI results are added

🗂 BMI History Tracking
* Stores the last 5 BMI calculations
* Displays entries in reverse chronological order
* Data persists using LocalStorage

🎨 User Experience Features
* Multi-tab interface
* Light / Dark mode toggle
* Responsive design for mobile and desktop
* Interactive buttons and animations
* Color-coded BMI categories

## 💻 Technologies Used
This project was built using:
* HTML
* CSS
* JavaScript
* Chart.js for analytics visualization
* LocalStorage for persistent data

## 🚀 Installation
No installation required. Simply open the web application in your browser.

## 📚 Usage
BMI Calculator
1. Enter: Age, Gender, Height, Weight
2. Click Compute BMI
3. View:, BMI value, Body fat percentage, Ideal weight range, Health insights, Personalized guidance

Workout Log
1. Navigate to the Workout Log tab
2. Enter your workout details
3. Click Save Log
4. View saved workouts in history

Meal Tracker
1. Go to the Meal Tracker tab
2. Enter meal details and calorie information
3. Save the entry
4. Track your daily calories

BMI Analytics
1. Navigate to the BMI Analytics tab
2. View the automatically generated BMI trend chart

## 🔗 Live Demo & Repository
Application can be viewed here: 
* 🌐 Live: https://yvonnesarah.github.io/Fitness-Web-App/
* 💻 Repository: https://github.com/yvonnesarah/Fitness-Web-App
  
## 🖼 Screenshot(S)
Before Design

BMI Calculator Interface
![Screenshot](assets/images/before/bmi-calculator.png "BMI Calculator")

BMI Calculation Example
![Screenshot](assets/images/before/bmi-calculator-example.png "BMI Calculator Example")

After Design

BMI Calculator Interface

![Screenshot](assets/images/after/bmi-calculator.png "BMI Calculator")

BMI Calculation Example

![Screenshot](assets/images/after/bmi-calculator-example.png "BMI Calculator Example")

BMI Calculation Example - Dark Theme

![Screenshot](assets/images/after/bmi-calculator-example-dark-theme.png "BMI Calculator - Dark Theme")

Workout Log Interface

![Screenshot](assets/images/after/workout-log.png "Workout Log")

Meal Tracker Interface

![Screenshot](assets/images/after/meal-tracker.png "Meal Tracker")

BMI Trend Analytics Interface

![Screenshot](assets/images/after/bmi-analytics.png "BMI Trend Analytics")

## 🚀 🗺️ Roadmap (Planned Features)
To enhance the functionality and user experience of the Fitness Web App, the following improvements are planned:
* 🟢 BMI Formatting – Display BMI with 2 decimal places for better readability. ✅
* 🆕 Reset Button – Add a button to clear inputs and results quickly. ✅
* ⚠️ Input Validation – Alert users if height or weight is missing or invalid. ✅
* 🎨 Color-Coded Results – Change text colour based on BMI category (underweight, normal, overweight, obesity). ✅
* ✨ Button Animations – Add hover effects for buttons to improve interactivity. ✅
* 📊 Detailed Health Insights – Provide personalized recommendations based on BMI results. ✅
* 🎨 Theme Customization – Offer light/dark mode or colour themes for better accessibility. ✅
* 📱 Mobile Optimization – Further refine UI/UX for mobile and tablet devices. ✅

## 🚀 Upcoming Features
These upcoming features aim to enhance the Fitness Web App’s usability, personalization, and visual feedback:

👤 User Profile Inputs
* Age input: Adjust BMI interpretation for age-specific ranges ✅
* Gender input: Tailor health advice and BMI evaluation based on gender ✅
* Enhanced insights: Show personalized health messages considering age and gender ✅

📊 Advanced Health Calculations
* Body fat calculator: Estimate body fat percentage based on BMI, age, and gender ✅
* Ideal weight range: Suggest target weight range for the user’s height based on BMI and height ✅

🎨 Visual BMI Feedback
* Dynamic color-coded BMI meter: Instantly shows category through color changes ✅
* Animated progress bar: Indicates BMI position within the healthy/target range ✅
* Emoji/icon indicators: Fun visual feedback corresponding to weight condition ✅

🗂️ BMI History & Tracking
* LocalStorage: Save BMI results for historical tracking ✅

Personalized Health Guidance
* Motivational messages: Encourage lifestyle improvements and goal setting ✅
* Resource links: Provide trusted health websites or guides ✅

## 🧠 Advanced Features (Professional Level)
These enhancements aim to make the Fitness Web App more secure, professional, and user-friendly:

Multi-Tab Interface
* Switch between BMI Calculator, Workout Log, Meal Tracker, and BMI Analytics. ✅

Enhanced BMI Calculator
* Inputs: Age, Gender, Height, Weight ✅
* Outputs: BMI, Body Fat Percentage, Weight Condition (Underweight, Normal, Overweight, Obesity) with emoji indicators, Ideal Weight Range, Health Insights & Recommendations ✅
* Visual feedback with color-coded BMI meter and progress bar. ✅

Personalized Guidance
* Dynamic workout plans, sample meal plans, health alerts, and age/gender-specific advice. ✅

History Tracking
BMI History:
* Stores last 5 BMI calculations in localStorage ✅

Workout and Meal Logs:
* Users can log workouts and meals ✅
* Entries displayed dynamically under each tab ✅
* Daily calorie totals calculated and shown for meals ✅

Analytics
* BMI trend line chart (Chart.js) auto-updates with new entries. ✅

Theme Toggle & Responsive Design
* Smooth light/dark mode transitions and optimized mobile layout. ✅

Bonus Features
* Reset button clears inputs and guidance fields. ✅
* Colour-coded BMI categories and context-aware alerts. ✅
* Recent entries shown in reverse chronological order. ✅

## 🧠 Challenges & Learnings
🚧 Challenges Faced

1. Managing and synchronizing multiple features (BMI calculator, workout log, meal tracker, analytics) within a single-page application using vanilla JavaScript.
2. Implementing reliable data persistence using LocalStorage while ensuring data consistency across different app sections.
3. Integrating and dynamically updating charts using Chart.js based on user inputs and historical BMI data.
4. Ensuring accurate input validation for user health data (age, height, weight, and gender) to prevent incorrect calculations.
5. Maintaining a responsive and consistent UI across mobile, tablet, and desktop devices.
6. Structuring JavaScript logic without a framework while keeping the code organized and scalable.

📚 Key Learnings

1. Gained deeper understanding of DOM manipulation and state handling in vanilla JavaScript.
2. Improved ability to design interactive and data-driven UI components.
3. Learned how to effectively use LocalStorage for persistent user data tracking.
4. Developed practical experience integrating data visualization tools (Chart.js) into real-world applications.
5. Strengthened knowledge of UX principles, especially in providing clear feedback through color coding, alerts, and progress indicators.
6. Enhanced problem-solving skills by debugging dynamic calculations and UI updates across multiple modules.

## 👥 Credit
Designed and developed by Yvonne Adedeji.

## 📜 License
This project is open-source. For licensing details, please refer to the LICENSE file in the repository.

## 📬 Contact
You can reach me at 📧 yvonneadedeji.sarah@gmail.com.
