"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener();
}

/* close window */
function closeWin() {
    window.close();
}
function addFavorite(){
    var favContainer = window.opener.document.getElementById("favorites");

if (window.opener.favCount==5){
    document.getElementsByTagName("p")[2].innerHTML= "Please delete a favorite first.";
    return;
}
    var lastFigure = document.createElement('div');
    var lastImage = document.createElement('img');
    window.opener.favCount += 1;
    lastFigure.style.cssFloat = "left";
    lastImage.width = "240";
    lastImage.height = "135";
    //lastImage.style.position = "relative";
    lastImage.style.left = (window.opener.favCount - 1) * 243 + "px";
    lastImage.style.top = "50px";
    lastImage.style.marginRight = "3px";
    lastImage.src = "images/IMG_0" + photoOrderArray[2] + "sm.jpg";
    lastFigure.appendChild(lastImage);
    favContainer.appendChild(lastFigure);
    
   
//closeWin();
}
//function removeImg() {
//    var remove = document.getElementById("favorites");
//    remove.removeChild();
//    lastImage.parentElement.removeChild(lastImage);
//}
//function deleteImage() {
//    window.opener.getElementbyId("favorites").children[0].remove;
//    window.opener.favCount -= 1;
//}



/* create event listener for close button */
function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    var addFavoriteDiv = document.getElementsByTagName("p")[1];
    
   if (closeWindowDiv.addEventListener) {
     closeWindowDiv.addEventListener("click", closeWin, false); 
     addFavoriteDiv.addEventListener("click", addFavorite, false);
   } else if (closeWindowDiv.attachEvent)  {
     closeWindowDiv.attachEvent("onclick", closeWin);
     addFavoriteDiv.attachEvent("onclick", addFavorite);
    }
    
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;