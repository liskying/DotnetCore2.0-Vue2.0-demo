# DotnetCore2.0-Vue2.0-demo
本项目以DotnetCore2.0,Vue2.0为基础搭建的一个基本项目Demo.

 第一步:
    git clone https://github.com/liskying/DotnetCore2.0-Vue2.0-demo.git

 第二步：
    cnpm install 或者npm install 

 第三步：
    dotnet clean 清除缓存

 第四步:
    dotnet build 编译项目
    注意：第一次编译时会npm找不到webpack模块，此时不用关系

 第五步：
    再次执行dotnet build 命令编译项目
    此时会在wwwroot生成如下几个文件
    dist/main.js
    dist/main.js.map
    dist/vendor.css
    dist/vendor-manifest.json
    vendor.js
    一个随机命名的.svg文件

 第六步：
    dotnet run 可以看到效果了

 祝您玩得愉快!

