import{_ as n,o as a,c as s,d as p}from"./app-HBA039kk.js";const t={},o=p(`<h1 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式"><span>适配器模式</span></a></h1><p>适配器模式（Adapter Pattern），是一种结构型模式，用于将现有接口转换为客户端需要的另一个接口。</p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h2><p>以音乐播放器为例，假设现在有一个音乐播放器，仅支持播放mp3格式的音乐，而现在需要支持其它格式（mp4，avi等）。可以使用适配器模式来实现。</p><p>定义接口<code>MediaPlayer</code>，表示播放器</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MediaPlayer</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">String</span> mediaType<span class="token punctuation">,</span> <span class="token class-name">String</span> filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>定义<code>AudiaPlayer</code>类，实现<code>MediaPlayer</code>接口，表示音乐播放器，支持mp3格式</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AudioPlayer</span> <span class="token keyword">implements</span> <span class="token class-name">MediaPlayer</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">String</span> mediaType<span class="token punctuation">,</span> <span class="token class-name">String</span> filename<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;mp3&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>mediaType<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Playing mp3 file: &quot;</span> <span class="token operator">+</span> filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid media!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>现在，还需要支持mp4和avi格式。定义<code>AdvancedAudioPlayer</code>类</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdvancedAudioPlayer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">playMp4</span><span class="token punctuation">(</span><span class="token class-name">String</span> filename<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Playing mp4 file: &quot;</span> <span class="token operator">+</span> filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">playAvi</span><span class="token punctuation">(</span><span class="token class-name">String</span> filename<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Playing avi file: &quot;</span> <span class="token operator">+</span> filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>然后，定义适配器类<code>AudioAdapter</code>，适配<code>AudioPlayer</code>，并支持mp4和avi格式</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AudioAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">MediaPlayer</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">AudioPlayer</span> audioPlayer<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">AudioAdapter</span><span class="token punctuation">(</span><span class="token class-name">AudioPlayer</span> audioPlayer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>audioPlayer <span class="token operator">=</span> audioPlayer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">String</span> mediaType<span class="token punctuation">,</span> <span class="token class-name">String</span> filename<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;mp3&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>mediaType<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            audioPlayer<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span>mediaType<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">AdvancedAudioPlayer</span> advancedAudioPlayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AdvancedAudioPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;mp4&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>mediaType<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                advancedAudioPlayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AdvancedAudioPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                advancedAudioPlayer<span class="token punctuation">.</span><span class="token function">playMp4</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;avi&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>mediaType<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                advancedAudioPlayer<span class="token punctuation">.</span><span class="token function">playAvi</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="使用适配器类" tabindex="-1"><a class="header-anchor" href="#使用适配器类"><span>使用适配器类</span></a></h2><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MediaPlayer</span> player <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AudioAdapter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AudioPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        player<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token string">&quot;mp3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1998.mp3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        player<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token string">&quot;mp4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1998.mp4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        player<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token string">&quot;avi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1998.avi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="适配器类优缺点" tabindex="-1"><a class="header-anchor" href="#适配器类优缺点"><span>适配器类优缺点</span></a></h2><p>优点：</p><ul><li>通过引入适配器类，复用已有的接口</li></ul>`,17),e=[o];function c(l,u){return a(),s("div",null,e)}const k=n(t,[["render",c],["__file","适配器模式.html.vue"]]);export{k as default};
