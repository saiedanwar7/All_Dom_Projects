/*
----- id phone ----
button -> phone-minus
input -> phone-number
button -> phone-plus
span ->  phone-total

------- id case -------
buttn -> case-minus
input -> case-number
button -> case-plus
span -> case-total


//------------ total ------
total -> sub-total
      -> tax-amount
      -> total-price

//--------- variable create -----
const product = 'phone'
product+'-number'

"phone-number"
*/

//----------- use function --------
// function updateCaseNumber(isIncreasing) {
//     const caseInput = document.getElementById('case-number');
//     let caseNumber = caseInput.value;

//     if (isIncreasing == true) {
//         caseNumber = parseInt(caseNumber) + 1;
//     } else if(caseNumber > 0){
//         caseNumber = parseInt(caseNumber) - 1;
//     }
//     caseInput.value = caseNumber;

//     // update case total
//     const caseTotal = document.getElementById('case-total');
//     caseTotal.innerText = caseNumber * 59;
// }






//--------------- case ----------

// document.getElementById('case-plus').addEventListener('click', function () {
//     updateCaseNumber(true);
// })

// document.getElementById('case-minus').addEventListener('click', function () {
//     updateCaseNumber(false);
   
// })






//-------------- Functional Shoping Cart --> first part ----------

function updateProductNumber(product, price, isIncreasing) {
   
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;


   

    //update total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate total product
    calculateTotal();
}


//--------------- calculate Product Total -> second part --------
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseFloat(productInput.value);
    return productNumber;

}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // console.log(subTotal);

    //------ update subtotal in html ----
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}



//---------- phone -------

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})


document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

//----------------- case handler --------
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59,  true)
   
})


document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)
    
})