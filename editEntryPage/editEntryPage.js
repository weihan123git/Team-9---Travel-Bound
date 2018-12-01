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