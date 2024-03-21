import{_ as n,o as a,c as s,d as t}from"./app-HBA039kk.js";const p={},e=t(`<h1 id="spring-cloud-config配置中心" tabindex="-1"><a class="header-anchor" href="#spring-cloud-config配置中心"><span>Spring Cloud Config配置中心</span></a></h1><p>参考：</p><ul><li>Spring官方文档：https://spring.io/projects/spring-cloud-config</li></ul><p>版本信息：</p><ul><li>Spring Cloud 2022.0.0</li></ul><h2 id="config服务器" tabindex="-1"><a class="header-anchor" href="#config服务器"><span>Config服务器</span></a></h2><h3 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h3><p>1.添加<code>spring-cloud-config-server</code>依赖</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-config-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>2.配置存储库</p><p>使用本地文件系统存储配置文件，存储路径为Classpath下的config目录</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.profiles.active</span><span class="token punctuation">=</span><span class="token value attr-value">native</span>
<span class="token key attr-name">spring.cloud.config.server.native.search-locations</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:/config/</span>
</code></pre></div><p>3.启用Config配置服务器</p><p>使用注解<code>@EnableConfigServer</code>启用配置服务器</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableConfigServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfigServerApp</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ConfigServerApp</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>4.验证</p><p>请求 http://localhost:8888/config-client-a/dev</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;config-client-a&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;dev&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;propertySources&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;classpath:/config/config-client-a-dev.properties&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;classpath:/config/config-client-a.properties&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="使用git存储库" tabindex="-1"><a class="header-anchor" href="#使用git存储库"><span>使用Git存储库</span></a></h3><p>默认使用Git作为配置文件存储库</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.cloud.config.server.git.uri</span><span class="token punctuation">=</span><span class="token value attr-value">git@github.com:bitbitpulse/config-repo.git</span>
<span class="token key attr-name">spring.cloud.config.server.git.username</span><span class="token punctuation">=</span>
<span class="token key attr-name">spring.cloud.config.server.git.password</span><span class="token punctuation">=</span>
<span class="token key attr-name">spring.cloud.config.server.git.default-label</span><span class="token punctuation">=</span><span class="token value attr-value">main</span>
<span class="token key attr-name">spring.cloud.config.server.git.try-master-branch</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.cloud.config.server.git.skip-ssl-validation</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.cloud.config.server.git.timeout</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
</code></pre></div><h2 id="config客户端" tabindex="-1"><a class="header-anchor" href="#config客户端"><span>Config客户端</span></a></h2><h3 id="快速开始-1" tabindex="-1"><a class="header-anchor" href="#快速开始-1"><span>快速开始</span></a></h3><p>1.添加依赖</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-config-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-bootstrap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>2.在bootstrap配置文件中配置服务器信息</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">9101</span>
<span class="token key attr-name">spring.application.name</span><span class="token punctuation">=</span><span class="token value attr-value">config-client-a</span>

<span class="token key attr-name">spring.profiles.active</span><span class="token punctuation">=</span><span class="token value attr-value">dev</span>

<span class="token key attr-name">spring.cloud.config.uri</span><span class="token punctuation">=</span><span class="token value attr-value">http://localhost:8888</span>
<span class="token key attr-name">spring.cloud.config.request-connect-timeout</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">spring.cloud.config.request-read-timeout</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
</code></pre></div><p>3.验证</p><p>在Config服务器的配置文件存储库中，创建配置文件。这里创建3个配置文件：</p><ul><li><p>config-client-a.properties</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">env</span><span class="token punctuation">=</span><span class="token value attr-value">default</span>
</code></pre></div></li><li><p>config-client-a-dev.properties</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">env</span><span class="token punctuation">=</span><span class="token value attr-value">dev</span>
</code></pre></div></li><li><p>config-client-a-prod.properties</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">env</span><span class="token punctuation">=</span><span class="token value attr-value">prod</span>
</code></pre></div></li></ul><p>在Config客户端应用中，定义接口，返回远程配置中的env值</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/config-client-a&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${env}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> env<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/env&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> env<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>启动Config服务器和客户端应用，请求：http://localhost:9101/config-client-a/env，返回dev。</p><h3 id="动态刷新配置" tabindex="-1"><a class="header-anchor" href="#动态刷新配置"><span>动态刷新配置</span></a></h3><p>添加<em>spring-boot-starter-actuator</em>依赖</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>向外暴露端点*/actuator/refresh*</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">management.endpoints.web.exposure.include</span><span class="token punctuation">=</span><span class="token value attr-value">*</span>
</code></pre></div><p>添加<code>@RefreshScope</code>注解</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/config-client-a&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RefreshScope</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${env}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> env<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/env&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> env<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>配置服务器更改配置后，客户端调用刷新端点 <em>/actuator/refresh</em> 即可动态刷新配置</p><p>POST http://localhost:9101/actuator/refresh，返回发生变更的配置项</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token string">&quot;env&quot;</span>
<span class="token punctuation">]</span>
</code></pre></div>`,43),o=[e];function c(l,u){return a(),s("div",null,o)}const r=n(p,[["render",c],["__file","Spring Cloud Config配置中心.html.vue"]]);export{r as default};
