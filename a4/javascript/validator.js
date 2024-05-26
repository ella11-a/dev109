function isValid() {
    if (firstName() && lastName() && email() && phoneValidator())
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
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;
    return (validFirstname);
};

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
        };

    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages2;
    return(validLastname);
};

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
};

function phoneValidator() {
  
    var errorMessage4 = "";
    var phone = document.getElementById("phone").value;
    if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="") {
      errorMessage4 += "<p> Invalid phone number. Should only be numerical values, max 15 digits.</p>"
    }
    else {
      validPhone = true;
    }

    document.getElementById("phoneNum").innerHTML = errorMessages4;
    return(validPhone);
};
