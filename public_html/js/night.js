var _night = (function() {
    return {
        enable: function() {
            
            _util.text("Auch der längste Tag geht einmal zu Ende.", 
                      function(){
                        _util.image(6, "6-abend.gif");
                        _util.image(4, "4-abend.gif")
                        _util.nightmode(-1, true);
                        _world.next();});
        },
        
        moonMan: function() {
            _util.text(
                "Wenn es Nacht wird, geschehen manchmal seltsame Dinge. Der Mann im Mond beobachtet alles.",
                function() {
                    _util.image(6, "6-abend-1.gif");
                    _world.next();
                });

        },
        batman: function() {
            _util.text(
                "Jetzt kann nur noch einer helfen.",
                function() {
                    _util.image(6, "6-abend-2.gif");
                    _util.nightmode(6, false);
                    _world.next();
                });
        },
        batmanCannotCome: function () {
            _util.text(
                "Oh nein. Es regnet. Batman hat leider keine Regenjacken.",
                function() {
                  _world.next();
            });
            // delay the scene change
            setTimeout(function() {
               _util.createId(0, 0, "rain.gif", "rain");
               $('#rain img').width("400px");
               $('#rain img').height("90px");
               }, 1500);            
        },
        
        noHappyEnd: function(){
           _util.text("Dieses Mal haben die Aliens gewonnen.<br/>Wird es Batman mit den Aliens aufnehmen?<br/>Wird er sich eine Regenjacke kaufen?",
                     function() {
                         // disable rain
                        $('#rain').fadeOut(2000);
                        $('#scene img').fadeOut(2000);
                        _util.text("Wir werden es erfahren. Irgendwann.",
                                   function() {
                                       $('h3').text("");
                                       $('h3').coreType({text:"Ende.",errors:70});
                                   });
                     }
                     );
        }
    };
}) ();