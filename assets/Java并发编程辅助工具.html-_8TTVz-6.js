import{_ as n,o as a,c as s,d as t}from"./app-HBA039kk.js";const p={},o=t(`<h1 id="java并发编程辅助工具" tabindex="-1"><a class="header-anchor" href="#java并发编程辅助工具"><span>Java并发编程辅助工具</span></a></h1><h2 id="threadlocal-t" tabindex="-1"><a class="header-anchor" href="#threadlocal-t"><span><code>ThreadLocal&lt;T&gt;</code></span></a></h2><p><code>ThreadLocal&lt;T&gt;</code>，线程本地变量，常用于需要线程隔离的场景。</p><p>提供了下面几个API：</p><ul><li><code>ThreadLocal()</code>，构造器，返回默认值为null的<code>ThreadLocal</code>实例</li><li><code>static &lt;S&gt; ThreadLocal&lt;S&gt; withInitial(Supplier&lt;? extends S&gt; supplier)</code>，静态方法，返回<code>ThreadLocal</code>实例，需要传递1个返回默认值的<code>Supplier</code></li><li><code>T get()</code>，获取值</li><li><code>void set(T value)</code>，设置值</li><li><code>void remove()</code>，移除值</li></ul><p>使用示例：</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> threadNum <span class="token operator">=</span> <span class="token class-name">ThreadLocal</span><span class="token punctuation">.</span><span class="token function">withInitial</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s: %d%n&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> threadNum<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        threadNum<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s: %d%n&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> threadNum<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        threadNum<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s: %d%n&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> threadNum<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        threadNum<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s: %d%n&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> threadNum<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        threadNum<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="countdownlatch" tabindex="-1"><a class="header-anchor" href="#countdownlatch"><span><code>CountDownLatch</code></span></a></h2><p><code>CountDownLatch</code>倒数闩，用于线程等待。提供了以下API：</p><ul><li><code>CountDownLatch(int count)</code>，构造器</li><li><code>void countDown()</code>，计数器减1</li><li><code>void await()</code>，阻塞当前线程，直到计数器为0</li><li><code>boolean await(long timeout, TimeUnit unit)</code>，阻塞当前线程，直到计数器为0，返回true；或者超时，返回false</li></ul><p>使用示例：</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">THREAD_COUNT</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建CountDownLatch</span>
    <span class="token class-name">CountDownLatch</span> latch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CountDownLatch</span><span class="token punctuation">(</span><span class="token constant">THREAD_COUNT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Thread</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token class-name">Runnable</span> task <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 倒数闩计数器减1</span>
        latch<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ts<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ts<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 主线程等待子线程的执行，直到计数器为0</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        latch<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="locksupport" tabindex="-1"><a class="header-anchor" href="#locksupport"><span><code>LockSupport</code></span></a></h2><p><code>LockSupport</code>提供了一系列的方法，用来暂停和恢复线程：</p><ul><li><code>park</code>，暂停线程</li><li><code>unpark</code>，恢复指定的线程</li></ul><p>示例：</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 喊一声&quot;和尚&quot;,念一句&quot;阿弥陀佛&quot;
 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Monk</span> monk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Monk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    monk<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">hasNextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> line <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;和尚&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">unpark</span><span class="token punctuation">(</span>monk<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Monk</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;阿弥陀佛&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="使用volatile保证共享变量的可见性" tabindex="-1"><a class="header-anchor" href="#使用volatile保证共享变量的可见性"><span>使用<code>volatile</code>保证共享变量的可见性</span></a></h2><p><code>volatile</code>可以保证共享变量的可见性，但无法保证其原子性和有序性。</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">volatile</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="juc原子类" tabindex="-1"><a class="header-anchor" href="#juc原子类"><span>JUC原子类</span></a></h2><p>在JDK的<em>java.util.concurrent.atomic</em>包下，提供了一些基于CAS自旋实现的轻量级原子操作类。</p><h3 id="基本类型原子类" tabindex="-1"><a class="header-anchor" href="#基本类型原子类"><span>基本类型原子类</span></a></h3><p>包括：</p><ul><li><code>AtomicBoolean</code></li><li><code>AtomicInteger</code></li><li><code>AtomicLong</code></li></ul><p>使用示例：</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 基本类型原子类示例:
 * 开启10个线程，每个线程执行100次加1操作
 */</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">atomicIntegerTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">int</span> threadCount <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token class-name">CountDownLatch</span> latch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CountDownLatch</span><span class="token punctuation">(</span>threadCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建原子类对象</span>
    <span class="token class-name">AtomicInteger</span> atomicInteger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Thread</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">[</span>threadCount<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> threadCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 原子类进行加1操作</span>
                atomicInteger<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            latch<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ts<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> t <span class="token operator">:</span> ts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        latch<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> expectValue <span class="token operator">=</span> threadCount <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取原子类值</span>
    <span class="token keyword">int</span> actualValue <span class="token operator">=</span> atomicInteger<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;预期值: %d, 实际值: %d&quot;</span><span class="token punctuation">,</span> expectValue<span class="token punctuation">,</span> actualValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="数组类型原子类" tabindex="-1"><a class="header-anchor" href="#数组类型原子类"><span>数组类型原子类</span></a></h3><p>包括：</p><ul><li><code>AtomicIntegerArray</code></li><li><code>AtomicLongArray</code></li><li><code>AtomicReferenceArray&lt;E&gt;</code></li></ul><p>使用示例：</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token class-name">AtomicIntegerArray</span> nums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicIntegerArray</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
nums<span class="token punctuation">.</span><span class="token function">getAndAdd</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="引用类型原子类" tabindex="-1"><a class="header-anchor" href="#引用类型原子类"><span>引用类型原子类</span></a></h3><p>包括：</p><ul><li><code>AtomicReference&lt;V&gt;</code></li><li><code>AtomicMarkableReference&lt;V&gt;</code></li><li><code>AtomicStampedReference&lt;V&gt;</code></li></ul><p>使用示例：</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token string">&quot;tim&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">AtomicReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> personRef <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
personRef<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Person</span> newPerson <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
personRef<span class="token punctuation">.</span><span class="token function">compareAndSet</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> newPerson<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>personRef<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="字段更新原子类" tabindex="-1"><a class="header-anchor" href="#字段更新原子类"><span>字段更新原子类</span></a></h3><p>包括：</p><ul><li><code>AtomicIntegerFieldUpdater&lt;T&gt;</code></li><li><code>AtomicLongFieldUpdater&lt;T&gt;</code></li><li><code>AtomicReferenceFieldUpdater&lt;T,V&gt;</code></li></ul><p>使用示例：</p><p>1.使用<code>volatile</code>关键字修饰要更新的字段</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">volatile</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>2.使用<code>newUpdater()</code>方法，创建更新器对象</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">AtomicReferenceFieldUpdater</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> nameUpdater <span class="token operator">=</span> <span class="token class-name">AtomicReferenceFieldUpdater</span><span class="token punctuation">.</span><span class="token function">newUpdater</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">AtomicIntegerFieldUpdater</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> ageUpdater <span class="token operator">=</span> <span class="token class-name">AtomicIntegerFieldUpdater</span><span class="token punctuation">.</span><span class="token function">newUpdater</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token string">&quot;tim&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
nameUpdater<span class="token punctuation">.</span><span class="token function">getAndSet</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ageUpdater<span class="token punctuation">.</span><span class="token function">getAndSet</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="juc容器类" tabindex="-1"><a class="header-anchor" href="#juc容器类"><span>JUC容器类</span></a></h2><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list"><span><code>List</code></span></a></h3><p>包括：</p><ul><li><code>CopyOnWriteArrayList&lt;E&gt;</code></li></ul><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span><code>Set</code></span></a></h3><p>包括：</p><ul><li><code>CopyOnWriteArraySet&lt;E&gt;</code></li><li><code>ConcurrentSkipListSet&lt;E&gt;</code></li></ul><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span><code>Map</code></span></a></h3><p>包括：</p><ul><li><code>ConcurrentHashMap&lt;K,V&gt;</code></li><li><code>ConcurrentSkipListMap&lt;K,V&gt;</code></li></ul><h3 id="queue" tabindex="-1"><a class="header-anchor" href="#queue"><span><code>Queue</code></span></a></h3><p>包括：</p><ul><li><code>ConcurrentLinkedQueue&lt;E&gt;</code>，单向队列</li><li><code>ConcurrentLinkedDeque&lt;E&gt;</code>，双向队列</li><li><code>ArrayBlockingQueue&lt;E&gt;</code></li><li><code>LinkedBlockingQueue&lt;E&gt;</code></li><li><code>PriorityBlockingQueue&lt;E&gt;</code></li><li><code>DelayQueue&lt;E extends Delayed&gt;</code></li><li><code>SynchronousQueue&lt;E&gt;</code></li></ul>`,58),c=[o];function e(u,l){return a(),s("div",null,c)}const i=n(p,[["render",e],["__file","Java并发编程辅助工具.html.vue"]]);export{i as default};
