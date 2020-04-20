#### webpack-介绍

> 静态页-> 表单提交-> 闭包+自调 -> AMD/CMD/-> require.js/sea.js/common.js-> 
>
> js代码变得模块化-> module.exports和require("./xxx.js")-> ES6-> import和export default
>
> -> 终级js模块化解决方案 -> webpack
>
> webpack：模块化(.js/.css/.vue等)
>

#### webpack-本地安装

> 建议本地安装 -> 每个项目有自己的webpack配置

1. cd 项目目录

2. npm init -y

3. npm install --save-dev webpack

4. npm install --save-dev webpack-cli

5. webpack --help


> 可以在目录下使用webpack指令去实现功能->比如 打包 


#### webpack-目录设置

> webpack指令 打包 ->error->配置打包参数,比如入口 出口->vuecli里面webpack已经配置完毕
>
> webpack和vue没有直接关系 -> vuecli->内置webpack工具->配置全写完

1. index.html 页面文件 引入入口文件main.js
2. src/main.js+cal.js
3. webpack.config.js -> 配置webpack的

#### webpack-配置文件

> webpack打包->提供配置文件->webpack.config.js->入口+出口
>
> webpack指令 -> dist/bundle.js

#### webpack-css-loader

> webpack默认只能处理.js文件
>
> 非.js文件 ->让webpack处理->安装指定css-loader/style-loader -> 配置loader->重新打包

1. npm 指定的加载器 
2. 在webpack.config.js中配置加载器
3. 重新打包

#### webpack-图片资源

> webpack默认不能处理图片资源
>
> 1. npm install --save-dev file-loader
> 2. 配置

> 测试->index.html src="dist/bundle.js"->在dist复制index.html 修改src="./bundle.js"

#### weback-字体文件

1. 找loader
2. 配置

> 补充

1. .ttf文件
2. css3 @font-face{src,font-family} 
3. 支持英文

#### webpack-服务器

1. ```
   npm install --save-dev webpack-dev-server
   ```

2. 配置

3. package.json- > "start" :"webpack-dev-server --open"

4. 重新打包  + npm start