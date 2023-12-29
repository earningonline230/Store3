   var module = document.querySelector('.module');
   var moduleClose = document.querySelector('#close');
   setTimeout(function(){
    module.style.display="block";
  },8000);
  
    moduleClose.addEventListener('click',function(){
    module.style.display="none"; 
   });

   
   // Why bolmesi Count add
   var count = 0;
    function Addcount(){
        setInterval(function() {
            if(count <=1994 ){
                 count++;
                 document.querySelector('.count_1').innerHTML =count;
            }
            if(count <=2330 ){
                 count++;
                 document.querySelector('.count_2').innerHTML =count;
            }
            if(count <= 2558 ){
                 count++;
                 document.querySelector('.count_3').innerHTML =count;
            }     
        }, 60);   
    };



