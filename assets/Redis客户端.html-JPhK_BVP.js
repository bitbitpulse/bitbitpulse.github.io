import{_ as n,o as s,c as a,d as t}from"./app-HBA039kk.js";const p={},o=t(`<h1 id="redis客户端" tabindex="-1"><a class="header-anchor" href="#redis客户端"><span>Redis客户端</span></a></h1><h2 id="jedis" tabindex="-1"><a class="header-anchor" href="#jedis"><span>Jedis</span></a></h2><p>添加依赖</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>redis.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jedis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h3><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">try</span><span class="token punctuation">(</span><span class="token class-name">Jedis</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedis</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    client<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> x <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
    ex<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="使用连接池" tabindex="-1"><a class="header-anchor" href="#使用连接池"><span>使用连接池</span></a></h3><p>定义工具类</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisUtils</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">HOST</span> <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Integer</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">6379</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">USER</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">PASSWORD</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">JedisPool</span> <span class="token constant">JEDIS_POOL</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">GenericObjectPoolConfig</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Jedis</span><span class="token punctuation">&gt;</span></span> poolConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericObjectPoolConfig</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        poolConfig<span class="token punctuation">.</span><span class="token function">setMaxTotal</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        poolConfig<span class="token punctuation">.</span><span class="token function">setMaxIdle</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        poolConfig<span class="token punctuation">.</span><span class="token function">setMinIdle</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token constant">JEDIS_POOL</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JedisPool</span><span class="token punctuation">(</span>poolConfig<span class="token punctuation">,</span> <span class="token constant">HOST</span><span class="token punctuation">,</span> <span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token constant">USER</span><span class="token punctuation">,</span> <span class="token constant">PASSWORD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Jedis</span> <span class="token function">jedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">JEDIS_POOL</span><span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>从连接池中获取Jedis实例</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">try</span><span class="token punctuation">(</span><span class="token class-name">Jedis</span> client <span class="token operator">=</span> <span class="token class-name">RedisUtils</span><span class="token punctuation">.</span><span class="token function">jedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    client<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> x <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
    ex<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="使用pipeline" tabindex="-1"><a class="header-anchor" href="#使用pipeline"><span>使用Pipeline</span></a></h3><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">try</span><span class="token punctuation">(</span><span class="token class-name">Jedis</span> client <span class="token operator">=</span> <span class="token class-name">RedisUtils</span><span class="token punctuation">.</span><span class="token function">jedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Pipeline</span> pipeline <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">pipelined</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pipeline<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pipeline<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pipeline<span class="token punctuation">.</span><span class="token function">lpush</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// pipeline.sync();</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">syncAndReturnAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
    ex<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,13),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","Redis客户端.html.vue"]]);export{i as default};
