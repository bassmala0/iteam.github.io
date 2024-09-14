const textNodeList = document.querySelectorAll(".Text");
const threeImagesNodeList = document.querySelectorAll("div.EachImg");

function DisplayText(i_2, i_1){
textNodeList[i_1].style.display = "flex";
textNodeList[i_1].style.flex = "0 0 100%";
textNodeList[i_1].style.height = "fit-content";
threeImagesNodeList[i_2].style.cursor = "context-menu";
}

function HideText(i_1, i_2){
textNodeList[i_1].style.display = "none";
threeImagesNodeList[i_2].style.cursor = "pointer";
}