
// function getPin(){
//     const pin = Math.round(Math.random() * 10000);
//     const pinString = pin + '';

//     if(pinString.length == 4){
//         return pin;
//     }
//     else{
//         console.log('got 3 digit and calling again', pin);
//         return getPin();
//     }
// }


// function generatePin(){
//    const pin = getPin();
//    document.getElementById('display-pin').value = pin;
// }


// //--------- number key generate ---------

// document.getElementById('key-pad').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     const calcInput =  document.getElementById('typed-numbers');
//     if(isNaN(number)){
//         if(number == 'C'){
//             calcInput.value = '';
//         }
//     }
//     else{
       
//         const previousNumber = calcInput.value;
//         const newNumber = previousNumber + number;
//         calcInput.value = newNumber;
    
//     }

// })

// function verifyPin(){
//     const pin = document.getElementById('display-pin').value;
//     const typeNumbers = document.getElementById('typed-numbers').value;

//     const successMessage = document.getElementById('notify-success');
//     const failError = document.getElementById('notify-fail');
//     if(pin == typeNumbers){
//         successMessage.style.display = 'block';
//         failError.style.display = 'none';
//     }
//     else{
//         successMessage.style.display = 'none';
//         failError.style.display = 'block';

// }


// }


//------------- start here again ----------
/*
-> number er sathe empty string plus korle seta string hoye jai...
-> tarpor length ber korbo
100 + ''
"100"
(100 + '').length => 3
*/




function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
      //  console.log('got 3 digit and calling again', pin)
        return getPin();
        // 4 digit er na ashle abar getPin function ke call korbo
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
       
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

//--------- work second part -----

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
   
    if (pin == typedNumber) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
        // console.log('Pin Matched')
    } else {
        failError.style.display = 'block';
        successMessage.style.display = 'none';
        // console.log('Pin Not Matched')
    }
}