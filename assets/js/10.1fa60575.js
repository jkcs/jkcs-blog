(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{286:function(e,v,_){"use strict";_.r(v);var i=_(14),t=Object(i.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"议code-review"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#议code-review"}},[e._v("#")]),e._v(" 议code review")]),e._v(" "),v("p",[e._v("为什么想写这个，起因是在最近开发中发现我们的code review存在一些问题，\ncode review都比较随意，比如1个故事点的code review在时间紧张的情况下可能就只花费了1个小时，而期间只是对代码的风格进行了检查。\n甚至有些bug，也是在code review中是能够被发现的。\n因此我觉得需要定义一些code review的目标。如果最后能总结出code review的流程就更好了。")]),e._v(" "),v("h2",{attrs:{id:"_1-什么是code-review"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是code-review"}},[e._v("#")]),e._v(" 1. 什么是code review")]),e._v(" "),v("p",[e._v("简单来说就是重新审视代码，找出其中的问题。一般自己写的代码都是由其他成员来进行code review。")]),e._v(" "),v("h2",{attrs:{id:"_2-为什么要code-review"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么要code-review"}},[e._v("#")]),e._v(" 2. 为什么要code review")]),e._v(" "),v("p",[e._v("这个简单来说就是为了提高代码质量，保证风格利于后期维护和减少bug。")]),e._v(" "),v("h2",{attrs:{id:"_3-code-review的目标"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-code-review的目标"}},[e._v("#")]),e._v(" 3. code review的目标")]),e._v(" "),v("p",[e._v("从目标反推要去做什么，这样在做的时候至少会有一个方向。")]),e._v(" "),v("h3",{attrs:{id:"保证代码质量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#保证代码质量"}},[e._v("#")]),e._v(" 保证代码质量")]),e._v(" "),v("p",[e._v("保证代码质量这个太笼统了，质量如何是很难衡量的，所以可以更具体一些。从编码本身的角度来说，我们写的逻辑代码都是判断、循环、函数、变量等等。\n从这些方面来看可以拆分出以下内容：")]),e._v(" "),v("ul",[v("li",[e._v("判断的问题：多余、遗漏、无价值？")]),e._v(" "),v("li",[e._v("循环的问题：死循环、循环条件、循环副作用、无意义循环？")]),e._v(" "),v("li",[e._v("函数的问题：参数副作用、返回值类型不一、参数默认值？")]),e._v(" "),v("li",[e._v("变量的问题：重复、作用域、无意义赋值、深浅拷贝？")]),e._v(" "),v("li",[e._v("重复代码、无用代码、无意义代码、代码冗余")]),e._v(" "),v("li",[e._v("毫无关联和意义的注释\n从视图层面来说code review一般不关注，因为标签和Css只通过代码是很难看出具体问题，在后面在减少bug内会提到一些。")])]),e._v(" "),v("h3",{attrs:{id:"保证代码风格统一"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#保证代码风格统一"}},[e._v("#")]),e._v(" 保证代码风格统一")]),e._v(" "),v("p",[e._v("eslint可以帮助我们解决这个问题，然而现有项目有一些并没有开启eslint，有些没有配置eslint，这里面有很多历史原因就不展开了。\n最终我们的工程其实大部分是没有eslint的。")]),e._v(" "),v("p",[e._v("这点值得考虑，本文内就不展开了。\n最终我们也是通过code review来保证一定的代码风格统一。")]),e._v(" "),v("h3",{attrs:{id:"减少bug"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#减少bug"}},[e._v("#")]),e._v(" 减少bug")]),e._v(" "),v("p",[e._v("这个是最终目标，也是最难的。因为bug的产生是多方面的，后面bug的产生原因分析内会详细展开。")]),e._v(" "),v("ul",[v("li",[e._v("代码逻辑\n"),v("ul",[v("li",[e._v("可以看"),v("code",[e._v("useEffect")]),e._v("它的依赖项是否正确，是否在某些情况下导致出异常情况。")]),e._v(" "),v("li",[e._v("可以关注代码的执行顺序，在某些情况下是否会出现崩溃的情况。")]),e._v(" "),v("li",[e._v("可以看取值的时候是否会出现"),v("code",[e._v("undefined")]),e._v("的情况。")]),e._v(" "),v("li",[e._v("可以着重关注"),v("code",[e._v("setTimeout")]),e._v("、"),v("code",[e._v("setInterval")]),e._v("、"),v("code",[e._v("requestAnimationFrame")]),e._v("等等定时器的使用是否正确。")]),e._v(" "),v("li",[e._v("可以关注"),v("code",[e._v("lister")]),e._v("是否有释放，一直监听是否会有异常。")])])]),e._v(" "),v("li",[e._v("边界\n"),v("ul",[v("li",[e._v("可以关注"),v("code",[e._v("undefined")]),e._v("、"),v("code",[e._v("null")]),e._v("、"),v("code",[e._v("NaN")]),e._v("、"),v("code",[e._v("0")]),e._v("、"),v("code",[e._v("''")]),e._v("、"),v("code",[e._v("false")]),e._v("的处理。")]),e._v(" "),v("li",[e._v("可以关注文本的超长、全英文字符换行的情况。")]),e._v(" "),v("li",[e._v("可以关注类型方面的处理（与后端接口交互时要注意）。")]),e._v(" "),v("li",[e._v("可以关注兼容性问题（浏览器、手机、系统等等）。")]),e._v(" "),v("li",[e._v("可以关注异常处理。")])])]),e._v(" "),v("li",[e._v("变量/函数/组件\n"),v("ul",[v("li",[e._v("可以关注关联的另一方是否有正确的处理（A、B公用了C,更改了C需要确认A、B的表现都正常）。")]),e._v(" "),v("li",[e._v("可以关注相关的作用域。")]),e._v(" "),v("li",[e._v("可以关注使用是否正确。")]),e._v(" "),v("li",[e._v("可以关注类型是否转来转去。（一会是字符串、一会是数字、一会是对象、一会是数组）")])])]),e._v(" "),v("li",[e._v("用户体验（偏主观）\n"),v("ul",[v("li",[e._v("关注交互一致性。（比如所有的复制按钮复制完之后都有提示，而这个没有）")]),e._v(" "),v("li",[e._v("界面一致性。（比如所有的input框都有placeholder，这个没有）")])])])]),e._v(" "),v("h2",{attrs:{id:"_4-总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-总结"}},[e._v("#")]),e._v(" 4. 总结")]),e._v(" "),v("p",[e._v("什么是code review，简单来说就是重新审视代码。做code review有没有必要，有必要，可以利于代码的后期维护和一定程度减少bug。\ncode review的目标是什么，保证代码质量、保证代码风格统一、减少bug。\n如何保证代码质量，可以从判断、循环、函数、变量、注释等几个方面来保证。\n保证代码风格统一，可以通过eslint来保证。\n其中我们着重分析了减少bug的一些方面，从代码逻辑、边界、变量/函数/组件、用户体验等方面来看，都有可以避免的bug。")])])}),[],!1,null,null,null);v.default=t.exports}}]);