import{_ as s,o as a,c as n,d as p}from"./app-HBA039kk.js";const t={},o=p(`<h1 id="sql数据库和表" tabindex="-1"><a class="header-anchor" href="#sql数据库和表"><span>sql数据库和表</span></a></h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>数据库：PostgreSQL 16.1</p></div><h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库"><span>数据库</span></a></h2><h3 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库"><span>创建数据库</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> library<span class="token punctuation">;</span>
</code></pre></div><h3 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库"><span>删除数据库</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> library<span class="token punctuation">;</span>
</code></pre></div><h2 id="数据表" tabindex="-1"><a class="header-anchor" href="#数据表"><span>数据表</span></a></h2><h3 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表"><span>创建表</span></a></h3><p>使用<code>CREATE TABLE</code>语句创建表，语法如下：</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token operator">&lt;</span>表名<span class="token operator">&gt;</span><span class="token punctuation">(</span>
	<span class="token operator">&lt;</span>列名<span class="token number">1</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>数据类型<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>列约束<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token operator">&lt;</span>列名<span class="token number">1</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>数据类型<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>列约束<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token operator">&lt;</span>表约束<span class="token number">1</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token operator">&lt;</span>表约束<span class="token number">2</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>以图书馆管理系统为例（简化版）：</p><p>图书表</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token string">&quot;t_book&quot;</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;id&quot;</span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span>  <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token string">&quot;title&quot;</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>  <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token string">&quot;author&quot;</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
  <span class="token string">&quot;price&quot;</span> <span class="token keyword">numeric</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;publisher&quot;</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
  <span class="token string">&quot;publish_date&quot;</span> <span class="token keyword">date</span><span class="token punctuation">,</span>
  <span class="token string">&quot;create_at&quot;</span> <span class="token keyword">date</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_DATE</span><span class="token punctuation">,</span>
  <span class="token string">&quot;update_at&quot;</span> <span class="token keyword">date</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_DATE</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token string">&quot;t_book_pkey&quot;</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token string">&quot;title_ukey&quot;</span> <span class="token keyword">UNIQUE</span> <span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre></div><p>读者表</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token string">&quot;t_reader&quot;</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;id&quot;</span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>  <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token string">&quot;id_card&quot;</span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
  <span class="token string">&quot;name&quot;</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>  <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token string">&quot;gender&quot;</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
  <span class="token string">&quot;address_id&quot;</span> int4<span class="token punctuation">,</span>
  <span class="token string">&quot;create_at&quot;</span> <span class="token keyword">date</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_DATE</span><span class="token punctuation">,</span>
  <span class="token string">&quot;update_at&quot;</span> <span class="token keyword">date</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_DATE</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token string">&quot;t_reader_pkey&quot;</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token string">&quot;address_id_fkey&quot;</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token string">&quot;address_id&quot;</span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token string">&quot;t_address&quot;</span> <span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token string">&quot;address_id_ukey&quot;</span> <span class="token keyword">UNIQUE</span> <span class="token punctuation">(</span><span class="token string">&quot;address_id&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre></div><p>地址表</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token string">&quot;t_address&quot;</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;id&quot;</span> int4 <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token string">&quot;address&quot;</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token string">&quot;t_address_pkey&quot;</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre></div><p>借阅记录表</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token string">&quot;t_borrow_record&quot;</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;reader_id&quot;</span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token string">&quot;book_id&quot;</span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token string">&quot;borrow_at&quot;</span> <span class="token keyword">date</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_DATE</span><span class="token punctuation">,</span>
  <span class="token string">&quot;return_at&quot;</span> <span class="token keyword">date</span><span class="token punctuation">,</span>
  <span class="token keyword">CONSTRAINT</span> <span class="token string">&quot;t_borrow_record_pkey&quot;</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token string">&quot;reader_id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;book_id&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre></div><h3 id="更新表" tabindex="-1"><a class="header-anchor" href="#更新表"><span>更新表</span></a></h3><p>使用<code>ALTER TABLE</code>语句更新表。</p><h4 id="增加列" tabindex="-1"><a class="header-anchor" href="#增加列"><span>增加列</span></a></h4><p>更新读者表，增加1列，表示最大可借图书数量</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> t_reader <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> max_borrowable int2<span class="token punctuation">;</span>

<span class="token comment">/*增加列，同时添加列约束*/</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> t_reader <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> max_borrowable int2 <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="删除列" tabindex="-1"><a class="header-anchor" href="#删除列"><span>删除列</span></a></h4><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> t_reader <span class="token keyword">DROP</span> <span class="token keyword">COLUMN</span> max_borrowable<span class="token punctuation">;</span>
</code></pre></div><h4 id="添加约束" tabindex="-1"><a class="header-anchor" href="#添加约束"><span>添加约束</span></a></h4><p>给读者表的address_id列添加外键约束，引用地址表的id列，级联删除，级联更新</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> t_reader
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token string">&quot;address_id_fkey&quot;</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token string">&quot;address_id&quot;</span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token string">&quot;t_address&quot;</span> <span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表"><span>删除表</span></a></h3><p>使用<code>DROP TABLE</code>语句删除表</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> t_address<span class="token punctuation">;</span>
</code></pre></div><p>如果表中存在被引用的列（被其它表外键引用），需要添加<code>CASCADE</code>关键字，会将其它表中的引用删除</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> t_address <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="约束" tabindex="-1"><a class="header-anchor" href="#约束"><span>约束</span></a></h2><h3 id="主键约束" tabindex="-1"><a class="header-anchor" href="#主键约束"><span>主键约束</span></a></h3><p>使用<code>PRIMARY KEY</code>指定主键，需要在定义表的时候设置主键。</p><p>主键约束名通常为：<em>表名_pkey</em></p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token operator">&lt;</span>表名<span class="token operator">&gt;</span> <span class="token punctuation">(</span>
  	<span class="token string">&quot;id&quot;</span> <span class="token operator">&lt;</span>数据类型<span class="token operator">&gt;</span>  <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">CONSTRAINT</span> <span class="token operator">&lt;</span>主键约束名<span class="token operator">&gt;</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>id<span class="token operator">&gt;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre></div><h3 id="外键约束" tabindex="-1"><a class="header-anchor" href="#外键约束"><span>外键约束</span></a></h3><p>使用<code>FOREIGN KEY</code>指定外键约束。</p><p>外键既可以在定义表时设置，也可使用<code>ALTER TABLE</code>语句设置。</p><p>外键约束名通常为：<em>列名_fkey</em></p><p>定义表时设置外键约束</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token operator">&lt;</span>表名<span class="token operator">&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>外键列名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>数据类型<span class="token operator">&gt;</span><span class="token punctuation">,</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">CONSTRAINT</span> <span class="token operator">&lt;</span>外键约束名<span class="token operator">&gt;</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>外键列名<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token operator">&lt;</span>关联表名<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>关联表ID<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>使用<code>ALTER TABLE</code>语句设置外键</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token operator">&lt;</span>表名<span class="token operator">&gt;</span>
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token operator">&lt;</span>外键约束名<span class="token operator">&gt;</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>外键列名<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token operator">&lt;</span>关联表名<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>关联表ID<span class="token operator">&gt;</span><span class="token punctuation">)</span>
<span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="唯一键约束" tabindex="-1"><a class="header-anchor" href="#唯一键约束"><span>唯一键约束</span></a></h3><p>使用<code>UNIQU</code>设置唯一键约束。</p><p>唯一键约束既可以在定义表的时候设置，也可以使用<code>ALTER TABLE</code>语句设置。</p><p>唯一键约束名通常为：<em>列名_ukey</em></p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token operator">&lt;</span>表名<span class="token operator">&gt;</span>
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token operator">&lt;</span>唯一键约束名<span class="token operator">&gt;</span> <span class="token keyword">UNIQUE</span> <span class="token punctuation">(</span>列名<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="null约束" tabindex="-1"><a class="header-anchor" href="#null约束"><span>Null约束</span></a></h3><p>使用<code>NULL</code>或<code>NOT NULL</code>设置Null约束。列默认具有NULL约束</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token operator">&lt;</span>表名<span class="token operator">&gt;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>列名<span class="token number">1</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>数据类型<span class="token operator">&gt;</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token operator">&lt;</span>列名<span class="token number">2</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>数据类型<span class="token operator">&gt;</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span>
</code></pre></div><h3 id="默认值约束" tabindex="-1"><a class="header-anchor" href="#默认值约束"><span>默认值约束</span></a></h3><p>使用<code>DEFAULT</code>设置默认值约束</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token operator">&lt;</span>表名<span class="token operator">&gt;</span> <span class="token punctuation">(</span>
	<span class="token operator">&lt;</span>列名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>数据类型<span class="token operator">&gt;</span> <span class="token keyword">DEFAULT</span> <span class="token operator">&lt;</span>默认值<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span>
</code></pre></div><h3 id="检查约束" tabindex="-1"><a class="header-anchor" href="#检查约束"><span>检查约束</span></a></h3><p>使用<code>CHECK(条件表达式)</code>设置检查约束，限制某一列必须满足给定的条件。</p><p>例如：对读者表中的max_borrowable列添加约束，限制值范围为0-10</p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token string">&quot;t_reader&quot;</span>
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token string">&quot;max_borrowable_check&quot;</span> <span class="token keyword">CHECK</span> <span class="token punctuation">(</span>max_borrowable <span class="token operator">BETWEEN</span> <span class="token number">0</span> <span class="token operator">AND</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,63),e=[o];function c(l,k){return a(),n("div",null,e)}const u=s(t,[["render",c],["__file","sql数据库和表.html.vue"]]);export{u as default};
