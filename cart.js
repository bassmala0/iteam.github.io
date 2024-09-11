function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }
            
    else if(caseNumber > 0){
           caseNumber = parseInt(caseNumber) - 1;
         }
        
        caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const phoneTotal = getInputvalue('phone') * 977;
        const caseTotal = getInputvalue('case') * 895;
        const subTotal = phoneTotal + caseTotal;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;

        // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }





document.getElementById('case-plus').addEventListener('click',function(){
        
   upadateCaseNumber('case', 895 ,true);
});

document.getElementById('case-minus').addEventListener('click',function(){

upadateCaseNumber('case', 895, false);
});

// phone prcie update using add event linstner 
document.getElementById('phone-plus').addEventListener('click',function(){
    upadateCaseNumber('phone',977, true);
});


document.getElementById('phone-minus').addEventListener('click',function(){
    upadateCaseNumber('phone',977 , false);
});