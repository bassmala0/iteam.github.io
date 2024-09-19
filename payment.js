const change1Btn = document.getElementById("change1"),
    change2Btn = document.getElementById("change2"),
    close1Btn = document.getElementById("close1"),
    close2Btn = document.getElementById("close2"),
    close1 = document.getElementById("addressclose"),
    change1 = document.getElementById("addressopen"),
    title1 = document.getElementById("titleno1");

change1Btn.addEventListener('click', () => {
    close1.style.display = "none";
    change1.style.display = "block";
    close2.style.display = "none";
    change2.style.display = "flex";
});
change2Btn.addEventListener('click', () => {
    close1.style.display = "none";
    change1.style.display = "block";
    close2.style.display = "block";
    change2.style.display = "none";
});
close1Btn.addEventListener('click', () => {
    close1.style.display = "flex";
    change1.style.display = "none";
});
close2Btn.addEventListener('click', () => {
    close1.style.display = "flex";
    change1.style.display = "none";
});



const change21Btn = document.getElementById("change21"),
    change22Btn = document.getElementById("change22"),
    close21Btn = document.getElementById("close21"),
    close22Btn = document.getElementById("close22"),
    close2 = document.getElementById("methodclose"),
    change2 = document.getElementById("methodopen"),
    title2 = document.getElementById("titleno2"),
    box1 = document.getElementById("sidebox1"),
    box2 = document.getElementById("sidebox2"),
    item1 = document.getElementById("itemopen"),
    item2 = document.getElementById("itemclose"),
    change42Btn = document.getElementById("change42"),
    itemTitle = document.getElementById("itemtitle");

change21Btn.addEventListener('click', () => {
    close1.style.display = "flex";
    close2.style.display = "block";
    change1.style.display = "none";
    change2.style.display = "none";
});
change22Btn.addEventListener('click', () => {
    close1.style.display = "flex";
    close2.style.display = "block";
    change1.style.display = "none";
    change2.style.display = "none";
});
close21Btn.addEventListener('click', () => {
    close2.style.display = "none";
    change2.style.display = "flex";
});
close22Btn.addEventListener('click', () => {
    close2.style.display = "none";
    change2.style.display = "flex";
    box1.style.display = "none";
    box2.style.display = "block";
    close22Btn.innerHTML="Place your order";
    item2.style.display = "none";
    itemTitle.style.display = "none";
    item1.style.display = "flex";
    close22Btn.addEventListener('click', () => {
        window.location.href = "home.html";
    });
});
change42Btn.addEventListener('click', () => {
    itemTitle.display = "none";
    close2.style.display = "none";
    change2.style.display = "flex";
    item1.style.display = "none";
    item2.style.display = "block";
});




var dropStatus = "more";
const downBtn = document.getElementById("dropinput");
const hideDiv = document.getElementById("dropped");
downBtn.addEventListener('click', function () {
    if (dropStatus == "more") {
        hideDiv.style.display = "none";
        downBtn.innerHTML = `<p id="dropinput"><i class="fa-solid fa-chevron-up" style="font-size: 12px;"></i>Add a gift card or promotion code</p>`;
        dropStatus = "less";
    }
    else if (dropStatus == "less") {
        hideDiv.style.display = "block";
        downBtn.innerHTML = `<p id="dropinput"><i class="fa-solid fa-chevron-down" style="font-size: 12px;"></i>Add a gift card or promotion code</p>`;
        dropStatus = "more";
    }
});

var input = document.querySelector(".input-box");
var input = document.querySelector(".input-box");
input.onclick = function(){
    this.classList.toggle("open");
    let list = this.nextElementSibling;
    if (list.style.maxHeight){
        list.style.maxHeight = null;
        list.style.boxShadow = null;

    }
    else {
        list.style.maxHeight = list.scrollHeight + "px"; 
        list.style.boxShadow = "0px 1px 12px 0px rgba(0, 0, 0, 0.15), 0px 1px 3px 1px rgba(0, 0, 0, 0.1)";

    }
}

var rad = document.querySelectorAll(".radio");
rad.forEach((item)=> {
    item.addEventListener("change", () => {
        input.innerHTML = `<span>Qty: <\span>` +item.nextElementSibling.innerHTML;
        input.click();
    })
});



