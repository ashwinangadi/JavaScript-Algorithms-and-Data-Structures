function whatIsInAName(collection, source) {
  let a2 = [];
  for(let i=0; i< collection.length; i++){
    let found = true;
    for(let j in source){
      if(collection[i][j] !== source[j] ){
        found = false;
        break
      }
    }
    if(found){
    a2.push(collection[i])
    }
  }
  console.log(a2)
  return a2;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });