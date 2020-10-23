(function () {
"use strict"



// let plus = document.getElementById("plus");
// let minus = document.getElementById("minus");
// let multiply = document.getElementById("multiply");
// let divide = document.getElementById("divide");

let operatorButton = document.getElementsByClassName("operator");
let numButton = document.getElementsByClassName("numButton");
let input1 = document.getElementById("num-input-1");
let input2 = document.getElementById("num-input-2");
let operator = document.getElementById("operator-input");
let equal = document.getElementById("equals");
let clear = document.getElementById("clear");

    function operatorInput () {
        for (let j = 0; j < operatorButton.length; j++) {
            operatorButton[j].addEventListener("click", e => {
                operator.value = operatorButton[j].innerHTML;
            })
        }
    }

    function equals() {
        equal.addEventListener("click", e => {
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
                    break;
            }
            if (input2.value === "0") {
                input1.value = "Error";
            }
            input2.value = "";
            operator.value = "";
        });
    }
equals();
    function clearInput() {
        clear.addEventListener("click", e => {
            input1.value = "";
            input2.value = "";
            operator.value = "";
        });
    }

    clearInput();
    function numInput() {
        for (let i = 0; i < numButton.length; i++) {
            numButton[i].addEventListener("click", e => {
                if (operator.value.length === 0) {
                    input1.value += numButton[i].innerHTML;
                } else if (operator.value.length > 0) {
                    input2.value += numButton[i].innerHTML;
                }
                // if (input1.value.length === 0) {
                //     input1.value = 0;
                // }
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