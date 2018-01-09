
var firstAndLast = function (input) {
  return input.charAt(0) + input.charAt(input.length - 1);
}

var reverseUpper = function (input) {
  return input.split("").reverse().join("").toUpperCase();
}

var reverse = function (input) {
  return input.split("").reverse().join("");
}

var getMiddle = function(input) {
  var length = input.length;
  return input.charAt(length / 2);
}

var cipher = function(input) {
  var letters = firstAndLast(input);
  var output = input + reverseUpper(letters);
  var output = getMiddle(input) + output;
  return reverse(output);
}

var getInput = function() {
  return prompt("Enter Something!");
}

var text = getInput();



$("#img1").click(function() {
  alert(cipher (text));
  // $(this).innerHTML = getInput();
  // var total = document.getElementById("img1");
  // total.innerHTML = getInput();
});

$("#img2").click(function() {
  alert(text);
});
