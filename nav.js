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

function lookUpItem(){
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



    