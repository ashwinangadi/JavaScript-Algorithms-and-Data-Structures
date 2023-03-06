function smallestCommons(arr) {
    let range = [];
    arr.sort((a, b) => a - b);;
    for(let i=arr[0]; i<=arr[1]; i++){
      range.push(i)
    }
    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return range.reduce((multiple, curr) => lcm(multiple, curr));
  }

  smallestCommons([2, 10]);