function addTogether(...args) {
    if (args.length == 1 && Number.isInteger(args[0])) {
      return function(b) {
        if (Number.isInteger(b)) {
          return args[0] + b;
        } else {
          return undefined;
        }
      }
    } else if (Number.isInteger(args[0]) && Number.isInteger(args[1])) {
      return args[0] + args [1];
    }
    else {
      return undefined;
    }
  }
  
  addTogether(2, "3");