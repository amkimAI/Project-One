// Data object placed directly in the script for maximum compatibility
var dietData = {
    "A": {
        "image": "https://img.icons8.com/color/96/blood-type-a.png",
        "beef": "Avoid", "chicken": "Neutral", "pork": "Avoid",
        "veggies": "Broccoli, Spinach, Carrots",
        "fruits": "Blueberries, Pineapple",
        "insight": "Type A thrives on a Mediterranean-style plant-based diet."
    },
    "B": {
        "image": "https://img.icons8.com/color/96/blood-type-b.png",
        "beef": "Neutral", "chicken": "Avoid", "pork": "Avoid",
        "veggies": "Beets, Cabbage, Peppers",
        "fruits": "Bananas, Grapes",
        "insight": "Type B is 'The Nomad.' Focus on balance and avoid chicken lectins."
    },
    "AB": {
        "image": "https://img.icons8.com/color/96/blood-type-ab.png",
        "beef": "Avoid", "chicken": "Neutral", "pork": "Avoid",
        "veggies": "Tofu, Kale, Cucumber",
        "fruits": "Kiwi, Lemons",
        "insight": "The rarest type. A mix of Type A and Type B traits."
    },
    "O": {
        "image": "https://img.icons8.com/color/96/blood-type-o.png",
        "beef": "Beneficial", "chicken": "Neutral", "pork": "Avoid",
        "veggies": "Onions, Pumpkin, Seaweed",
        "fruits": "Plums, Figs",
        "insight": "The 'Hunter.' High protein and vigorous exercise are key."
    }
};

function generatePlan() {
    // 1. Get Values
    var bloodType = document.getElementById('bloodType').value;
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var dietStyle = document.getElementById('dietStyle').value;

    // 2. Validation
    if (weight === "" || height === "" || isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }

    // 3. BMI Calculation
    var bmi = (703 * parseFloat(weight)) / (parseFloat(height) * parseFloat(height));
    var profile = dietData[bloodType];

    // 4. Switch the "Pages"
    document.getElementById('form-view').style.display = 'none';
    document.getElementById('result-view').style.display = 'block';

    // 5. Build the Summary Page
    var resultsHTML = 
        '<img src="' + profile.image + '" class="blood-img">' +
        '<h2 style="text-align:center">Type ' + bloodType + ' Diet Plan</h2>' +
        '<div class="stat-banner">' +
            '<span><strong>BMI:</strong> ' + bmi.toFixed(1) + '</span>' +
            '<span><strong>Diet:</strong> ' + dietStyle + '</span>' +
        '</div>' +
        '<div class="result-card">' +
            '<h3>Holistic Insight</h3><p>' + profile.insight + '</p><hr>' +
            '<h3>Protein Matching</h3>' +
            '<p><strong>Beef:</strong> ' + profile.beef + '</p>' +
            '<p><strong>Chicken:</strong> ' + profile.chicken + '</p>' +
            '<p><strong>Pork:</strong> ' + profile.pork + '</p>' +
            '<h3>Recommended Plants</h3>' +
            '<p><strong>Veggies:</strong> ' + profile.veggies + '</p>' +
            '<p><strong>Fruits:</strong> ' + profile.fruits + '</p>' +
        '</div>';

    document.getElementById('plan-content').innerHTML = resultsHTML;
}

function goBack() {
    document.getElementById('form-view').style.display = 'block';
    document.getElementById('result-view').style.display = 'none';
}