import{_ as n,o as s,c as a,d as t}from"./app-HBA039kk.js";const e={},p=t(`<h1 id="redis高级特性" tabindex="-1"><a class="header-anchor" href="#redis高级特性"><span>Redis高级特性</span></a></h1><h2 id="redis事务" tabindex="-1"><a class="header-anchor" href="#redis事务"><span>Redis事务</span></a></h2><p>Redis事务通过以下命令实现的：</p><ul><li><code>multi</code>：开始事务</li><li><code>exec</code>：提交事务，提交命令到队列中</li><li><code>discard</code>：回滚事务，清空队列中的所有命令</li><li><code>watch</code>：监控1个或多个键，在事务执行期间被修改过，则事务执行失败</li><li><code>unwatch</code>：取消对所有键的监控</li></ul><p>示例：正常提交事务</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi
OK
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> incr num
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> incr num
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> hello <span class="token string">&quot;world&quot;</span>
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">exec</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">3</span><span class="token punctuation">)</span> OK
</code></pre></div><p>示例：放弃事务</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi
OK
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> incr num
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> incr num
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> discard
OK
</code></pre></div><p>示例：监控key</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">watch</span> num
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi
OK
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> incr num
QUEUED
<span class="token number">127.0</span>.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token builtin class-name">exec</span>
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
</code></pre></div><h2 id="redis管道" tabindex="-1"><a class="header-anchor" href="#redis管道"><span>Redis管道</span></a></h2><h2 id="redis发布订阅模式" tabindex="-1"><a class="header-anchor" href="#redis发布订阅模式"><span>Redis发布订阅模式</span></a></h2>`,12),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","Redis高级特性.html.vue"]]);export{u as default};
