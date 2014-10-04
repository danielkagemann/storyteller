var _sheep = (function() {
    var element = "sheep",
        duration = 5000;
    
    return {
        go: function () {
            _util.createId(70,0,"sheep.gif", element);
            _util.animateId(140,duration, element);
            _util.text("Schafe suchen sich einen ruhigen Platz.", 
                       function() {_world.next();});
        },
        hitchhiking: function() {
            _util.text("Diese Stille ist trügerisch.",
            function() {
                _util.image(3, "3-ufo.gif");
                _util.nightmode(3, false);
                _util.text(
                        "Aliens haben es auf die Schafe abgesehen.",
                        function() {
                           _util.image(3, "3-alleine.gif");
                           _util.nightmode(3, true);
                           _util.text(
                                    "Zurück bleibt nur ein einzelnes verstörtes Schaf.",
                                    function() {
                                        _world.next();
                                    }
                                    );
                        });
            });
        }
    };  
}) ();
