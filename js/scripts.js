
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

var updateText = function (output) {
  var h1 = document.getElementById("text");
  h1.innerHTML = output;
}

// var test = function() {
//   alert("test");
// }

var text = getInput();
updateText(text);


$("#img1").click(function() {
  updateText(cipher (text));
  // $(this).innerHTML = getInput();

});

$("#img2").click(function() {
  updateText(text);
});
