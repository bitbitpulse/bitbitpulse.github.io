import{_ as n,o as s,c as a,d as t}from"./app-HBA039kk.js";const p="/assets/snowflake-t_7BVvzL.webp",o={},e=t(`<h1 id="分布式系统中全局唯一id实现方案" tabindex="-1"><a class="header-anchor" href="#分布式系统中全局唯一id实现方案"><span>分布式系统中全局唯一ID实现方案</span></a></h1><h2 id="uuid" tabindex="-1"><a class="header-anchor" href="#uuid"><span>UUID</span></a></h2><p>优点：</p><ul><li>本地生成，无需网络</li></ul><p>缺点：</p><ul><li>32位16进制字符串，占用存储空间</li><li>基于MAC地址生成UUID，可能造成信息泄露</li><li>UUID的无序性对数据库索引不友好</li></ul><h2 id="数据库自增主键" tabindex="-1"><a class="header-anchor" href="#数据库自增主键"><span>数据库自增主键</span></a></h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>MySQL相关文档：https://dev.mysql.com/doc/refman/8.0/en/replication-options-source.html</p></div><p>配置数据库自增列的起始值和步进值，实现不同数据库生成唯一ID。</p><p>以MySQL为例，假如共3台数据库：</p><p><strong>数据库A</strong></p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;auto_increment%&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">SET</span> @<span class="token variable">@auto_increment_increment</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>

<span class="token keyword">SET</span> @<span class="token variable">@auto_increment_offset</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>数据库B</strong></p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;auto_increment%&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">SET</span> @<span class="token variable">@auto_increment_increment</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>

<span class="token keyword">SET</span> @<span class="token variable">@auto_increment_offset</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>数据库C</strong></p><div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;auto_increment%&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">SET</span> @<span class="token variable">@auto_increment_increment</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>

<span class="token keyword">SET</span> @<span class="token variable">@auto_increment_offset</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
</code></pre></div><p>效果：</p><ul><li>数据库A：1,4,7...</li><li>数据库B：2,5,8...</li><li>数据库C：3,6,9...</li></ul><p>优点：</p><ul><li>只依赖数据库，无需其它资源</li></ul><p>缺点：</p><ul><li>性能严重依赖数据性能</li></ul><h2 id="redis递增命令" tabindex="-1"><a class="header-anchor" href="#redis递增命令"><span>Redis递增命令</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>incr <span class="token function">id</span>
INCRBY <span class="token function">id</span> <span class="token number">3</span>
</code></pre></div><p>优点：</p><ul><li>性能较高</li></ul><p>缺点：</p><ul><li>需要引入Redis，增加系统复杂度</li></ul><h2 id="雪花算法snowflake" tabindex="-1"><a class="header-anchor" href="#雪花算法snowflake"><span>雪花算法Snowflake</span></a></h2><p>Snowflake是Twitter开源的分布式ID生成算法</p><p><img src="`+p+`" alt=""></p><p>将64bit划分为4个部分：</p><ul><li>1：始终为0</li><li>2-42：41bit时间戳</li><li>43-52：10bit机器ID，介于0-1023，即可以有1024台机器</li><li>53-64：12bit自增序列，介于0-4095</li></ul><p>Java实现</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">me<span class="token punctuation">.</span>lyp<span class="token punctuation">.</span>snowflake</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Twitter_Snowflake<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
 * SnowFlake的结构如下(每部分用-分开):<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
 * 0 - 0000000000 0000000000 0000000000 0000000000 0 - 00000 - 00000 - 000000000000 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
 * 1位标识，由于long基本类型在Java中是带符号的，最高位是符号位，正数是0，负数是1，所以id一般是正数，最高位是0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
 * 41位时间截(毫秒级)，注意，41位时间截不是存储当前时间的时间截，而是存储时间截的差值（当前时间截 - 开始时间截)
 * 得到的值），这里的的开始时间截，一般是我们的id生成器开始使用的时间，由我们程序来指定的（如下下面程序IdWorker类的startTime属性）。41位的时间截，可以使用69年，年T = (1L &lt;&lt; 41) / (1000L * 60 * 60 * 24 * 365) = 69<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
 * 10位的数据机器位，可以部署在1024个节点，包括5位datacenterId和5位workerId<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
 * 12位序列，毫秒内的计数，12位的计数顺序号支持每个节点每毫秒(同一机器，同一时间截)产生4096个ID序号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
 * 加起来刚好64位，为一个Long型。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
 * SnowFlake的优点是，整体上按照时间自增排序，并且整个分布式系统内不会产生ID碰撞(由数据中心ID和机器ID作区分)，并且效率较高，经测试，SnowFlake每秒能够产生26万ID左右。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SnowflakeDistributeId</span> <span class="token punctuation">{</span>
    <span class="token comment">// ==============================Fields===========================================</span>
    <span class="token doc-comment comment">/**
     * 开始时间截 (2015-01-01)
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> twepoch <span class="token operator">=</span> <span class="token number">1420041600000L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 机器id所占的位数
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> workerIdBits <span class="token operator">=</span> <span class="token number">5L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 数据标识id所占的位数
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> datacenterIdBits <span class="token operator">=</span> <span class="token number">5L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 支持的最大机器id，结果是31 (这个移位算法可以很快的计算出几位二进制数所能表示的最大十进制数)
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> maxWorkerId <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1L</span> <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1L</span> <span class="token operator">&lt;&lt;</span> workerIdBits<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 支持的最大数据标识id，结果是31
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> maxDatacenterId <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1L</span> <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1L</span> <span class="token operator">&lt;&lt;</span> datacenterIdBits<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 序列在id中占的位数
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> sequenceBits <span class="token operator">=</span> <span class="token number">12L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 机器ID向左移12位
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> workerIdShift <span class="token operator">=</span> sequenceBits<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 数据标识id向左移17位(12+5)
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> datacenterIdShift <span class="token operator">=</span> sequenceBits <span class="token operator">+</span> workerIdBits<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 时间截向左移22位(5+5+12)
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> timestampLeftShift <span class="token operator">=</span> sequenceBits <span class="token operator">+</span> workerIdBits <span class="token operator">+</span> datacenterIdBits<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 生成序列的掩码，这里为4095 (0b111111111111=0xfff=4095)
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">long</span> sequenceMask <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1L</span> <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1L</span> <span class="token operator">&lt;&lt;</span> sequenceBits<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 工作机器ID(0~31)
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> workerId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 数据中心ID(0~31)
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> datacenterId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 毫秒内序列(0~4095)
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> sequence <span class="token operator">=</span> <span class="token number">0L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 上次生成ID的时间截
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> lastTimestamp <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token comment">//==============================Constructors=====================================</span>

    <span class="token doc-comment comment">/**
     * 构造函数
     *
     * <span class="token keyword">@param</span> <span class="token parameter">workerId</span>     工作ID (0~31)
     * <span class="token keyword">@param</span> <span class="token parameter">datacenterId</span> 数据中心ID (0~31)
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">SnowflakeDistributeId</span><span class="token punctuation">(</span><span class="token keyword">long</span> workerId<span class="token punctuation">,</span> <span class="token keyword">long</span> datacenterId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>workerId <span class="token operator">&gt;</span> maxWorkerId <span class="token operator">||</span> workerId <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;worker Id can&#39;t be greater than %d or less than 0&quot;</span><span class="token punctuation">,</span> maxWorkerId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>datacenterId <span class="token operator">&gt;</span> maxDatacenterId <span class="token operator">||</span> datacenterId <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;datacenter Id can&#39;t be greater than %d or less than 0&quot;</span><span class="token punctuation">,</span> maxDatacenterId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>workerId <span class="token operator">=</span> workerId<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>datacenterId <span class="token operator">=</span> datacenterId<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ==============================Methods==========================================</span>

    <span class="token doc-comment comment">/**
     * 获得下一个ID (该方法是线程安全的)
     *
     * <span class="token keyword">@return</span> SnowflakeId
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">long</span> <span class="token function">nextId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> timestamp <span class="token operator">=</span> <span class="token function">timeGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//如果当前时间小于上一次ID生成的时间戳，说明系统时钟回退过这个时候应当抛出异常</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timestamp <span class="token operator">&lt;</span> lastTimestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>
                    <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;Clock moved backwards.  Refusing to generate id for %d milliseconds&quot;</span><span class="token punctuation">,</span> lastTimestamp <span class="token operator">-</span> timestamp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//如果是同一时间生成的，则进行毫秒内序列</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lastTimestamp <span class="token operator">==</span> timestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sequence <span class="token operator">=</span> <span class="token punctuation">(</span>sequence <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> sequenceMask<span class="token punctuation">;</span>
            <span class="token comment">//毫秒内序列溢出</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>sequence <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//阻塞到下一个毫秒,获得新的时间戳</span>
                timestamp <span class="token operator">=</span> <span class="token function">tilNextMillis</span><span class="token punctuation">(</span>lastTimestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//时间戳改变，毫秒内序列重置</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            sequence <span class="token operator">=</span> <span class="token number">0L</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//上次生成ID的时间截</span>
        lastTimestamp <span class="token operator">=</span> timestamp<span class="token punctuation">;</span>

        <span class="token comment">//移位并通过或运算拼到一起组成64位的ID</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>timestamp <span class="token operator">-</span> twepoch<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> timestampLeftShift<span class="token punctuation">)</span> <span class="token comment">//</span>
                <span class="token operator">|</span> <span class="token punctuation">(</span>datacenterId <span class="token operator">&lt;&lt;</span> datacenterIdShift<span class="token punctuation">)</span> <span class="token comment">//</span>
                <span class="token operator">|</span> <span class="token punctuation">(</span>workerId <span class="token operator">&lt;&lt;</span> workerIdShift<span class="token punctuation">)</span> <span class="token comment">//</span>
                <span class="token operator">|</span> sequence<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 阻塞到下一个毫秒，直到获得新的时间戳
     *
     * <span class="token keyword">@param</span> <span class="token parameter">lastTimestamp</span> 上次生成ID的时间截
     * <span class="token keyword">@return</span> 当前时间戳
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">long</span> <span class="token function">tilNextMillis</span><span class="token punctuation">(</span><span class="token keyword">long</span> lastTimestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> timestamp <span class="token operator">=</span> <span class="token function">timeGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>timestamp <span class="token operator">&lt;=</span> lastTimestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            timestamp <span class="token operator">=</span> <span class="token function">timeGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> timestamp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回以毫秒为单位的当前时间
     *
     * <span class="token keyword">@return</span> 当前时间(毫秒)
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">long</span> <span class="token function">timeGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SnowflakeDistributeId</span> idWorker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SnowflakeDistributeId</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>idWorker<span class="token punctuation">.</span><span class="token function">nextId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,35),c=[e];function l(k,r){return s(),a("div",null,c)}const i=n(o,[["render",l],["__file","分布式系统中全局唯一ID实现方案.html.vue"]]);export{i as default};
