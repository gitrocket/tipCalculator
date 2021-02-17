
var input = document.getElementById('amount');
var quality = document.getElementById('quality');
var tip = document.getElementById('tip-amount');
var total = document.getElementById('total');
var errorMessage = document.getElementById('error-message');
var reset = document.getElementById('reset'); 


const btn = document.getElementById('btn');

// validate input
function validateInput() {
    errorMessage.textContent = "";
    if(input.value === "" || quality.value === "select-option") {
    errorMessage.textContent = "Please enter values";
    tip.textContent = "Tip Amount: 0";
    total.textContent = "Total: 0";
    return;
    }

}

// calculate tip and total
function calculate(event) {
    validateInput();
    if(quality.value === 'excellent') {
        tip.value = input.value * .20;
    }
    if (quality.value === "good") {
        tip.value = input.value * .15; 
    }
    if (quality.value === "average") {
        tip.value = input.value * .10; 
    }
    if (quality.value === "poor") {
        tip.value = input.value * .05;
    }

    tip.textContent = `Tip Amount: ${(tip.value).toFixed(2)}`;
    total.value = (parseFloat(input.value) + parseFloat(tip.value)).toFixed(2);
    total.textContent = `Total: ${total.value}`;

}

// reset fields
function resetFields() {
    quality.value = "select-option";
    input.value = "";
    tip.textContent = "Total Amount:";
    total.textContent = "Total:";        
}


btn.addEventListener('click', calculate);
reset.addEventListener('click', resetFields);









     