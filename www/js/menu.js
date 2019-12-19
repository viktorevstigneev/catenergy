

document.addEventListener('DOMContentLoaded',() =>{
    'use strict';
   const  headerList =document.getElementById('header__list');
   const closeMenu = document.getElementById('close');
   let  imgCLOP = document.getElementById('imgCO');
    let a=0;


   closeMenu.addEventListener('click',  () =>{
    if(a==0){  headerList.style.display='block';
    imgCLOP.src='img/close.png';
       a=1;
    }
    else {
       imgCLOP.src='img/open.png';
        headerList.style.display='none';
       a=0;
    }
    
    
  
   });

 
})