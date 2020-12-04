# cup nodejs版

## 特别鸣谢

感谢[thinkjs](https://thinkjs.org/) nodejs框架提供支持

感谢[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 前台模板提供支持

感谢[RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue) 提供的前后端开发方案

## 源码
gitee [cup-nodejs](https://gitee.com/wuyanshen/cup-nodejs)

github [cup-nodejs](https://github.com/wuyanshen/cup-nodejs)


## 项目说明

      本项目基于thinkjs3.0 + vue-element-admin构建，
    参照当前最流行的RBAC权限模型设计了权限管理，包括了
    菜单权限，按钮权限，数据权限。可以为您使用nodejs构建
    后台管理系统提供一种解决方案。

## 技术栈

    thinkjs3.0
    vue-element-admin
    mysql


## 目录说明

```bash
cup-server     后台服务
cup-server-vue 前端界面UI
```

## 项目预览

![dashboard](https://minio.lvcoding.com/cup-node/login.jpg)

![dashboard](https://minio.lvcoding.com/cup-node/dashboard.jpg)

![dashboard](https://minio.lvcoding.com/cup-node/user.jpg)

![dashboard](https://minio.lvcoding.com/cup-node/role.jpg)

![dashboard](https://minio.lvcoding.com/cup-node/menu.jpg)

![dashboard](https://minio.lvcoding.com/cup-node/org.jpg)

![dashboard](https://minio.lvcoding.com/cup-node/dict.jpg)

![dashboard](https://minio.lvcoding.com/cup-node/config.jpg)

![dashboard](https://minio.lvcoding.com/cup-node/log.jpg)

![dashboard](https://minio.lvcoding.com/cup-node/monitor.jpg)

![dashboard](https://minio.lvcoding.com/cup-node/api.jpg)

## 快速上手

### 后台

```bash
# 导入数据库脚本
# 脚本位置
cd cup-server/db

# 安装依赖
cd cup-server
npm install

# 启动
npm run start

# ---------------------------------------------

# 安装apidoc 自动生成api文档
npm install apidoc -g

# 生成命令
-i 扫描接口路径
-o 生成的api文档路径
apidoc -i src -o www/static/apidoc/

# api文档地址
http://localhost:9999/static/apidoc/index.html
```

### 前台

```bash
# 安装依赖
cd cup-server-vue
npm install

# 启动
npm run dev

# ---------------------------

# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```
