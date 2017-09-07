

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
    console.log(this.tiles);
  },

  row: function(i) { return Math.floor( i/4 );},
  col: function(i) { return i % 4; },

  getColor: function( value) { return this.colors[ Math.max( Math.floor(Math.log2( value )), 0 ) ]; },

  randomNewValue: function() {
    if ( Math.random() < this.probabilityNewTwo ) {
      return '2';
    }
    else {
      return '4';
    }
  },

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

//   moveUp: function( ) {
//     // console.log('move up');

//     for (var col = 0; col < this.numCols; col++ ){
//       values = [];
//       for (var row = 0; row < this.numCols; row++ ){
//         values.push( this.getTile( row,  col) );
//       }

//       values = this.stripBlanks( values )
//       this.collapseArray( values )

//       for (var row = 0; row < this.numCols; row++ ){
//         if( values[row] ) {  
//           this.setTile( row,  col, values[row] );
//         } else {
//           this.setTile( row,  col, 'blank' );
//         }
//       }
//     }
//     this.addNewSquare();
//   },

//   moveDown: function( ) {
//     // console.log('move down');
//     for (var col = 0; col < this.numCols; col++ ){
//       values = [];
//       for (var row = this.numCols  - 1; row >= 0; row-- ){
//         values.push( this.getTile( row,  col) );
//       }

//       values = this.stripBlanks( values )
//       this.collapseArray( values )

//       for (var row = this.numRows - 1; row >= 0; row-- ){
//         if( values[this.numRows - 1 - row] ) {  
//           this.setTile( row,  col, values[ this.numRows - 1 - row]  );
//         } else {
//           this.setTile( row,  col, 'blank' );
//         }
//       }
//     }
//     this.addNewSquare();
//   },

//   moveLeft: function( ) {
//     // console.log('move left');
//     for (var row = 0; row < this.numRows; row++ ){
//       values = [];
//       for (var col = 0; col < this.numCols; col++ ){
//         values.push( this.getTile( row,  col) );
//       }

//       values = this.stripBlanks( values )
//       this.collapseArray( values )

//       for (var col = 0; col < this.numCols; col++ ){
//         if( values[col] ) {  
//           this.setTile( row,  col, values[col] );
//         } else {
//           this.setTile( row,  col, 'blank' );
//         }
//       }
//     }

//     this.addNewSquare();
//   },

//   moveRight: function( ) {
//     // console.log('move right');
//     for (var row = 0; row < this.numRows; row++ ){
//       values = [];
//       for (var col = this.numCols - 1; col >= 0; col-- ){
//         values.push( this.getTile( row,  col) );
//       }

//       values = this.stripBlanks( values )
//       this.collapseArray( values )

//       for (var col = this.numCols - 1; col >= 0; col-- ){
//         if( values[this.numCols - 1 - col] ) {  
//           this.setTile( row,  col, values[this.numCols - 1 - col] );
//         } else {
//           this.setTile( row,  col, 'blank' );
//         }
//       }
//     }

//     this.addNewSquare();
//   },

// ////

//   notABlank: function( elt ) { 
//     var retVal = ( elt != 'blank');
//     return retVal; 
//   },

//   stripBlanks: function( arr ) {
//     retArray = []
//     arr.forEach( function(elt) {
//       if (elt !== 'blank') {
//         retArray.push(elt)
//       }
//     });
//     return retArray;
//   },

//   collapseArray: function( arr ){
//     for ( var i = 0;  i < arr.length - 1 ; i++ ) {

//       if ( arr[i] === 'blank' ) {
//         arr[i] = arr[ i+1 ];
//         arr[i+1] = 'blank';
//       }

//       if ( arr[i] === arr[i+1] ) {
//         var newVal = 2 * (+arr[i]);
//         arr[i] = newVal.toString();
//         this.gameScore += newVal;
//         arr[i+1] = 'blank';
//       }
//     }
//   },

};