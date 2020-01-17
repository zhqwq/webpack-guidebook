(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{206:function(h,e,s){"use strict";s.r(e);var t=s(0),a=Object(t.a)({},function(){var h=this,e=h.$createElement,s=h._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":h.$parent.slotKey}},[s("h1",{attrs:{id:"持久化缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持久化缓存","aria-hidden":"true"}},[h._v("#")]),h._v(" 持久化缓存")]),h._v(" "),s("p",[h._v("缓存（cache）一直是前端性能优化的重头戏，利用好静态资源的缓存机制，可以使我们的 Web 应用更加快速和稳定。仅仅是简单的资源缓存是不够的，我们需要为不断更新的资源做持久化缓存。")]),h._v(" "),s("p",[h._v("使用 hash 值解决缓存问题")]),h._v(" "),s("p",[h._v("问题：即便内容物修改，hash 仍会变化，因为是计算所有 chunks 的 hash。")]),h._v(" "),s("p",[h._v("每次编译生成一个唯一 hash，适合 chunk 拆分不多的小项目，但所有资源有同一个 hash，无法完成持久化缓存的需求。")]),h._v(" "),s("p",[h._v("chunkhash 为每个项目创建自己的 hash")]),h._v(" "),s("p",[h._v("Webpack 为每个 chunk 资源都生成与其内容相关的 hash 摘要，为不同的资源打上不同的 hash。")]),h._v(" "),s("p",[h._v("contenthash 专业为 css 配置 hash 值")]),h._v(" "),s("p",[s("code",[h._v("extract-text-plugin")]),h._v(" 为抽离出来的内容提供了 contenthash")]),h._v(" "),s("p",[h._v("构建出来的代码中，每个入口的文件都隐藏一个 ID，每个 module.id 会基于默认的解析顺序（resolve order）进行增量。")]),h._v(" "),s("p",[h._v("也就是，解析顺序发生变化，ID 也会随之改变，所以 hash 值也会发生变化。")]),h._v(" "),s("p",[h._v("模块的增减或者引用权重的变更肯定会导致 ID 的变更，我们需要再找一个能保持唯一性的内容，并在构建期间进行 ID 订正。")]),h._v(" "),s("p",[h._v("使用路径替代 module.id => 内置插件 NamedModulesPlugin")])])},[],!1,null,null,null);e.default=a.exports}}]);