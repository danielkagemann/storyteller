/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var _handler = (function() {
   var list = [_intro, _world],
       index = 0;
      
      return {
         initialize: function() {
            index = 0;
            _handler.show();
         },
         
         show: function() {
            _handler.list[_handler.index].show();            
         },
   
         next: function() {
            index++;
            if (index < list.length) {
               _handler.show();
            }
         }
      };
}) ();

/**
 * the world part.
 */
var _world = (function() {
   return {
     show: function () {
        $('#scene img').fadeIn(3000);
     } 
   };
}) ();

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

/**
 * the document ready entry point.
 */
$(document).ready(function() {
   _intro.show();
});
