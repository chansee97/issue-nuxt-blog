## Nuxt 3 Blog

本博客项目是是基于Github issue实现, 新增和编辑更加快速方便，而且部署简单
这个项目有一个文章基于本地文件实现的版本[nuxt-blog](https://github.com/chansee97/nuxt-blog)，使用并不方便，所以有了这个版本

## 💡 特点
- Nuxt3技术栈，ssr渲染，对seo更友好
- 适应移动的端布局
- 页面加载，暗模式过渡动画简单优雅
- 使用Github issue作为数据源，文章操作更加简单
- 使用issue Label来为文章标记标签, Milestone作为文章分类
- 文章搜索功能
- 只需配置简单的环境变量即可使用，无需更改代码
- 基于[utteranc](https://utteranc.es/)的评论功能，评论与issue绑定

## 🔎 设置
确保安装依赖项：
```shell
pnpm install
```

启动开发服务
```shell
pnpm dev
```

## 📖 使用方法

### 个人介绍
博客中的个人介绍与issue所有者的reamde简介文件一致，请仔细编辑自己名下简介文件
### 环境变量
你应当在部署的站点增加如下的环境变量

`VITE_OWNER` issue所在仓库的拥有者

`VITE_BLOGS_REPO` issue所在仓库名称

`VITE_GITHUB_TOKEN ` issue账号的验证token,如果不设置会导致速率下降，访问受限
