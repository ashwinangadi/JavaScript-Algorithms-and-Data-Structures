function uniteUnique(...arr) {
    let final = [];
    arr.forEach(item =>
      item.forEach(ele=>{
        if(!final.includes(ele)){
          final.push(ele);
        }
      })
    );console.log(final)
    return final;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);