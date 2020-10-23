(function () {
"use strict"




let operatorButton = document.getElementsByClassName("operator");
let numButton = document.getElementsByClassName("numButton");
let input1 = document.getElementById("num-input-1");
let input2 = document.getElementById("num-input-2");
let operator = document.getElementById("operator-input");
let equal = document.getElementById("equals");
let clear = document.getElementById("clear");
let sqrt = document.getElementById("sqrt");

    function operatorInput () {
        for (let j = 0; j < operatorButton.length; j++) {
            operatorButton[j].addEventListener("click", e => {
                operator.value = operatorButton[j].innerHTML;
            })
        }
        sqrt.addEventListener("click", e => {
            input1.value = Math.sqrt(input1.value);
            operator.value = "";
        })
    }

    function equals() {
        equal.addEventListener("click", e => {
            if (input1.value === "" && input2.value !== "") {
                input1.value = input2.value;
            } else if (input2.value === "" && input1.value !== "") {
                input2.value = input1.value;
            } else {
                switch (operator.value) {
                    case "+":
                        input1.value = parseFloat(input1.value) + parseFloat(input2.value);
                        break;
                    case "-":
                        input1.value = parseFloat(input1.value) - parseFloat(input2.value);
                        break;
                    case "*":
                        input1.value = parseFloat(input1.value) * parseFloat(input2.value);
                        break;
                    case "/":
                        input1.value = parseFloat(input1.value) / parseFloat(input2.value);
                }
            }
            if (input2.value === "0" && operator.value === "/") {
                input1.value = "Error";
            }
            input2.value = "";
            operator.value = "";
        });
    }

    function clearInput() {
        clear.addEventListener("click", e => {
            input1.value = "";
            input2.value = "";
            operator.value = "";
        });
    }

    function numInput() {
        for (let i = 0; i < numButton.length; i++) {
            numButton[i].addEventListener("click", e => {
                if (operator.value.length === 0) {
                    input1.value += numButton[i].innerHTML;
                } else if (operator.value.length > 0) {
                    input2.value += numButton[i].innerHTML;
                }
            });
        }
    }

    function number() {
        operatorInput();
        numInput();
        equals();
        clearInput();
    }

number();

})();