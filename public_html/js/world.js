var _world = (function() {
    return {
        /**
         * start routine.
         */
        show: function () {
            $('#scene img').fadeIn(3000);
            $('h3').coreType({
                text:"Ein ganz normaler Tag<br/>irgendwo auf dem Land.",
                finish: function(){_world.goWork();}
            });
        },
        /**
         * helper routine for scenarios with dynamic movements.
         * @param {type} top top position
         * @param {type} left left position
         * @param {type} img the image in image/* to use
         * @param {type} message text to be displayed.
         * @param {type} endpos ending position (left) for animation
         * @param {type} duration animation duration
         * @param {type} callback finish callback
         */
        scenario: function(top, left, img, message, endpos, duration, callback) {
            _world.createId(top, left, img);
            $('#move').fadeIn(800);
            $('h3').coreType({
               text: message,
               finish: function() {
                   setTimeout(function() {
                       $('#move').remove();
                       callback();
                   }, 3000);
               }
           });
           $('#move').animate({left: endpos + "px"}, duration);
        },

        /**
         * going to work scenario
         */
        goWork:function() {
            this.scenario(70,
                          180, 
                          "auto_le.gif", 
                          "Morgens aufstehen und zur Arbeit fahren.",
                          0, 
                          2500, 
                          function() {_world.sheep();}
                         );
        },
        /**
         * sheeps are coming to town.
         */
        sheep: function() {
           this.scenario(72, 
                         0, 
                         "sheep.gif", 
                         "Auf dem Land gibt es neben Kühen auch Schafe.", 
                         120, 
                         2500,
                         function() {_world.getPost();}
                        );
        },
        getPost: function() {
           this.scenario(70, 
                         0, 
                         "post_ri.gif", 
                         "Die Post kommt recht spät heute.", 
                         150, 
                         2500,
                         function() {_world.fromWork();}
                        );
        },
        /**
         * helper routine for dynamic object creation.
         * @param {type} top top position
         * @param {type} left left position
         * @param {type} img iage in image/* folder
         */
        createId: function(top, left, img) {
           $('#scene').append('<div id="move" style="display:none;position:absolute;top:'+top+'px;left:'+left+'px;"><img src="image/'+img+'"/></div>');
        }
   };
}) ();

