//const dayInput = document.getElementById('day-input');
//const monthInput = document.getElementById('month-input');
//const yearInput = document.getElementById('year-input');

//monthInput.addEventListener('input', function() {
  //const value = this.value;
  //if (!/^(0?[1-9]|1[0-2])$/.test(value)) {
   // this.setCustomValidity('Please enter a valid month (1-12)');
 // }
   //else {
    //this.setCustomValidity('');
  //}
//});




//monthInput.addEventListener('input', function() {
 // const validMonthPattern = /^(0?[1-9]|1[0-2])$/;
 // this.setCustomValidity(validMonthPattern.test(this.value) ? '' : 'Please enter a valid month (1-12)');
//});


const calculateAge = () => {
 const birthDate = new Date(
 document.getElementById("year-input").value,
 document.getElementById("month-input").value - 1,
 document.getElementById("day-input").value
    );
  
    const now = new Date();
    const diffTime = Math.abs(now - birthDate);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    const diffMonths = Math.floor(
     (diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
    const diffDays = Math.floor(
     (diffTime % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24));

  
    
  
    document.getElementById("age-years").innerText = diffYears;
   document.getElementById("age-months").innerText = diffMonths;
   document.getElementById("age-days").innerText = diffDays;};
  
  document.getElementById("calculate-age-btn").addEventListener("click", calculateAge);


  //const dayInput = document.querySelector('input[name="day"]');
//if (dayInput.required && !dayInput.value) {
 // ('Please enter a valid date');

//  const placeholder = document.getElementById("placeholder");

//  let birthDate;
//  let isValidInput = false;
 
//  while (!isValidInput) {
//    const inputDate = prompt("Enter birth date in format DD/MM/YYYY:");
//    const dateParts = inputDate.split('/');
//    const day = parseInt(dateParts[0]);
//    const month = parseInt(dateParts[1]) - 1; // months in JS are zero-indexed
//    const year = parseInt(dateParts[2]);
   
//    if (isValidDate(day, month, year) && isValidMonth(month)) {
//      birthDate = new Date(year, month, day);
//      isValidInput = true;
//    } else {
//      placeholder.innerText = "Please enter a valid date.";
//    }
//  }
 
//  const now = new Date();
//  const diffTime = Math.abs(now - birthDate);
//  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
//  const diffMonths = Math.floor(
//    (diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12))
//  );
//  const diffDays = Math.floor(
//    (diffTime % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24)
//  );
 
//  placeholder.innerText = `You are ${diffYears} years, ${diffMonths} months, and ${diffDays} days old.`;
 
//  function isValidDate(day, month, year) {
//    const maxDaysInMonth = new Date(year, month + 1, 0).getDate();
//    return day >= 1 && day <= maxDaysInMonth;
//  }
 
//  function isValidMonth(month) {
//    return month >= 0 && month <= 11;
//  }
 