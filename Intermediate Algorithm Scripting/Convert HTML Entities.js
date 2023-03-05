function convertHTML(str) {
  
    let entity={
      "&" : "&amp;",
      "<" : "&lt;",
      ">" : "&gt;",
      "'" : "&apos;",
      '"' : "&quot;"
    }
    
    return str.split("").map(ele=>entity[ele]||ele).join("");
  }
  
  convertHTML("Dolce & Gabbana");