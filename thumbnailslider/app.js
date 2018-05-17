

var current = document.querySelector('#current');

var imgs = document.querySelectorAll('.imgs img');

let opacity = 0.4;

// imgs.forEach(img => img.addEventListener('click',e =>(current.src = e.target.src)));

console.log(imgs);

imgs.forEach(function(element){
    
    element.addEventListener('click',function(e){

        imgs.forEach(img => (img.style.opacity=1));
        
        current.src=e.target.src;
        e.target.style.opacity=opacity;
    })

});

