var array = ["index", "hallo", "123", "budi", "joko"];

var data = ["hallo", "123", "78"];

for(var i = 0; i < data.length; i++){
  if(array.indexOf(data[i]) == -1){
    console.log("tidak ketemu");
  }else{
    console.log("ketemu!")
  }
}
