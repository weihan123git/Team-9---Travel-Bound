function functionCountry() {
 var country1 = $("#selectCountry :selected").text();
 switch (country1) {
   case "United States" :
   document.getElementById("country").innerHTML = "1 CAD = 0.75 USD";
   break;
   case "Japan" :
   document.getElementById("country").innerHTML = "1 CAD = 85.62 YEN";
   break;
   case "China" :
   document.getElementById("country").innerHTML = "1 CAD = 5.24 YUAN";
   break;
   case "Britain":
   document.getElementById("country").innerHTML = "1 CAD = 0.59 POUND";
   break;
   case "Russia":
   document.getElementById("country").innerHTML = "1 CAD = 50.64 RUBLE";
   break;
   default:
   document.getElementById("country").innerHTML = "Convert currency";
 }
}


  $(document).ready(function() {

      (function() {
        $('#begin').on('click', function(){
          var date1 = new Date($('#dateStart').val());

          var day1 = date1.getDate() + 1;
          if (day1 === 32) {
            day1 = 1;
          }
          var month1 = date1.getMonth() + 1;
          if (day1 === 1) {
            month1 += 1;
          }
          var year1 = date1.getFullYear();


          var date2 = new Date($('#dateEnd').val());
          var day2 = date2.getDate();
          if (day2 === 32) {
            day2 = 1;
          }
          var month2 = date2.getMonth() + 1;
          if (day2 === 1) {
            month2 += 1;
          }
          var year2 = date2.getFullYear();
        });
    })();

  });


