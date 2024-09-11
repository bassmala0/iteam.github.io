document.addEventListener('DOMContentLoaded', () => {
    let n = 0;
    let clk = 0;

    // Function to handle the addition of new rows
    function newProd() {
        // Hide all existing plus-circle icons
        document.querySelectorAll('.fa-plus-circle').forEach(icon => icon.style.display = 'none');

        // Create and append the new rows
        const tr2 = document.createElement('tr');
        tr2.classList.add('nth');
        tr2.innerHTML = `
            <th class='plyPic'>
                <img class='pict' src='' alt=''>
                <button class='applyPic'>apply image</button>
            </th>
            <th class='newProd'>
                <span></span>
                <input class='in' type='search' placeholder='product name'>
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
                <input class='in Pricce' type='number' min='0' placeholder='0'>
                <button class='applyyy'>apply</button>
                <button class='eDit'>edit</button>
            </th>
            <th class='newProd'>
                <span></span>
                <input class='in' type='search' placeholder='product description'>
                <button class='applyyy'>apply</button>
                <button class='eDit'>edit</button>
            </th>
        `;

        const tr3 = document.createElement('tr');
        tr3.innerHTML = "<th colspan='4'><i class='fas fa-plus-circle'></i></th>";

        const picChange = document.createElement('div');
        picChange.classList.add('PicApply');
        picChange.innerHTML = "<input class='PIC' type='search' placeholder='enter the picture\'s link'><button>apply</button>";
        
        document.querySelector('table').append(tr2, tr3);
        document.getElementById('sell').insertAdjacentElement('afterend', picChange);
        if (!(clk%2)) {
            tr2.style.backgroundColor = '#53797944';
        }
        clk++;
    }

    // Event delegation for dynamically added elements
    document.addEventListener('click', (event) => {
        const target = event.target;

        if (target.matches('.applyPic')) {
            const buttonIndex = Array.from(document.querySelectorAll('.applyPic')).indexOf(target);
            const picApplyElements = document.querySelectorAll('.PicApply');
            picApplyElements[buttonIndex].style.display = 'block';
            document.body.style.overflowY = 'hidden';
        } else if (target.matches('.PicApply button')) {
            const picApplyElements = document.querySelectorAll('.PicApply');
            const picElements = document.querySelectorAll('.pict');
            const picIndex = Array.from(picApplyElements).indexOf(target.closest('.PicApply'));
            const picElement = picElements[picIndex];
            const picInput = picApplyElements[picIndex].querySelector('.PIC');

            if (picInput.value) {
                picElement.src = picInput.value;
                picElement.style.display = 'block';
                picElement.style.objectFit = 'fit-content';
                document.querySelectorAll('.applyPic')[picIndex].innerHTML = "edit image";
            }

            picApplyElements[picIndex].style.display = 'none';
            document.body.style.overflowY = 'auto';
        } else if (target.matches('.fa-plus-circle')) {
            newProd();
        } else if (target.matches('.applyyy')) {
            handleApplyClick(target);
        } else if (target.matches('.eDit')) {
            handleEditClick(target);
        }
    });

    // Handles the clicks for the apply buttons
    function handleApplyClick(button) {
        const index = Array.from(document.querySelectorAll('.applyyy')).indexOf(button);
        const input = document.querySelectorAll('.in')[index];
        const changeButton = document.querySelectorAll('.eDit')[index];
        const span = document.querySelectorAll('.newProd')[index].querySelector('span');
        const select = document.querySelectorAll('select.cuRRency')[index - 1 - (2 * n)];

        if (index % 3 === 1) {
            select.style.display = 'none';
            span.innerText = select.value + " " + input.value;
            n++;
        } else {
            span.innerText = input.value;
        }
        button.style.display = 'none';
        input.style.display = 'none';
        changeButton.style.display = 'inline';
    }

    // Handle clicks for edit buttons
    function handleEditClick(button) {
        const index = Array.from(document.querySelectorAll('.eDit')).indexOf(button);
        const span = document.querySelectorAll('.newProd')[index].querySelector('span');
        const input = document.querySelectorAll('.in')[index];
        const applyButton = document.querySelectorAll('.applyyy')[index];
        if (index % 3 === 1) {
            n--;
            const select = document.querySelectorAll('select.cuRRency')[index - 1 - (2 * n)];
            select.style.display = 'inline';
        }

        button.style.display = 'none';
        span.innerText = '';
        input.style.display = 'inline';
        applyButton.style.display = 'inline';
    }

    // Initialize event listener for the initial plus-circle icons
    if (clk >= 2) {
        document.querySelectorAll('.fa-plus-circle').forEach(icon => {
            icon.addEventListener('click', newProd);
        });
    }
});

