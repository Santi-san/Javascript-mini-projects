

var images =document.querySelectorAll('img');


var currentslide=0;


setInterval(function(){
	
	images[currentslide].className='';
	   currentslide = (currentslide+1)%images.length;
	images[currentslide].className='active';
},2000)