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
    console.log("Everything worked");
});

function submitFunction() {
    var txt = confirm("Endtry Added !");
    if (txt) {
        // back to home page if click ok
        window.location = "../firstPage/firstpage.html"
    } else {
        // stay in the same page if click cancle
    }
    document.getElementById("demo").innerHTML = txt;
}

//create a new Entry
function addNewEntry(){
    
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
}   

// read from the database
function readJourney(){

    var i = 0;
  
    var entries = database.ref("Accounts").child("account1").child(("journey" + i)).child(("entry" + i));
  
    entries.child("day2").once("value").then(function(x) {
      var journey = x.val();
      console.log(journey);
    })
  }