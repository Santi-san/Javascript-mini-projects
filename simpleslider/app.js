//simple slider


var i = 0;

var time = 3000;

var arr=[];

arr[0]="https://i1.wp.com/pictures.jokofy.com/wp/wp-content/uploads/2016/05/Friday-night-drinking-scenes-funny-kid-image-.png?fit=600%2C605&ssl=1";
arr[1]="http://www.whatsappshayari.com/wp-content/gallery/funny/Sach-Main-Whatsapp-Funny-Photo.jpg";
arr[2]="http://www.kidsworldfun.com/images/funpics/0158b.jpg";
arr[3]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DqBC6DrQczbkjjDmYOXFeWE0NX_OtHLzOxwEYWMCwWbQZ4FD";

   function change(){
       this.myImg.src=arr[i];
       if(i < arr.length-1){
        i++;
       }else{
           i=0;
       }
   }

   setInterval(change,time);
   window.onload = change();

