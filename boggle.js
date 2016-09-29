'use strict'
//use babel-node if we have import
import {
  words
} from './data.js';

class Boggle {
  constructor(word, tampung_Boggle_Board = [], random_word) {
    this.word = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
      'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
    this.vowel_word = ['A', 'I', 'U', 'E', 'O']
    this.tampung_Boggle_Board = tampung_Boggle_Board
    this.random_word = random_word
    this.tampungKata = []
    this.tampungKataRandom = []
    this.data_to_string = ''
    this.splice_kata = []

  }

  createBoggleBoard() {
    for (var i = 0; i < 4; i++) {
      this.tampung_Boggle_Board.push(['', '', '', ''])
    }
  }

  randomBoggleWord() {
    for (var i = 0; i < this.tampung_Boggle_Board.length; i++) {
      for (var j = 0; j < this.tampung_Boggle_Board.length; j++) {
        this.random_word = Math.floor((Math.random() * 25) + 1)
        this.tampung_Boggle_Board[i][j] = this.word[this.random_word]
      }
    }
    console.log(this.tampung_Boggle_Board);
  }

  //get data and compare it
  get_and_compare_data() {
    for (var i = 0; i < words.length; i++)
      if (words[i] === 'HUT') {
        console.log('HUT');
      }
  }

  cek_data_and_compare() {
      for (var i = 0; i < words.length; i++) {
        var res = words[i].split("").sort()
        res = res.join("")
        var regex = new RegExp(".+?(?=" + res + ")", "gi")
        if (regex.test(this.data_to_string) === true) {
          this.tampungKata.push(words[i])
        }
      }
      return this.tampungKata
    }
    //convert data to string
  convert_random_kata() {
    this.data_to_string = this.tampung_Boggle_Board.join().
    replace(/,/g, "")
    console.log(this.data_to_string);
  }

  build_word_from_random_kata() {
      var string_to_array = Array.from(this.data_to_string)
      this.splice_kata[0] = string_to_array.splice(0, 3)
      this.splice_kata[1] = string_to_array.splice(0, 3)
      this.splice_kata[2] = string_to_array.splice(0, 3)
      this.splice_kata[3] = string_to_array.splice(0, 3)
      this.splice_kata[4] = string_to_array.splice(0, 3)
        //console.log(string_to_array);
      console.log(this.splice_kata[0])
      console.log(this.splice_kata[1])
      console.log(this.splice_kata[2])
      console.log(this.splice_kata[3]);
      console.log(this.splice_kata[4]);

    }
    //GET VOWEL CHAR
  getKata() {
    for (var i = 0; i < this.tampung_Boggle_Board.length; i++) {
      for (var j = 0; j < this.tampung_Boggle_Board.length; j++) {
        if (this.tampung_Boggle_Board[i][j] == this.vowel_word[0] ||
          this.tampung_Boggle_Board[i][j] == this.vowel_word[1] ||
          this.tampung_Boggle_Board[i][j] == this.vowel_word[2] ||
          this.tampung_Boggle_Board[i][j] == this.vowel_word[3] ||
          this.tampung_Boggle_Board[i][j] == this.vowel_word[4]) {
          this.tampungKata.push(this.tampung_Boggle_Board[i][j])
        }
      }
    }
    console.log(this.tampungKata);
  }
}

var boggle = new Boggle()
boggle.createBoggleBoard()
boggle.randomBoggleWord()
boggle.convert_random_kata()
console.log(boggle.cek_data_and_compare())
  // boggle.build_word_from_random_kata()
