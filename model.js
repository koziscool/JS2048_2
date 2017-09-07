
var model2048 = {
  SIDE: 4,
  probabilityNewTwo: 0.9,

  colors: [ 'lightgray','orange', 'darkkhaki', 'firebrick', 'lightgreen', 'deepskyblue', 
      'goldenrod', 'red', 'gray', 
      'blue', 'purple', 'brown', 'black', 'darkgreen', 'lightblue', 'pink'],

  tiles: Array(16).fill(0),
  newTiles: Array(16).fill(0),

  gameScore: 0,

  init: function() {
    this.buildInitialGrid();
  },

  row: function(i) { return Math.floor( i / this.SIDE );},
  col: function(i) { return i % this.SIDE; },
  index: function(row, col) { return this.SIDE *row + col; },

  getColor: function( value) { return this.colors[ Math.max( Math.floor(Math.log2( value )), 0 ) ]; },

  notSameBoard: function(tiles1, tiles2) {
    var retBool = false;
    for( var index in tiles1){
      retBool = retBool || (tiles1[index] !== tiles2[index]);
    }
    return retBool;
  },

  randomNewValue: function() { return Math.random() < this.probabilityNewTwo ? 2 : 4; },

  buildInitialGrid: function() {
    this.addNewSquare();
    this.addNewSquare();
  },

  getEmptySquares: function() {
    var emptiesIndexes = [];
    for (var index in this.tiles){
      if( !this.tiles[index] ) emptiesIndexes.push( index );
    }
    return emptiesIndexes;
  },

  addNewSquare: function() {
    var empties = this.getEmptySquares();
    var randomEmpty = empties[ Math.floor(Math.random() * empties.length) ];
    this.tiles[randomEmpty] = this.randomNewValue();
  },

  move: function( ascending, group_by ) {

    this.newTiles = this.tiles.slice();
    for (var i = 0; i < this.SIDE; i++ ){
      var values = [];
      var indexes = [];
      var k, index;
      for (var j = 0; j < this.SIDE; j++ ){
        ascending ? k = this.SIDE - j - 1 : k = j;
        group_by === "c" ? index = this.index(k, i) : index = this.index(i, k);
        values.push( this.newTiles[ index ] );
        indexes.push( index );
      }

      values = this.stripBlanks( values );
      this.collapseArray( values );

      for (var j = 0; j < this.SIDE; j++ ){
        values[j] ? this.newTiles[ indexes[j] ] = values[j] : this.newTiles[ indexes[j] ] = 0;
      }
    }

    if( this.notSameBoard( this.tiles, this.newTiles) ) {
      this.tiles = this.newTiles;
      this.addNewSquare();
    }
  },

  
  stripBlanks: function( arr ) {
    return arr.filter( function(elt){ return !!elt; })
  },

  collapseArray: function( arr ){
    for ( var i = 0;  i < arr.length - 1 ; i++ ) {

      if ( !arr[i] ) {
        arr[i] = arr[ i+1 ];
        arr[i+1] = 0;
      }

      if ( arr[i] === arr[i+1] ) {
        arr[i] *= 2;
        this.gameScore += arr[i];
        arr[i+1] = 0;
      }
    }
  },

};