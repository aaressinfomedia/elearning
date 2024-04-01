function show() {
  document.getElementById("password").type = "text";
}

function changeImg() {
  const logo = document.getElementById("logo");
  logo.src = "logo.png";
  const change = document.getElementById("change");
  change.innerHTML = "Logo Changed";
  change.style.backgroundColor = "green";
  change.style.height = "50px";
}

function validation() {
  //   alert("Working");
  const username = document.getElementById("username").value;
  const alphaExp = /^[a-zA-Z ]+$/;
  const nameError = document.getElementById("nameError");
  let nameStatus,
    mobileStatus,
    emailStatus = false;
  const mobile = document.getElementById("mobile").value;
  // alert(mobile.length);
  const numExp = /^[0-9]+$/;
  const mobileError = document.getElementById("mobileError");
  const mobileLength = document.getElementById("countrycode").value;
  // alert(mobileLength);
  // let mobileStatus = false;
  const email = document.getElementById("email").value;
  // alert(email);
  const emailError = document.getElementById("emailError");
  const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Name Validation
  if (username === "") {
    nameError.innerHTML = "Name is required.";
  } else {
    if (username.match(alphaExp)) {
      nameError.innerHTML = "";
      nameStatus = true;
    } else {
      nameError.innerHTML = "Only Characters & Spaces Allowed";
    }
  }

  // Mobile Validation
  if (mobile === "") {
    mobileError.innerHTML = "Mobile is required.";
  } else {
    if (mobile.match(numExp)) {
      if (mobile.length == mobileLength) {
        // alert("NumLength Validated")
        mobileError.innerHTML = "";
        mobileStatus = true;
      } else {
        mobileError.innerHTML = "Minimum " + mobileLength + " Digits Required";
      }
    } else {
      mobileError.innerHTML = "Only Digits Allowed";
    }
  }

  // Email Validation
  if (email === "") {
    emailError.innerHTML = "Email is required.";
  } else {
    if (email.match(emailExp)) {
      // alert("Email is Validated");
      emailError.innerHTML = "";
      emailStatus = true;
    } else {
      emailError.innerHTML = email + " Is Not a Valid Email Address.";
    }
  }

  if (nameStatus && mobileStatus && emailStatus) {
    return true;
  } else {
    return false;
  }
}
