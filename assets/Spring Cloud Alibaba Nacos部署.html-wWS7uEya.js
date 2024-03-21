import{_ as a,o as n,c as s,d as e}from"./app-HBA039kk.js";const t={},o=e(`<h1 id="spring-cloud-alibaba-nacos部署" tabindex="-1"><a class="header-anchor" href="#spring-cloud-alibaba-nacos部署"><span>Spring Cloud Alibaba Nacos部署</span></a></h1><p>参考：</p><ul><li>https://nacos.io/docs/latest/what-is-nacos/</li><li>https://github.com/alibaba/nacos</li></ul><p>版本信息：</p><ul><li>nacos 2.2.3</li></ul><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h2><p>https://github.com/alibaba/nacos/releases</p><h2 id="单机模式" tabindex="-1"><a class="header-anchor" href="#单机模式"><span>单机模式</span></a></h2><p><strong>安装</strong></p><p>解压到安装目录即可。</p><p><strong>启动</strong></p><p><code>cd path/to/nacos/bin/</code></p><p><code>startup.cmd -m standalone</code></p><p>访问 http://localhost:8848/nacos/</p><p><strong>停止</strong></p><p><code>shutdown.cmd</code></p><h2 id="使用mysql数据库存储数据" tabindex="-1"><a class="header-anchor" href="#使用mysql数据库存储数据"><span>使用mysql数据库存储数据</span></a></h2><p>1.创建数据库nacos</p><p>2.初始化数据库，执行初始化sql文件 <em>nacos/config/mysql-schema.sql</em></p><p>3.修改 <em>nacos/config/application.properties</em></p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment">### If use MySQL as datasource:</span>
<span class="token comment">### Deprecated configuration property, it is recommended to use \`spring.sql.init.platform\` replaced.</span>
<span class="token comment">#spring.datasource.platform=mysql</span>
<span class="token key attr-name">spring.sql.init.platform</span><span class="token punctuation">=</span><span class="token value attr-value">mysql</span>

<span class="token comment">### Count of DB:</span>
<span class="token key attr-name">db.num</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>

<span class="token comment">### Connect URL of DB:</span>
<span class="token key attr-name">db.url.0</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://127.0.0.1:3306/nacos?characterEncoding=utf8&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true&amp;useUnicode=true&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai</span>
<span class="token key attr-name">db.user.0</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">db.password.0</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
</code></pre></div><p>4.重启nacos</p><h2 id="开启用户鉴权" tabindex="-1"><a class="header-anchor" href="#开启用户鉴权"><span>开启用户鉴权</span></a></h2><p>修改 <em>nacos/config/application.properties</em></p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment">### The auth system to use, currently only &#39;nacos&#39; and &#39;ldap&#39; is supported:</span>
<span class="token key attr-name">nacos.core.auth.system.type</span><span class="token punctuation">=</span><span class="token value attr-value">nacos</span>

<span class="token comment">### 开启鉴权</span>
<span class="token key attr-name">nacos.core.auth.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token comment">### Turn on/off caching of auth information. By turning on this switch, the update of auth information would have a 15 seconds delay.</span>
<span class="token key attr-name">nacos.core.auth.caching.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token comment">### Since 1.4.1, Turn on/off white auth for user-agent: nacos-server, only for upgrade from old version.</span>
<span class="token key attr-name">nacos.core.auth.enable.userAgentAuthWhite</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>

<span class="token comment">### Since 1.4.1, worked when nacos.core.auth.enabled=true and nacos.core.auth.enable.userAgentAuthWhite=false.</span>
<span class="token comment">### 用户名/密码</span>
<span class="token key attr-name">nacos.core.auth.server.identity.key</span><span class="token punctuation">=</span><span class="token value attr-value">nacos</span>
<span class="token key attr-name">nacos.core.auth.server.identity.value</span><span class="token punctuation">=</span><span class="token value attr-value">nacos</span>

<span class="token comment">### worked when nacos.core.auth.system.type=nacos</span>
<span class="token comment">### The token expiration in seconds:</span>
<span class="token key attr-name">nacos.core.auth.plugin.nacos.token.cache.enable</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">nacos.core.auth.plugin.nacos.token.expire.seconds</span><span class="token punctuation">=</span><span class="token value attr-value">18000</span>
<span class="token comment">### JWT Token密钥(推荐使用原始密钥的Base64，原始密钥不能小于32个字符)</span>
<span class="token key attr-name">nacos.core.auth.plugin.nacos.token.secret.key</span><span class="token punctuation">=</span><span class="token value attr-value">MTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MA==</span>
</code></pre></div><h2 id="集群模式" tabindex="-1"><a class="header-anchor" href="#集群模式"><span>集群模式</span></a></h2><p>3台以上的Nacos服务器 + Nginx负载均衡。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这里使用单机多端口方案；</p></div><p>1.下载并上传nacos安装包到每一台服务器，并解压</p><p>2.配置外部数据源、开启鉴权</p><p>3.在每个nacos的conf目录下，创建 <em>cluster.conf</em> 文件，配置集群地址(IP:PORT)</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>169.254.135.41:8845
169.254.135.41:8846
169.254.135.41:8847
</code></pre></div><p>4.修改每个nacos的 <em>conf/application.properties</em> 配置文件，设置其端口号分别为8845, 8846, 8847</p><p>5.分别启动每个nacos，默认启动模式是cluster</p><p><code>startup.cmd</code> 或 <code>startup.sh</code></p><p>6.配置nginx负载均衡，nginx监听8848端口，转发到nacos集群</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>upstream nacos-cluster {
    server 169.254.135.41:8847;
    server 169.254.135.41:8846;
    server 169.254.135.41:8845;
}

server {
    listen       8848;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location /nacos {
    	proxy_pass http://nacos-cluster;
    }
}
</code></pre></div><p>7.验证</p><p>nacos客户端应用中，配置nacos地址为nginx8848</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.cloud.nacos.server-addr</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1:8848</span>
<span class="token key attr-name">spring.cloud.nacos.username</span><span class="token punctuation">=</span><span class="token value attr-value">nacos</span>
<span class="token key attr-name">spring.cloud.nacos.password</span><span class="token punctuation">=</span><span class="token value attr-value">nacos</span>
</code></pre></div><p>启动应用，成功注册到nacos注册中心。</p><p>如果启动报错：<em>did not find the Leader node;caused: The Raft Group [naming_persistent_service_v2] did not find the Leader node;</em>，是因为nacos安装文件是直接复制的，包含了自动生成的 <em>data/protocol/raft</em> 文件，将其删除，重启nacos即可。</p><h2 id="多集群模式" tabindex="-1"><a class="header-anchor" href="#多集群模式"><span>多集群模式</span></a></h2>`,43),p=[o];function c(l,r){return n(),s("div",null,p)}const u=a(t,[["render",c],["__file","Spring Cloud Alibaba Nacos部署.html.vue"]]);export{u as default};
