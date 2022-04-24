function rot13(str) {
  let alpha   = "abcdefghijklmnopqrstuvwxyz";
      alpha   = alpha.toUpperCase() + alpha;
  
  let caesars = alpha.split(""),
      res     = "";
  
  for (let i of str){
    if      (i === " ") {res += " ";}
    else if (i === "!") {res += "!";}
    else if (i === "?") {res += "?";}
    else if (i === ".") {res += ".";}
    else {res += caesars[caesars.indexOf(i) + 13].toUpperCase();}
  }
  
  return res
}

rot13("SERR PBQR PNZC");
