import{_ as n,o as a,c as s,d as p}from"./app-HBA039kk.js";const t={},o=p(`<h1 id="springboot核心特性-springapplication类" tabindex="-1"><a class="header-anchor" href="#springboot核心特性-springapplication类"><span>SpringBoot核心特性-SpringApplication类</span></a></h1><p>参考:</p><ul><li>https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.spring-application</li></ul><p>通过 <code>SpringApplication</code> 类,直接从<code>main</code>方法启动Spring应用程序, 只需要调用<code>SpringApplication#run</code>静态方法:</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="懒初始化bean" tabindex="-1"><a class="header-anchor" href="#懒初始化bean"><span>懒初始化Bean</span></a></h2><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.main.lazy-initialization</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre></div><h2 id="自定义banner" tabindex="-1"><a class="header-anchor" href="#自定义banner"><span>自定义Banner</span></a></h2><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.main.banner-mode</span><span class="token punctuation">=</span><span class="token value attr-value">console</span>
<span class="token key attr-name">spring.banner.charset</span><span class="token punctuation">=</span><span class="token value attr-value">UTF-8</span>
<span class="token key attr-name">spring.banner.location</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:banner.txt</span>
</code></pre></div><h2 id="自定义springapplication" tabindex="-1"><a class="header-anchor" href="#自定义springapplication"><span>自定义SpringApplication</span></a></h2><p>可以创建<code>SpringApplication</code>对象,然后调用其方法,进行自定义</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// SpringApplication.run(SpringApplicationApp.class, args);</span>
        
        <span class="token class-name">SpringApplication</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        app<span class="token punctuation">.</span><span class="token function">setLazyInitialization</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        app<span class="token punctuation">.</span><span class="token function">setBannerMode</span><span class="token punctuation">(</span><span class="token class-name">Banner<span class="token punctuation">.</span>Mode</span><span class="token punctuation">.</span><span class="token constant">CONSOLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        app<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="application事件和监听器" tabindex="-1"><a class="header-anchor" href="#application事件和监听器"><span>Application事件和监听器</span></a></h2><p>待续...</p>`,14),e=[o];function c(i,l){return a(),s("div",null,e)}const u=n(t,[["render",c],["__file","SpringBoot核心特性-SpringApplication类.html.vue"]]);export{u as default};
