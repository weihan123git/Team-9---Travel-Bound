/* This is for another page. Trying to fix the <onClick> button
window.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('elementName').addEventListener("change", validateDate);
});
*/

(function() {
  var firebase = app_firebase;

  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  firebase.auth().onAuthStateChanged(function(user){
    firebase.database().ref("Accounts/").child(user.uid).update(
      {
        "name": user.displayName,
        "email": user.email,
        "defaultCurrency": "CAD"
      });
      console.log("New user added to database");
  });
})()
