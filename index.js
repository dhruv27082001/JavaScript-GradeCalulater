function result() {
   let C = document.getElementById("c").value;
   let Php = document.getElementById("php").value;
   let JS = document.getElementById("js").value;
   let Java = document.getElementById("ja").value;
   let React = document.getElementById("rect").value;
   
   
   if( C>100 || Php>100 || JS>100 || Java>100 || React>100 ){
      alert('please enter correct value');
     }
     else{
         // obtaining total marks
         let Total = parseFloat(C) + parseFloat(Php) + parseFloat(JS) + parseFloat(Java) + parseFloat(React);
         document.getElementById('tot').innerHTML = Total;

         // obtaining percentage
         let percentage = Total/500*100;
         document.getElementById('per').innerHTML = percentage;

         // obtaining remarks
         if ( C>40 && Php>40 || JS>40 && Java>40 && React>40 ) {
         document.getElementById('remarks').innerHTML = '<span style=" color:#292; font-weight:bold;"> Pass </span>';
         }else if(percentage <= 50){
            document.getElementById('remarks').innerHTML = '<span style=" color:red;font-weight:bold;"> Fail </span>';
         }
         //obtaining grade
         if( percentage>= 85 ){
            document.getElementById('gra').textContent = 'A+';
         }
        else if( percentage>= 75 ){
            document.getElementById('gra').textContent = 'A';
         }
        else if( percentage>= 60 ){
            document.getElementById('gra').textContent = 'B';
         }
        else if( percentage> 40 ){
            document.getElementById('gra').textContent = 'C';
         }
         else{
            document.getElementById('gra').textContent = 'F';
         }

     }
     return false;
}
