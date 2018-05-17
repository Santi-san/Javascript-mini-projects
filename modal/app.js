

var but=document.querySelector('button');

var modalstate = document.querySelector('#simpleModal');

var spanbut = document.querySelector('.closeBtn');



but.addEventListener('click',function(){
    modalstate.style.display="block";
});

spanbut.addEventListener('click',function(){
    modalstate.style.display="none";
});

window.addEventListener('click',outsideClick);

function outsideClick(e){

   if(e.target == modalstate){
    modalstate.style.display="none";
   }

}