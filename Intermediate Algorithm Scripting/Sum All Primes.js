function sumPrimes(num) {

    function isPrime(num) {
      if(num < 2) return false;
      for (var i = 2; i < num; i++) {
          if(num%i==0)
              return false;
      }
      return true;
    }
    let sum =0;
    for(var i = 0; i <= num; i++){
      if(isPrime(i)){
         sum+=i;
         console.log(sum)
      } 
    }
    return sum;
  }
  
  sumPrimes(977);