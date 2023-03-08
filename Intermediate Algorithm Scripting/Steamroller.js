function steamrollArray(arr) {
    let nArr = [];
    for(let i=0; i<arr.length;i++){
         if(Array.isArray(arr[i])){
           nArr.push(...steamrollArray(arr[i]))
         }else{
           nArr.push(arr[i])
         }
    }
    return nArr;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));