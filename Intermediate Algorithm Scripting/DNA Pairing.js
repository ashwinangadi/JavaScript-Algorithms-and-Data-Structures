function pairElement(str) {
    let fArr= [];
    for( let i in str){
      if(str[i]== "A"){
        fArr.push([str[i] , "T"] )
      }else if(str[i]== "T"){
        fArr.push([str[i] , "A"] )
      }else if(str[i]== "C"){
        fArr.push([str[i] , "G"] )
      }else if(str[i]== "G"){
        fArr.push([str[i] , "C"] )
      }
      console.log(fArr)
    }
    return fArr;
  }
  
  pairElement("GCG");