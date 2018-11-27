    $(document).ready(function() {

      $('#buttonDiv').on('click', function(){
   var date1 = new Date($('#date1div').val());
   day = date1.getDate();
   month = date1.getMonth() + 1;
   year = date1.getFullYear();
   var date2 = new Date($('#date2div').val());
   day = date2.getDate();
   month = date2.getMonth() + 1;
   year = date2.getFullYear();
   alert([day, month, year].join('/'));

   });

    });


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
