import{_ as e,o,c as p,d as c}from"./app-HBA039kk.js";const d={},r=c('<h1 id="docker入门" tabindex="-1"><a class="header-anchor" href="#docker入门"><span>Docker入门</span></a></h1><h2 id="docker镜像" tabindex="-1"><a class="header-anchor" href="#docker镜像"><span>Docker镜像</span></a></h2><p><strong>查看本地镜像</strong></p><p><code>docker images</code></p><p><strong>搜索镜像</strong></p><p><code>docker search ubuntu</code></p><p><strong>下载镜像</strong></p><p>下载默认镜像</p><p><code>docker pull ubuntu </code> 或 <code>docker pull ubuntu:latest</code></p><p>下载指定Tag的镜像</p><p><code>docker pull ubuntu:22.04</code></p><p>下载指定摘要的镜像</p><p><code>docker pull ubuntu@sha256:6042500cf4b44023ea1894effe7890666b0c5c7871ed83a97c36c76ae560bb9b</code></p><p>下载其它Registry中的镜像</p><p><code>docker image pull myregistry.local:5000/username/image-name</code></p><p><strong>删除镜像</strong></p><p><code>docker rmi ubuntu</code></p><p><strong>构建镜像</strong></p><p>基于已有容器构建镜像</p><p><code>docker commit 70a278c1a081 username/ubuntu:tag</code></p><p>基于Dockerfile构建镜像，使用当前目录下的Dockerfile文件，无镜像名和Tag</p><p><code>docker build .</code></p><p>指定Dockerfile文件路径</p><p><code>docker build --file E:\\coding\\docker\\Dockerfile .</code></p><p>指定镜像名和Tag</p><p><code>docker build --file E:\\coding\\docker\\Dockerfile --tag ubuntu:vim .</code></p><p>查看镜像构建历史</p><p><code>docker history ubuntu:vim</code></p><p><strong>镜像Tag</strong></p><p>创建Tag</p><p><code>docker tag ubuntu:22.04 ubuntu:22</code></p><p>删除Tag，只能通过name:tag删除</p><p><code>docker rmi ubuntu:22</code></p><h2 id="docker容器" tabindex="-1"><a class="header-anchor" href="#docker容器"><span>Docker容器</span></a></h2><p><strong>列出容器</strong></p><p><code>docker ps</code></p><p><code>docker ps -a</code></p><p><code>docker ps -a --filter status=exited</code></p><p><code>docker ps -a --filter status=running</code></p><p><strong>查看容器详细信息</strong></p><p><code>docker inspect myubuntu</code></p><p><strong>运行容器</strong></p><p><code>docker run ubuntu:22.04</code></p><p>指定容器名称</p><p><code>docker run --name myubuntu ubuntu:22.04</code></p><p>在后台运行</p><p><code>docker run -d --name myubuntu ubuntu:22.04</code></p><p>自动重启</p><p><code>docker run -d --restart=always --name myhttpd httpd</code></p><p>restart参数：</p><ul><li><p><code>no</code>：不开启自动重启</p></li><li><p><code>always</code>：总是自动重启</p></li><li><p><code>on-failure:3</code>：尝试自动重启n次</p></li></ul><p><strong>查看容器运行日志</strong></p><p><code>docker logs myhttpd</code></p><p><strong>进入容器</strong></p><p>使用启动容器时的终端</p><p><code>docker attach c1078a27225d </code></p><p>使用新的终端</p><p><code>docker exec -it c1078a27225d /bin/sh</code></p><p><strong>创建/更新/启动/停止/重启/暂停/恢复容器</strong></p><p>创建</p><blockquote><p>类似<code>docker run -d</code>，只是不会马上启动，还需要执行 <code>docker start</code> 命令</p></blockquote><p><code>docker create --name myhttpd httpd</code></p><p>更新</p><p><code>docker update myhttpd --restart=always</code></p><p>启动</p><p><code>docker start myhttpd</code></p><p>停止</p><p><code>docker stop myhttpd</code></p><p>重启</p><p><code>docker restart myhttpd</code></p><p>暂停</p><p><code>docker pause myhttpd</code></p><p>恢复</p><p><code>docker unpause myhttpd </code></p><p><strong>重命名容器</strong></p><p><code>docker rename myhttpd httpd-x</code></p><p><strong>删除容器</strong></p><p><code>docker rm myhttpd</code></p><h2 id="docker网络" tabindex="-1"><a class="header-anchor" href="#docker网络"><span>Docker网络</span></a></h2><p><strong>列出网络</strong></p><blockquote><p>docker默认创建3种网络：none, host, bridge</p></blockquote><p><code>docker network ls</code></p><p><strong>创建网络</strong></p><p><code>docker network create --driver bridge my-bridge-network</code></p><p>查看网络详细信息</p><p><code>docker network inspect my-bridge-network</code></p><p><strong>删除网络</strong></p><p>删除一个或多个自定义网络</p><p><code>docker network rm my-bridge-network</code></p><p>删除全部未使用的自定义网络</p><p><code>docker network prune</code></p><p><strong>启动容器时设置网络</strong></p><p><code>docker run -itd --network=my-bridge-network busybox</code></p><p><strong>给正在运行的容器设置网络</strong></p><p><code>docker network connect my-bridge-network c1078a27225d</code></p><p><strong>断开容器与网络</strong></p><p><code>docker network disconnect my-bridge-network c1078a27225d</code></p><p><strong>端口映射</strong></p><p>-p host_port:container_port</p><p><code>docker run -d -p 8080:80 httpd</code></p><h2 id="docker存储" tabindex="-1"><a class="header-anchor" href="#docker存储"><span>Docker存储</span></a></h2><p>docker有2类数据：</p><ul><li>镜像和容器数据，默认存储在 <em>/var/lib/docker/</em> 目录下</li><li>volume数据，host文件系统中的目录和文件，被挂载到容器的文件系统中</li></ul><p><strong>挂载host中指定的目录或文件到容器文件系统</strong></p><p>使用-v选项，指定host挂载源和container挂载点</p><p><code>docker run -d -p 80:80 -v E:\\coding\\docker\\htdocs:/usr/local/apache2/htdocs --name myhttpd httpd</code></p><p><strong>挂载host中默认目录到容器文件系统</strong></p><p>使用-v选项，只需要指定container挂载点</p><p><code>docker run -d -p 80:80 -v /usr/local/apache2/htdocs --name myhttpd httpd</code></p><p>查看默认挂载源，Mounts设置中，默认挂载源为host文件系统中 <em>/var/lib/docker/volumes/容器ID/_data/</em></p><p><code>docker inspect myhttpd</code></p><p><strong>列出volume</strong></p><p><code>docker volume ls</code></p><p><strong>查看volume详细信息</strong></p><p><code>docker volume inspect 5b37dfb391b5ca6d11f00882d0ec7e9373cb2bf1cda9b8d4e2ab8abab1ca7f54</code></p><p><strong>创建volume</strong></p><p><code>docker volume create</code></p><p><strong>删除volume</strong></p><p>删除一个或多个</p><p><code>docker volume rm 0c94ba01fa39b718703d785b323a473cbd47c841554519e3644d605767101a4a</code></p><p>删除所有未使用的volume</p><p><code>docker volume prune</code></p><h2 id="dockerfile文件" tabindex="-1"><a class="header-anchor" href="#dockerfile文件"><span>Dockerfile文件</span></a></h2>',123),t=[r];function n(a,s){return o(),p("div",null,t)}const k=e(d,[["render",n],["__file","docker入门.html.vue"]]);export{k as default};
