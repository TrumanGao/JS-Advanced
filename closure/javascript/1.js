function fn1() {
	let n = 1
	return function add() {
		console.log('测试一n', ++n)
	}
}
let a = fn1()
a() // 2 相当于 add() 没有执行fn1()，即没有重新let n = 1，所以n累加
a() // 3 相当于 add() 没有执行fn1()，即没有重新let n = 1，所以n累加
let b = fn1() // 再次执行fn1函数，开辟新的内存地址，并且重新执行了let n = 1
b() // 2  相当于 add()


function fn2() {
	let n = 1
	return function add() {
		let m = 1
		return function show() {
			console.log('测试二n', n + 1)
			console.log('测试二m', m + 1)
		}
	}
}
let a = fn2()() // 相当于 add()
a() // 2 2 相当于show()，show函数所在的内存空间被保留，则fn2 n add m 都被保留，累加
a() // 3 3 相当于show()，show函数所在的内存空间被保留，则fn2 n add m 都被保留，累加
let b = fn2()() // 再次执行 add() 函数，开辟新的内存地址，重新 let m = 1
b() // 2
