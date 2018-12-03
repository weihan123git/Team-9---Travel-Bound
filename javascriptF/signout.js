document.getElementById("signoutButton").onclick = function () {
    firebase.auth().signOut()
    location.href = "../LoginPage/index.html";
};
