//----Nav bar
document.getElementById('langButton').addEventListener('click', function () {
    var langDropdown = document.getElementById('langDropdownMenu');
    langDropdown.classList.toggle('show');
    var lang = langDropdown.getElementsByTagName('input');
    var langPick = langDropdown.getElementsByTagName('label');
    for (let index = 0; index < lang.length; index++) {
        if (lang[index].checked) {
            document.getElementById('langButton').textContent = langPick[index].getElementsByTagName('b')[0].innerHTML;
        }
    }
});

document.getElementById('menuButton').addEventListener('click', function () {
    var menuDropdown = document.getElementById('menuDropdownMenu');
    menuDropdown.classList.toggle('show');
});

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

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

function applyName() {
    document.body.style.overflowY = 'auto';
    let tempName = document.getElementsByClassName('nm')[0].getElementsByTagName('p')[0];
    let tempNameInsight = document.getElementsByClassName('mmnn')[0].getElementsByTagName('td')[0];
    tempName.innerHTML = document.getElementById('nam').value + " <i class='fas fa-edit'></i>";
    tempNameInsight.innerHTML = "<em>" + document.getElementById('nam').value + " has no activity to share" + "</em>";
    document.getElementById('nameApply').style.display = 'none';
}

function applyAbout() {
    document.body.style.overflowY = 'auto';
    let tempAb = document.getElementById('aboutt');
    tempAb.innerHTML = document.getElementById('ab').value;
    tempAb.style.display = 'block';
    document.getElementById('aboutApply').style.display = 'none';
}

let stars = document.querySelectorAll('.fa-star');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((element) => { element.classList.replace('fas', 'far'); });
        for (let i = 0; i <= index; i++) {
            stars[i].classList.replace('far', 'fas');
        }
    });
});

let txt = document.querySelectorAll('.applyyy');
let change = document.querySelectorAll('.eDit');
let n = 0;
txt.forEach((button, i) => {
    button.addEventListener('click', () => {
        button.style.display = 'none';
        document.querySelectorAll('.in')[i].style.display = 'none';
        change[i].style.display = 'inline';
        if (i % 3 == 1) {
            document.querySelectorAll('select.cuRRency')[i - 1 - (2 * n)].style.display = 'none';
            document.querySelectorAll('.newProd')[i].querySelector('span').innerText = document.querySelectorAll('select.cuRRency')[i - 1 - (2 * n)].value + " " + document.querySelectorAll('.in')[i].value;
            n++;
        }
        else
            document.querySelectorAll('.newProd')[i].querySelector('span').innerText = document.querySelectorAll('.in')[i].value;
    });
});
change.forEach((b, elm) => {
    b.addEventListener('click', () => {
        b.style.display = 'none';
        document.querySelectorAll('.newProd')[elm].querySelector('span').innerText = "";
        document.querySelectorAll('.in')[elm].style.display = 'inline';
        txt[elm].style.display = 'inline';
        if (elm % 3 == 1) {
            n--;
            document.querySelectorAll('select.cuRRency')[elm - 1 - (2 * n)].style.display = 'inline';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let clk = 0;

    // Function to handle the addition of new rows
    function newProd() {
        // Hide all existing plus-circle icons
        document.querySelectorAll('.fa-plus-circle').forEach(icon => icon.style.display = 'none');

        // Create and append the new rows
        let tr1 = document.createElement('tr');
        tr1.innerHTML = `
            <th>Item image</th>
            <th>Product name</th>
            <th>Product price</th>
            <th>Product details</th>
        `;

        let tr2 = document.createElement('tr');
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

        let tr3 = document.createElement('tr');
        tr3.innerHTML = "<th colspan='4'><i class='fas fa-plus-circle' onclick='newProd()'></i></th>";

        let picChange = document.createElement('div');
        picChange.classList.add('PicApply');
        picChange.innerHTML = "<input class='PIC' type='search' placeholder='enter the product\'s picture link'><button>apply</button>";

        document.querySelector('table').append(tr1, tr2, tr3);
        document.getElementById('sell').insertAdjacentElement('afterend', picChange);
        clk++;
    }

    // Handle click events for existing and newly added elements
    document.addEventListener('click', (event) => {
        if (event.target.matches('.applyPic')) {
            let buttonIndex = Array.from(document.querySelectorAll('.applyPic')).indexOf(event.target);
            let picApplyElements = document.querySelectorAll('.PicApply');
            picApplyElements[buttonIndex].style.display = 'block';
            document.body.style.overflowY = 'hidden';
        } else if (event.target.matches('.PicApply button')) {
            let picApplyElements = document.querySelectorAll('.PicApply');
            let picElements = document.querySelectorAll('.pict');
            let picIndex = Array.from(picApplyElements).indexOf(event.target.closest('.PicApply'));
            let picElement = picElements[picIndex];
            let picInput = picApplyElements[picIndex].querySelector('.PIC');

            if (picInput.value) {
                picElement.src = picInput.value;
                picElement.style.display = 'block';
                picElement.style.objectFit = 'fit-content';
                document.querySelectorAll('.applyPic')[picIndex].innerHTML = "edit image";
            }

            picApplyElements[picIndex].style.display = 'none';
            document.body.style.overflowY = 'auto';
        } else if (event.target.matches('.fa-plus-circle')) {
            newProd();
        }
    });

    // Initialize event listener for the initial plus-circle icons
    if (clk >= 2) {
        document.querySelectorAll('.fa-plus-circle').forEach(icon => {
            icon.addEventListener('click', newProd);
        });
    }
});


//----product icon
const vidButton = document.getElementById("vidicon");
const imgButton = document.getElementById("imgicon");
const pro_vid = document.getElementById("product_vid");
const pro_img = document.getElementById("product_img");

const blackBtn = document.getElementById("blackcoloricon");
const blueBtn = document.getElementById("bluecoloricon");
const bulePic = document.getElementById("blueimg");
const colorName = document.querySelector(".colorname");

vidButton.addEventListener("mouseover", event => {
    pro_vid.style.display = "flex";
    pro_img.style.display = "none";
    bulePic.style.display = "none";
    colorName.innerHTML = `<span class="colorname">Black</span>`;
});

imgButton.addEventListener("mouseover", event => {
    pro_vid.style.display = "none";
    pro_img.style.display = "flex";
    bulePic.style.display = "none";
    colorName.innerHTML = `<span class="colorname">Black</span>`;
});

blackBtn.addEventListener("mouseover", event => {
    bulePic.style.display = "none";
    pro_vid.style.display = "none";
    pro_img.style.display = "flex";
    colorName.innerHTML = `<span class="colorname">Black</span>`;
});

blueBtn.addEventListener("mouseover", event => {
    bulePic.style.display = "flex";
    pro_vid.style.display = "none";
    pro_img.style.display = "none";
    colorName.innerHTML = `<span class="colorname">Blue</span>`;
});

