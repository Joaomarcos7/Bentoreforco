let more=document.getElementById('more')

let burguer=document.getElementById('burguer')
 let header=document.querySelector('.header')
 let nav=document.querySelector('nav')
 let first=document.querySelector('.first')
 let second=document.querySelector('.second')
 let third=document.querySelector('.third')

function show(){
    if (header.style.flexDirection=='row'){
        header.style.flexDirection='column'
        nav.style.display='block'
        first.style.transform='rotate(45deg)'
        second.style.opacity='0'
        third.style.transform='rotate(-45deg)'
        
    }
    else{
        nav.style.display='none'
        header.style.flexDirection='row'
        first.style.transform='rotate(0)'
        second.style.opacity='1'
        second.style.transform='rotate(0)'
        third.style.opacity='rotate(0)'
    }


}