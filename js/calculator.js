// alert('This is A Simple Calculator')
var button = document.getElementById("calculate")
const one = document.getElementById('clear');

function calculator(sign) {
  var sol = "";
  var firstnumber = document.getElementById("first").value
  var secondnumber = document.getElementById("second").value
  var result = document.getElementById("result")
  console.log(sign)
  switch (sign) {
    case "+":
      sol = parseInt(firstnumber) + parseInt(secondnumber)
      break;
    case "-":
      sol = parseInt(firstnumber) - parseInt(secondnumber)

      break;
    case "*":
      sol = parseInt(firstnumber) * parseInt(secondnumber)

      break;
    case "/":
      sol = parseInt(firstnumber) / parseInt(secondnumber)

      break;

    default:
      console.log("No calculator is in default");
  }
  result.innerHTML = sol;
  if (result.innerHTML === 'NaN') {
    result.innerHTML = "Please check your input";
  };
}


function clearcalc() {
  // return console.log('huhcuiacunapicdpiaosdcnams;oi')
  var firstnumber = document.getElementById("first")
  var secondnumber = document.getElementById("second")
  firstnumber.value = '';
  secondnumber.value = '';
}

