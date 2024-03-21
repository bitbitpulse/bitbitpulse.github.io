import{_ as n,o as a,c as s,d as t}from"./app-HBA039kk.js";const p={},e=t(`<h1 id="vue-router-v4" tabindex="-1"><a class="header-anchor" href="#vue-router-v4"><span>vue-router v4</span></a></h1><p>官方文档：https://router.vuejs.org/zh/guide/</p><blockquote><p>vue-router v4 适用于 vue v3</p></blockquote><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p><code>yarn info vue-router versions</code></p><p><code>yarn add vue-router@4.2.5</code></p><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2><p>创建router/index.js文件，并在其中编写模块导入语句、vue组件导入语句、路由规则定义语句、创建路由对象等</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory<span class="token punctuation">,</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> <span class="token function-variable function">loginView</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/view/sys/Login.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> loginView<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    routes
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre></div><p>在App.vue中声明一个路由出口，路由规则匹配到的vue组件，将被渲染到这里</p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>最后在main.js中，导入路由对象，并注册到vue实例中</p><div class="language-vue" data-ext="vue" data-title="vue"><pre class="language-vue"><code>import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import router from &#39;./router&#39;


const app = createApp(App);
app.use(router);
app.mount(&#39;#app&#39;);
</code></pre></div>`,13),o=[e];function c(u,r){return a(),s("div",null,o)}const i=n(p,[["render",c],["__file","vue-router v4.html.vue"]]);export{i as default};
