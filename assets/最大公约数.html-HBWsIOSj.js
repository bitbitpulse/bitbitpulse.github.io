import{_ as a,o as n,c as s,d as t}from"./app-HBA039kk.js";const p={},e=t(`<h1 id="最大公约数" tabindex="-1"><a class="header-anchor" href="#最大公约数"><span>最大公约数</span></a></h1><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p><strong>求2个非负整数的最大公约数?</strong></p><p><strong>说明</strong></p><p>2个非负整数p和q的最大公约数(GCD, greatest common divisor)：</p><ul><li>若q等于0, 则最大公约数为p</li><li>否则, 将p除以q得到余数r, p和q的最大公约数, 即为q和r的最大公约数</li></ul><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">gcp</span><span class="token punctuation">(</span><span class="token keyword">int</span> p<span class="token punctuation">,</span> <span class="token keyword">int</span> q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>q <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> p<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> r <span class="token operator">=</span> p <span class="token operator">%</span> q<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">gcp</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="测试用例" tabindex="-1"><a class="header-anchor" href="#测试用例"><span>测试用例</span></a></h2><p>用例1：</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>// 输入
p=1000, q=300

// 输出
100
</code></pre></div><p>用例2：</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>// 输入
p=132, q=7

// 输出
1
</code></pre></div><h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解"><span>题解</span></a></h2><p>递归</p>`,15),o=[e];function c(l,r){return n(),s("div",null,o)}const d=a(p,[["render",c],["__file","最大公约数.html.vue"]]);export{d as default};
