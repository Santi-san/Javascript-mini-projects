

 var countdown = document.querySelector('.countdown');

 var launchdate = new Date('Jan 3, 2019 11:00:00:00').getTime();

 const intvl = setInterval(function(){

           var now = new Date().getTime();

           var distance = launchdate - now;

         //  console.log(distance);

           //Time calculations

           const days = Math.floor(distance/(1000*60*60*24));

           const hours = Math.floor((distance % (1000 * 60 * 60* 24)) / (1000 * 60 * 60));

           const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

           const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

           countdown.innerHTML =`
           <div>${days}</div>
           <div>${hours}</div>
           <div>${mins}</div>
           <div>${seconds}</div>          `;


 })