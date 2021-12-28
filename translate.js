const slogon=document.querySelector(".intro p");
const current=document.querySelector(".current>a");
const section1h1=document.querySelector(".sous_section1 h1");
const intro=document.querySelector(".intro");
const posi1=document.querySelector(".posi1");
const posi2=document.querySelector(".posi2");
const but=document.querySelector("#but_trans");


window.addEventListener("load",()=>{
    if(slogon!=null) {
    slogon.style.transform="translateY(0)";
    slogon.style.opacity="1";
    setTimeout(()=>{
        but.style.opacity="1";
    },700);
    }
    setTimeout(()=>{
        current.style.transform="translateY(0)";
        current.style.opacity="1";
    },200);
});
// window.addEventListener("scroll",()=> {
//     const scrollval=window.scrollY;
//     console.log(scrollval);
//     if(scrollval<100){
//         var a=100-scrollval ;
//         console.log(a);
//         section1h1.style.top= a+"px";
//         slogon.style.top= 50+scrollval+"px";
//         slogon.style.transtion= 0;
//         intro.style.height =600-scrollval+"px";
//     }
//     if(scrollval>400 && scrollval<800) {
//         //b est la valeur du scroll remise a zero apres 400px 
//         var b=scrollval-400;
//         posi1.style.right= 400-b+"px";
//         posi2.style.left=400-b+"px";
//     }
    
// });

