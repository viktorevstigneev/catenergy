

document.addEventListener('DOMContentLoaded',() =>{
    'use strict';
   const  headerList =document.getElementById('header__list');
   const closeMenu = document.getElementById('close');
    let a=1;


   closeMenu.addEventListener('click',  () =>{
    if(a==0){  headerList.style.display='block';
       console.log("aaaaaa",a);
       a=1;
       
    }
    if(a==1){
        headerList.style.display='none';
        console.log("aaaaaaaa",a);
       a=0;
    }
    
    
  
   });

 
})