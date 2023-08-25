# bamboos-scripts

react 项目本地运行与自动打包脚本

## 环境

- node 16+
- typescript 5+

## 安装

`npm install bamboos-scripts --save`
or
`yarn add bamboos-scripts --save`

## 使用

```
 "scripts": {
    "build": "bamboos-scripts build",
    "start": "bamboos-scripts start"
  },
```

## 支持自定义配置

1、dev 环境启动端口

```
 "scripts": {
    "start": "cross-env PORT=9090 bamboos-scripts start"
  },
```

2、生产环境打包 webpack 配置

> 脚本已经内置了常用的 webpack 配置 也支持外部传入配置

```
 "scripts": {
    "build": "cross-env CONFIG_PATH=script/webpack.prod.js bamboos-scripts build"
  },
```

此处路径为相对于根目录的路径 且不需带`/`

传入的文件会在最后覆盖已有的 webpack 配置
