const extendHex = (shortHex) => {
  // write your code here
 return '#'+shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(i => i+i).join('');
 // let longHex = str.split('');
// return '#' +longHex.map(i=>{return i + i}).join('');
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
