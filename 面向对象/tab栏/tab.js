let _this
// 抽象对象
class Tab {
	constructor(id) {
		_this = this
		// 获取盒子
		this.domTab = document.querySelector(id)
		this.domUl = this.domTab.querySelector('ul')
		this.domContent = this.domTab.querySelector('.tab-content')

		// 绑定事件
		this.initEvent()
	}

	// 获取所有DOM
	updateDom() {
		// 获取盒子里的所有 nav 和 content
		this.domNavs = this.domTab.querySelectorAll('.nav-item')
		this.domContents = this.domTab.querySelectorAll('.content-item')

		// 添加按钮
		this.domAddBtn = this.domTab.querySelector('.add-btn')
		// 关闭按钮
		this.domCloseBtns = this.domTab.querySelectorAll('.close-btn')

		// 所有 nav 标题
		this.domNavTitles = this.domTab.querySelectorAll('.nav-title')
		// 标记标题输入框
		this.domNavInputs = this.domTab.querySelectorAll('.nav-input')
	}

	// 初始化，让相关元素绑定事件
	initEvent() {
		// 获取所有DOM
		this.updateDom()
		for (let i = 0; i < this.domNavs.length; i++) {
			this.domNavs[i].index = i
			// this.domNavs[i].addEventListener('click', (e) => {
			// 	console.log('1. 点击nav', this.index, e) // 注意：该绑定事件方法 this.index 未定义
			// })
			// 切换事件
			this.domNavs[i].onclick = this.toggleTab
			// 修改事件
			this.domNavs[i].ondblclick = this.editTab
		}

		// 添加事件
		this.domAddBtn.onclick = this.addTab

		// 关闭事件
		for (let i = 0; i < this.domCloseBtns.length; i++) {
			this.domCloseBtns[i].index = i
			this.domCloseBtns[i].onclick = this.deleteTab
		}

		// 编辑事件
		for (let i = 0; i < this.domNavInputs.length; i++) {
			this.domNavInputs[i].onblur = this.saveTab
		}
	}

	// 清除选中项类名
	clearClass() {
		this.updateDom()
		for (let i = 0; i < this.domNavs.length; i++) {
			this.domNavs[i].classList.remove('nav-active')
			this.domContents[i].classList.remove('content-active')
		}
	}

	// 1. 切换
	toggleTab(e) {
		_this.clearClass()
		this.classList.add('nav-active')
		_this.domContents[this.index].classList.add('content-active')
	}
	// 2. 添加
	addTab() {
		_this.clearClass()
		let domNewTab =
			`<li class="nav-item nav-active">
				<input class="nav-input"
				 type="text">
				<span class="close-btn">+</span>
			</li>`
		_this.domUl.insertAdjacentHTML('beforeend', domNewTab)

		let domNewContent = `<div class="content-item content-active">${Math.random()}</div>`
		_this.domContent.insertAdjacentHTML('beforeend', domNewContent)
		_this.initEvent()
	}
	// 3. 删除
	deleteTab(e) {
		if (_this.domNavs.length == 1) {
			return
		}
		// 阻止事件冒泡
		let ev = e || window.event
		if (ev && ev.stopPropagation) {
			ev.stopPropagation()
		} else {
			ev.cancelBubble = true
		}

		_this.clearClass()
		let index = this.index

		_this.domUl.removeChild(_this.domNavs[index])
		_this.domContent.removeChild(_this.domContents[index])
		_this.initEvent()

		_this.domNavs[index - 1].classList.add('nav-active')
		_this.domContents[index - 1].classList.add('content-active')
	}
	// 4. 修改
	editTab() {
		for (let i = 0; i < _this.domNavTitles.length; i++) {
			_this.domNavTitles[i].classList.remove('nav-input')
		}
		this.domNavTitle = this.querySelector('.nav-title')
		console.log("1", this.domNavTitle);
		this.domNavTitle.classList.add('display-none')
		this.domNavInput = this.querySelector('.nav-input')
		console.log("2", this.domNavInput);
		this.domNavInput.classList.remove('display-none')
		this.domNavInput.focus()
		_this.initEvent()
	}
	// 5. 保存修改
	saveTab() {
		console.log("this.value", this.value);
		_this.domNavTitles.innerHTML = this.value
	}
}

new Tab('#tab')
