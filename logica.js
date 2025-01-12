function calculateBMI() {
    var height = document.getElementById('estatura').value;
    var weight = document.getElementById('peso').value;
    if (height > 0 && weight > 0) {
        var heightInMeters = height / 100; var bmi = weight / (heightInMeters * heightInMeters);
        var result = "Tu IMC es: " + bmi.toFixed(2); document.getElementById('result').innerHTML = result;
    } else {
        alert("Por favor, introduce valores válidos para altura y peso.");
    }
}