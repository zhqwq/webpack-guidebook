(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{191:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"其他配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他配置项","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他配置项")]),t._v(" "),s("h2",{attrs:{id:"target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#target","aria-hidden":"true"}},[t._v("#")]),t._v(" target")]),t._v(" "),s("p",[t._v("指定构建出不同运行环境的代码。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("web")]),t._v(" "),s("td",[t._v("浏览器（默认），所有代码都集中在一个文件里")])]),t._v(" "),s("tr",[s("td",[t._v("node")]),t._v(" "),s("td",[t._v("NodeJS 使用 "),s("code",[t._v("require")]),t._v(" 语句加载 Chunk 代码")])]),t._v(" "),s("tr",[s("td",[t._v("async-node")]),t._v(" "),s("td",[t._v("NodeJS 异步加载 Chunk 代码")])]),t._v(" "),s("tr",[s("td",[t._v("webworker")]),t._v(" "),s("td",[t._v("WebWorker")])]),t._v(" "),s("tr",[s("td",[t._v("electron-main")]),t._v(" "),s("td",[t._v("Electron 主线程")])]),t._v(" "),s("tr",[s("td",[t._v("exlectron-renderer")]),t._v(" "),s("td",[t._v("Electron 渲染线程")])])])]),t._v(" "),s("h2",{attrs:{id:"devtool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#devtool","aria-hidden":"true"}},[t._v("#")]),t._v(" devTool")]),t._v(" "),s("p",[s("strong",[t._v("用于控制是否生成以及如何生成 SourceMap")])]),t._v(" "),s("p",[t._v("主要用于 development 模式下，但也可以作用于 production 模式下。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  devtool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source-map'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("SourceMap")])]),t._v(" "),s("p",[t._v("调试工具可通过 SourceMap 映射代码，在源代码上断点调试。Webpack 支持声称 SourceMap，只需在启动时带上 "),s("code",[t._v("--devtool source-map")]),t._v(" 参数。")]),t._v(" "),s("h4",{attrs:{id:"development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#development","aria-hidden":"true"}},[t._v("#")]),t._v(" development")]),t._v(" "),s("p",[t._v("七种 SourceMap 模式。详细信息看 "),s("a",{attrs:{href:"https://webpack.docschina.org/configuration/devtool/",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"production"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#production","aria-hidden":"true"}},[t._v("#")]),t._v(" production")]),t._v(" "),s("p",[t._v("可以使用 "),s("code",[t._v("source-map")]),t._v(" 或者 "),s("code",[t._v("cheap-source-map")])]),t._v(" "),s("h2",{attrs:{id:"watch-watchoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch-watchoptions","aria-hidden":"true"}},[t._v("#")]),t._v(" watch/watchOptions")]),t._v(" "),s("p",[t._v("支持监听文件更新，在文件发生变化时重新编译。在使用 Webpack 时，监听模式默认时关闭的。")]),t._v(" "),s("p",[t._v("使用 DevServer 时，监听模式默认是开启的。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只有在开启监听模式时，watchOptions 才有意义")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认为 false，也就是不开启")]),t._v("\n  watch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听模式运行时的参数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在开启监听模式时，才有意义")]),t._v("\n  watchOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不监听的文件或文件夹，支持正则匹配")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认为空")]),t._v("\n    ignored"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听到变化会等 300ms 再去执行动作，防止文件更新太快导致重新编译频率太高")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认为300ms")]),t._v("\n    aggregateTimeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断文件是否发生变化是通过不停地询问系统指定文件有没有变化实现的")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认每秒询问 1000 次")]),t._v("\n    poll"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"externals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#externals","aria-hidden":"true"}},[t._v("#")]),t._v(" externals")]),t._v(" "),s("p",[t._v("构建中无须打包的模块，也就是这些模块是外部环境提供的。")]),t._v(" "),s("p",[t._v("例如通过内置一些全局变量或模块。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("path/to/jquery.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如果想使用模块化的源代码里导入和使用 jQuery。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" $ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jquery'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.my-element'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("打包后发现输出 Chunk 中包含该库内容。")]),t._v(" "),s("p",[t._v("解决方法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  externals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将导入语句里的 jQuery 替换成运行环境里的全局变量 jQuery")]),t._v("\n    jquery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jQuery'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"resolveloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolveloader","aria-hidden":"true"}},[t._v("#")]),t._v(" resolveLoader")]),t._v(" "),s("p",[t._v("如何寻找 Loader。")]),t._v(" "),s("p",[t._v("默认配置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  resolveLoader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 去哪个目录下寻找 loader")]),t._v("\n    modules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口文件的后缀")]),t._v("\n    extensions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指明入口文件位置的字段")]),t._v("\n    mainFields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"performance-性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performance-性能","aria-hidden":"true"}},[t._v("#")]),t._v(" performance 性能")]),t._v(" "),s("p",[t._v("用于控制 webpack 如何通知「资源（asset）和入口起点超过指定文件限制」")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("hints")]),t._v(" - 打开/关闭提示 （默认 "),s("code",[t._v("warning")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("maxEntrypointSize")]),t._v(" - 根据入口起点的最大体积，控制 webpack 何时生成性能提示（默认 "),s("code",[t._v("250000")]),t._v(" bytes）")]),t._v(" "),s("li",[s("code",[t._v("maxAssetSize")]),t._v(" - 根据单个资源体积，控制 webpack 何时生成性能提示（默认 "),s("code",[t._v("250000")]),t._v(" bytes）")]),t._v(" "),s("li",[s("code",[t._v("assetFilter")]),t._v(" - 允许 webpack 控制用于计算性能提示的文件")])]),t._v(" "),s("h2",{attrs:{id:"stats-统计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stats-统计","aria-hidden":"true"}},[t._v("#")]),t._v(" stats 统计")]),t._v(" "),s("p",[t._v("配置打包过程中输出的内容。")]),t._v(" "),s("ul",[s("li",[t._v("none 没有输出")]),t._v(" "),s("li",[t._v("normal 标准输出")]),t._v(" "),s("li",[t._v("verbose 全部输出")]),t._v(" "),s("li",[t._v("errors-only 只输出错误")])])])},[],!1,null,null,null);a.default=e.exports}}]);