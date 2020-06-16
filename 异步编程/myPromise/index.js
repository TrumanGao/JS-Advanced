class myPromise {
	static PENDING = 'pending'
	static FULFILLED = 'fulfilled'
	static REJECTED = 'rejected'

	constructor(executor) {
		console.log('myPromise 构造函数：', myPromise)
		console.log('myPromise 对象：', this)
		this.status = myPromise.PENDING
		this.value = null
		executor(this.resolve.bind(this), this.reject)
	}

	resolve(res) {
		this.status = this.status === myPromise.PENDING ? myPromise.FULFILLED : this.status
		this.value = res
	}

	reject(err) {
		this.status = this.status === myPromise.PENDING ? myPromise.REJECTED : this.status
		this.value = err
	}


}
