function diffArray(arr1, arr2) {
    const newArr = [];
     var ordArr = arr1.concat(arr2).sort(); 
     for(var i=0; i<ordArr.length; i++) {
         if(ordArr[i] !== ordArr[i+1] && ordArr[i] !== ordArr[i-1]){
         newArr.push(ordArr[i]);
         }
     }
     console.log(newArr)
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);