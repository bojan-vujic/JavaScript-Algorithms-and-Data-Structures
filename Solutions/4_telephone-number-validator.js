function telephoneCheck(str) {
  
  let validRegex = [
      /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/,
      /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
      /^1\s[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
      /^1\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/,
      /^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/,
      /^[0-9]{10}$/,
      /^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/
      ]
  let res = [];
  validRegex.map(function (item) {
      str.match(item) && res.push(true)
  })
  
  res[0] == true ? res = true : res = false
  return res
}

telephoneCheck("555-555-5555");