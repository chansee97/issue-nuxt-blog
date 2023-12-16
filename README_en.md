
<div align="center">

## Issue-nuxt-blog

![Cover.png](https://s2.loli.net/2023/12/08/OINcU36A9tCyFYW.png)
</div>

<div align='center' style="margin:2em 0;">

  [Chinese](https://github.com/chansee97/issue-nuxt-blog/blob/main/README.md) | <b>English</b>
</div>

Issue-nuxt-blog is a blog project based on the GitHub issue. It is faster and more convenient to add and edit articles, and it is easy to deploy. It does not require a server, and can be used by configuring environment variables.

This project is based on another [nuxt blog](https://github.com/chansee97/nuxt-blog) that uses local file records, which is not convenient to use, so there is a version that uses issue

##💡 Features
- Nuxt3 technology stack, ssr rendering, more SEO-friendly
- Adaptable to mobile end layouts
- The page is minimalist, and the dark mode transition animation is elegant
- Using GitHub issue as a data source makes article manipulation easier
- Use issue Label to tag articles, Milestone for article classification
- Article search function
- Simply configure simple environment variables to use without changing the code
- Comment function based on [utteranc](https://utteranc.es/), comment and issue binding
- Generate RSS feeds using [rsshub](https://docs.rsshub.app/)


## How to use 📖

### Prepare before use
1. Prepare a new warehouse with a random name, such as "my-blogs", and write down the name of the warehouse.
2. Write down your github username, such as "chansee97".
3. Create a [github token](https://github.com/settings/tokens/new) dedicated to reading the issue and save it, configured as follows
![image.png](https://s2.loli.net/2023/12/08/v91ueNF7HItShA4.png)
4. Prepare a [vecel](https://vercel.com/) account (take vecel deployment as an example here)

### Project deployment
1. [Fork this item](https://github.com/chansee97/issue-nuxt-blog/fork) to your own repository
2. vecel [import](https://vercel.com/new) just fork the project, import your own variables before deployment
![image.png](https://s2.loli.net/2023/12/08/HiDORUvM64oZy7Y.png)
You should add the following environment variables to the deployment site
- `VITE_OWNER` The owner of the warehouse where the issue is located
- `VITE_BLOGS_REPO` the name of the warehouse where the issue is located
- `VITE_GITHUB_TOKEN` issue account verification token, if not set, it will cause the rate to drop and access is limited
1. After setting the environment variables, click Deploy and wait patiently for the deployment to be successful.
2. At this point, all settings are completed, and there is no other place to modify. If you have custom requirements, you can make personal development modifications

### Add article

Enter from the newly created warehouse and create a new open issue. All issues will be synchronized on the blog site. If the issue is closed, the article will also be hidden.

The title of the issue is the title of the article
The body of the issue is the content of the article
The Labels of the issue are article tags, you can tag multiple tags for an article
Issue Milestone for article classification, you can set a category for an article

You can refer to my [blog issue](https://github.com/chansee97/my-blogs/issues)

### Modify the personal introduction
The personal introduction in the blog is the same as the reamde profile file of the issue owner. Please edit the profile file in your name carefully.
The repository for the profile on GitHub is https://github.com/username/username
The profile is the `reamde.md` file under this repository

## 🔎 local development
Make sure to install dependencies:
```shell
pnpm install
```

Start development services
```shell
pnpm dev
```
## LICENSE
[MIT](LICENSE)
