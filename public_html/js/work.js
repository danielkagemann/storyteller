var _work = (function() {
    var element = "car",
        durationGo = 3500,
        durationCome = 4000;
    
    return {
        go: function() {
          _util.createId(70, 180, "auto_le.gif", element);
          _util.animateId(0, durationGo, element);
          _util.text("Die Menschen stehen auf und fahren zur Arbeit.",
                    function() {
                        $('#'+element).remove();
                        _world.next();
                    }
                    );
        },
        
        come: function() {
            _util.createId(70,0,"auto_ri.gif", element);
            _util.animateId(180,durationCome, element);
            _util.text("Feierabend!",
                        function() {_world.next();}
                       );
        }
    };
}) ();