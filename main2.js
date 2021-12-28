/*silder function start*/
 var counter = 1;
 var counter2 = 5;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      document.getElementById('radio' + counter2).checked = true;
      counter++;
      counter2++;
      if(counter > 4){
        counter = 1;
      }
      if(counter2 > 8){
      counter2 = 5;
    }
    }, 5000);
  // var counter2 = 5;
  // setInterval(function(){
  //   document.getElementById('radio' + counter2).checked = true;
  //   counter2++;
  //   if(counter2 > 8){
  //     counter2 = 5;
  //   }
  // }, 5000);
  /*silder function end*/
  var butt1=document.getElementById("butt1");
  var butt2=document.getElementById("butt2");
  var butt3=document.getElementById("butt3");
  var second=document.querySelector(".second");
  var third=document.querySelector(".third");
  var desc1=document.getElementById("desc_eclairage");
  var desc2=document.getElementById("desc_vetilation");
  var desc3=document.getElementById("desc_securite");
  // butt1=addEventListener("click",()=>{
  //   second.style.marginLeft ="0";

  // });
  butt1.addEventListener("click",()=>{
    second.style.marginLeft ="-20%";
    // desc1.classList.remove("hiden");
    // desc3.classList.add("hiden");
    // desc2.classList.add("hiden");
    desc1.style.opacity="1";
    desc2.style.opacity="0";
    desc3.style.opacity="0";
  });
  // butt2.addEventListener("click",secondsimu);
  butt2.addEventListener("click",()=>{
    second.style.marginLeft ="-40%";
    desc1.style.opacity="0";
    desc2.style.opacity="1";
    desc3.style.opacity="0";
  });
  butt3.addEventListener("click",()=>{
    second.style.marginLeft="-60%";
    desc1.style.opacity="0";
    desc2.style.opacity="0";
    desc3.style.opacity="1";
  });
  butt4.addEventListener("click",()=>{
    third.style.marginLeft="-20%";
  });
  butt5.addEventListener("click",()=>{
    third.style.marginLeft="-40%";
  });
  butt6.addEventListener("click",()=>{
    third.style.marginLeft="-60%";
  });