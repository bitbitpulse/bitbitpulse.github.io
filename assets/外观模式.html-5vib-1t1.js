import{_ as n,o as s,c as a,d as t}from"./app-HBA039kk.js";const p={},o=t(`<h1 id="外观模式" tabindex="-1"><a class="header-anchor" href="#外观模式"><span>外观模式</span></a></h1><p>外观模式，也称为门面模式（Facade Pattern），是一种结构型模式。提供1个统一的接口，供客户端访问子系统中的一组接口。隐藏了系统的复杂性，客户端只需要与Facade接口进行交互。</p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h2><p>以家庭影院为例：家庭影院中，有音响、灯光控制器、投影仪，如果要观看电影，需要依次进行一系列固定的操作，同样，如果要结束观看，也需要进行一系列固定的操作。</p><p>可以用外观模式，简化客户端调用。</p><p>定义音响、灯光控制器、投影仪类</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Stereo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;音响: 打开&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;音响: 关闭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVolume</span><span class="token punctuation">(</span><span class="token keyword">int</span> volume<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;音响: 设置音量: &quot;</span> <span class="token operator">+</span> volume<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LightController</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;灯光控制器: 打开&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;灯光控制器: 关闭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dim</span><span class="token punctuation">(</span><span class="token keyword">int</span> level<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;灯光控制器: 设置等级: &quot;</span> <span class="token operator">+</span> level<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Projector</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;投影仪: 打开&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;投影仪: 关闭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setInput</span><span class="token punctuation">(</span><span class="token class-name">String</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;投影仪: 设置输入: &quot;</span> <span class="token operator">+</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>创建家庭影院类（外观类），定义观看电影和结束电影的方法</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HomeTheaterFacade</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Projector</span> projector<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Stereo</span> stereo<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">LightController</span> lightController<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">HomeTheaterFacade</span><span class="token punctuation">(</span><span class="token class-name">Stereo</span> stereo<span class="token punctuation">,</span> <span class="token class-name">Projector</span> projector<span class="token punctuation">,</span> <span class="token class-name">LightController</span> lightController<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stereo <span class="token operator">=</span> stereo<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>projector <span class="token operator">=</span> projector<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lightController <span class="token operator">=</span> lightController<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 观看电影
     * */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">watchMovie</span><span class="token punctuation">(</span><span class="token class-name">String</span> input<span class="token punctuation">,</span> <span class="token keyword">int</span> volume<span class="token punctuation">,</span> <span class="token keyword">int</span> lightLevel<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请稍后，精彩即将开启...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stereo<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stereo<span class="token punctuation">.</span><span class="token function">setVolume</span><span class="token punctuation">(</span>volume<span class="token punctuation">)</span><span class="token punctuation">;</span>
        projector<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        projector<span class="token punctuation">.</span><span class="token function">setInput</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
        lightController<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        lightController<span class="token punctuation">.</span><span class="token function">dim</span><span class="token punctuation">(</span>lightLevel<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 结束电影
     * */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">endMovie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;正在关闭...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stereo<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        projector<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        lightController<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="使用外观类" tabindex="-1"><a class="header-anchor" href="#使用外观类"><span>使用外观类</span></a></h2><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Stereo</span> stereo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stereo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Projector</span> projector <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Projector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">LightController</span> lightController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LightController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">HomeTheaterFacade</span> homeTheaterFacade <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HomeTheaterFacade</span><span class="token punctuation">(</span>stereo<span class="token punctuation">,</span> projector<span class="token punctuation">,</span> lightController<span class="token punctuation">)</span><span class="token punctuation">;</span>
        homeTheaterFacade<span class="token punctuation">.</span><span class="token function">watchMovie</span><span class="token punctuation">(</span><span class="token string">&quot;教父4&quot;</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        homeTheaterFacade<span class="token punctuation">.</span><span class="token function">endMovie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","外观模式.html.vue"]]);export{i as default};
