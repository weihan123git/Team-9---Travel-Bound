

  $(document).ready(function() {
    $(function() {
    var i;
    var count = 0;
    for (i = 0; i < 2; i++) {

        var div1 = $("<div id='trip1' class='tripz'></div>");
        var div2 = $("<div id = 'img'><img src = '../images/chiado.jpg' id = 'placeholder'></div>");
        var div3 = $("<div id='des'><p id = 'mood'>wefwef</p></div>");
        var div4 = $("<div id = 'zoom'><img src = '../images/zoom.png' id = 'picofzoom'></div>");
        var div5 = $("<div id = 'edit'><img src = '../images/edit.png' id = 'picofzoom'></div>");
        var div6 = $("<div id = 'download'><img src = '../images/download.png' id = 'picofzoom'></div>");
        $("#trip").append(div1);
     }
     $(".tripz").append(div2, div3, div4, div5, div6);
     });

   });
