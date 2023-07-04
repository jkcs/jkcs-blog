# Android 注入的三种注入方式

## ptrace注入
> ptrace 是 Linux 内核提供的一个系统调用，旨在允许一个进程监控和控制另一个进程的执行。
ptrace 设计的主要目的是为了支持调试器（如 GDB）的实现。通过 ptrace，调试器可以监控被调试进程的系统调用、信号处理、内存读写、寄存器值等信息，
以及控制进程的执行，如单步执行、设置断点、修改内存等。
这样，调试器就可以在进程执行过程中进行调试、跟踪和分析，帮助开发人员定位和解决问题。 
除了调试器，ptrace 还被广泛用于其他系统工具和应用程序的实现，如性能分析器、安全工具、虚拟化等。

ptrace在设计之初就是为了监控被调试的进程，所以我们可以利用ptrace来实现注入。
**(使用ptrace注入需要root权限)**
实现可以看看这些文章：
[一文带你实现android的ptrace注入](https://juejin.cn/post/6984995491121463304)
[hook - Android ARM下的的so注入](http://kiya.studio/2015/12/23/hook-call-function-in-so/)


## zygote注入
zygote注入是利用了android系统的zygote进程，zygote进程是android系统启动时创建的第一个进程，应用进程都是由其fork出来，是所有应用进程的父进程。
zygote注入对比ptrace注入，ptrace 操作需要在目标进程中执行，因此容易受到目标进程的保护机制的限制，
zygote 注入时注入操作可以在应用程序启动之前完成，不受目标进程的保护机制的限制。
[一文带你掌握android的zygote注入](https://juejin.cn/post/6990166361508495391)

## ELF(so)注入
修改ELF文件实现so文件注入实现原理为：
通过修改 Program Header Table中的依赖库信息，添加自定义的so文件信息，APP进程运行加载被该修改过的ELF文件，它也同时会加载并运行自定义的so文件。
需要对目标apk进行重新打包

## 其它
几个实现注入的项目：
[shunix/AndroidGotHook](https://github.com/shunix/AndroidGotHook)
[kiyadesu/Android](https://github.com/kiyadesu/Android)
