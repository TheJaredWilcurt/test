
$(document).ready(function(){

    //Keyboard shortcuts from UGUI.js
    document.onkeydown = function(pressed) {
        //Check `F5` key and soft refresh
        if (pressed.keyCode === 116) {
            pressed.preventDefault();
            win.reload();
            return false;
        //Check `F12` and display Webkit Dev Tools
        } else if (pressed.keyCode === 123) {
            pressed.preventDefault();
            win.showDevTools();
            return false;
        }
    };

    // Get the current window
    var win = require('nw.gui').Window.get();

    //Place the contents of the toolbar.html file in the header
    $.get("toolbar.html", function (data) {
        $("header").html(data);

        //When you click exit, close the app
        $(".exit").click(function(){
            win.close();
        });
    });

});
