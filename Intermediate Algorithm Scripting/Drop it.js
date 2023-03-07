function dropElements(arr, func) {
    let nArr = [];
    for(let i=0; i<arr.length;i++){
      if(func(arr[i])==true){
        nArr = arr.slice(arr.indexOf(arr[i]));
        break
      }
    }
    return nArr;
  }
  
  dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});