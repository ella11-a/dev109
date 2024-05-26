function validateForm() {
    // Create variable to control status of each field. Assume that they are not valid initially.
    var validFirstname = false;

    // Read value from HTML
    var firstname = document.getElementById("firstname").value;
    
    // Initialize error message
    var errorMessages = "";

    // Do validation
    if (firstname === null || firstname === "" || firstname.length > 20 || !firstname.match(/^[a-zA-Z]+$/)) {
        // If any of the conditions fail, set error message
        errorMessages += "<p>The firstname is required and cannot be greater than 20 characters. Only alphabetical characters are allowed.</p>";
    } else {
        // Otherwise, the firstname is valid
        validFirstname = true;
    }

    // Send error message to HTML
    document.getElementById("errorMessages").innerHTML = errorMessages;

    // Return status of the FirstName field
    return validFirstname;
}
