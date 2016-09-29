var char = ["", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var board = []
var kata=[]

var test = "aba",sama=0, status=false, hasil=false
//inputan aba
import {words} from "./data.js"

class BoggleBoard{
  constructor (height = 4, width = 4){
    this.height = height
    this.width = width
  }

  generate (){

    for (var i = 0; i < this.height; i++){
      var newArray = []
      for (var j = 0; j < this.width; j ++){
      	var rng = Math.floor((Math.random() * 26) + 1)
        newArray.push(char[rng].toUpperCase())
        kata.push(char[rng])
      }
      board.push(newArray)
    }
    kata.join(",")
    // console.log(kata[0]);
    console.log(board);
  }

  shake(){
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
    board = []
    for (var i = 0; i < this.height; i++){
      var newArray = []
      for (var j = 0; j < this.width; j ++){
        var rng = Math.floor((Math.random() * 26) + 1)
        newArray.push(char[rng].toUpperCase())
      }
      board.push(newArray)
    }
    // console.log(board)

  }

  //   search() {
  //     for(var i=0;i<kata.length;i++) {
  //       for(var j=0;j<test.length;j++) {
  //         var status = true
  //         var newArr = test[j].split('')
  //         // console.log(newArr);
  //         var temp = kata
  //           for(var k = 0;k<newArr.length; k++){
  //             console.log(temp[i]);
  //             console.log(newArr[k]);
  //             if(temp[i] === newArr[k]){
  //
  //               temp = kata.splice(i,1,"")
  //
  //             }
  //             else{
  //               status = false
  //               return status
  //
  //           }
  //         }
  //
  //       }
  //     }
  //   return status
  // }

  search() {


        for(var i=0;i<test.length;i++) {
              var temp = kata
          for(var j=0;j<temp.length;j++) {
            // console.log(temp[i])
            // console.log(kata[j]);
            if(temp[j] === test[i]) {
              console.log(kata[j]);
              sama++
              temp.splice(j,1)
              console.log(kata);
              break
            }
            else {
              sama +=0
            }
          }
        }
        console.log(sama)
        if(test.length === sama) {
            status = true
        }
        else {
          status = false
        }

        if(status === true) {
          for(var k=0;k<words.length;k++) {
            console.log(test);
            // console.log(words[k].toLowerCase());
            if(test === words[k].toLowerCase()) {
              hasil = true
              break
            }
            else {
              hasil = false
            }
          }
        }


        return hasil
      }

}
let boggle = new BoggleBoard
// console.log(board);
boggle.generate()
// boggle.search();
console.log(boggle.search());
// console.log(kata)
// boggle.shake()
