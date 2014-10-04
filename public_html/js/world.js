var _work = (function() {
    
});


var _world = (function() {
    return {
        /**
         * start routine.
         */
        show: function () {
            $('#scene img').fadeIn(3000);
            $('h3').coreType({
                text:"Ein ganz normaler Tag. Irgendwo auf dem Land.",
                finish: function(){_world.goWork();}
            });
        },
        /**
         * helper routine for dynamic object creation.
         * @param {type} top top position
         * @param {type} left left position
         * @param {type} img iage in image folder
         * @param {type} id the DOM id
         */
        createId: function(top, left, img, id) {
           $('#scene').append('<div id="'+id+'" style="display:none;position:absolute;top:'+top+'px;left:'+left+'px;"><img src="image/'+img+'"/></div>');
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
                         "Schafe suchen sich einen ruhigen Platz.", 
                         140, 
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
                         "Manchmal kommt die Post vorbei.", 
                         280, 
                         2500,
                         function() {_world.goPost();}
                        );
        },
        /**
         * post driving away
         */
        goPost: function() {
           this.scenario(70, 
                         280, 
                         "post_le.gif", 
                         "Wieder nur Rechnungen. #@!?$", 
                         0, 
                         2500,
                     function() {_world.ballon();}
                        );
        },
        /**
         * strange things happen.
         */
        ballon: function() {
            this.text("Ohhh. Ein Ballon.", 
                      function() {
                         $('#scene .fl:eq(0)').attr('src', "image/1-ballon.gif");
                      });
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
                "Wenn es Nacht wird, geschehen manchmal seltsame Dinge. Der Mann im Mond beobachtet alles.",
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
                _world.text(
                        "Aliens haben es auf die Schafe abgesehen.",
                        function() {
                            _world.text(
                                    "Zurück bleibt nur ein einzelnes verstörtes Schaf.",
                                    function() {
                                        $('#scene .fl:eq(2)').attr('src', "image/3-alleine.gif");
                                        $('#scene .fl:eq(2)').addClass("bw");
                                        _world.batman();
                                    }
                                    );
                        });
            });
        },
        /**
         * ask batman for help.
         */
        batman: function() {
            //todo
        }
   };
}) ();

