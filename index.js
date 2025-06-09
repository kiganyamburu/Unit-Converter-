document.addEventListener('DOMContentLoaded', function() {
    const inputValue = document.getElementById('inputValue');
    const convertBtn = document.getElementById('convertBtn');
    const lengthResult = document.getElementById('lengthResult');
    const volumeResult = document.getElementById('volumeResult');
    const massResult = document.getElementById('massResult');

    // Conversion functions
    function metersToFeet(meters) {
        return Math.floor(meters * 3.28084 * 1000) / 1000;
    }

    function feetToMeters(feet) {
        return Math.floor(feet * 0.3048 * 1000) / 1000;
    }

    function litersToGallons(liters) {
        return Math.floor(liters * 0.264172 * 1000) / 1000;
    }

    function gallonsToLiters(gallons) {
        return Math.floor(gallons * 3.78541 * 1000) / 1000;
    }

    function kilogramsToPounds(kg) {
        return Math.floor(kg * 2.20462 * 1000) / 1000;
    }

    function poundsToKilograms(pounds) {
        return Math.floor(pounds * 0.453592 * 1000) / 1000;
    }

    function updateResults(value) {
        if (value === '' || isNaN(value)) {
            lengthResult.textContent = '20 meters = 65.617 feet | 20 feet = 6.096 meters';
            volumeResult.textContent = '20 liters = 5.283 gallons | 20 gallons = 75.708 liters';
            massResult.textContent = '20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos';
            return;
        }

        const num = parseFloat(value);
        
        // Length conversions
        const metersToFt = metersToFeet(num);
        const feetToM = feetToMeters(num);
        lengthResult.textContent = `${num} meters = ${metersToFt} feet | ${num} feet = ${feetToM} meters`;
        
        // Volume conversions
        const litersToGal = litersToGallons(num);
        const gallonsToL = gallonsToLiters(num);
        volumeResult.textContent = `${num} liters = ${litersToGal} gallons | ${num} gallons = ${gallonsToL} liters`;
        
        // Mass conversions
        const kgToLbs = kilogramsToPounds(num);
        const lbsToKg = poundsToKilograms(num);
        massResult.textContent = `${num} kilos = ${kgToLbs} pounds | ${num} pounds = ${lbsToKg} kilos`;
    }

    convertBtn.addEventListener('click', function() {
        const value = inputValue.value;
        updateResults(value);
    });

    inputValue.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const value = inputValue.value;
            updateResults(value);
        }
    });
});