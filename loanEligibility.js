// const action = document.getElementById("action");

// document.addEventListener("click", loanEligibility);

// function loanEligibility() {
//   //   alert("Click Check");
//   const userName = document.getElementById("userName").value;
//   const cibil = document.getElementById("cibil").value;
//   const salary = document.getElementById("salary").value;
//   const status = document.getElementById("status");
//   let msg = status;

//   if (cibil > 850 && salary > 90000) {
//     msg.innerHTML = userName + " you are Eligible for Loan of 15 Lakh";
//   } else if (cibil > 800 && salary > 75000) {
//     msg.innerHTML = userName + " you are Eligible for Loan of 10 Lakh";
//   } else if (cibil > 750 && salary > 50000) {
//     msg.innerHTML = userName + " you are Eligible for Loan of 5 Lakh";
//   } else if (cibil > 725 && salary > 35000) {
//     msg.innerHTML = userName + " you are Eligible for Loan of 3 Lakh";
//   } else {
//     msg.innerHTML = userName + " Better Luck Next Time.";
//   }
// }

function loanEligibility() {
  // alert("Click Check");
  const userName = document.getElementById("userName").value;
  const cibil = document.getElementById("cibil").value;
  const salary = document.getElementById("salary").value;
  const cibilLength = 3;
  const salaryLength = 4;
  let msg = document.getElementById("status");

  let nameStatus,
    cibilStatus,
    salaryStatus = false;

  const alphaExp = /^[a-zA-Z ]+$/;
  const nameError = document.getElementById("nameError");

  // alert(mobile.length);
  const numExp = /^[0-9]+$/;
  const cibilError = document.getElementById("cibilError");
  // alert(mobileLength);
  // let mobileStatus = false;

  // alert(mobile.length);
  const salaryError = document.getElementById("salaryError");

  // Name Validation
  if (userName === "") {
    nameError.innerHTML = "Name is required.";
    return false;
  } else {
    if (userName.match(alphaExp)) {
      nameError.innerHTML = "";
      nameStatus = true;
    } else {
      nameError.innerHTML = "Only Characters & Spaces Allowed";
      return false;
    }
  }

  // Cibil Validation
  if (cibil === "") {
    cibilError.innerHTML = "Cibil is required.";
    return false;
  } else {
    if (cibil.match(numExp)) {
      if (cibil.length == cibilLength) {
        // alert("NumLength Validated")
        cibilError.innerHTML = "";
        cibilStatus = true;
      } else {
        cibilError.innerHTML = "Minimum " + cibilLength + " Digits Required";
        return false;
      }
    } else {
      cibilError.innerHTML = "Only Digits Allowed";
      return false;
    }
  }

  // Salary Validation
  if (salary === "") {
    salaryError.innerHTML = "Salary is required.";
    return false;
  } else {
    if (salary.match(numExp)) {
      if (salary.length >= salaryLength) {
        // alert("NumLength Validated");
        salaryError.innerHTML = "";
        salaryStatus = true;
      } else {
        salaryError.innerHTML = "Minimum " + salaryLength + " Digits Required";
        return false;
      }
    } else {
      salaryError.innerHTML = "Only Digits Allowed";
    }
  }

  if (cibil > 850 && salary > 90000) {
    msg.innerHTML =
      "CONGRATULATIONS !!! " +
      userName +
      " you are Eligible for Loan of 15 Lakh";
  } else if (cibil > 800 && salary > 75000) {
    msg.innerHTML =
      "CONGRATULATIONS !!! " +
      userName +
      " you are Eligible for Loan of 10 Lakh";
  } else if (cibil > 750 && salary > 50000) {
    msg.innerHTML =
      "CONGRATULATIONS !!! " +
      userName +
      " you are Eligible for Loan of 5 Lakh";
  } else if (cibil > 725 && salary > 35000) {
    msg.innerHTML =
      "CONGRATULATIONS !!! " +
      userName +
      " you are Eligible for Loan of 3 Lakh";
  } else {
    msg.innerHTML = "SORRY !!! " + userName + " Better Luck Next Time.";
  }
}
