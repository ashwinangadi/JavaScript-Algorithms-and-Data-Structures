function convertToRoman(num){
    var sum = [];
    let roman ={
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
      } 
        function toRoman(num) {
          let arr = [];
          for(let key in roman){
            if(key <= num){
              arr.push(key)
            }
          }
          arr.reverse()
          console.log(arr)
          let remain = num-arr[0]
          if(remain > 0){
            toRoman(remain)
          }
          return sum.push(arr[0])
        }
      toRoman(num)
      let final = [];
      sum.reverse().map((item) => final.push(roman[item]))
      let f1 = final.join("")
      console.log(f1)
      return f1
    }
    
    convertToRoman(6);
    