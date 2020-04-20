// 函数节流
function throttle(fn, delay = 1000) {
	console.log("函数节流 throttle", delay)
	let timer
	return function() {
		console.log('return函数的参数arguments', arguments)
		if (timer) {
			console.log("正在执行，请稍后", timer)
			return
		} else {
			console.log("没有执行", timer)
		}
		timer = setTimeout(() => {
			console.log('参数', ...arguments)
			fn(...arguments)
			timer = null // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
		}, delay)
	}
}
