(() => {
 
    // this is the same as print in python

    //these are the elements that you want to reference//
 var svgicon = document.querySelector("svg");

 var icon1 = document.querySelectorAll('#mic');
 var icon2 = document.querySelectorAll('#guitar');
 var icon3 = document.querySelectorAll('#record');
 var icon4 = document.querySelectorAll('#drums');
 var icon5 = document.querySelectorAll('#piano');
 var icon6 = document.querySelectorAll('#saxophone');
 var icon7 = document.querySelectorAll('#panFlute');
 var icon8 = document.querySelectorAll('#headphones');
 var icon9 = document.querySelectorAll('#trumpet');
 var icon10 = document.querySelectorAll('#mandolin');

 function logIconId() {
    console.log(this.id);
    debugger;
 }

svgicon.addEventListener("click", logIconId);

icon1.forEach(thisbadge => thisbadge.addEventListener("click", logIconId));
icon2.forEach(thisbadge => thisbadge.addEventListener("click", logIconId));
icon3.forEach(thisbadge => thisbadge.addEventListener("click", logIconId));
icon4.forEach(thisbadge => thisbadge.addEventListener("click", logIconId));
icon5.forEach(thisbadge => thisbadge.addEventListener("click", logIconId));
icon6.forEach(thisbadge => thisbadge.addEventListener("click", logIconId));
icon7.forEach(thisbadge => thisbadge.addEventListener("click", logIconId));
icon8.forEach(thisbadge => thisbadge.addEventListener("click", logIconId));
icon9.forEach(thisbadge => thisbadge.addEventListener("click", logIconId));
icon10.forEach(thisbadge => thisbadge.addEventListener("click", logIconId));

 //debugger; 
})();