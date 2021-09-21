function calculate() {
  var firstQuarterNote = document.getElementById("first-quarter-note").value;
  var secondQuarterNote = document.getElementById("second-quarter-note").value;
  var thirdQuarterNote = document.getElementById("third-quarter-note").value;
  var fourthQuarterNote = document.getElementById("fourth-quarter-note").value;
  
  firstQuarterNote = parseFloat(firstQuarterNote);
  secondQuarterNote = parseFloat(secondQuarterNote);
  thirdQuarterNote = parseFloat(thirdQuarterNote);
  fourthQuarterNote = parseFloat(fourthQuarterNote);
  
  result = (firstQuarterNote + secondQuarterNote + thirdQuarterNote + fourthQuarterNote) / 4;
  
  
  if (result) {
  document.getElementById("result").innerHTML = "A média de suas notas é: " + result.toFixed(1); 
} else {
  document.getElementById("result").value = "";
}
}

function restartValues() {
  document.getElementById("first-quarter-note").value = "";
	document.getElementById("second-quarter-note").value = "";
  document.getElementById("third-quarter-note").value = "";
  document.getElementById("fourth-quarter-note").value = "";
	document.getElementById("result").innerHTML = "";
}