
欢迎光临  我的github  

一、关于ionic 的安装 与使用 

如果您已经安装好了Cordova，您可以直接把Ionic当作Html5框架，用Cordova开发Ionic，无需进行下面步骤

首先您需要安装 Node.js. 

其次, 安装最新版本的cordova 和 ionic command-line tools. 执行 $ npm install -g cordova ionic

ionic -v 查看 ionic版本
cordova -v 查看 cordova版本

安装完成之后，进入你想要创建项目的路径 ，就可以使用ionic创建项目了

ionic start myApp tabs      //创建带有top栏和bottom栏的示例项目
ionic start myApp sidemenu  //创建带有左侧带有menu栏的示例项目
ionic start myApp blank     //创建空白项目

然后可以使用：ionic serve
该命令会自动启动流浏览器，查看当前效果。


然后  cd myApp

为ionic添加平台支持

ionic platform add android //添加安卓平台支持
ionic platform add ios     //添加ios平台支持

生成androidapk

ionic build android

如果有模拟器

在android模拟器或真机中模拟

ionic emulate android



























