import{_ as n,o as a,c as s,d as t}from"./app-HBA039kk.js";const p={},o=t(`<h1 id="springboot使用事务" tabindex="-1"><a class="header-anchor" href="#springboot使用事务"><span>SpringBoot使用事务</span></a></h1><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2><h3 id="_1-添加依赖" tabindex="-1"><a class="header-anchor" href="#_1-添加依赖"><span>1.添加依赖</span></a></h3><p>使用Spring事务需要添加<code>spring-tx</code>，一般只需要引入jdbc相关的依赖，就会自动包含它。</p><p>这里使用<code>spring-boot-starter-data-jpa</code></p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-jpa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_2-启用事务支持" tabindex="-1"><a class="header-anchor" href="#_2-启用事务支持"><span>2.启用事务支持</span></a></h3><p>SpringBoot检测到<code>spring-tx</code>相关依赖时，默认自动启用事务支持。</p><p>也可显式的开启，在配置类上使用<code>@EnableTransactionManagement</code>注解</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableTransactionManagement</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">App</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-开启事务" tabindex="-1"><a class="header-anchor" href="#_3-开启事务"><span>3.开启事务</span></a></h3><p>在涉及数据库操作的业务方法上，使用<code>@Transactional</code>注解</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 钱包充值
 * */</span>
<span class="token annotation punctuation">@Transactional</span>
<span class="token keyword">public</span> <span class="token class-name">Wallet</span> <span class="token function">recharge</span><span class="token punctuation">(</span><span class="token class-name">RechargeVO</span> vo<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 创建钱包交易记录...</span>
    
    <span class="token comment">// 更新钱包余额...</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="spring事务抽象模型" tabindex="-1"><a class="header-anchor" href="#spring事务抽象模型"><span>Spring事务抽象模型</span></a></h2><h3 id="transactionmanager" tabindex="-1"><a class="header-anchor" href="#transactionmanager"><span><code>TransactionManager</code></span></a></h3><p>Spring事务的核心是事务策略，是通过事务管理器<code>TransactionManager</code>接口定义的，它的2个子接口：<code>PlatformTransactionManager</code> 和 <code>ReactiveTransactionManager</code>，分别用于传统的命令式编程和新的响应式编程中。</p><p>以<code>PlatformTransactionManager</code>为例，接口定义如下：</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PlatformTransactionManager</span> <span class="token keyword">extends</span> <span class="token class-name">TransactionManager</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 获取事务状态
     */</span>
    <span class="token class-name">TransactionStatus</span> <span class="token function">getTransaction</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">TransactionDefinition</span> definition<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TransactionException</span><span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 提交事务
     */</span>
	<span class="token keyword">void</span> <span class="token function">commit</span><span class="token punctuation">(</span><span class="token class-name">TransactionStatus</span> status<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TransactionException</span><span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 回滚事务
     */</span>
    <span class="token keyword">void</span> <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token class-name">TransactionStatus</span> status<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TransactionException</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="transactiondefinition" tabindex="-1"><a class="header-anchor" href="#transactiondefinition"><span><code>TransactionDefinition</code></span></a></h3><p><code>TransactionDefinition</code>接口用于定义事务：</p><ul><li>事务传播行为</li><li>事务隔离级别</li><li>事务超时</li><li>是否为只读事务</li></ul><h3 id="transactionstatus" tabindex="-1"><a class="header-anchor" href="#transactionstatus"><span><code>TransactionStatus</code></span></a></h3><p><code>TransactionStatus</code>接口用于定义事务的状态。</p><h2 id="声明式事务管理" tabindex="-1"><a class="header-anchor" href="#声明式事务管理"><span>声明式事务管理</span></a></h2><p>Spring声明式事务是基于AOP实现的。</p><p>使用<code>@Transactional</code>注解声明（也支持在基于xml的配置中，使用<code>tx</code>命名空间的相关标签进行声明）。</p><p>这个注解可用在类或方法上，必须是<code>public</code>方法。默认属性如下：</p><ul><li><code>propagation</code>，事务传播行为，默认<code>Propagation.REQUIRED</code></li><li><code>isolation</code>，事务隔离级别，默认为基础数据库的默认隔离级别</li><li><code>readOnly</code>，是否为只读事务，默认false，读写</li><li><code>timeout</code>，事务超时时间，默认为-1，表示不设置超时</li><li><code>rollbackFor</code>，导致回滚的异常，默认回滚<code>RuntimeException</code>和<code>Error</code></li></ul><h3 id="spring事务管理器" tabindex="-1"><a class="header-anchor" href="#spring事务管理器"><span>Spring事务管理器</span></a></h3><p>一般情况下，Spring应用只需要使用默认的事务管理器。</p><p><code>@Transactional</code>注解的<code>transactionManager</code>属性指定具体事务管理器</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>transactionManager <span class="token operator">=</span> <span class="token string">&quot;txManager&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Wallet</span> <span class="token function">recharge</span><span class="token punctuation">(</span><span class="token class-name">RechargeVO</span> vo<span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="spring事务传播行为" tabindex="-1"><a class="header-anchor" href="#spring事务传播行为"><span>Spring事务传播行为</span></a></h3><p>Spring中的事务传播行为是指一个事务方法被另一个事务方法调用时，如何处理事务的传播行为。</p><p><code>@Transactional</code>注解的<code>propagation</code>属性指定事务传播行为，其值在<code>Propagation</code>枚举类中定义，包括：</p><ul><li><code>REQUIRED</code>，默认行为。如果当前存在事务，就在该事务中执行；否则，新建事务</li><li><code>SUPPORTS</code>，如果当前存在事务，就在该事务中执行；否则，不使用事务</li><li><code>MANDATORY</code>，如果当前存在事务，就在该事务中执行；否则，抛出异常</li><li><code>REQUIRES_NEW</code>，始终开启新的事务；如果当前已存在事务，将其挂起</li><li><code>NOT_SUPPORTED</code>，始终以非事务方式执行；如果当前已存在事务，将其挂起</li><li><code>NEVER</code>，始终以非事务方式执行；如果当前已存在事务，抛出异常</li><li><code>NESTED</code>，如果当前存在事务，则新建1个嵌套事务，它是当前事务的一部分；否则，新建1个事务</li></ul><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span><span class="token constant">REQUIRED</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Wallet</span> <span class="token function">recharge</span><span class="token punctuation">(</span><span class="token class-name">RechargeVO</span> vo<span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="spring事务隔离级别" tabindex="-1"><a class="header-anchor" href="#spring事务隔离级别"><span>Spring事务隔离级别</span></a></h3><p>Spring支持标准数据库事务隔离级别。</p><p><code>@Transactional</code>注解的<code>isolation</code>属性指定事务隔离级别，其值在<code>Isolation</code>枚举类中定义，包括：</p><ul><li><code>DEFAULT</code>，默认值。数据库默认隔离级别，通常是<code>READ_COMMITTED</code></li><li><code>READ_UNCOMMITTED</code>，读未提交</li><li><code>READ_COMMITTED</code>，读已提交</li><li><code>REPEATABLE_READ</code>，可重复读</li><li><code>SERIALIZABLE</code>，串行化</li></ul><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>isolation <span class="token operator">=</span> <span class="token class-name">Isolation</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Wallet</span> <span class="token function">recharge</span><span class="token punctuation">(</span><span class="token class-name">RechargeVO</span> vo<span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="spring事务超时" tabindex="-1"><a class="header-anchor" href="#spring事务超时"><span>Spring事务超时</span></a></h3><p><code>@Transactional</code> 注解的 <code>timeout</code> 属性用于指定事务的超时时间，即事务允许执行的最长时间。如果事务在指定的时间内未能完成，则会被自动回滚。</p><p>单位秒，默认为-1，表示不设置超时，直到方法执行完毕或者手动回滚。</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>timeout <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Wallet</span> <span class="token function">recharge</span><span class="token punctuation">(</span><span class="token class-name">RechargeVO</span> vo<span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="spring事务回滚" tabindex="-1"><a class="header-anchor" href="#spring事务回滚"><span>Spring事务回滚</span></a></h3><p><code>@Transactional</code>注解的<code>rollbackFor</code>和<code>noRollbackFor</code>属性指定方法抛出特定异常时的回滚规则。</p><p>默认<code>RuntimeException</code>和<code>Error</code>异常，或者事务超时会导致事务回滚。</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>rollbackFor <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">RuntimeException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Error</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">,</span> noRollbackFor <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Wallet</span> <span class="token function">recharge</span><span class="token punctuation">(</span><span class="token class-name">RechargeVO</span> vo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre></div><h3 id="spring只读事务" tabindex="-1"><a class="header-anchor" href="#spring只读事务"><span>Spring只读事务</span></a></h3><p><code>@Transactional</code>注解的<code>readOnly</code>属性用于指定事务是否为只读。默认false</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>readOnly <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Wallet</span> <span class="token function">recharge</span><span class="token punctuation">(</span><span class="token class-name">RechargeVO</span> vo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre></div><h2 id="编程式事务管理" tabindex="-1"><a class="header-anchor" href="#编程式事务管理"><span>编程式事务管理</span></a></h2><h3 id="直接使用transactionmanager" tabindex="-1"><a class="header-anchor" href="#直接使用transactionmanager"><span>直接使用<code>TransactionManager</code></span></a></h3><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 获取TransactionManager    </span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">PlatformTransactionManager</span> txManager<span class="token punctuation">;</span>

<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">public</span> <span class="token class-name">WalletService</span><span class="token punctuation">(</span><span class="token class-name">PlatformTransactionManager</span> txManager<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>txManager <span class="token operator">=</span> txManager<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">Wallet</span> <span class="token function">recharge</span><span class="token punctuation">(</span><span class="token class-name">RechargeVO</span> vo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建TransactionDefinition</span>
    <span class="token class-name">DefaultTransactionDefinition</span> txDef <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultTransactionDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    txDef<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;myTx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    txDef<span class="token punctuation">.</span><span class="token function">setIsolationLevel</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span><span class="token constant">ISOLATION_DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    txDef<span class="token punctuation">.</span><span class="token function">setPropagationBehavior</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span><span class="token constant">PROPAGATION_REQUIRED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    txDef<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span><span class="token constant">TIMEOUT_DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    txDef<span class="token punctuation">.</span><span class="token function">setReadOnly</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 开始事务</span>
    <span class="token class-name">TransactionStatus</span> txStatus <span class="token operator">=</span> txManager<span class="token punctuation">.</span><span class="token function">getTransaction</span><span class="token punctuation">(</span>txDef<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 回滚事务</span>
        txManager<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span>txStatus<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> ex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 提交事务</span>
    txManager<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span>txStatus<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="使用transactiontemplate" tabindex="-1"><a class="header-anchor" href="#使用transactiontemplate"><span>使用<code>TransactionTemplate</code></span></a></h3><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 获取TransactionTemplate对象</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">TransactionTemplate</span> txTemplate<span class="token punctuation">;</span>

<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">public</span> <span class="token class-name">WalletService</span><span class="token punctuation">(</span><span class="token class-name">PlatformTransactionManager</span> txManager<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>txTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TransactionTemplate</span><span class="token punctuation">(</span>txManager<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">this</span><span class="token punctuation">.</span>txTemplate<span class="token punctuation">.</span><span class="token function">setPropagationBehavior</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span><span class="token constant">PROPAGATION_REQUIRED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>txTemplate<span class="token punctuation">.</span><span class="token function">setIsolationLevel</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span><span class="token constant">ISOLATION_DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>txTemplate<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span><span class="token constant">TIMEOUT_DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>txTemplate<span class="token punctuation">.</span><span class="token function">setReadOnly</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">Wallet</span> <span class="token function">recharge</span><span class="token punctuation">(</span><span class="token class-name">RechargeVO</span> vo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 有返回值时，创建TransactionCallback接口的对象</span>
    <span class="token class-name">Wallet</span> wallet <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>txTemplate<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TransactionCallback</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Wallet</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">Wallet</span> <span class="token function">doInTransaction</span><span class="token punctuation">(</span><span class="token class-name">TransactionStatus</span> status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">// ...</span>
            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
                status<span class="token punctuation">.</span><span class="token function">setRollbackOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> wallet<span class="token punctuation">;</span>
	
    <span class="token comment">// 无返回值时，创建TransactionCallbackWithoutResult接口的对象</span>
    <span class="token comment">/*
    this.txTemplate.execute(new TransactionCallbackWithoutResult() {
        @Override
        protected void doInTransactionWithoutResult(TransactionStatus status) {
            try {
                // ...
            }catch(Throwable ex){
                status.setRollbackOnly();
            }
        }
    });
    */</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="spring事务失效" tabindex="-1"><a class="header-anchor" href="#spring事务失效"><span>Spring事务失效</span></a></h2><p>Spring事务失效的几种情况：</p><ul><li><code>@Transactional</code>注解所在类的对象不是Spring容器管理的Bean</li><li><code>@Transactional</code>注解的方法不是public修饰的</li><li>抛出的异常不在<code>rollbackFor</code>属性声明的异常列表中，或者在<code>noRollbackFor</code>属性的声明列表中，则事务不会自动回滚</li><li>底层数据库不支持事务</li></ul>`,61),c=[o];function e(l,i){return a(),s("div",null,c)}const k=n(p,[["render",e],["__file","SpringBoot使用事务.html.vue"]]);export{k as default};
