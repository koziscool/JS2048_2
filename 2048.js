    

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
            model2048.moveLeft();
            break;
          case 38: // Up
            model2048.moveUp();
            break;
          case 39: // Right
            model2048.moveRight();
            break;
          case 40: // Down
            model2048.moveDown();
            break;
        }
        view2048.updateTiles();
    },
};



$(document).ready( function() {
    controller2048.init();
    window.addEventListener('keydown', controller2048.handleKey);
});
