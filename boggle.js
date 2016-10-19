"user strict"

import {words} from './data.js';

class Boogle{
  constructor(){
    this._board = []
    this.randTemp = []
    this.temp =""
    this.bogg = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  }
  boogleCek(){
    var length = 4
    var i,j,pcs=4
    for(var i =0; i<length;i++){
      var wrd = "";
      for(var j=0; j<8; j++){
        wrd = this.bogg.charAt(Math.floor(Math.random() * this.bogg.length));
        this.randTemp.push(wrd)
      }
    }
    for(i=0,j=this.randTemp.length;i<j;i+=pcs){
      this._board.push(this.randTemp.slice(i,i+=pcs))
    }
    console.log(this._board);
  }
  wordCek(input){
    var flag=0;
    for (var i = 0; i < input.length; i++) {
      for (var j = 0; j < this.temp.length; j++) {
        if(input[i]=== this.temp[j]){
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
    if(this.wordCek(input) === true){
        console.log("word is found")
        for (var i = 0; i < words.length; i++) {
          if(input == words[i]){
            return "Word" + input + "is found"
          }else {
            return "Word" + input + "undifined"
          }
        }
    }else{
      return "word" + input + "undifined on board"
    }
  }
}



let boogle2 = new Boogle();
boogle2.boogleCek()
boogle2.inputCek("A");
