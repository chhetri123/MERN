let num1Input = document.querySelector("#number1");
let num2Input = document.querySelector("#number2");

const calculateBtn = document.querySelector("#calculateBtn");

const resetButton = document.querySelector("#resetBtn");

function calc() {
  let num1Value = parseInt(num1Input.value);
  let num2Value = parseInt(num2Input.value);
  let operator = document.getElementById("operator").value;

  if (isNaN(num1Value) || isNaN(num2Value) || !operator) {
    console.log("invalid");
  } else {
    let calculate;
    if (operator == "add") {
      calculate = num1Value + num2Value;
    } else if (operator == "min") {
      calculate = num1Value - num2Value;
    } else if (operator == "mul") {
      calculate = num1Value * num2Value;
    } else if (operator == "div") {
      calculate = num1Value / num2Value;
    }
    document.getElementById("final-result").innerHTML = calculate;
  }
}

function resetBtn() {
  var r = (document.getElementById("final-result").innerHTML = "");

  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";

  document.getElementById("operator").value = "undefined";
}

calculateBtn.addEventListener("click", calc);

resetButton.addEventListener("click", resetBtn);
