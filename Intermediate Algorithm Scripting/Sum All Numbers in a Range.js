function sumAll(arr) {
    let a1 = arr.sort((a,b)=>a-b);
    for(let i=1; i<=a1.length;i++){
      let a2 =0;
      for(let j=a1[0]; j<=a1[1];j++){
        a2+=j
        console.log(a2)
      }
    return a2;
    }
    
  }
  
  sumAll([5, 10]);