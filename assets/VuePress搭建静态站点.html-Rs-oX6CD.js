import{_ as a,o as s,c as e,d as t}from"./app-HBA039kk.js";const n={},p=t(`<h1 id="vuepress搭建静态站点" tabindex="-1"><a class="header-anchor" href="#vuepress搭建静态站点"><span>VuePress搭建静态站点</span></a></h1><p>官方文档：https://v2.vuepress.vuejs.org/zh/guide/</p><p>主题库：https://www.npmjs.com/search?q=keywords:vuepress-theme</p><p>插件库：https://www.npmjs.com/search?q=keywords:vuepress-plugin</p><p>官方插件库：https://www.npmjs.com/search?q=@vuepress%20keywords:plugin</p><h2 id="生成右侧边栏" tabindex="-1"><a class="header-anchor" href="#生成右侧边栏"><span>生成右侧边栏</span></a></h2><p>github: https://github.com/dingshaohua-cn/vuepress-theme-sidebar</p><p>安装插件</p><p><code>yarn config set strict-ssl false</code></p><p><code>yarn add vuepress-theme-sidebar --dev</code></p><h2 id="添加algolia搜索" tabindex="-1"><a class="header-anchor" href="#添加algolia搜索"><span>添加algolia搜索</span></a></h2><p>algolia后台:</p><ul><li>https://dashboard.algolia.com/</li><li>https://crawler.algolia.com/admin/crawler</li></ul><p>如果搜索不到任何内容，到crawer后台检查爬虫代码，主要检查其中的url和css选择器，是否与自己的网站匹配。</p><h2 id="添加百度统计功能" tabindex="-1"><a class="header-anchor" href="#添加百度统计功能"><span>添加百度统计功能</span></a></h2><ol><li><p>在百度统计中添加网站</p></li><li><p>复制百度统计js代码，添加到每个页面的head标签中</p></li></ol><p>​ 在config.js中配置</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>// 百度统计js代码
const baidu_tj = \`var _hmt = _hmt || [];
(function() {
  var hm = document.createElement(&quot;script&quot;);
  hm.src = &quot;https://hm.baidu.com/hm.js?67c8f19b27fc99be208ca3ef56c999ef&quot;;
  var s = document.getElementsByTagName(&quot;script&quot;)[0]; 
  s.parentNode.insertBefore(hm, s);
})();\`


export default defineUserConfig({
    head: [
        [&quot;link&quot;, { rel: &quot;icon&quot;, href: &quot;/favicon.ico&quot; }],
        [&quot;script&quot;, { type: &quot;text/javascript&quot; }, baidu_tj],
    ],
    // ...
})
</code></pre></div><h2 id="seo" tabindex="-1"><a class="header-anchor" href="#seo"><span>SEO</span></a></h2><h3 id="添加robots-txt" tabindex="-1"><a class="header-anchor" href="#添加robots-txt"><span>添加robots.txt</span></a></h3><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>User-agent: *
Sitemap: https://bitbitpulse.github.io/sitemap.xml

Allow: /
# Disallow: 
</code></pre></div><h3 id="sitemap-xml" tabindex="-1"><a class="header-anchor" href="#sitemap-xml"><span>sitemap.xml</span></a></h3><p>使用sitemap插件</p><p>https://ecosystem.vuejs.press/zh/plugins/sitemap/</p><h3 id="google收录" tabindex="-1"><a class="header-anchor" href="#google收录"><span>Google收录</span></a></h3><p>https://search.google.com/search-console/</p><h3 id="bing收录" tabindex="-1"><a class="header-anchor" href="#bing收录"><span>Bing收录</span></a></h3><p>https://www.bing.com/webmasters/about</p><h3 id="百度收录" tabindex="-1"><a class="header-anchor" href="#百度收录"><span>百度收录</span></a></h3><p>https://ziyuan.baidu.com/site/</p><h3 id="搜狗" tabindex="-1"><a class="header-anchor" href="#搜狗"><span>搜狗</span></a></h3><p>https://zhanzhang.sogou.com/index.php/site/index</p><h3 id="_360收录" tabindex="-1"><a class="header-anchor" href="#_360收录"><span>360收录</span></a></h3><p>https://zhanzhang.so.com/</p><h3 id="神马站长平台" tabindex="-1"><a class="header-anchor" href="#神马站长平台"><span>神马站长平台</span></a></h3><p>https://zhanzhang.sm.cn/</p><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2><h3 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages"><span>Github Pages</span></a></h3><p>部署方式：源代码仓库为private，构建文件仓库为public。</p><p>部署：</p><ol><li><p>在源代码本地仓库下，执行build</p></li><li><p>在dist目录下运行下面的部署脚本</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># deploy.sh</span>
<span class="token comment"># 初始化git仓库，并push</span>
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">--all</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;deploy&quot;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:bitbitpulse/bitbitpulse.github.io.git main

<span class="token comment"># 脚本执行完毕后，不自动退出</span>
cmd /k <span class="token function">dir</span>
</code></pre></div></li></ol>`,41),o=[p];function i(h,c){return s(),e("div",null,o)}const l=a(n,[["render",i],["__file","VuePress搭建静态站点.html.vue"]]);export{l as default};
