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
