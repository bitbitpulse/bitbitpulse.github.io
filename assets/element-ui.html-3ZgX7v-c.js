import{_ as n,o as a,c as s,d as t}from"./app-HBA039kk.js";const p={},e=t(`<h1 id="element-ui" tabindex="-1"><a class="header-anchor" href="#element-ui"><span>element-ui</span></a></h1><blockquote><p>适用于vue v2</p></blockquote><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p><code>yarn add element-ui</code></p><h2 id="vue中引入" tabindex="-1"><a class="header-anchor" href="#vue中引入"><span>vue中引入</span></a></h2><h3 id="完整引入" tabindex="-1"><a class="header-anchor" href="#完整引入"><span>完整引入</span></a></h3><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> ElementUI <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-ui/lib/theme-chalk/index.css&#39;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementUI<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="按需引入" tabindex="-1"><a class="header-anchor" href="#按需引入"><span>按需引入</span></a></h3><p>安装babel-plugin-component</p><p><code>yarn add babel-plugin-component --dev</code></p><p>在 .babelrc (vue项目是babel.config.js)配置文件中，添加配置</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;@vue/cli-plugin-babel/preset&quot;</span><span class="token punctuation">,</span> 
      <span class="token punctuation">[</span><span class="token string">&quot;es2015&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">&quot;component&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">&quot;element-ui&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">styleLibraryName</span><span class="token operator">:</span> <span class="token string">&quot;theme-chalk&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>启动服务, 报错: <em>Error: Cannot find module &#39;babel-preset-es2015&#39;</em>。</p><p>需要修改 es2015 为 @babel/preset-env</p><p>按需引入组件</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    Button
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;element-ui&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span>
</code></pre></div><h2 id="使用组件" tabindex="-1"><a class="header-anchor" href="#使用组件"><span>使用组件</span></a></h2><p><strong>布局容器</strong></p><p><strong>导航菜单</strong></p><p><strong>表单</strong></p><p><strong>表格</strong></p>`,21),o=[e];function c(l,u){return a(),s("div",null,o)}const i=n(p,[["render",c],["__file","element-ui.html.vue"]]);export{i as default};
