import{_ as a,o as n,c as s,d as e}from"./app-HBA039kk.js";const t={},p=e(`<h1 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span>Vite</span></a></h1><p>官方文档：https://cn.vitejs.dev/</p><h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用"><span>基础使用</span></a></h2><h3 id="创建vite项目" tabindex="-1"><a class="header-anchor" href="#创建vite项目"><span>创建Vite项目</span></a></h3><p><code>yarn create vite</code></p><p>创建Vite项目，同时指定vue模板</p><p><code>yarn create vite my-vue-app --template vue</code></p><h3 id="启动dev服务器" tabindex="-1"><a class="header-anchor" href="#启动dev服务器"><span>启动dev服务器</span></a></h3><p><code>cd my-vue-app</code></p><p><code>yarn</code></p><p><code>yarn dev</code></p><p>默认端口是5173，支持的选项：</p><ul><li>--host 指定主机名称</li><li>--port 指定端口</li><li>--open 启动时打开浏览器</li><li>--core 启用跨域</li><li>--mode 设置环境模式</li></ul><p>启动dev服务后，还支持以下快捷方式:</p><ul><li>h + Enter 查看帮助</li><li>r + Enter 重启服务器</li><li>u + Enter 查看URL</li><li>o + Enter 在浏览器打开</li><li>q + Enter 停止服务器</li></ul><h3 id="构建" tabindex="-1"><a class="header-anchor" href="#构建"><span>构建</span></a></h3><p><code>yarn build</code></p><p>支持的选项：</p><ul><li>--outDir 设置输出目录，默认dist</li><li>--assetsDir 设置在输出目录下放置资源的目录，默认assets</li><li>--base 设置公共基础路径，默认 /</li><li>--mode 设置环境模式</li></ul><h3 id="本地预览" tabindex="-1"><a class="header-anchor" href="#本地预览"><span>本地预览</span></a></h3><p><code>yarn preview --port 8000</code></p><h2 id="静态资源处理" tabindex="-1"><a class="header-anchor" href="#静态资源处理"><span>静态资源处理</span></a></h2><p><strong>public目录</strong></p><h2 id="环境变量与模式" tabindex="-1"><a class="header-anchor" href="#环境变量与模式"><span>环境变量与模式</span></a></h2><p>支持dotenv文件：</p><ul><li>在JS中使用 <code>import.meta.env</code> 对象获取.env文件中的环境变量</li><li>在HTML中使用 <em>%ENV_NAME%</em> 语法获取.env文件中的环境变量</li></ul><p>.env中定义的环境变量名，只能以 VITE_ 开头。</p><p><em>.env</em></p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>VITE_APP_TITLE=博客后台管理系统
</code></pre></div><p><em>.env.development</em></p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>NODE_ENV=development
</code></pre></div><p><em>.env.production</em></p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>NODE_ENV=production
</code></pre></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="resolve-alias" tabindex="-1"><a class="header-anchor" href="#resolve-alias"><span>resolve.alias</span></a></h3><p>配置根路径(<em>/src</em>)别名，这样可以像vue-cli一样，使用@符号</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./src&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="server-proxy" tabindex="-1"><a class="header-anchor" href="#server-proxy"><span>server.proxy</span></a></h3><p>配置开发服务器代理，参考 https://cn.vitejs.dev/config/server-options.html#server-proxy</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>    
	<span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;^/api/.*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8080&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,40),o=[p];function c(l,r){return n(),s("div",null,o)}const u=a(t,[["render",c],["__file","vite.html.vue"]]);export{u as default};