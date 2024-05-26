function isValid() {
    if (firstName() && lastName() && email() && phoneValidator() && username() && password() && 
        address() && city() && zipcode() && state() && country())
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        }

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;
    return (validFirstname);
}

LastName.addEventListener('blur', lastName, false);
function lastName() {
   //1) Create variable
    var validLastname=false;

    //2) read value from HTML
    var lastname = document.getElementById("LastName").value;
    var errorMessages2 = "";

    //3) Do validation
    if (lastname==="null" || lastname==="" || lastname.length > 20 ) {
        errorMessages2 += "<p>The last name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages2 += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validLastname = true;
                console.log("Last name valid")
        }

    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages2;
    return(validLastname);
}


Email.addEventListener('blur', email, false);
function email() {
     var validEmail = false;
    var userEmail = document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    var errorMessages3 = "";
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    // send error message. For example:  errorMessages = "<p>Invalid email</p>";
      errorMessages3 += "<p>Invalid email</p>";
    }
    else {
      validEmail = true;
    }
    document.getElementById("em").innerHTML = errorMessages3;
    return(validEmail);
}

document.getElementById("phone").addEventListener('blur', phone, false);
function phoneValidator() {
    var validPhone = false;
    var errorMessage4 = "";
    var phone = document.getElementById("phone").value;
    if (isNaN(phone) || phone.length >15 || phone===null || phone==="") {
      errorMessage4 += "<p> Invalid phone number. Should only be numerical values, max 15 digits.</p>";
    }
    else {
      validPhone = true;
    }

    document.getElementById("phoneNum").innerHTML = errorMessage4;
    return(validPhone);
}

userName.addEventListener('blur', username, false);
function username() {
    var validUsername = false;
    var errorMessage ="";
    var userName = document.getElementById("username").value;
    if (userName.length <= 0 || userName.length > 12) {
      errorMessage += "<p>Invalid User</p>";
    }
  else {
    validUsername = true;
  }
    document.getElementById("userName").innerHTML = errorMessage;
  return (validUsername);
}


Password.addEventListener('blur', password, false);
function password() {
  var validPassword = false;
    var errorMessage ="";
    var passWord = document.getElementById("password").value;
    if (passWord === null || passWord === "" || passWord > 7) {
      errorMessage += "<p>Invalid Password</p>";
    }
  else {
    validPassword = true;
  }
    document.getElementById("Password").innerHTML = errorMessage;
  return (validPassword);
  
}

Address.addEventListener('blur', address, false);
function address() {
    var validAddress = false;
    var errorMessage ="";
    var add = document.getElementById("address").value;
    if (add === null || add==="") {
      errorMessage += "<p>Address required</p>";
    }
  else {
    validAddress = true;
  }
    document.getElementById("Address").innerHTML = errorMessage;
  return (validAddress);
}
City.addEventListener('blur', city, false);
function city() {
  var validCity = false;
    var errorMessage ="";
    var cityVar = document.getElementById("city").value;
    if (cityVar === null || cityVar==="") {
      errorMessage += "<p>City required</p>";
    }
  else {
    validCity = true;
  }
    document.getElementById("City").innerHTML = errorMessage;
  return (validCity)
}

State.addEventListener('blur',state, false);
function state() {
  var validState = false;
  var errorMessage = "";
  var stateOption = document.getElementById("state").value;
  if (stateOption === null || stateOption === "") {
    errorMessage += "<p>Invalid State. Please choose. </p>";
  }
  else {
    validState = true;
  }
  
  document.getElementById("State").innerHTML = errorMessage;
  return (validState);
}

Country.addEventListener('blur',country, false);
function country() {
  var validCountry = false;
  var errorMessage = "";
  var countryOption = document.getElementById("country").value;
  if (countryOption === null || countryOption === "") {
    errorMessage += "<p>Invalid Country. Please choose. </p>";
  }
  else {
    validCountry = true;
  }
  
  document.getElementById("Country").innerHTML = errorMessage;
  return (validCountry);
}




function zipcode() {
  var countryVal = document.getElementById("country").value;
  var zipcodeVar = document.getElementById("zipcode").value;
  
  var validZipCode = false;
  var errorMessage="";
  if (countryVal ==="USA") {
    if(isNaN(zipcodeVar) || zipcodeVar === null || zipcodeVar === "" || zipcodeVar.length > 5) {
      errorMessage += "<p>Invalid ZipCode</p>";
    }
    else {
      validZipCode = true;
    }
  }

  errorMessage += "HELLO";
  document.getElementById("ZipCode").innerHTML = errorMessage;
  return (validZipCode);
}
