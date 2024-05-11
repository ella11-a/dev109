// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
rhombus(pHeight, pColorEven, pColorOdd, pSymbol);
}

function rhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (i = 0; i < pHeight; i++) {
    rLine +="<p>";
    for (j = 0; j < pHeight - i - 1; j++) {
      rLine += "&nbsp; ";
    }
            
    for (j = 0; j < 2 * i + 1; j++) {
      if (j % 2) {
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      } 
      else {
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
      }
    }
    rLine += "</p>";
  }
      
  for (i = pHeight - 2; i >= 0; i--) {
    for (j = 0; j < pHeight - i - 1; j++) {
      rLine += "&nbsp; ";
    }
    for (j = 0; j < 2 * i + 1; j++) {
      if (j % 2) {
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      } 
      else {
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
      }
    }
    rLine += "</p>";
  }
  document.getElementById("rhombus").innerHTML = rLine;
}





