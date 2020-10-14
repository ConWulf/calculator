"use strict"

let zero = document.getElementById("0").innerHTML;
let one = document.getElementById("1").innerHTML;
var two = document.getElementById("2").innerHTML;
var three = document.getElementById("3").innerHTML;
var four = document.getElementById("4").innerHTML;
var five = document.getElementById("5").innerHTML;
var six = document.getElementById("6").innerHTML;
var seven = document.getElementById("7").innerHTML;
var eight = document.getElementById("8").innerHTML;
var nine = document.getElementById("9").innerHTML;



window.addEventListener("click", e => {
    if(e.button === parseFloat(zero)) {
        document.getElementById("input").value = zero
    } else if(e.button === parseFloat(one)) {
        document.getElementById("input").value = one
    }

});





