import{_ as s,o as a,c as n,d as e}from"./app-HBA039kk.js";const t={},p=e(`<h1 id="mysql索引" tabindex="-1"><a class="header-anchor" href="#mysql索引"><span>MySQL索引</span></a></h1><h2 id="索引ddl语句" tabindex="-1"><a class="header-anchor" href="#索引ddl语句"><span>索引DDL语句</span></a></h2><h3 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引"><span>创建索引</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 创建唯一索引</span>
<span class="token keyword">CREATE</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">INDEX</span> uk_employee_id <span class="token keyword">ON</span> t_salary<span class="token punctuation">(</span>employee_id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建单列索引</span>
<span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> idx_employee_id <span class="token keyword">ON</span> t_salary<span class="token punctuation">(</span>employee_id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建复合索引</span>
<span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> idx_username <span class="token keyword">ON</span> t_salary<span class="token punctuation">(</span>firstname<span class="token punctuation">,</span> lastname<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建索引，并指定索引算法</span>
<span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> idx_employee_id <span class="token keyword">ON</span> t_salary<span class="token punctuation">(</span>employee_id<span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="删除索引" tabindex="-1"><a class="header-anchor" href="#删除索引"><span>删除索引</span></a></h3><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> idx_username <span class="token keyword">ON</span> t_salary<span class="token punctuation">;</span>
</code></pre></div>`,6),o=[p];function c(l,d){return a(),n("div",null,o)}const r=s(t,[["render",c],["__file","mysql索引.html.vue"]]);export{r as default};
