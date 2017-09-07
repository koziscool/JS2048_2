
view2048 = {

    model: model2048,

    updateTiles: function(  ) {
        var $grid = $('.grid'), row, col, color;
        for( var i = 0; i < this.model.tiles.length; i++ ){
            var value = this.model.tiles[i];
            var display = value ? value.toString() : ""
            var $tileDiv = $("<div><div class='name'>" + display + "</div></div>");
            $tileDiv.addClass('tile');
            row = Math.floor( i / 4 );
            col = i % 4;
            color = this.model.getColor(value);
            $tileDiv.css({
                left: col*128,
                top: row*128,
                background: color
            });
            $grid.append( $tileDiv );
        }
    },

};
