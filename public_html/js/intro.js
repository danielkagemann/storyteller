/** 
 * the intro part.
 */
var _intro = (function () {
   var index = 0,
       text = ["Daniel Kagemann", "Software Entwickler"],
       element = "rel";
   
   return {
      next: function() {
        index++;
        if (index < text.length) {
           _intro.show();
        } else {
           _handler.next();
        }
      },
      show: function() {
         $('[' + element + '=' + index + ']').coreType({
            text: text[index],
            errors: 10,
            interval:100,
            finish: function() {_intro.next();}
         });
      }
   };
}) ();


