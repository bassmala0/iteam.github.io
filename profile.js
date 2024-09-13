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
    stars.forEach((star, index)=>{
        star.addEventListener('click', ()=>{
            stars.forEach((element)=>{element.classList.replace('fas', 'far');});
            for (let i = 0; i <= index; i++) {
                stars[i].classList.replace('far', 'fas');
            }
        });
    });
//slider!!!!!!!!!!!!!!!!!!!!
var Sec = document.querySelectorAll('.Three');
//number of clicks on the right / forward button in the  section
var clicksForThree = 0;
//variable to used in condition to switch between making the icon point to the right and to the bottom in the nav bar
var right = 0;
//index for the  that get displayed in the  section
var indexForThree = 0;
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
