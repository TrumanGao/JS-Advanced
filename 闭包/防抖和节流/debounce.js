// 函数防抖
function debounce(fn, delay = 1000) {
	console.log("函数防抖 debounce", delay)
	let timer

	return function() {

		console.log("传入函数的参数", arguments)

		if (timer) {
			clearTimeout(timer)
			console.log("清除函数", timer)
		}

		timer = setTimeout(() => {

			fn(...arguments)
			clearTimeout(timer)
			timer = null

		}, delay)

	}

}
