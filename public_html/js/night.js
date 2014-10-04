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
                "Was ist das ? Es regnet. Batman kann nicht kommen.",
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
        
        makeHappyEnd: function(){
           _util.text("Eine Geschichte ohne Happy End ?",
                     function() {
                        _util.text("Das geht nicht.",
                                   function() {
                                      _world.next();
                                   });
                     }
                     );
        },
        rewind: function() {
           _util.text("ZURÜCKSPULEN...",
                     function() {
                        // disable rain
                        $('#rain').fadeOut(1000);
                        setTimeout(function() {
                           _util.image(3,"3-ufo.gif");
                           _util.nightmode(3,false);
                           
                           _util.text("Wo ist unser Held ?", function() {
                              worker.next();
                           });
                        }, 1500);
                     }
                     );
        },
        endOfStory: function() {
           
        }
    };
}) ();