document.addEventListener('DOMContentLoaded', () => {
    let clk = 0;

    // Function to handle the addition of new rows
    function newProd() {
        const icons = document.querySelectorAll('.fa-plus-circle');
        icons.forEach(icon => icon.style.display = 'none');

        const newRow = `
            <tr class='nth'>
                <th class='plyPic'>
                    <img class='pict' src='' alt=''>
                    <button class='applyPic'>apply image</button>
                </th>
                <th class='newProd'>
                    <span></span>
                    <input class='in st' type='search' placeholder='product name'>
                    <button class='applyyy'>apply</button>
                    <button class='eDit'>edit</button>
                </th>
                <th class='newProd'>
                    <span></span>
                    <select class='cuRRency'>
                        <option>EGP</option>
                        <option>QAR</option>
                        <option>TRY</option>
                        <option>LBP</option>
                        <option>$</option>
                        <option>€</option>
                        <option>₩</option>
                        <option>¥</option>
                    </select>
                    <input class='in Pricce nd' type='number' min='0' placeholder='0'>
                    <button class='applyyy'>apply</button>
                    <button class='eDit'>edit</button>
                </th>
                <th class='newProd'>
                    <span></span>
                    <input class='in rd' type='search' placeholder='product description'>
                    <button class='applyyy'>apply</button>
                    <button class='eDit'>edit</button>
                </th>
                <th>
                    <button class="applyy gr">submit</button>
                    <i class='fas fa-check-circle'></i>
                </th>
            </tr>
            <tr>
                <th colspan='5'><i class='fas fa-plus-circle'></i></th>
            </tr>
        `;

        const picChange = `
            <div class='PicApply'>
                <input class='PIC' type='search' placeholder='enter picture link'>
                <button>apply</button>
            </div>
        `;

        document.querySelector('table').insertAdjacentHTML('beforeend', newRow);
        document.getElementById('sell').insertAdjacentHTML('afterend', picChange);

        clk++;

        if (clk % 2) {
            document.querySelectorAll('tr.nth')[clk].style.backgroundColor = '#53797944';
        }
    }

    // Event delegation for dynamically added elements
    document.addEventListener('click', (event) => {
        const target = event.target;

        if (target.matches('.applyPic')) {
            const buttonIndex = Array.from(document.querySelectorAll('.applyPic')).indexOf(target);
            const picApply = document.querySelectorAll('.PicApply')[buttonIndex];
            picApply.style.display = 'block';
            document.body.style.overflowY = 'hidden';
        } else if (target.matches('.PicApply button')) {
            const picApply = Array.from(document.querySelectorAll('.PicApply'));
            const picElements = document.querySelectorAll('.pict');
            const picIndex = picApply.indexOf(target.closest('.PicApply'));
            const picElement = picElements[picIndex];
            const picInput = picApply[picIndex].querySelector('.PIC');

            if (picInput.value) {
                picElement.src = picInput.value;
                picElement.style.display = 'block';
                picElement.style.objectFit = 'fit-content';
                document.querySelectorAll('.applyPic')[picIndex].textContent = "edit image";
            }

            picApply[picIndex].style.display = 'none';
            document.body.style.overflowY = 'auto';
        } else if (target.matches('.fa-plus-circle')) {
            newProd();
        } else if (target.matches('.applyyy')) {
            handleApplyClick(target);
        } else if (target.matches('.eDit')) {
            handleEditClick(target);
        } else if (target.matches('.gr')) {
            validateAndSubmit(target);
        }
    });

    // Function to handle apply button clicks
    function handleApplyClick(button) {
        const index = Array.from(document.querySelectorAll('.applyyy')).indexOf(button);
        const input = document.querySelectorAll('.in')[index];
        const changeButton = document.querySelectorAll('.eDit')[index];
        const span = document.querySelectorAll('.newProd')[index].querySelector('span');
        const select = input.previousElementSibling;

        if (index % 3 === 1) {
            select.style.display = 'none';
            span.textContent = `${select.value} ${input.value}`;
        } else {
            span.textContent = input.value;
        }

        button.style.display = 'none';
        input.style.display = 'none';
        changeButton.style.display = 'inline';
    }

    // Function to handle edit button clicks
    function handleEditClick(button) {
        const index = Array.from(document.querySelectorAll('.eDit')).indexOf(button);
        const span = document.querySelectorAll('.newProd')[index].querySelector('span');
        const input = document.querySelectorAll('.in')[index];
        const applyButton = document.querySelectorAll('.applyyy')[index];

        if (index % 3 === 1) {
            const select = input.previousElementSibling;
            select.style.display = 'inline';
        }

        button.style.display = 'none';
        span.textContent = '';
        input.style.display = 'inline';
        applyButton.style.display = 'inline';
    }

    function stopAnim(spinning, check){
        spinning.style.display = 'none';
        check.style.display = 'inline';
    }

    // Function to validate and handle submit button clicks
    function validateAndSubmit(button) {
        const row = button.closest('tr');
        const input1 = row.querySelector('.st');
        const input2 = row.querySelector('.nd');
        const input3 = row.querySelector('.rd');
        const picInput = row.querySelector('.pict');
        const load = document.createElement('i');
        load.classList.add('fas');
        load.classList.add('fa-spinner');
        load.classList.add('fa-spin');
        
        const areAllFieldsFilled = (field) => field.value.trim() !== '';

        const allFieldsFilled1 = areAllFieldsFilled(input1);
        const allFieldsFilled2 = areAllFieldsFilled(input2);
        const allFieldsFilled3 = areAllFieldsFilled(input3);
        const picVal = picInput.src !== '';

        if (allFieldsFilled1 && allFieldsFilled2 && allFieldsFilled3 && picVal) {
            button.style.display = 'none';        
            button.nextElementSibling.style.display = 'none';
            button.nextElementSibling.insertAdjacentElement('afterend', load);
            setTimeout(stopAnim, 5000, load, button.nextElementSibling);
            input1.nextElementSibling.nextElementSibling.style.display = 'none';
            input2.nextElementSibling.nextElementSibling.style.display = 'none';
            input3.nextElementSibling.nextElementSibling.style.display = 'none';
            picInput.nextElementSibling.style.display = 'none';
        } else{
            alert('please fill all the required fields first');
        }
    }
});            


//slider!!!!!!!!!!!!!!!!!!!!
let Sec = document.querySelectorAll('.Three');
//number of clicks on the right / forward button in the  section
let clicksForThree = 0;
//variable to used in condition to switch between making the icon point to the right and to the bottom in the nav bar
let right = 0;
//index for the  that get displayed in the  section
let indexForThree = 0;
//display intial three
for (let index = 0; index < 3; index++) {
    Sec[index].style.display = 'flex';    
}
//default display of slider buttons
for (let index = 0; index < 2; index++) {
    document.getElementsByClassName('left')[index].disabled = true;
    document.getElementsByClassName('left')[index].style.cursor = 'context-menu';
    document.getElementsByClassName('left')[index].style.opacity = '0.4';
    document.getElementsByClassName('back')[index].disabled = true;
    document.getElementsByClassName('back')[index].style.cursor = 'context-menu';
    document.getElementsByClassName('back')[index].style.opacity = '0.4';
}
function threeNext(){
    indexForThree+=3;
    clicksForThree++;
    document.getElementsByClassName('left')[0].disabled = false;
    document.getElementsByClassName('left')[0].style.cursor = 'pointer';
    document.getElementsByClassName('left')[0].style.opacity = '1';
    Sec[indexForThree].style.display = 'flex';
    Sec[indexForThree+1].style.display = 'flex';
    Sec[indexForThree+2].style.display = 'flex';
    Sec[indexForThree-1].style.display = 'none';
    Sec[indexForThree-2].style.display = 'none';
    Sec[indexForThree-3].style.display = 'none';
    if(clicksForThree == 3){
        document.getElementsByClassName('right')[0].disabled = true;
        document.getElementsByClassName('right')[0].style.cursor = 'context-menu';
        document.getElementsByClassName('right')[0].style.opacity = '0.4';
    }
}
//the function that displays the earlier  in the  section
function threePrev(){
    indexForThree-=3;
    clicksForThree--;
    document.getElementsByClassName('right')[0].disabled = false;
    document.getElementsByClassName('right')[0].style.cursor = 'pointer';
    document.getElementsByClassName('right')[0].style.opacity = '1';
    if(!clicksForThree){
        document.getElementsByClassName('left')[0].disabled = true;
        document.getElementsByClassName('left')[0].style.cursor = 'context-menu';
        document.getElementsByClassName('left')[0].style.opacity = '0.4';
    }
    Sec[indexForThree].style.display = 'flex';
    Sec[indexForThree+1].style.display = 'flex';
    Sec[indexForThree+2].style.display = 'flex';
    Sec[indexForThree+3].style.display = 'none';
    Sec[indexForThree+4].style.display = 'none';
    Sec[indexForThree+5].style.display = 'none';
}
