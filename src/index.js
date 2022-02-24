module.exports = function check(str, bracketsConfig) {
  let openedBr = [];
  let closedBr = [];
  let openedStr = [];
  
  bracketsConfig.forEach( function(br){
    openedBr.push(br[0]);
    closedBr.push(br[1]);
  });

  function close(br) {
    if (openedStr[openedStr.length - 1] == openedBr[closedBr.indexOf(br)]) {
      openedStr.pop();
    }
  }

  for (let ch of str) {
    if (closedBr.includes(ch) && openedStr.includes(openedBr[closedBr.indexOf(ch)])) {
      close(ch);
    }
    else if (openedBr.includes(ch)) {
      openedStr.push(ch);
    } 
    else {
      return false;
    }
  }

  return (!openedStr.length) ? true : false;
}
