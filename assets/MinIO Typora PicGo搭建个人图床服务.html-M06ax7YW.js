import{_ as n,o as a,c as s,d as o}from"./app-HBA039kk.js";const t="/assets/20240117124211-4FE1Lfn4.png",p={},e=o(`<h1 id="minio-typora-picgo搭建个人图床服务" tabindex="-1"><a class="header-anchor" href="#minio-typora-picgo搭建个人图床服务"><span>MinIO Typora PicGo搭建个人图床服务</span></a></h1><h2 id="部署minio" tabindex="-1"><a class="header-anchor" href="#部署minio"><span>部署MinIO</span></a></h2><p>使用Docker容器部署</p><p><code>docker run -d -p 9000:9000 -p 9001:9001 -v D:\\dev\\minio\\data:/data --name minio -e &quot;MINIO_ROOT_USER=admin&quot; -e &quot;MINIO_ROOT_PASSWORD=admin123&quot; quay.io/minio/minio server /data --console-address &quot;:9001&quot;</code></p><p>访问MinIO控制台：http://127.0.0.1:9001/，创建一个存储桶test，自定义访问策略，给Annoymous用户只读权限</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;Version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2012-10-17&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Statement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;Effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Allow&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Principal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;AWS&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;*&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Action&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;s3:GetObject&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Resource&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;arn:aws:s3:::test/*&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="picgo中安装minio插件" tabindex="-1"><a class="header-anchor" href="#picgo中安装minio插件"><span>PicGo中安装minio插件</span></a></h2><p>picgo官网：https://picgo.github.io/PicGo-Doc/</p><ul><li><p>打开picgo</p></li><li><p>在插件设置中搜索minio，安装</p></li><li><p>在图床设置中，找到minio，配置，并将minio设置为默认图床</p></li></ul><p><img src="http://127.0.0.1:9000/test/images/20240117122747.png" alt=""></p><ul><li>测试一下，如果没问题，进行下一步</li></ul><h2 id="配置typora图片上传服务" tabindex="-1"><a class="header-anchor" href="#配置typora图片上传服务"><span>配置Typora图片上传服务</span></a></h2><p>在Typora插入本地图片时，自动使用PicGo上传图片到MinIO服务器；上传成功后，PicGo可以获取到图片URL；Typora会自动用URL替换本地图片路径。</p><p><img src="`+t+'" alt=""></p>',14),c=[e];function i(r,u){return a(),s("div",null,c)}const k=n(p,[["render",i],["__file","MinIO Typora PicGo搭建个人图床服务.html.vue"]]);export{k as default};
