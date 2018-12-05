// re direction
document.getElementById("signoutButton").onclick = function () {
    firebase.auth().signOut()
    location.href = "../index.html";
};
