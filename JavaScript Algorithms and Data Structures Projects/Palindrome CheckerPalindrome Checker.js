function palindrome(str) {
    let regex = /[a-z0-9]/gm
    str = str.toLowerCase().match(regex).reverse().join("")
    let rever = str.split("").reverse().join("")
    return str === rever ? true : false;
  }
  
  palindrome("eye");
  