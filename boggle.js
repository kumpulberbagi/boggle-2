require('console.table');
import { words } from './data.js';

var boggle_now = []
// Get the capital letter starting from 0 - 25
function alphabetGenerator(index) {
  var alphaBank = []; // storing character from A - Z capital
  for (var i = 65; i <= 90; i += 1) {
    alphaBank.push(String.fromCharCode(i));
  }
  return alphaBank[index];
}

// Generate random number from 1 to 25
function randomChar() {
  return Math.floor(Math.random()*25);
}

// Get a new character
function shake() {
  return alphabetGenerator(randomChar());
}

function one_array(dimension) {
  var board = [];
  for (var i = 0; i < dimension; i += 1) {
    board.push(shake())
  }
  return board;
}


function cekString(str2) {
  var arrayStr1 = boggle_now.join("").split("").sort();
  var arrayStr2 = str2.split("").sort();
  var status = true;

  for (var i = 0; i < arrayStr2.length; i++) {
    var none = -1;
    var index2at1 = arrayStr1.indexOf(arrayStr2[i]);
    if(index2at1 !== none) {
      arrayStr1.splice(index2at1, 1);
    }
    else {
      var status = false;
    }
  }

  return status;
}


// Auxilary function for printing bogle
function set_boogle(dimension) {
  var result = [];
  for (var i = 0; i < dimension; i++) {
    result.push(one_array(dimension));
  }
  boggle_now = result;
  return result;
}

function generateIndex(dim) {
  var index = []
  for (var i = 1; i <= dim; i++) {
    i = i.toString();
    index.push(i);
  }
  return index;
}

// Printing current boogle and returning the value
//--> for another function
function print_boogle(dim) {
  var boogle_now = set_boogle(dim);
  var title = 'Boggle Dimesion ' + dim + 'x' + dim;
  console.table(title + "\n");
  return console.table(generateIndex(dim), boogle_now);
}

function searchWord(input){
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

function inputCek(input){
  if(cekString(input) === true){
    console.log("Kata ditemukan di papan");
    for(var i = 0 ; i < words.length ; i++){
      if(input == words[i]){
        return "Kata" + input + "ditemukan di kamus";
      }else{
        return "Kata" + input + "tidak ditemukan di kamus";
      }
    }
  }else{
    return "kata " + input + " tidak ditemukan di papan";
  }
}
// Testing
print_boogle(4);
console.log(inputCek("JK"));
console.log(inputCek("AIR"));
