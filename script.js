function calculateAge() {
  console.log("inside calc age");
  const day = document.getElementById("day-input").value;
  const month = document.getElementById("month-input").value;
  const year = document.getElementById("year-input").value;

  if (!isValidDate(year, month, day)) {
    errorText.textContent = "Please enter a valid date.";
    return;
  } else {
    errorText.textContent = "";
  }

  const birthDate = new Date(`${year}-${month}-${day}`);
  const ageInMillis = Date.now() - birthDate.getTime();

  const ageInYears = Math.floor(ageInMillis / (365.25 * 24 * 60 * 60 * 1000));
  const ageInMonths = Math.floor(ageInMillis / (30.44 * 24 * 60 * 60 * 1000));
  const ageInDays = Math.floor(ageInMillis / (24 * 60 * 60 * 1000));

  document.getElementById("years-text").textContent = `${ageInYears} years`;
  document.getElementById("months-text").textContent = `${ageInMonths} months`;
  document.getElementById("days-text").textContent = `${ageInDays} days`;

  document.getElementById(
    "years-text"
  ).innerHTML = `<span class="purple-text">${ageInYears}</span> years`;
  document.getElementById(
    "months-text"
  ).innerHTML = `<span class="purple-text">${ageInMonths}</span> months`;
  document.getElementById(
    "days-text"
  ).innerHTML = `<span class="purple-text">${ageInDays}</span> days`;

  document.getElementById("day-input").addEventListener("input", calculateAge);
  document
    .getElementById("month-tnput")
    .addEventListener("input", calculateAge);
  document.getElementById("year-input").addEventListener("input", calculateAge);
}

function isValidDate(year, month, day) {
  const inputDate = new Date(`${year}-${month}-${day}`);
  const currentDate = new Date();

  return !isNaN(inputDate.getTime()) && inputDate <= currentDate;
}

document
  .getElementById("submit-button")
  .addEventListener("click", calculateAge);
