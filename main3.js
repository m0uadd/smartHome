let pause=document.getElementsByClassName(fas fa-pause");
let play=document.getElementsByClassName("fas fa-play");
let mute=document.getElementsByClassName("fas fa-volume-mute");
let unmute=document.getElementsByClassName("fas fa-volume-up");
let vd=document.getElementById("video");
pause=addEventListener("click",pausevd);
play=addEventListener("click",playvd);
mute=addEventListener("click",mutevd);
unmute=addEventListener("click",unmutevd);
function pausevd() {
    vd.pause();
}
function playvd() {
    vd.play();
}
function mutevd(){

}
function unmutevd(){

}