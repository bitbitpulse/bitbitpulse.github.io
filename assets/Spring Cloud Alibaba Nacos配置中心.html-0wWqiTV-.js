import{_ as a,o as n,c as s,d as p}from"./app-HBA039kk.js";const t="/assets/20240206155543-LupNYIfn.png",e="/assets/20240206155746-lnp3SRvU.png",o="/assets/20240206160420-PDNrVxRg.png",c="/assets/20240206161017-8HVbnJLC.png",l={},i=p(`<h1 id="spring-cloud-alibaba-nacos配置中心" tabindex="-1"><a class="header-anchor" href="#spring-cloud-alibaba-nacos配置中心"><span>Spring Cloud Alibaba Nacos配置中心</span></a></h1><p>参考：</p><ul><li>https://sca.aliyun.com/zh-cn/docs/next/user-guide/nacos/quick-start</li><li>https://sca.aliyun.com/zh-cn/docs/next/user-guide/nacos/advanced-guide</li></ul><p>版本信息：</p><ul><li>nacos 2.2.3</li><li>Spring Cloud Alibaba 2022.0.0.0</li></ul><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2><h3 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖"><span>添加依赖</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><p>在application配置文件中，添加配置：</p><ul><li>必要配置：应用名和端口</li><li>Nacos配置中心相关配置：Nacos地址、用户名、密码</li><li>远程配置：使用<code>spring.config.import</code>导入nacos中创建的配置文件</li></ul><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">9001</span>
<span class="token key attr-name">spring.application.name</span><span class="token punctuation">=</span><span class="token value attr-value">nacos-provider-a</span>

<span class="token key attr-name">spring.cloud.nacos.server-addr</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1:8848</span>
<span class="token key attr-name">spring.cloud.nacos.username</span><span class="token punctuation">=</span><span class="token value attr-value">nacos</span>
<span class="token key attr-name">spring.cloud.nacos.password</span><span class="token punctuation">=</span><span class="token value attr-value">nacos</span>

<span class="token key attr-name">spring.cloud.nacos.config.server-addr</span><span class="token punctuation">=</span><span class="token value attr-value">\${spring.cloud.nacos.server-addr}</span>
<span class="token key attr-name">spring.cloud.nacos.config.username</span><span class="token punctuation">=</span><span class="token value attr-value">\${spring.cloud.nacos.username}</span>
<span class="token key attr-name">spring.cloud.nacos.config.password</span><span class="token punctuation">=</span><span class="token value attr-value">\${spring.cloud.nacos.password}</span>

<span class="token key attr-name">spring.config.import[0]</span><span class="token punctuation">=</span><span class="token value attr-value">nacos:nacos-provider-a.properties</span>
</code></pre></div><p>在nacos控制面板中创建配置</p><p><img src="`+t+`" alt=""></p><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证"><span>验证</span></a></h3><p>使用<code>@Value</code>注入nacos中定义的配置项</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${profile}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> profile<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/profile&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">profile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> profile<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><p>请求接口：http://localhost:9001/provider-a/profile，成功读取到远程配置profile的值default</p><h2 id="使用bootstrap配置文件" tabindex="-1"><a class="header-anchor" href="#使用bootstrap配置文件"><span>使用bootstrap配置文件</span></a></h2><p>导入Nacos远程配置，除了上面使用的<code>spring.config.import</code>，还可以使用 <em>bootstrap</em> 文件。二者只能2选1。</p><p><strong>1. 添加<code>spring-cloud-starter-bootstrap</code>依赖</strong></p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-bootstrap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>2. 创建bootstrap配置文件</strong></p><p><em>bootstrap.properties</em></p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">9001</span>
<span class="token key attr-name">spring.application.name</span><span class="token punctuation">=</span><span class="token value attr-value">nacos-provider-a</span>

<span class="token key attr-name">spring.cloud.nacos.server-addr</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1:8848</span>
<span class="token key attr-name">spring.cloud.nacos.username</span><span class="token punctuation">=</span><span class="token value attr-value">nacos</span>
<span class="token key attr-name">spring.cloud.nacos.password</span><span class="token punctuation">=</span><span class="token value attr-value">nacos</span>

<span class="token key attr-name">spring.cloud.nacos.config.server-addr</span><span class="token punctuation">=</span><span class="token value attr-value">\${spring.cloud.nacos.server-addr}</span>
<span class="token key attr-name">spring.cloud.nacos.config.username</span><span class="token punctuation">=</span><span class="token value attr-value">\${spring.cloud.nacos.username}</span>
<span class="token key attr-name">spring.cloud.nacos.config.password</span><span class="token punctuation">=</span><span class="token value attr-value">\${spring.cloud.nacos.password}</span>

<span class="token key attr-name">spring.cloud.nacos.config.file-extension</span><span class="token punctuation">=</span><span class="token value attr-value">properties</span>
<span class="token key attr-name">spring.cloud.nacos.config.name</span><span class="token punctuation">=</span><span class="token value attr-value">\${spring.application.name}</span>

</code></pre></div><h2 id="使用profile" tabindex="-1"><a class="header-anchor" href="#使用profile"><span>使用Profile</span></a></h2><p>Nacos支持使用<code>spring.profiles.active</code>指定生效的配置文件。</p><p><strong>1. 在Nacos控制台中新增2个配置文件</strong></p><ul><li><p>Data ID为 <em>nacos-provider-a.dev.properties</em></p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">profile</span><span class="token punctuation">=</span><span class="token value attr-value">dev</span>
</code></pre></div></li><li><p>Data ID为 <em>nacos-provider-a.prod.properties</em></p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">profile</span><span class="token punctuation">=</span><span class="token value attr-value">prod</span>
</code></pre></div></li></ul><p><strong>2.1 对于<code>spring.config.import</code>的配置方式</strong></p><ul><li><p>修改application配置文件，使用<code>spring.profiles.active</code>指定生效的配置</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.profiles.active</span><span class="token punctuation">=</span><span class="token value attr-value">dev</span>
</code></pre></div></li><li><p>使用<code>spring.config.import</code>指定每个Profile的远程配置文件名称(使用optional开头的import，表示文件不存在时，直接忽略该配置而不报错)</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.cloud.nacos.config.file-extension</span><span class="token punctuation">=</span><span class="token value attr-value">properties</span>

<span class="token key attr-name">spring.config.import[0]</span><span class="token punctuation">=</span><span class="token value attr-value">nacos:\${spring.application.name}.\${spring.cloud.nacos.config.file-extension}</span>
<span class="token key attr-name">spring.config.import[1]</span><span class="token punctuation">=</span><span class="token value attr-value">optional:nacos:\${spring.application.name}-\${spring.profiles.active}.\${spring.cloud.nacos.config.file-extension}</span>
</code></pre></div></li></ul><p><strong>2.2 对于bootstrap文件的配置方式</strong></p><p>只需要使用<code>spring.profiles.active</code>指定生效的配置即可。</p><p><strong>3. 验证</strong></p><p><code>spring.profiles.active</code>值为null、default、dev、prod时，接口 http://localhost:9001/provider-a/profile 返回相应配置的值。</p><h2 id="使用命名空间" tabindex="-1"><a class="header-anchor" href="#使用命名空间"><span>使用命名空间</span></a></h2><p>命名空间用于配置隔离：</p><ul><li>不同的命名空间下，可以存在相同名称的Group和DataID。一般用来区分开发、测试、生产环境</li><li>默认命名空间ID为public</li></ul><p><strong>1. 在nacos控制面板中创建命名空间</strong></p><p><img src="`+e+'" alt=""></p><p><strong>2. 在每个命名空间下，创建配置文件</strong></p><p>例如：在dev命名空间下，创建DataID为 <em>nacos-provider-a.properties</em> 的配置文件</p><p><img src="'+o+`" alt=""></p><p><strong>3.在bootstrap文件中，指定命名空间ID</strong></p><blockquote><p>注意，<code>spring.cloud.nacos.config.namespace</code>只在bootstrap配置文件中生效</p></blockquote><p>设置为dev命名空间</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.profiles.active</span><span class="token punctuation">=</span>
<span class="token key attr-name">spring.cloud.nacos.config.namespace</span><span class="token punctuation">=</span><span class="token value attr-value">635a7da6-d6bb-4ca7-964d-ba1430b17c14</span>
</code></pre></div><p><strong>验证</strong></p><p>定义接口</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${namespace}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> namespace<span class="token punctuation">;</span>

<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/namespace&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">namespace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> namespace<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>请求 http://localhost:9001/provider-a/namespace，返回 dev</p><h2 id="使用分组" tabindex="-1"><a class="header-anchor" href="#使用分组"><span>使用分组</span></a></h2><p>分组可用来对配置进行逻辑上的分类：</p><ul><li>一个命名空间下，可以存在DataID相同，Group不同的配置</li><li>默认分组为DEFAULT_GROUP</li></ul><p><strong>1.在nacos控制面板新建配置文件，并设置分组</strong></p><p><img src="`+c+`" alt=""></p><p><strong>2.在bootstrap配置文件中，指定分组</strong></p><blockquote><p>注意，<code>spring.cloud.nacos.config.group</code>只在bootstrap配置文件中生效</p></blockquote><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.profiles.active</span><span class="token punctuation">=</span>
<span class="token key attr-name">spring.cloud.nacos.config.namespace</span><span class="token punctuation">=</span><span class="token value attr-value">34cb543f-3794-4020-93fb-b242f9a3c45a</span>
<span class="token key attr-name">spring.cloud.nacos.config.group</span><span class="token punctuation">=</span><span class="token value attr-value">v1.0</span>
</code></pre></div><p><strong>验证</strong></p><p>定义接口</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${group}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> group<span class="token punctuation">;</span>

<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/group&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> group<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>请求 http://localhost:9001/provider-a/group，返回 v1.0</p><h2 id="动态刷新配置" tabindex="-1"><a class="header-anchor" href="#动态刷新配置"><span>动态刷新配置</span></a></h2><p>使用<code>@RefreshScope</code>注解，可以在配置发生变化时，动态刷新配置。</p><blockquote><p>注意，<code>@RefreshScope</code>只对被标记的Bean生效，无法全局启用。</p></blockquote><p><strong>验证</strong></p><p>在控制器类上使用<code>@RefreshScope</code></p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/provider-a&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RefreshScope</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello, %s !!!&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${profile}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> profile<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/profile&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">profile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> profile<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${namespace}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> namespace<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/namespace&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">namespace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> namespace<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${group}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> group<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/group&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> group<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在Nacos控制台修改配置，请求相应的接口，配置自动刷新。</p><h2 id="_3种配置来源" tabindex="-1"><a class="header-anchor" href="#_3种配置来源"><span>3种配置来源</span></a></h2><p>有3种方式从Nacos获取配置信息，优先级从高到底依次如下：</p><ol><li><p>通过应用名+Profile组合的Data ID配置</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.application.name</span><span class="token punctuation">=</span><span class="token value attr-value">nacos-provider-a</span>
<span class="token key attr-name">spring.profiles.active</span><span class="token punctuation">=</span>

<span class="token key attr-name">spring.cloud.nacos.config.file-extension</span><span class="token punctuation">=</span><span class="token value attr-value">properties</span>
<span class="token key attr-name">spring.cloud.nacos.config.name</span><span class="token punctuation">=</span><span class="token value attr-value">\${spring.application.name}</span>
</code></pre></div></li><li><p>扩展配置</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.cloud.nacos.config.extension-configs[0].group</span><span class="token punctuation">=</span><span class="token value attr-value">v1.0</span>
<span class="token key attr-name">spring.cloud.nacos.config.extension-configs[0].data-id</span><span class="token punctuation">=</span><span class="token value attr-value">custom.properties</span>
<span class="token key attr-name">spring.cloud.nacos.config.extension-configs[0].refresh</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre></div></li><li><p>共享配置</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.cloud.nacos.config.shared-configs[0].group</span><span class="token punctuation">=</span><span class="token value attr-value">v1.0</span>
<span class="token key attr-name">spring.cloud.nacos.config.shared-configs[0].data-id</span><span class="token punctuation">=</span><span class="token value attr-value">mysql.properties</span>
<span class="token key attr-name">spring.cloud.nacos.config.shared-configs[0].refresh</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre></div></li></ol><h2 id="其它配置项" tabindex="-1"><a class="header-anchor" href="#其它配置项"><span>其它配置项</span></a></h2><p>其它配置项及其默认值</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># 是否启用nacos配置</span>
<span class="token key attr-name">spring.cloud.nacos.config.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment"># 编码</span>
<span class="token key attr-name">spring.cloud.nacos.config.encode</span><span class="token punctuation">=</span><span class="token value attr-value">UTF-8</span>
<span class="token comment"># 前缀</span>
<span class="token key attr-name">spring.cloud.nacos.config.prefix</span><span class="token punctuation">=</span><span class="token value attr-value">\${spring.application.name}</span>
<span class="token comment"># 配置文件扩展名</span>
<span class="token key attr-name">spring.cloud.nacos.config.file-extension</span><span class="token punctuation">=</span><span class="token value attr-value">properties</span>
<span class="token comment"># 自动刷新配置?</span>
<span class="token key attr-name">spring.cloud.nacos.config.refresh-enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment"># import检查: spring.config.import</span>
<span class="token key attr-name">spring.cloud.nacos.config.import-check.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre></div>`,76),r=[i];function u(k,d){return n(),s("div",null,r)}const v=a(l,[["render",u],["__file","Spring Cloud Alibaba Nacos配置中心.html.vue"]]);export{v as default};
