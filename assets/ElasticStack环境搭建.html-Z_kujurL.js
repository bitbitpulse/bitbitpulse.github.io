import{_ as n,o as a,c as s,d as t}from"./app-HBA039kk.js";const e="/assets/20240320165456-UX_Q26NA.png",o={},p=t(`<h1 id="elasticstack环境搭建" tabindex="-1"><a class="header-anchor" href="#elasticstack环境搭建"><span>ElasticStack环境搭建</span></a></h1><h2 id="使用docker搭建elasticsearch单节点" tabindex="-1"><a class="header-anchor" href="#使用docker搭建elasticsearch单节点"><span>使用Docker搭建ElasticSearch单节点</span></a></h2><blockquote><p>参考：https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html</p></blockquote><p>1.下载镜像</p><p><code>docker pull elasticsearch:8.12.2</code></p><p>2.创建并运行容器</p><p><code>docker run --name es8 -p 9200:9200 -it elasticsearch:8.12.2</code></p><p>参数说明：</p><ul><li><code>-p 9200:9200</code>：REST API访问端口</li><li><code>-p 9300:9300</code>：ES节点之间通信端口(单节点可以不公开)</li><li><code>-e &quot;discovery.type=single-node&quot;</code>：单节点</li><li><code>-e &quot;xpack.security.enabled=true&quot;</code>：支持HTTPs</li><li><code>-e &quot;xpack.security.enrollment.enabled=true&quot;</code></li></ul><p>3.查看es信息</p><p>第一次启动es的时候，会在控制台输出密码以及kibana token等信息</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Elasticsearch security features have been automatically configured!
✅ Authentication is enabled and cluster connections are encrypted.

ℹ️  Password for the elastic user (reset with \`bin/elasticsearch-reset-password -u elastic\`):
 M*OvmQUu4W8wjqfq_JvL

ℹ️  HTTP CA certificate SHA-256 fingerprint:
  f32c06bc6f1fe6b682cfa0a363eb31d1eba1bf567bd236c52226184fe911a6e5

ℹ️  Configure Kibana to use this cluster:
• Run Kibana and click the configuration link in the terminal when Kibana starts.
• Copy the following enrollment token and paste it into Kibana in your browser (valid for the next 30 minutes):
  eyJ2ZXIiOiI4LjEyLjIiLCJhZHIiOlsiMTcyLjE3LjAuMjo5MjAwIl0sImZnciI6ImYzMmMwNmJjNmYxZmU2YjY4MmNmYTBhMzYzZWIzMWQxZWJhMWJmNTY3YmQyMzZjNTIyMjYxODRmZTkxMWE2ZTUiLCJrZXkiOiJjY0FHVzQ0QnZhN2s2ZEVhdkNzWjpKd2xvM2Yyc1NRT01aanV5Zl9MVmdBIn0=

ℹ️ Configure other nodes to join this cluster:
• Copy the following enrollment token and start new Elasticsearch nodes with \`bin/elasticsearch --enrollment-token &lt;token&gt;\` (valid for the next 30 minutes):
  eyJ2ZXIiOiI4LjEyLjIiLCJhZHIiOlsiMTcyLjE3LjAuMjo5MjAwIl0sImZnciI6ImYzMmMwNmJjNmYxZmU2YjY4MmNmYTBhMzYzZWIzMWQxZWJhMWJmNTY3YmQyMzZjNTIyMjYxODRmZTkxMWE2ZTUiLCJrZXkiOiJjc0FHVzQ0QnZhN2s2ZEVhdkNzWjpHN3ZhOTVOMVM2S05aZTZuRDZOQXJ3In0=

  If you&#39;re running in Docker, copy the enrollment token and run:
  \`docker run -e &quot;ENROLLMENT_TOKEN=&lt;token&gt;&quot; docker.elastic.co/elasticsearch/elasticsearch:8.12.2\`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
</code></pre></div><p>4.验证</p><p>访问：https://172.30.149.49:9200/，输入用户和密码（elastic/M*OvmQUu4W8wjqfq_JvL）</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;457a6c648133&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cluster_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docker-cluster&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cluster_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mwpE7ruXTYeOTyK9XcAPsQ&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8.12.2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build_flavor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docker&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build_hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;48a287ab9497e852de30327444b0809e55d46466&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2024-02-19T10:04:32.774273190Z&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build_snapshot&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lucene_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9.9.2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;minimum_wire_compatibility_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7.17.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;minimum_index_compatibility_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7.0.0&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tagline&quot;</span><span class="token operator">:</span> <span class="token string">&quot;You Know, for Search&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="使用docker安装kibana" tabindex="-1"><a class="header-anchor" href="#使用docker安装kibana"><span>使用Docker安装Kibana</span></a></h2><p>1.下载镜像</p><p><code>docker pull kibana:8.12.2</code></p><p>2.创建容器</p><p><code>docker create --name kibana -p 5601:5601 kibana:8.12.2</code></p><p>3.启动容器</p><p><code>docker start kibana</code></p><p>4.验证</p><p>访问kibana面板：http://172.30.149.49:5601/</p><ol><li><p>输入第一次启动es时输出的kibana token</p></li><li><p>在kibana控制台中查看6位数字验证码：<code>docker logs -f kibana</code></p></li><li><p>输入es的用户名和密码</p></li></ol><p><img src="`+e+'" alt=""></p><h2 id="logstash" tabindex="-1"><a class="header-anchor" href="#logstash"><span>Logstash</span></a></h2><h2 id="beats" tabindex="-1"><a class="header-anchor" href="#beats"><span>Beats</span></a></h2>',28),c=[p];function r(i,l){return a(),s("div",null,c)}const k=n(o,[["render",r],["__file","ElasticStack环境搭建.html.vue"]]);export{k as default};
