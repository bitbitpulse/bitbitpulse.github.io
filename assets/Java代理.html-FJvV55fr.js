import{_ as n,o as s,c as a,d as t}from"./app-HBA039kk.js";const p={},o=t(`<h1 id="java代理" tabindex="-1"><a class="header-anchor" href="#java代理"><span>Java代理</span></a></h1><h2 id="静态代理设计模式" tabindex="-1"><a class="header-anchor" href="#静态代理设计模式"><span>静态代理设计模式</span></a></h2><p>示例：</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 主题接口
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 真实对象类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RealSubject</span> <span class="token keyword">implements</span> <span class="token class-name">Subject</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Request Real Subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 代理对象类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxySubject</span> <span class="token keyword">implements</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Subject</span> realSubject<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ProxySubject</span><span class="token punctuation">(</span><span class="token class-name">Subject</span> realSubject<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>realSubject <span class="token operator">=</span> realSubject<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Before Request Real Subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        realSubject<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;After Request Real Subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="jdk动态代理" tabindex="-1"><a class="header-anchor" href="#jdk动态代理"><span>JDK动态代理</span></a></h2><p>JDK动态代理是Java实现动态代理的一种方式，是基于接口的代理模式。</p><p>JDK动态代理通过<code>ava.lang.reflect.Proxy</code>和<code>java.lang.reflect.InvocationHandler</code>这2个接口实现。</p><p>示例：</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 主题接口
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 真实对象类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RealSubject</span> <span class="token keyword">implements</span> <span class="token class-name">Subject</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Request Real Subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * InvocationHandler，在invoke方法中调用真实对象的方法，并根据需要在方法执行前后添加附加功能
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Subject</span> realSubject<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MyInvocationHandler</span><span class="token punctuation">(</span><span class="token class-name">Subject</span> realSubject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>realSubject <span class="token operator">=</span> realSubject<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用真实对象的方法之前执行的附加操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Before Request Real Subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 调用真实对象的方法</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>realSubject<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 调用真实对象的方法之后执行的附加操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;After Request Real Subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 返回方法返回值</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 测试类: 调用Proxy.newProxyInstance()方法，动态创建代理对象
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 类加载器</span>
        <span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> <span class="token class-name">Main</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 目标对象类和代理对象类要实现的接口数组</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> interfaces <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">Subject</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">// 目标对象</span>
        <span class="token class-name">Subject</span> realSubject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RealSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// InvocationHandler</span>
        <span class="token class-name">InvocationHandler</span> invocationHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyInvocationHandler</span><span class="token punctuation">(</span>realSubject<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 动态创建代理对象</span>
        <span class="token class-name">Subject</span> proxy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Subject</span><span class="token punctuation">)</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>classLoader<span class="token punctuation">,</span> interfaces<span class="token punctuation">,</span> invocationHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="cglib动态代理" tabindex="-1"><a class="header-anchor" href="#cglib动态代理"><span>CGLIB动态代理</span></a></h2><p>CGLIB(Code Generation Library)是一个高性能的代码生成库，它扩展了Java语言，为Java类提供了动态生成字节码的功能。</p><p>CGLIB动态代理是基于继承的代理模式，与JDK动态代理不同，CGLIB通过生成目标类的子类来实现代理，因此可以代理没有实现接口的类。</p><p>CGLIB动态代理是通过<code>net.sf.cglib.proxy.Enhancer</code>类和<code>net.sf.cglib.proxy.MethodInterceptor</code>接口实现的。</p><p>示例：</p><p>添加cglib依赖</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/cglib/cglib --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cglib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>cglib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>编写代码</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果使用Java9以上版本的JDK，由于模块化的限制，运行测试类时，需要添加以下JVM参数：</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>--add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.lang.reflect=ALL-UNNAMED
</code></pre></div></div><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 真实对象类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RealSubject</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Request Real Subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * MethodInterceptor: 在intercept方法中，调用真实对象(父类对象)的方法，并在调用真实对象方法前后添加附加操作
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyMethodInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">MethodInterceptor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">,</span> <span class="token class-name">MethodProxy</span> methodProxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用真实对象的方法之前执行的附加操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Before Request Real Subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 调用真实对象(父类对象)的方法</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> methodProxy<span class="token punctuation">.</span><span class="token function">invokeSuper</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 调用真实对象的方法之后执行的附加操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;After Request Real Subject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 测试类: 
 * 1.创建Enhancer对象
 * 2.设置要代理的真实对象类(父类)
 * 3.设置方法拦截器
 * 4.调用create方法创建代理对象
 * 5.使用代理对象调用方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Enhancer</span> enhancer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Enhancer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setSuperclass</span><span class="token punctuation">(</span><span class="token class-name">RealSubject</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyMethodInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RealSubject</span> proxy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">RealSubject</span><span class="token punctuation">)</span> enhancer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,19),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","Java代理.html.vue"]]);export{i as default};
