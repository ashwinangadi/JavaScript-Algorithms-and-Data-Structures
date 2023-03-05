function sumFibs(num) {
    let start = 0;
    let end = 1
    let sum = start + end;
    while (end <= num) {
      let temp = start;
      start = end;
      end = temp + end;
      console.log(end)
      if(end <= num){
        sum += (end % 2 !==0)?end:0;
      }
    }
    return sum;
  }
  
  sumFibs(13);