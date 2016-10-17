"user strict"

import {words} from './data.js';

class BoogleBoard{
  constructor(){
    this._board = []
    this.tampungan ="";

  }

boggle2(){
    var xo_random = [];
    var panjang = 4
    for(var i =0; i<panjang;i++){
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for(var j=0; j<8; j++){
        text = possible.charAt(Math.floor(Math.random() * possible.length));
        xo_random.push(text)
      }
    }


    var i,j,chunk=4
    for(i=0,j=xo_random.length;i<j;i+=chunk){
      this._board.push(xo_random.slice(i,i+=chunk))
      //delete.letter_gird(letter_gird[0])
    }
    console.log(this._board);

    for (var l = 0; l < this._board.length; l++) {
    for (var k = 0; k < this._board.length; k++) {
      this.tampungan += this._board[k][l]
    }
    }
    for (var l = 0; l < this._board.length; l++) {
    for (var k = 0; k < this._board.length; k++) {
      this.tampungan += this._board[l][k]
    }
    }

    console.log(this.tampungan);

}




searchWord(input){
  var flag=0;
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < this.tampungan.length; j++) {
      if(input[i]=== this.tampungan[j]){
        flag++;
        break;
      }else{
        flag+=0;
      }
    }
  }
  if(flag === input.length){
    return true;
  }else{
    return false;
  }
}

inputCek(input){
  if(this.searchWord(input) === true){
    console.log("Kata ditemukan di papan sedang mencari di kamus");
  }else{
    console.log("kata tidak ditemukan di papan");
  }
}

}


let boogle = new BoogleBoard();
boogle.boggle2()
boogle.inputCek("A");
