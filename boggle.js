import { words } from './data.js';

class BoogleBoard{
  constructor(row, col){
    this._row = row
    this._col = col
    this._board = []
    this._size = this._row*this._col
    this.randomString = ""
  }

  shake(size, charSet){
    //random all
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        // var randomString = '';
        for (var i = 0; i < size; i++) {
        	var randomPoz = Math.floor(Math.random() * charSet.length);
        	this.randomString += charSet.substring(randomPoz,randomPoz+1);
        }
        var randomSplit = this.randomString.split("")
        return randomSplit;
  }

  shakeBoard(){
    var temp = this.shake(this._size);
    //console.log(temp);
    for(var i = 0 ; i < this._row ; i++){
        this._board[i] = [];
        for(var j = 0 ; j < this._col ; j++){
          this._board[i][j] = temp[this._row*i+j];
        }
    }
    return this._board;
  }

  searchWord(input){
    var flag=0;
    for(var i = 0 ; i < input.length ; i++){
      for(var j = 0 ; j < this.randomString.length ; j++){
        if(input[i] === this.randomString[j]){
          flag++;
          break;
        }else{
          flag += 0;
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
      for(var i = 0 ; i < words.length ; i++){
        if(input === words[i]){
          return "Kata ditemukan di kamus";
        }else{
          return "Kata tidak ditemukan di kamus";
        }
      }
    }else{
      return "kata tidak ditemukan di papan";
    }
  }
  // var kunci = {"01","10","11","-10","-01","0-1"," -1-1","+1+1"}
  // trueBoogle ()
};

let boogle = new BoogleBoard(4,4);//4 x 4

// console.log(boogle.shake(4));
console.log(boogle.shakeBoard());
//console.log(boogle.searchWord("ABC"));
console.log(boogle.inputCek("ABU"));
