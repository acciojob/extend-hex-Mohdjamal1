const extendHex = (shortHex) => {
  // write your code here
	let str = '#';
	if (shortHex.charAt(0) === '#') {
		for (let i = 1; i < shortHex.length; i++) {
			str += shortHex.charAt(i) + shortHex.charAt(i);
		}
	}
	else{
		for (let i = 0; i < shortHex.length; i++) {
			str += shortHex.charAt(i) + shortHex.charAt(i);
		}
	}
	// 
	return str;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
