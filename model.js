

var model2048 = {
  numTiles: 16,
  numRows: 4,
  numCols: 4,
  probabilityNewTwo: 0.9,

  // tileValues: ['blank','2','4','8','16', '32', '64', '128', '256', '512', '1024', '2048', '4096', '8192', '16384' ],
  colors: [ 'lightgray','orange', 'darkkhaki', 'firebrick', 'lightgreen', 'deepskyblue', 
      'goldenrod', 'red', 'gray', 
      'blue', 'purple', 'brown', 'black', 'darkgreen', 'lightblue', 'pink'],

  tiles: Array(16).fill(0),

  gameScore: 0,

  init: function() {
    this.buildInitialGrid();
  },

  row: function(i) { return Math.floor( i/4 );},
  col: function(i) { return i % 4; },
  index: function(row, col) { return 4*row + col; },

  getColor: function( value) { return this.colors[ Math.max( Math.floor(Math.log2( value )), 0 ) ]; },

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

  moveUp: function( ) {
    for (var col = 0; col < this.numCols; col++ ){
      var values = [];
      var indexes = [];
      for (var row = 0; row < this.numRows; row++ ){
        var index = row * this.numCols + col
        values.push( this.tiles[index] );
        indexes.push( index );
      }

      values = this.stripBlanks( values );
      this.collapseArray( values );

      for (var row = 0; row < this.numCols; row++ ){
        if( values[row] ) {  
          this.tiles[ indexes[row] ] = values[row];
        } else {
          this.tiles[ indexes[row] ] = 0;
        }
      }
    }
    this.addNewSquare();
  },

  moveDown: function( ) {
    for (var col = 0; col < this.numCols; col++ ){
      var values = [];
      var indexes = [];
      for (var row = this.numRows - 1; row >= 0; row-- ){
        var index = row * this.numCols + col;
        values.push( this.tiles[index] );
        indexes.push( index );
      }

      values = this.stripBlanks( values );
      this.collapseArray( values );

      for (var row = 0; row < this.numCols; row++ ){
        if( values[row] ) {  
          this.tiles[ indexes[row] ] = values[row];
        } else {
          this.tiles[ indexes[row] ] = 0;
        }
      }
    }
    this.addNewSquare();
  },

  moveLeft: function( ) {
    for (var row = 0; row < this.numRows; row++ ){
      var values = [];
      var indexes = [];
      for (var col = 0; col < this.numCols; col++ ){
        var index = row * this.numCols + col;
        values.push( this.tiles[index] );
        indexes.push( index );
      }

      values = this.stripBlanks( values );
      this.collapseArray( values );

      for (var col = 0; col < this.numCols; col++ ){
        if( values[col] ) {  
          this.tiles[ indexes[col] ] = values[col];
        } else {
          this.tiles[ indexes[col] ] = 0;
        }
      }
    }
    this.addNewSquare();
  },


  moveRight: function( ) {
    for (var row = 0; row < this.numRows; row++ ){
      var values = [];
      var indexes = [];
      for (var col = this.numCols - 1; col >= 0; col-- ){
        var index = row * this.numCols + col;
        values.push( this.tiles[index] );
        indexes.push( index );
      }

      values = this.stripBlanks( values );
      this.collapseArray( values );

      for (var col = 0; col < this.numCols; col++ ){
        if( values[col] ) {  
          this.tiles[ indexes[col] ] = values[col];
        } else {
          this.tiles[ indexes[col] ] = 0;
        }
      }
    }
    this.addNewSquare();
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