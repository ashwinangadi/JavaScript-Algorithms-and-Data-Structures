function checkCashRegister(price, cash, cid) {
    const curUnit = {
      "PENNY" : 0.01,
      "NICKEL" : 0.05,
      "DIME" : 0.1,
      "QUARTER" : 0.25,
      "ONE" : 1,
      "FIVE" : 5,
      "TEN" : 10,
      "TWENTY" : 20,
      "ONE HUNDRED" : 100
    }
    let change = (cash - price).toFixed(2);
    const changeToPay = change;
    const mainCid = cid;
  
    let possibleChange = Object.keys(curUnit)
      .filter(ele => curUnit[ele] <= change).reverse();
    cid = cid.slice(0,possibleChange.length)
      .reduce((acc,ele) =>({...acc, [ele[0]] : ele[1]}),{})
  
    let returnChange = []
    possibleChange.forEach(ele => {
      let maxChange = parseInt(change / curUnit[ele]) * curUnit[ele];
      if (maxChange <= cid[ele]){
        returnChange.push([ele, maxChange]);
        change = (change - maxChange).toFixed(2);
      } else if (cid[ele] > 0){
        returnChange.push([ele, cid[ele]])
        change = (change - cid[ele]).toFixed(2);
      } 
    })
    returnChange = returnChange.filter(ele => parseFloat(ele[1])!==0);
  
    let availableChange = Object.keys(cid)
      .reduce((acc, ele) => acc + parseFloat(cid[ele]), 0);
    if (changeToPay > availableChange){
      return {'status' : "INSUFFICIENT_FUNDS", change: []}
    } else if( changeToPay == availableChange){
      return {'status' : "CLOSED", change: mainCid}
    }  else if ( changeToPay < availableChange) {
      return {'status' : "OPEN", change: returnChange}
    } 
  }
  
  checkCashRegister(19.49, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  