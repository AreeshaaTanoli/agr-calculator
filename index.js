// Age Calculator Logic
var ageForm = document.getElementById('ageForm');
var dobInput = document.getElementById('dob');
var ageResult = document.getElementById('ageResult');
var ageOutput = document.getElementById('ageOutput');
// Function to calculate age based on the date of birth
function calculateAge(dob) {
    var birthDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age.toString();
}
// Event listener for form submission
ageForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var dob = dobInput.value;
    if (dob) {
        var age = calculateAge(dob);
        ageResult.style.display = 'block';
        ageOutput.textContent = "You are ".concat(age, " years old.");
    }
    else {
        alert('Please enter your date of birth.');
    }
});
