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
         * display message
         * @param {type} message the message to type
         * @param {type} callback finish callback
         */
        text: function(message, callback) {
            $('h3').coreType({
               text: message,
               finish: function() {
                   setTimeout(function() {
                       callback();
                   }, 3000);
               }
           });
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
           this.scenario(70, 
                         0, 
                         "sheep.gif", 
                         "Auf dem Land gibt es neben Kühen auch Schafe.", 
                         120, 
                         2500,
                         function() {_world.getPost();}
                        );
        },
        /**
         * postman is coming bring some invoice :-(
         */
        getPost: function() {
           this.scenario(70, 
                         0, 
                         "post_ri.gif", 
                         "Die Post kommt recht spät heute.", 
                         150, 
                         2500,
                         function() {_world.goPost();}
                        );
        },
        /**
         * post driving away
         */
        goPost: function() {
           this.scenario(70, 
                         150, 
                         "post_le.gif", 
                         "Wieder nur Rechnungen.", 
                         0, 
                         2500,
                         function() {_world.backWork();}
                        );
        },
        /**
         * back from work after a long day
         */
        backWork: function() {
            this.scenario(70,
                          0, 
                          "auto_ri.gif", 
                          "Nach einem langen Tag endlich wieder zu Hause.",
                          180, 
                          2500, 
                          function() {_world.night();}
                         );
        },
        /**
         * night in town.
         */
        night: function() {
            $('#scene .fl:eq(3)').attr('src', "image/4-abend.gif");
            $('#scene .fl:eq(5)').attr('src', "image/6-abend.gif");
            
            $('#scene .fl').addClass("bw");
            this.text("Auch der längste Tag geht einmal zu Ende.", function(){_world.manInTheMoon();});
        },
        /**
         * there is a man in the moon.
         */
        manInTheMoon: function() {
            this.text(
                "Wenn es Nacht ist geschehen manchmal seltsame Dinge.<br/>Der Mann im Mond beobachtet alles.",
                function() {
                    $('#scene .fl:eq(5)').attr('src', "image/6-abend-1.gif");
                    _world.hitchhiking();
                });
        },
        /**
         * hitchhiking the sheeps.
         */
        hitchhiking: function() {
            this.text("Doch die Stille ist trügerisch.",
            function() {
                $('#scene .fl:eq(2)').attr('src', "image/3-ufo.gif");
                $('#scene .fl:eq(2)').removeClass("bw");
            });
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

