// /* -------------- Functional Bank --------------- */
// /*
// deposit-input
// deposit-button

// deposit-total
// withdraw-total

// balance-total

// withdraw-input
// withdraw-button
// */

//------ deposit and withdraw input --------
// get value from deposit input and withdraw update

function getInputValue(inputId) {
    // debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    inputField.value = '';

    return amountValue;
   
}


//---- update balance ------

// update total on -> deposit update and withdraw update

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    console.log(previousTotal)
    totalElement.innerText = previousTotal + amount;
    
}

//------- Current Balance ------
// current balance before -> deposit and withdraw

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceTotalText);
    // console.log(previousBalanceAmount);
    return previousBalanceAmount;

}

//-------update Balance Total -------
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = getCurrentBalance();

    // const previousBalanceTotalText = balanceTotal.innerText;
    // const previousBalanceAmount = parseFloat(previousBalanceTotalText);
    
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceAmount + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceAmount - amount;
    }
    // balanceTotal.innerText = previousBalanceAmount + amount;
    // console.log(balanceTotal);
}



//------ handle deposit input button -----
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
  

    
})


//------ handle withdraw input button -------
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        console.log(withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        alert('Insufficient Balance')
    }
    
  
})



//--------- Update Code with Auth ------

/* -------------- Functional Bank --------------- */
/*
deposit-input
deposit-button

deposit-total
withdraw-total

balance-total

withdraw-input
withdraw-button
*/

//------ deposit and withdraw input --------

// function getInputValue(inputId) {
//     // debugger; 
//     const inputField = document.getElementById(inputId);
//     const inputAmountText = inputField.value;
//     const amountValue = parseFloat(inputAmountText);

//     inputField.value = '';

//     return amountValue;
   
// }

// //---- update balance ------
// function updateTotalField(totalFieldId, amount) {
//     const totalElement = document.getElementById(totalFieldId);
//     const totalText = totalElement.innerText;
//     const previousTotal = parseFloat(totalText);
//     console.log(previousTotal)
//     totalElement.innerText = previousTotal + amount;
    
// }


// //------- Balance Total -------
// function updateBalance(amount, isAdd) {
//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceTotalText = balanceTotal.innerText;
//     const previousBalanceAmount = parseFloat(previousBalanceTotalText);
//     if (isAdd == true) {
//         balanceTotal.innerText = previousBalanceAmount + amount;
//     }
//     else {
//         balanceTotal.innerText = previousBalanceAmount - amount;
//     }
//     // balanceTotal.innerText = previousBalanceAmount + amount;
//     // console.log(balanceTotal);
// }



// //------ handle deposit input button -----
// document.getElementById('deposit-button').addEventListener('click', function () {
//     const depositAmount = getInputValue('deposit-input');
//     updateTotalField('deposit-total', depositAmount);
//     // console.log(depositAmount);
//     updateBalance(depositAmount, true);

    
// })


// //------ handle withdraw input button -------
// document.getElementById('withdraw-button').addEventListener('click', function () {
//     const withdrawAmount = getInputValue('withdraw-input');
//     updateTotalField('withdraw-total', withdrawAmount);
//     console.log(withdrawAmount); 
//     updateBalance(withdrawAmount, false);
// })
