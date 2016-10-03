var getResult = (function () {
	var res = 2+2;
	return function () {
		return res;
		//console.log ("good");
		//alert ("good");
	};
}());