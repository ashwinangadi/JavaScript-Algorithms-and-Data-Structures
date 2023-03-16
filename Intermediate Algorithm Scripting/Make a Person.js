const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
     
     var fName = firstAndLast.split(" ")[0];
     var lName = firstAndLast.split(" ")[1];
    
    this.getFirstName = function() {
      return fName;
    };
    this.getLastName = function() {
      return lName;
    };
    this.getFullName = function() {
      return fName+" "+lName;
    };
    this.setFirstName = function(first) {
       fName = first
    };
    this.setLastName = function(last) {
       lName = last;
    };
    this.setFullName = function(firstAndLast) {
        fName = firstAndLast.split(" ")[0];
      lName = firstAndLast.split(" ")[1];
    };
    
  };
  
  const bob = new Person('Bob Ross');
  bob.getFirstName()