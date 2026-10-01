const form = document.getElementById("infoForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const genderInput = document.getElementById("gender");

const displayName = document.getElementById("displayName");
const displayAge = document.getElementById("displayAge");
const displayEmail = document.getElementById("displayEmail");
const displayGender = document.getElementById("displayGender");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  displayName.textContent = nameInput.value;
  displayAge.textContent = ageInput.value;
  displayEmail.textContent = emailInput.value;
  displayGender.textContent = genderInput.value;
  
});
