document.write('<script src="js/work.js"></script>');
document.write('<script src="js/sheep.js"></script>');
document.write('<script src="js/ballon.js"></script>');
document.write('<script src="js/post.js"></script>');
document.write('<script src="js/night.js"></script>');

var _world = (function(){
    var index = 0,
        list = [];
        
    return {
        /**
         * starting routine.
         */
        initialize: function() {
            list.push(function() {
               $('h1').coreType({
                  text: "Daniel Kagemann",
                  errors: 10,
                  interval:100,
                  finish: function() {_world.next();}
               });
            });
            list.push(function() {
               $('h2').coreType({
                  text: "Software Entwickler",
                  errors: 10,
                  interval:100,
                  finish: function() {_world.next();}
               });
            });
           
            list.push(function() {
                $('#scene img').fadeIn(3000);
                _util.text("Ein ganz normaler Tag. Irgendwo auf dem Land.",
                       function(){_world.next();});
            });
            list.push(function() {_work.go();});
            list.push(function() {_sheep.go();});
            list.push(function() {_ballon.show();});
            list.push(function() {_ballon.ladder();});
            list.push(function() {_ballon.empty();});
            list.push(function() {_post.come();});
            list.push(function() {_post.leave();});
            list.push(function() {_work.come();});
            list.push(function() {_night.enable();});
            list.push(function() {_night.moonMan();});
            list.push(function() {_sheep.hitchhiking();});
            list.push(function() {_night.batman();});
            list.push(function() {_night.batmanCannotCome();});
            list.push(function() {_night.noHappyEnd();});
            
            // start with first entry
            list[index]();
        },
        
        next: function() {
            index++;
            if (index < list.length) {
                list[index] ();
            } 
        }
    };
}) ();

