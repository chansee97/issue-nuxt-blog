

<div align="center">

## Issue-nuxt-blog

![Cover.png](https://s2.loli.net/2023/12/08/OINcU36A9tCyFYW.png)
</div>
Issue-nuxt-blog是基于Github issue实现的博客项目, 新增和编辑文章更加快速方便，而且部署简单，无需服务器，只需配置环境变量即可使用。

本项目基于另一个使用本地文件记录的[nuxt博客](https://github.com/chansee97/nuxt-blog)，使用并不方便，所以有了使用issue的版本

## 💡 特点
- Nuxt3技术栈，ssr渲染，对seo更友好
- 适应移动的端布局
- 页面简约，暗模式过渡动画优雅
- 使用Github issue作为数据源，文章操作更加简单
- 使用issue Label来为文章标记标签, Milestone作为文章分类
- 文章搜索功能
- 只需配置简单的环境变量即可使用，无需更改代码
- 基于[utteranc](https://utteranc.es/)的评论功能，评论与issue绑定


## 📖 使用方法

### 使用前准备
1. 准备一个新仓库，仓库名称随意，例如“my-blogs”，记下仓库的名字
2. 记下自己的github用户名，例如“chansee97”
3. 创建一个专门用来读取issue的[github token]并保存(https://github.com/settings/tokens/new),配置如下
![image.png](https://s2.loli.net/2023/12/08/v91ueNF7HItShA4.png)
4. 准备一个[vecel](https://vercel.com/)账号（此处以vecel部署为例）

### 项目部署
1. [fork本项目](https://github.com/chansee97/issue-nuxt-blog/fork)到自己的仓库
2. vecel中[import](https://vercel.com/new)刚才fork的项目, 在部署前导入自己的变量
![image.png](https://s2.loli.net/2023/12/08/HiDORUvM64oZy7Y.png)
你应当在部署的站点增加如下的环境变量
- `VITE_OWNER` issue所在仓库的拥有者
- `VITE_BLOGS_REPO` issue所在仓库名称
- `VITE_GITHUB_TOKEN ` issue账号的验证token,如果不设置会导致速率下降，访问受限
3. 环境变量设置完毕后，点击部署Deploy，耐心等待部署成功
4. 至此，所有的设置完成，没有其他需要修改的地方，如果你有自定义的需求，可以进行个人开发修改

### 增加文章

从刚才新建的仓库进入，新建打开状态的issue即可，所有的issue会同步在博客站点上，如果issue关闭，则文章也会隐藏

issue的标题即为文章的标题
issue的正文即为文章的内容
issue的Labels 为文章标签，你可以为一个文章打上多个标签
issue的Milestone 为文章分类，你可以为一个文章设置一个分类

可以参考我的[博客issue](https://github.com/chansee97/my-blogs/issues)

### 修改个人介绍
博客中的个人介绍与issue所有者的reamde简介文件一致，请仔细编辑自己名下简介文件
github上个人简介的仓库是https://github.com/用户名/用户名
简介则是此仓库下的`reamde.md`文件
### 环境变量


## 🔎 本地开发
确保安装依赖项：
```shell
pnpm install
```

启动开发服务
```shell
pnpm dev
```
## 协议
[MIT](LICENSE)
