# frida介绍和基本使用

## 前言
frida是什么，frida是一个python库，可运行在android、ios、linux、win、osx等各平台，使用动态二进制插桩技术可以对运行时程序进行操作（对程序行为进行实时监控和修改，插入或替换函数、变量等等）。
> [frida-github](https://github.com/frida/frida/releases) [frida-doc](https://frida.re/)

官方介绍：
>Dynamic instrumentation toolkit for developers, reverse-engineers, and security researchers.
(面向开发人员、逆向工程师和安全研究人员的动态检测工具包。)

## 安装
这里使用py3.9，pip安装：
```shell
pip install frida-tools
```
安装frida-tools后会自动安装frida，frida-tools是frida的命令行工具，frida是python库。

安装完成后可以使用frida命令查看版本：
```shell
frida --version
```
下载server端：[下载地址](https://github.com/frida/frida/releases)，选择合适的平台和版本下载。

frida的server一定要和本地的frida版本一致，否则会出现连接不上的问题。

## 使用
使用前先启动frida-server：

安卓手机需要root、ios需要越狱，linux、win、osx不需要。
将server push到设备上，在设备执行：
```shell
./frida-server
```

### frida命令行
frida命令行工具可以用来查看设备、进程、应用信息，也可以用来启动frida脚本。(这里以安卓为例)

查看设备：
```shell
frida-ls-devices
```
查看进程：
```shell
frida-ps -U
```
查看应用信息：
```shell
frida-ps -Ua
```
启动frida脚本：
```shell
# -U 表示使用usb连接设备，-f 表示指定应用包名，-l 表示指定脚本文件 
# --pause 表示启动后暂停，等待attach，--pause 为新版本的参数等同于 --no-pause
frida -U -f com.example.app -l script.js --pause
# 或者 -F 表示当前设备上的前台应用
frida -UF -l script.js
```

### frida脚本
frida脚本是一个js文件，可以使用js或python编写。

python脚本:
```python
import time
import frida
import sys

jscode = """
    console.log('start hook')
    // some code
"""

def on_message(message, data):
    payload = message['payload']
    print(payload)

if __name__ == "__main__":
    device = frida.get_remote_device()
    pid = device.spawn(["your app package name"])
    session = device.attach(pid)
    device.resume(pid)
    time.sleep(1)
    script = session.create_script(jscode)

    script.on("message", on_message)
    script.load()
    sys.stdin.read()
```

js脚本:
```javascript
// 拦截在String对象，在构造函数中输出参数
Java.perform(function () {
  var JavaString = Java.use('java.lang.String');
  JavaString.$init.overload('java.lang.String').implementation = function (content) {
    console.log('JavaString.$init.overload(\'java.lang.String\')->' + content);
    var result = this.$init(content);
    return result;
  };
  JavaString.$init.overload('[C').implementation = function (content) {
    console.log('JavaString.$init.overload(\'[C\')->' + content);
    var result = this.$init(content);
    return result;
  };
});
```
js脚本注意事项：
1. hook java层方法，需要使用`Java.perform`包裹，否则会**报错**。
2. hook so层方法，建议使用`setImmediate`包裹。
