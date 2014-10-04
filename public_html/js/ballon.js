var _ballon = (function() {
    
    return {
        show: function() {
            _util.image(1, "1-ballon.gif");
            _util.text("Hier sieht man öfters einen Heissluftballon.",
                    function() {
                        _world.next();
                    }
                    );
        },
        
        ladder: function() {
            _util.image(1, "1-leiter.gif");
            _util.text("Ähm. Sowas allerdings nicht.",
                    function() {
                        _world.next();
                    }
                    );
        },
        
        empty: function() {
            _util.image(1, "1-leer.gif");
            _util.text("Hat sich wohl nur die Schafe angeschaut.",
                    function() {
                        _world.next();
                    }
                    );
        },
    };
}) ();
