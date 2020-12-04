#引用镜像
FROM node:8.9.4-alpine

# 使用国内的alpine源
RUN echo -e http://mirrors.ustc.edu.cn/alpine/v3.7/main/ > /etc/apk/repositories

#作者
MAINTAINER wuyanshen

# 设置时区
RUN apk add -U tzdata && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

#指定工作目录
WORKDIR /cup-server

#将dist目录拷贝到镜像里
ADD . /cup-server

#安装依赖及构建node应用
RUN npm i --registry=https://registry.npm.taobao.org

#定义程序默认端口
EXPOSE 9999

#运行程序命令
CMD ["node","development.js"]
