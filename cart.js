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
//the 2 buttons menu in the par
document.getElementById('langButton').addEventListener('click', function () {
    var langDropdown = document.getElementById('langDropdownMenu');
    langDropdown.classList.toggle('show');
});

document.getElementById('menuButton').addEventListener('click', function () {
    var menuDropdown = document.getElementById('menuDropdownMenu');
    menuDropdown.classList.toggle('show');
});

//the report in help page
document.getElementById('con').addEventListener('click', function () {
    var menuDropdown = document.getElementById('details');
    menuDropdown.classList.toggle('show');
});

document.getElementById('details').addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent click event from bubbling up to the document
});

//the par in the mobile vision
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

//the search
function lookUpItem() {
    let searchBar = document.querySelector('.sch').value.toLowerCase();
    let products = document.getElementById('lookUp');
    let items = products.getElementsByTagName('li');
    products.style.display = searchBar ? 'flex' : 'none';
    for (let index = 0; index < items.length; index++) {
        let link = items[index].getElementsByTagName('a')[0];
        let txtVal = link.textContent || link.innerText;
        if (txtVal.toLowerCase().indexOf(searchBar) > -1) {
            items[index].style.display = '';
        } else {
            items[index].style.display = 'none';
        }
    }
}
