// 一：
{
	var a = 123
} {
	let b = 123
}
console.log(a) // 123 var没有块级作用域的概念，所以定义在对象里相当于定义在对象外，本例中即为全局作用域
console.log(window.a);
console.log(b) // 报错 let/const块级作用域，外部无法访问

// 二：
for (var i = 1; i < 3; i++) {
	console.log('for-var循环i', i) // 1, 2, 3
}
console.log("for-var循环结束i", i) // 4 var 使得 i 定义在全局作用域，for循环最后又执行了一次i++，隐藏循环结束后全局作用域的i是4。for循环整体就是一个块级作用域

for (let i = 1; i < 3; i++) {
	console.log('for-let循环i', i) // 1, 2, 3
}
console.log("for-let循环结束i", i) // 报错，i定义在for循环内部，全局作用域无法访问

// 三：
for (var i = 1; i < 3; i++) {
	setTimeout(() => {
		console.log(i) // 4, 4, 4：异步，i已经循环完毕，所以每次打印的都是全局作用域i的最终结果4
	})
}
console.log(i) // 4

for(let i = 1; i < 3; i++) {
	setTimeout(()=>{
		console.log(i) // 1, 2, 3：i定义在块级作用域内，每次for循环（块）内部的函数只能访问到该作用域的值，即setTimeout函数的父级作用域for。
	})
}
console.log(i) // 报错

// 注意: 每次for循环生成一个新的内存空间
for(var i = 1; i < 3; i++) {
	(function (num) { // 把i作为参数传入函数中；var没有块级作用域的概念，但有函数作用域。立即执行函数是同步执行的，所以每次+1的变量i可以传入函数内部，值被保留
		setTimeout(()=>{
			console.log('函数作用域', num) // 1, 2, 3,
		})
	})(i)
}

let arr = []
for(var i = 1; i < 3; i++) {
	arr.push(function(){
		console.log(i)
	})
}
console.log("arr", arr); // [function(){console.log(i)}, ...]
console.log(arr[0]()) // 4
console.log(arr[1]()) // 4 // var使得i定义在全局作用域，外部访问arr内的函数时，i已经循环完毕变成了4，所以数组内每个函数打印的i都是4

arr = []
for(var i = 1; i < 3; i++){
	(function(item){ // 匿名函数产生作用域
		arr.push(function(){ // 外部arr访问到该函数
			console.log(item) // 到该函数的父级作用域找item
		})
	})(i)
}
console.log(arr[0]()) // 1
console.log(arr[0]()) // 2
console.log(arr[0]()) // 3 // var有函数作用域，立即执行函数把i传到了函数内部；外部的arr访问到了函数内部的变量i，每个函数的内存空间被保留，内部的变量i的值也被保留。