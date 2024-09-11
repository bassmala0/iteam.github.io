document.getElementById('langButton').addEventListener('click', function () {
    var langDropdown = document.getElementById('langDropdownMenu');
    langDropdown.classList.toggle('show');
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
