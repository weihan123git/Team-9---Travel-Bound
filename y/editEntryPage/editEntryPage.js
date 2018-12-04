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

  //the user's ID - allows us to change user specific data
  var userID = sessionStorage.getItem("userCode");

$(document).ready(function() {
    
    console.log("the user code is " + userID);

    readEntry();
    database.ref().child('Accounts/account1/journeys/').once('value', snap => {
      console.log(snap.val());
      var journeyObj = snap.val();
      var journeysCreated = Object.keys(journeyObj);
      console.log(journeysCreated.length);
    });
    console.log("Everything worked");
});
/*
window.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('submitButton').addEventListener("change", addNewEntry());
  });
  */

  var theEntry = firebase.database().ref().child("Accounts").child('account1').child('journeys').child('journey0').child('entries').child('entry0');

  $('#submitButton').click(function() {
    var newPurchaseCurrency = $('#purchaseCurrency').val();
    var newPicture = $('#picture').val();
    var newLocation = $('#location').val();
    var newComment = $('#comment').val();
    var newDay = $('#day').val();
    var newMonth = $('#month').val();
    var newYear = $('#year').val();

    theEntry.set({
        purchaseCurrency: newPurchaseCurrency,
        picture: newPicture,
        location:newLocation,
        comment: newComment,
        day: newDay,
        month:newMonth,
        year:newYear
    });
    console.log("New Entry Succesfully Added - Template");
  });

/*onclick = "addNewEntry()"*/
//create a new Entry
function addNewEntry() {
    
    var newEntry = {
        purchaseCurrency: "JPY",
        picture: "nothing for now",
        location: "Tokyo",
        comment: "I bought a vegan burger here!",
        date: {
            day: "01",
            month: "01",
            year: 2018
        }
    }

    var i = 0;

    var entries = database.ref("Accounts").child("account1").child("journeys").child(("journey" + i)).child(("entry" + i));
    
    entries.update(newEntry);
    console.log("Entry" + i + " successfully added to journey" + i);
    window.alert("Submit Successfully");
    window.location.href = "../journeyPage/journeys.html";
}   

// read from the database
function readEntry(){

    var i = 0;
  
    var entries = database.ref("Accounts").child("account1").child(("journey" + i)).child(("entry" + i));

    entries.child("date").once("value").then(function(x) {
      var journey = x.val();
      console.log(journey);
    })
  }