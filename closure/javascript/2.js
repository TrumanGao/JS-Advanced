// 构造函数环境的体现形式
function Fn1() {
	let n = 1
	this.sum = function() {
		console.log('测试一n', ++n)
	}
}
let a = new Fn1()
console.log(a) // {sum: function(){...}, }
a.sum() // 2 a内的函数sum被外部使用，a所在的作用域的数据就会被保留，n累加
a.sum() // 3
a.sum() // 4

let b = new Fn1() // new 一个新的Fn1构造函数的实例，开辟一个新的内存空间，内部的变量也重新创建
b.sum() // 2