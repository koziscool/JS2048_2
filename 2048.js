    

var controller2048 = {
    model: model2048,
    view: view2048,

    init: function() {
        this.model.init();
        this.view.updateTiles();
    },

    handleKey: function(event){
        switch (event.keyCode) {
          case 37: // Left
            model2048.move( false, "r");
            break;
          case 38: // Up
            model2048.move( false, "c");
            break;
          case 39: // Right
            model2048.move( true, "r" );
            break;
          case 40: // Down
            model2048.move( true, "c");
            break;
        }
        view2048.updateTiles();
    },
};



$(document).ready( function() {
    controller2048.init();
    window.addEventListener('keydown', controller2048.handleKey);
});
