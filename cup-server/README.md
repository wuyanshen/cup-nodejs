基于[ThinkJS](http://www.thinkjs.org)3.0构建

db文件夹下是mysql数据库表和数据sql脚本

其他目录是TinkJs脚手架自动生成

```
# 安装thinkjs脚手架
npm install think-cli -g

# 多模块项目
thinkjs module xxx，即可创建名为 xxx 的模块。

# admin模块中新增名为auth的controller，会同时在logic文件夹中新增同名文件
thinkjs controller auth admin

# admin模块中新增名为token的service
thinkjs service token admin

# 安装apidoc 自动生成api文档
npm install apidoc -g

# 生成命令
-i 扫描接口路径
-o 生成的api文档路径
apidoc -i src/controller/ -o www/static/apidoc/

# api文档地址
http://localhost:8360/static/apidoc/
```

## 安装项目依赖

```
npm install
```

## 启动项目

```
npm start
```

## Deploy with pm2

Use pm2 to deploy app on production enviroment.

```
pm2 startOrReload pm2.json
```
