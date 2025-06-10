function fibonacci(num) {
	if(num==1){
		return 0
	}else if(num==2){
		return 1
	}else{
		let a =0
		let b =0
		for (let index = 3; index <=num; index++) {
			let c = a+b
			a=b
			b=c
		}
	}
	return b
}

module.exports = fibonacci;
