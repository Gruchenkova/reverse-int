module.exports = function reverse (n) {
	let arr = Array.from(arguments);
	if (arguments == undefined){
		return 0
	}else if(arr[0] < 0){
		arr[0] = arr[0] * -1;
	}
		let b = arr[0] + '';
		let newArr = b.split('').reverse().join("");
		let result = +newArr;
		return result;
}
