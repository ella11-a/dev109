function isValid() {
    if (nameFunction() && email() && comment())
    return true;
    else
        return false;
}

function nameFunction() {
    var validName = false;
    var errorMessage ="";
    var userName = document.getElementById("name").value;
    if (userName === "" || userName === "null") {
      errorMessage += "<p>Name is required</p>";
    }
  else {
    validName = true;
  }
    document.getElementById("nameMsg").innerHTML = errorMessage;
  return (validName);
}

function email() {
    var validEmail = false;
    var errorMessage ="";
    var userEmail = document.getElementById("email").value;
    if (userEmail === "" || userEmail === "null") {
      errorMessage += "<p>Email is required</p>";
    }
  else {
    validEmail = true;
  }
    document.getElementById("em").innerHTML = errorMessage;
  return (validEmail);
}

function comment() {
    var validComment = false;
    var errorMessage ="";
    var commentMsg = document.getElementById("comment").value;
    if (commentMsg === "" || commentMsg === "null") {
      errorMessage += "<p>Comment is required</p>";
    }
  else {
    validComment = true;
  }
    document.getElementById("com").innerHTML = errorMessage;
  return (validComment);
}

