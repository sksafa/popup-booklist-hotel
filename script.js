//pop up section
 
  var login = document.getElementById("login");
  login.addEventListener('click',function(){
      var popup = document.querySelector(".popup");
      popup.style.display="flex";
  } );

  var close = document.getElementById("close");
  close.addEventListener('click',function(){
      var popup = document.querySelector(".popup");
      popup.style.display="none";
  } );

  // hotel cost result

    function hotelCost(){
        var result="0";
        var day = parseInt(document.getElementById("day").value);
        if(day <= 0 || day == null || day == undefined || day == ' '){
            result = "Day Must Be positive Number";
            var fol = document.getElementById('cost');
            fol.innerHTML=result;

        }else if( day <= 10){
            result = day*100;
           var fol = document.getElementById('cost');
           fol.innerHTML=result;
        }else if( day <= 20){
            result  = 10 *100;
            var newDay = day -10;
            var newCost = newDay*80;
            var total=  result + newCost;
           var fol = document.getElementById('cost');
           fol.innerHTML=total;
        }else{
            result  = 10 *100;
            var resultTwo= 10*80;
            var newDay = day -20;
            var newCost = newDay*50;
            var total=  result + newCost + resultTwo;
            var fol = document.getElementById('cost');
            fol.innerHTML=total;
        }
    }