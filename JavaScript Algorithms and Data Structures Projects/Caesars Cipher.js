function rot13(str) {
    const alpha = {
      "A":"N",
      "B":"O",
      "C":"P",
      "D":"Q",
      "E":"R",
      "F":"S",
      "G":"T",
      "H":"U",
      "I":"V",
      "J":"W",
      "K":"X",
      "L":"Y",
      "M":"Z",
      "N":"A",
      "O":"B",
      "P":"C",
      "Q":"D",
      "R":"E",
      "S":"F",
      "T":"G",
      "U":"H",
      "V":"I",
      "W":"J",
      "X":"K",
      "Y":"L",
      "Z":"M",
      " ":" ",
      "!":"!",
      ".":".",
      "?":"?"
    }
    str = str.split("")
    let final = [];
    for(let i=0; i< str.length;i++){
      console.log(str[i])
      for(let key in alpha){
        if(key == str[i]){
          final.push(alpha[key])
        }
      }
      
    }
    return final.join("");
  }
  
  console.log(rot13("SERR CVMMN!"));