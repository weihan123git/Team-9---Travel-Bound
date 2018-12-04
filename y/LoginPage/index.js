
/* This is for another page. Trying to fix the <onClick> button
window.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('elementName').addEventListener("change", validateDate);
});
*/

(function() {
  var firebase = app_firebase;

  var user = firebase.auth().currentUser;

  firebase.auth().onAuthStateChanged(function(user){

    //Initalizes the userCode, which stores the session ID
    //Use this code on every page that requires the user-specific database to be changed.
    sessionStorage.setItem("userCode", user.uid);

    firebase.database().ref("Accounts/").child(user.uid).update(
      {
        "name": user.displayName,
        "email": user.email,
        "defaultCurrency": "CAD"
      });
      console.log("New user added to database");
  });
})()
