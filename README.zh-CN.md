
## 特性

- **最新技术栈**:使用 Vue3/vite2 等前端前沿技术开发
- **UI框架**: Element-plus [element-plus网站](https://element-plus.gitee.io/zh-CN/)
- **组合式api**: 组合式api 业务与视图分离
- **TypeScript**: 应用程序级 JavaScript 的语言
- **自定义数据** 内置 Mock 数据方案
- **权限** 内置完善的动态路由权限生成方案
- **组件** 二次封装了多个常用的组件

## 安装和使用

- 安装依赖

```bash
cd ytwy-admin

pnpm install

```

- 运行

```bash
pnpm run dev
```

- 打包

```bash
pnpm run build:pro
```

## 命名规范

- 所有 .vue 文件采用首字母驼峰命名。
- 所有 非 .vue 文件采用首字母小写驼峰命名。
- 所有封装的公用组件放到 “@/src/components” 下方,文件夹命名为首字母大写驼峰命名法
- 封装的非公用组件在业务功能同级别的目录下新建components文件夹 例如 “@/src/views/login/components”
- 所有业务功能放到 “@/src/views” 下方，文件夹名称为首字母小写驼峰命名

## 代码规范

```bash
- eslint 配置代码规范，约束. vscode 需要下载 EsLint 插件
- prettier 代码格式化工具，配置保存格式化 Prettier Code-Formatter
```

## 浏览器支持

本地开发推荐使用 `Chrome 80+` 浏览器

支持现代浏览器, 不支持 IE