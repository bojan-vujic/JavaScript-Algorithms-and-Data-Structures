function checkCashRegister(price, cash, cid) {
  let object = {
    "PENNY":         0.01,
    "NICKEL":        0.05,
    "DIME":          0.10,
    "QUARTER":       0.25,
    "ONE":           1,
    "FIVE":          5,
    "TEN":          10,
    "TWENTY":       20,
    "ONE HUNDRED": 100
  }
  
  cid = cid.reverse();
  let newCid = cid.map( i => {return [i[0], 0]});
  
  let returnChange = (cash - price).toFixed(2),
      totalCid = [];
  
  cid.map( key => {
    totalCid.push([
        key[0],
        object[key[0]],
        key[1],
        Math.ceil(key[1]/object[key[0]])
    ])
  })
  let finalCid = [];
  let sumCidBeforeChange = parseFloat(cid.reduce( (sum, i) => sum + i[1], 0).toFixed(2));
  
  if (returnChange > sumCidBeforeChange) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (sumCidBeforeChange.toFixed(2) == returnChange) {
    return {status: "CLOSED", change: cid.reverse()}
  } else {
    let changeFromCid = 0,
        counter       = 0;
    
    for (let i of totalCid) {
      for (let j = 1; j <= i[3]; j++) {
        if (!(changeFromCid + i[1] > returnChange) && i[3] > 0) {
          changeFromCid += i[1];
          newCid[counter][1] = j * i[1];
        }
      }
      counter++;
    }
    newCid  .map( i => {i[1] > 0 ? finalCid.push(i) : false})
    finalCid.map( i => {i[0] == 'PENNY' ? i[1] += 0.01 : false})
  }
  let sumCidAfterChange = parseFloat(finalCid.reduce( (sum, i) => sum + i[1], 0).toFixed(2));
  
  if (returnChange > sumCidAfterChange) {return {status: "INSUFFICIENT_FUNDS", change: []}}
  else {return {status: "OPEN", change: finalCid};}
}


checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
