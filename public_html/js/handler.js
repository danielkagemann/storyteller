var _handler = {
   list: [_intro, _world],
   index: 0,
   
    initialize: function() {
        index = 0;
        this.show();
    },
         
    show: function() {
       this.list[this.index].show();            
    },

    next: function() {
       this.index++;
       if (this.index < this.list.length) {
          this.show();
       }
    }
};