

document.addEventListener('DOMContentLoaded',() =>{
    'use strict';
   const  headerList =document.getElementById('header__list');
   const closeMenu = document.getElementById('close');
    let a=1;


   closeMenu.addEventListener('click',  () =>{
    if(a==0){  headerList.style.display='block';
    
       a=1;
    }
    else {
        headerList.style.display='none';
      
       a=0;
    }
    
    
  
   });

 
})