

var table = prompt("Enter table value: ");         // Unit of table

//removed operator

//table = GetValueFromUser("table") not needed as I used prompt() to ask for user input

// Write the message into the page
var el = document.getElementById('blackboard');

//sets table to multiplication
el.innerHTML = GetTableContent("multiplication", table);


/*function removed because its unnecessary as the table's operator is already multiplication

function GetValueFromUser(valueType) {
  var greetingMessage = 'Hello. How are you? ';
  if (valueType == "operator") {
    greetingMessage += "Enter addition or multiplication";
  }
  else
  {
    greetingMessage += "Enter table";
  }
  return prompt(greetingMessage);
}

*/


function GetTableContent(operator, table) {
  var i = 1;                 // Set counter to 1
  var msg = '<h2>Multiplication Table</h2>';              // Message  
  
  
  if (operator === 'addition') {
    // Do addition
    while (i < 11) {
      msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
      i++;
    }
  } else {
  
    // Do multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  }
  return msg;
}
