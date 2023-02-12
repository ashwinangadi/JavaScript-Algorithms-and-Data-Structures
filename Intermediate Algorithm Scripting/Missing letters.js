function fearNotLetter(str) {
    let test = "abcdefghijklmnopqrstuvwxyz".split("");
    let first = test.indexOf(str[0])
    let last = test.indexOf(str[str.length-1])+1
    let cmpStr = test.slice(first,last)
    for (var i = 0; i < cmpStr.length; i++) {
      let match = str.match(cmpStr[i]);
      if (!match) {
        console.log(cmpStr[i])
        return cmpStr[i];
      }
    }
  }
  
  fearNotLetter("abce");