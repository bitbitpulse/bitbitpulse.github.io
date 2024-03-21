import{_ as e,o,c as a,d as p}from"./app-HBA039kk.js";const c={},r=p(`<h1 id="zookeeper环境搭建" tabindex="-1"><a class="header-anchor" href="#zookeeper环境搭建"><span>Zookeeper环境搭建</span></a></h1><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h2><p>https://zookeeper.apache.org/releases.html</p><h2 id="单机模式" tabindex="-1"><a class="header-anchor" href="#单机模式"><span>单机模式</span></a></h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3><p>1.解压压缩包到安装目录</p><p>2.配置数据目录</p><p><code>cd path/to/apache-zookeeper-3.6.3/</code></p><p><code>mkdir data</code></p><p><code>copy conf/zoo_sample.cfg conf/zoo.cfg</code></p><p>修改conf/zoo.cfg，配置dataDir</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>tickTime=2000
dataDir=path/to/apache-zookeeper-3.6.3/data
clientPort=2181
# Default 8080
admin.serverPort=8080
</code></pre></div><p>3.启动ZK Server</p><p><code>cd bin</code></p><p><code>zkServer.cmd</code></p><p>4.连接到ZK Server</p><p><code>zkCli.cmd -server 127.0.0.1:2181</code></p><p>5.运行ZK Client命令</p><p><code>ls /</code></p><p><code>quit</code></p><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3><p>与Windows基本一样，除了启动ZK Server使用命令 <code>./zkServer.sh start</code></p><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h3><p>zookeeper镜像地址：https://hub.docker.com/_/zookeeper</p><p><code>docker pull zookeeper:3.6.3</code></p><p><code>docker create --name myzk -p 2182:2181 --restart always zookeeper:3.6.3</code></p><p><code>docker exec -it myzk bash</code></p><h2 id="zookeeper集群" tabindex="-1"><a class="header-anchor" href="#zookeeper集群"><span>Zookeeper集群</span></a></h2>`,28),d=[r];function t(n,s){return o(),a("div",null,d)}const i=e(c,[["render",t],["__file","Zookeeper环境搭建.html.vue"]]);export{i as default};
