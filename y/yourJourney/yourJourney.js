
  $(document).ready(function() {

  var database = firebase.database();


    $(function() {
    var i;
    var count = 0;
    var firebaseCount = 3;

    if (firebaseCount === 0) {
      var div2 = $("<div class='trip1'></div>");
      var div3 = $("<div id='des'><p id = 'noJ'>You have no journey, start a journey first!</p></div>");
      var div4 = $("<div id='button'><a href='../newJourneyPage/NewJourneyPage.html'><img id='hi' src= '../images/add2.png' alt='add'></a></div>");
      $("#trip").append(div2);
      $(".trip1").append(div3, div4);
    }

    for (i = 0; i < firebaseCount; i++) {

        var div1 = $("<div class='trip1'></div>");
        var someID = 'trip1' + count;
        $(div1).attr('id', someID);
        var div2 = $("<div id = 'img'><img src = '../images/chiado.jpg' id = 'placeholder'></div>");
        var div3 = $("<div id='des'><p id = 'mood'>wefwef</p></div>");
        var div4 = $("<div id = 'zoom'><img src = '../images/zoom.png' id = 'picofzoom'></div>");
        var div5 = $("<div id = 'edit'><img src = '../images/edit.png' id = 'picofzoom'></div>");
        var div6 = $("<div id = 'download'><img src = '../images/submit.png' id = 'picofzoom'></div>");
        $("#trip").append(div1);
        $("#trip1" + count).append(div2, div3, div4, div5, div6);
        count++;
     }
     });

   });
