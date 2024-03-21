import{_ as e,o as l,c as o,d as s}from"./app-HBA039kk.js";const n={},i=s('<h1 id="windows下的linux子系统" tabindex="-1"><a class="header-anchor" href="#windows下的linux子系统"><span>Windows下的Linux子系统</span></a></h1><p>参考资料：</p><ul><li>https://learn.microsoft.com/en-us/windows/wsl/install</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>查看支持的Linux分发版本</p><p><code>wsl --list --online</code></p><p>安装指定的Linux分发版本</p><p><code>wsl --install -d Ubuntu-22.04</code></p><p>查看已安装的Linux子系统</p><p><code>wsl --list --all --verbose</code></p><p>卸载已安装的Linux子系统</p><p><code>wsl --unregister Ubuntu-22.04</code></p><p>设置Linux子系统root密码</p><p><code>sudo passwd root</code></p><p>查看Linux子系统IP</p><p><code>ifconfig</code> 中的 <em>eth0</em> 网卡地址</p><h2 id="改变wsl安装位置" tabindex="-1"><a class="header-anchor" href="#改变wsl安装位置"><span>改变WSL安装位置</span></a></h2><p>使用wsl --export和wsl --import命令</p><ol><li>首先，查看本机已安装的所有WSL系统，使用命令<code>wsl -l --all -v</code>。</li><li>选择你想要移动的系统，例如Ubuntu-22.04，然后使用<code>wsl --export Ubuntu-22.04 D:\\dev\\wsl\\Ubuntu-22.04.tar</code>将其导出到指定的位置。</li><li>接下来，注销这个WSL系统，使用命令<code>wsl --unregister Ubuntu-22.04</code>。</li><li>确认WSL系统已成功注销，再次使用<code>wsl -l --all -v</code>查看。</li><li>创建一个新的目录作为新的WSL安装位置，如<code>D:\\dev\\wsl\\Ubuntu-22.04</code>。</li><li>使用<code>wsl --import Ubuntu-22.04 D:\\dev\\wsl\\Ubuntu-22.04 D:\\dev\\wsl\\Ubuntu-22.04.tar --version 2</code>命令将之前导出的WSL系统重新导入到新位置。</li><li>最后，再次使用<code>wsl -l --all -v</code>确认WSL系统已成功导入到新位置。</li></ol>',19),d=[i];function c(t,a){return l(),o("div",null,d)}const u=e(n,[["render",c],["__file","Windows下的Linux子系统.html.vue"]]);export{u as default};
