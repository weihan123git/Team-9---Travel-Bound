var config = {
  apiKey: "AIzaSyBqhsUHN9SFzz2r2QzQdA_PeNqG1lrKD-g",
  authDomain: "travelbound-c0cd0.firebaseapp.com",
  databaseURL: "https://travelbound-c0cd0.firebaseio.com",
  projectId: "travelbound-c0cd0",
  storageBucket: "travelbound-c0cd0.appspot.com",
  messagingSenderId: "1038974227621"
  };

  firebase.initializeApp(config);

var database = firebase.database();

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

      addJourney(country1, day1, month1, year1, day2, month2, year2);
    });
})();
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


  /*
function beginFunction() {
    var txt = confirm("Journey Begin !");
    if (txt) {
        // back to home page if click ok
        window.location = "../firstPage/firstpage.html"
    } else {
        // stay in the same page if click cancel
        window.location = "../newJourneyPage/NewJourneyPage.html"
    }
    document.getElementById("demo").innerHTML = txt;
}*/

// add a Journey to the database
function addJourney(country, startDay, startMonth, startYear, day2, month2, year2) {
    
  let userId = firebase.auth().currentUser.uid;
  console.log("This worked!");
  var Journeys = database.ref('/Journeys');

  var newJourney = Journeys.push();
  
  newJourney.ref('/journeys/').set({
    id : userId,
    region : country,
    startDate : {day : startDay, month : startMonth, year : startYear},
    endDate : {day : endDay, month : endMonth, year : endYear},
  });
  console.log("This also worked!");
}

function updateJourneyNumber(){
  var counter = firebase.database().ref('')
}
