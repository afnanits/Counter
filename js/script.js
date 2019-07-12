var btnU=document.querySelector("#btnU")
var btnD=document.querySelector('#btnD');

var count=document.querySelector("#count");
var c=0;

btnU.addEventListener('click',increase)

btnD.addEventListener('click',decrease)

function increase(){
    c++;
    count.innerHTML=c;
    count.animate([{opacity:0.2},{opacity:1}],500);
    if(c>0){
        count.style.color="green"
    }
}

function decrease(){
    c--;
    if(c<0){
        count.style.color="red"
    }
    count.innerHTML=c;
    count.animate([{opacity:0.2},{opacity:1}],800);
}