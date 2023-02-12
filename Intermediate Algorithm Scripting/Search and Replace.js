function myReplace(str, before, after) {
    let string = "";
      if(before[0] == before[0].toUpperCase()){
       let b1 = after[0].toUpperCase()
       after = b1+after.slice(1);
        string= str.replace(before,after)
      }else{
        let a1 = after[0].toLowerCase()
        after = a1+after.slice(1);
        string = str.replace(before,after)
      }
      return string
    }
    
    myReplace("I think we should look up there", "up", "Down");