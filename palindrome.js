function palindrome(str) {
  let newStr = str.toLowerCase().split(/[^a-z0-9]/g).join("");
  let len = newStr.length;
  
  for (let i = 0; i < len / 2; i++) {
    if (newStr[i] !== newStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

palindrome("almostomla"); //false
