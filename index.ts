// Age Calculator Logic
const ageForm = document.getElementById('ageForm') as HTMLFormElement;
const dobInput = document.getElementById('dob') as HTMLInputElement;
const ageResult = document.getElementById('ageResult') as HTMLDivElement;
const ageOutput = document.getElementById('ageOutput') as HTMLParagraphElement;

// Function to calculate age based on the date of birth
function calculateAge(dob: string): string {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age.toString();
}

// Event listener for form submission
ageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const dob = dobInput.value;

  if (dob) {
    const age = calculateAge(dob);
    ageResult.style.display = 'block';
    ageOutput.textContent = `You are ${age} years old.`;
  } else {
    alert('Please enter your date of birth.');
  }
});
