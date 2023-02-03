let more=document.getElementById('more')

let burguer=document.getElementById('burguer')
 let header=document.querySelector('.header')
 let nav=document.querySelector('nav')
 let first=document.querySelector('.first')
 let second=document.querySelector('.second')
 let third=document.querySelector('.third')
 let navs=document.querySelector('.nav')

function show(){
    if (navs.style.display=='none'){
        navs.style.display='block'
        
    }
    else{
        navs.style.display='none'
        header.style.flexDirection='row'
        first.style.transform='rotate(0)'
        second.style.opacity='1'
        third.style.transform='rotate(0)'
    }


}