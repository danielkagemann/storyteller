var _handler = {
   list: [function() {_intro.show();}, function() {_world.initialize();}],
   index: 0,
   
    initialize: function() {
        this.index = 1;
        this.show();
    },
         
    show: function() {
       this.list[this.index]();            
    },

    next: function() {
       this.index++;
       if (this.index < this.list.length) {
          this.show();
       }
    }
};