function palindrome(str) {
  let str2 = str.replace(/\s+|_|,|\.|-|\/|\(|\)/g, "")
                .toLowerCase()
                .split(""),
      res  = [];
  
  for (let i = 0; i < str2.length; i++){
    str2[i] === str2[str2.length - 1 - i]
      ? res.push(true)
      : res.push(false)
  }
  if (res.filter(x => x === false).length > 0){return false}
  else {return true}
}

palindrome("eye");
