const slides = document.querySelectorAll(".slides img");
let slideindex =0;
let intervalid =null;

document.addEventListener("DOMContentLoaded",initializeSlider);
function initializeSlider()
{
    if(slides.length>0)
    {
        slides[slideindex].classList.add("displaySlide");
        intervalid = setInterval(nextSlide, 5000);
    }
}
function showSlider(index)
{
    if(index>=slides.length)
    {
        slideindex =0;
    }
    else if(index<0)
    {
        slideindex =slides.length-1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    })
    slides[slideindex].classList.add("displaySlide");
}
function prevSlide()
{
    clearInterval(intervalid);
slideindex--;
showSlider(slideindex);
}
function nextSlide()
{
    slideindex++;
    showSlider(slideindex);
}