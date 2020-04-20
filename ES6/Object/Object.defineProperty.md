## Object.defineProperty()
### 作用：
添加或修改对象的属性
### 参数：
Object.defineProperty( obj, prop, descriptor )
+ obj：目标对象（必需）
+ prop：要定义或修改的属性名或 Symbol（必需）
+ descriptor：要定义或修改的属性描述符（必需）
    + **value**：设置属性的值（默认 undefined）
    + **writable**：值是否可以重写，false 即为只读属性（默认 false）
    + **enumberable**：目标属性是否可以被枚，false 即无法被遍历访问到（默认 false）
    + **configurable**：目标属性是否可以被 delete 删除，以及除 value 和 writable 特性外的其他特性是否可以被修改（默认 false）
```js
let myObj = {
    id: 1,
    name: "无止尘",
    age: 26,
}
Object.defineProperty(myObj, "country", {
    value: "中国",
    writable: true,
    enumberable: true,
    configurable: true,
})
```