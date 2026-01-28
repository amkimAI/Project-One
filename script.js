// Data Object (Based on your text and Healthline cross-referencing)
var dietData = {
    "O": {
        "icon": "🅾️",
        "dietMatch": "High Protein / Paleo",
        "highProtein": ["Red Meat", "Venison", "Lamb", "Beef", "Cod", "Herring", "Mackerel"],
        "superfoods": ["Kelp", "Spinach", "Broccoli", "Olive Oil"],
        "veggies": ["Kale", "Swiss Chard", "Pumpkin", "Red Peppers", "Sweet Potatoes", "Onions", "Garlic"],
        "fruits": ["Plums", "Prunes", "Figs", "Grapefruit", "Blueberries"],
        "avoid": ["Wheat", "Corn", "Dairy", "Kidney Beans", "Lentils", "Cabbage", "Cauliflower", "Oranges"],
        "notes": "Healthline identifies Type O as the 'Hunter.' High protein intake is essential for maintaining lean muscle and thyroid health."
    },
    "A": {
        "icon": "🅰️",
        "dietMatch": "Plant-Based / Mediterranean",
        "highProtein": ["Tofu", "Soybeans", "Lentils", "Salmon", "Turkey", "Peanuts", "Pumpkin Seeds"],
        "superfoods": ["Soy Products", "Pineapple", "Olive Oil"],
        "veggies": ["Broccoli", "Carrots", "Spinach", "Garlic", "Onions", "Beet Greens", "Okra"],
        "fruits": ["Cherries", "Cranberries", "Plums", "Lemons", "Apricots", "Figs"],
        "avoid": ["Red Meat", "Pork", "Dairy", "Wheat", "Corn", "Kidney Beans", "Bananas", "Mangoes"],
        "notes": "Healthline describes Type A as the 'Agrarian.' Protein should come primarily from plants and clean seafood."
    },
    "B": {
        "icon": "🅱️",
        "dietMatch": "Balanced / Omnivore",
        "highProtein": ["Lamb", "Goat", "Rabbit", "Venison", "Eggs", "Cottage Cheese", "Liver", "Cod"],
        "superfoods": ["Green Vegetables", "Eggs", "Liver", "Licorice Tea"],
        "veggies": ["Beets", "Broccoli", "Cabbage", "Carrots", "Cauliflower", "Eggplant", "Peppers"],
        "fruits": ["Bananas", "Grapes", "Plums", "Papaya", "Pineapple"],
        "avoid": ["Chicken", "Pork", "Corn", "Wheat", "Lentils", "Peanuts", "Tomatoes", "Avocados"],
        "notes": "Healthline labels Type B as the 'Nomad.' They handle a balance of meat and dairy protein well."
    },
    "AB": {
        "icon": "🆎",
        "dietMatch": "Mixed / Moderate",
        "highProtein": ["Tofu", "Lamb", "Turkey", "Mackerel", "Tuna", "Sardines", "Yogurt", "Walnuts"],
        "superfoods": ["Tofu", "Seafood", "Green Vegetables", "Kelp"],
        "veggies": ["Broccoli", "Cauliflower", "Cucumber", "Garlic", "Celery", "Kale", "Beets"],
        "fruits": ["Cherries", "Grapes", "Kiwi", "Lemons", "Pineapple", "Plums"],
        "avoid": ["Red Meat", "Chicken", "Pork", "Corn", "Buckwheat", "Kidney Beans", "Oranges"],
        "notes": "Healthline calls AB the 'Enigma.' Protein should be consumed in small, frequent portions to assist digestion."
    }
};

function generatePlan() {
    // 1. Capture Inputs
    var bloodType = document.getElementById('bloodType').value;
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var dietStyle = document.getElementById('dietStyle').value;

    // 2. Validation
    if (!bloodType) {
        alert("Please select your blood type first!");
        return;
    }
    if (weight === "" || height === "") {
        alert("Please enter valid weight and height numbers.");
        return;
    }

    // 3. BMI Calculation (Standard Imperial Formula)
    var bmi = (703 * parseFloat(weight)) / (parseFloat(height) * parseFloat(height));
    var profile = dietData[bloodType];

    // 4. Transition Views
    document.getElementById('form-view').classList.add('hidden');
    document.getElementById('result-view').classList.remove('hidden');

    // 5. Build Dynamic Results
    var resultsHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <span style="font-size: 60px;">${profile.icon}</span>
            <h2 style="margin: 10px 0;">Type ${bloodType} Holistic Plan</h2>
            <div class="stat-banner">
                <span class="badge blue">BMI: ${bmi.toFixed(1)}</span>
                <span class="badge blue">Match: ${profile.dietMatch}</span>
            </div>
        </div>

        <div class="result-card">
            <h3>💪 High Protein (Best Matches)</h3>
            <div class="grid">
                ${profile.highProtein.map(p => `<span class="tag protein">🍗 ${p}</span>`).join('')}
            </div>

            <h3>⭐ Beneficial Superfoods</h3>
            <div class="grid">
                ${profile.superfoods.map(s => `<span class="tag beneficial">⭐ ${s}</span>`).join('')}
            </div>

            <h3>🥗 Vital Veggies & Fruits</h3>
            <div class="grid">
                ${profile.veggies.map(v => `<span class="tag">${v}</span>`).join('')}
                ${profile.fruits.map(f => `<span class="tag">${f}</span>`).join('')}
            </div>

            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            
            <h3 style="color: #c62828;">🚫 Avoid / Limit</h3>
            <div class="grid">
                ${profile.avoid.map(a => `<span class="tag avoid">✕ ${a}</span>`).join('')}
            </div>

            <div class="health-note">
                <p><strong>Healthline Insights:</strong> ${profile.notes}</p>
                <p style="font-size: 0.8em; color: #666; margin-top: 10px;">
                    Focusing on a <strong>${dietStyle}</strong> approach for your unique bio-chemistry.
                </p>
            </div>
        </div>
    `;

    document.getElementById('plan-content').innerHTML = resultsHTML;
}

function goBack() {
    document.getElementById('form-view').classList.remove('hidden');
    document.getElementById('result-view').classList.add('hidden');
}
