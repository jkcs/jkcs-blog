(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{283:function(t,a,s){"use strict";s.r(a);var n=s(14),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"frida介绍和基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frida介绍和基本使用"}},[t._v("#")]),t._v(" frida介绍和基本使用")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("frida是什么，frida是一个python库，可运行在android、ios、linux、win、osx等各平台，使用动态二进制插桩技术可以对运行时程序进行操作（对程序行为进行实时监控和修改，插入或替换函数、变量等等）。")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/frida/frida/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("frida-github"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://frida.re/",target:"_blank",rel:"noopener noreferrer"}},[t._v("frida-doc"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("官方介绍：")]),t._v(" "),a("blockquote",[a("p",[t._v("Dynamic instrumentation toolkit for developers, reverse-engineers, and security researchers.\n(面向开发人员、逆向工程师和安全研究人员的动态检测工具包。)")])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("这里使用py3.9，pip安装：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" frida-tools\n")])])]),a("p",[t._v("安装frida-tools后会自动安装frida，frida-tools是frida的命令行工具，frida是python库。")]),t._v(" "),a("p",[t._v("安装完成后可以使用frida命令查看版本：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("frida "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n")])])]),a("p",[t._v("下载server端："),a("a",{attrs:{href:"https://github.com/frida/frida/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),a("OutboundLink")],1),t._v("，选择合适的平台和版本下载。")]),t._v(" "),a("p",[t._v("frida的server一定要和本地的frida版本一致，否则会出现连接不上的问题。")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("使用前先启动frida-server：")]),t._v(" "),a("p",[t._v("安卓手机需要root、ios需要越狱，linux、win、osx不需要。\n将server push到设备上，在设备执行：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("./frida-server\n")])])]),a("h3",{attrs:{id:"frida命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frida命令行"}},[t._v("#")]),t._v(" frida命令行")]),t._v(" "),a("p",[t._v("frida命令行工具可以用来查看设备、进程、应用信息，也可以用来启动frida脚本。(这里以安卓为例)")]),t._v(" "),a("p",[t._v("查看设备：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("frida-ls-devices\n")])])]),a("p",[t._v("查看进程：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("frida-ps "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-U")]),t._v("\n")])])]),a("p",[t._v("查看应用信息：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("frida-ps "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Ua")]),t._v("\n")])])]),a("p",[t._v("启动frida脚本：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -U 表示使用usb连接设备，-f 表示指定应用包名，-l 表示指定脚本文件 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --pause 表示启动后暂停，等待attach，--pause 为新版本的参数等同于 --no-pause")]),t._v("\nfrida "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-U")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" com.example.app "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v(" script.js "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--pause")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者 -F 表示当前设备上的前台应用")]),t._v("\nfrida "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-UF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v(" script.js\n")])])]),a("h3",{attrs:{id:"frida脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frida脚本"}},[t._v("#")]),t._v(" frida脚本")]),t._v(" "),a("p",[t._v("frida脚本是一个js文件，可以使用js或python编写。")]),t._v(" "),a("p",[t._v("python脚本:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" frida\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n\njscode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    console.log(\'start hook\')\n    // some code\n"""')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on_message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'payload'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    device "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" frida"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_remote_device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spawn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your app package name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    session "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attach"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resume"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jscode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" on_message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("js脚本:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拦截在String对象，在构造函数中输出参数")]),t._v("\nJava"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("perform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" JavaString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java.lang.String'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  JavaString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("overload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java.lang.String'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("implementation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'JavaString.$init.overload(\\'java.lang.String\\')->'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  JavaString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("overload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[C'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("implementation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'JavaString.$init.overload(\\'[C\\')->'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("js脚本注意事项：")]),t._v(" "),a("ol",[a("li",[t._v("hook java层方法，需要使用"),a("code",[t._v("Java.perform")]),t._v("包裹，否则会"),a("strong",[t._v("报错")]),t._v("。")]),t._v(" "),a("li",[t._v("hook so层方法，建议使用"),a("code",[t._v("setImmediate")]),t._v("包裹。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);