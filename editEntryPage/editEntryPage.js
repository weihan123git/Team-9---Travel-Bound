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

$(function() {
var i;
var count = 0;
var firebaseCount = 5;


for (i = 0; i < firebaseCount; i++) {

    var div1 = $("<div id='entryDiv' class='entryDivClass'></div>");
    var someID = 'entryDiv' + count;
    $(div1).attr('id', someID);
    var div2 = $('<img id = "entryImageDiv" src = "https://dummyimage.com/80x80/4fa6a0/ffffff&text=Placeholder+Image">');
    var div3 = $("<p id = 'entryTitleDiv'>Here is your last entry</p>");
    $("#selectionBox").append(div1);
    $("#entryDiv" + count).append(div2, div3);
    count++;
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

})
