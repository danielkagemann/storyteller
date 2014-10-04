var _night = (function() {
    return {
        enable: function() {
            _util.image(6, "6-abend.gif");
            _util.image(4, "4-abend.gif")
            _util.nightmode(-1, true);
            _util.text("Auch der längste Tag geht einmal zu Ende.", 
                      function(){_world.next();});
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
                    _util.nightmode(6, true);
                    _world.next();
                });
        },
        batmanCannotCome: function () {
            _util.createId(0, 0, "rain.gif", "rain");
            _util.text(
                "Oh nein. Es regnet. Batman kann nicht kommen.",
                function() {
                    _world.next();
                });
            
        }
    };
}) ();