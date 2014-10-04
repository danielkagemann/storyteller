var _post = (function() {
    var element = "post",
        duration = 4000;
    
    return {
        come: function() {
          _util.createId(70, 0, "post_ri.gif", element);
          _util.animateId(280, duration, element);
          _util.text("Auch auf dem Land kommt die Post.",
                    function() {
                        _world.next();
                    }
                    );
        },
        
        leave: function() {
            $('#'+element).remove();
            _util.createId(70,280, "post_le.gif", element);
            _util.animateId(0, duration, element);
            _util.text("Wieder nur Rechnungen. #@!?$.",
                        function() {$('#'+element).remove();_world.next();}
                       );
        }
    };
}) ();