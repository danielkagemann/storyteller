var _util = (function() {
    return {
        /**
         * helper routine for dynamic object creation.
         * @param {type} top top position
         * @param {type} left left position
         * @param {type} img iage in image folder
         * @param {type} id the DOM id
         */
        createId: function(top, left, img, id) {
           $('#scene').append('<div id="'+id+'" style="position:absolute;top:'+top+'px;left:'+left+'px;"><img src="image/'+img+'"/></div>');
        },
        /**
         * change background image
         * @param {type} index the index (non zero based)
         * @param {type} name name of image file without path
         */
        image: function(index, name) {
            index--;
          $('#scene .fl:eq('+index+')').attr('src', "image/" + name);  
        },
        /**
         * switch to nightmode for index or for -1 for all
         * @param {type} index non zero based index or -1 for all
         * @param {type} enable flag for nightmode or not
         */
        nightmode: function(index, enable) {
            if (index == -1) {
                if (enable) {
                    $('#scene .fl').addClass("bw");
                }else {
                    $('#scene .fl').removeClass("bw");
                }
            } else {
                index--;
                if (enable) {
                    $('#scene .fl:eq('+index+')').addClass("bw");
                }else {
                    $('#scene .fl:eq('+index+')').removeClass("bw");
                }
            }
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
         * animation helper for element
         * @param {type} pos the endposition
         * @param {type} duration duration of animation
         * @param {type} element the DOM id
         */
        animateId: function(pos, duration, element) {
            $('#' + element).animate({left: pos + "px"}, duration);
        }
    };
}) ();


