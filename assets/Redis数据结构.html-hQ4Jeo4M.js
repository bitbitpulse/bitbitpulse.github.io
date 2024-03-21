import{_ as s,o as a,c as e,d as n}from"./app-HBA039kk.js";const t={},p=n(`<h1 id="redis数据结构" tabindex="-1"><a class="header-anchor" href="#redis数据结构"><span>Redis数据结构</span></a></h1><p>参考：https://redis.io/docs/data-types/</p><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string"><span>string</span></a></h2><h2 id="list" tabindex="-1"><a class="header-anchor" href="#list"><span>list</span></a></h2><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span>set</span></a></h2><h2 id="hash" tabindex="-1"><a class="header-anchor" href="#hash"><span>hash</span></a></h2><h2 id="zset" tabindex="-1"><a class="header-anchor" href="#zset"><span>zset</span></a></h2><h2 id="bitmaps" tabindex="-1"><a class="header-anchor" href="#bitmaps"><span>Bitmaps</span></a></h2><p>Bitmaps是一种特殊的字符串，只能存储二进制的0和1。可以将其理解为存储0和1的数组。</p><p>以用户访问记录为例：</p><p>设置值</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># setbit key offset value</span>
setbit user:visit:2023-01-01 <span class="token number">0</span> <span class="token number">1</span>
setbit user:visit:2023-01-01 <span class="token number">2</span> <span class="token number">1</span>
setbit user:visit:2023-01-01 <span class="token number">4</span> <span class="token number">1</span>
setbit user:visit:2023-01-01 <span class="token number">6</span> <span class="token number">1</span>

setbit user:visit:2023-01-02 <span class="token number">0</span> <span class="token number">1</span>
setbit user:visit:2023-01-02 <span class="token number">1</span> <span class="token number">1</span>
setbit user:visit:2023-01-02 <span class="token number">3</span> <span class="token number">1</span>
</code></pre></div><p>获取值</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># getbit key offset</span>
getbit user:visit:2023-01-01 <span class="token number">0</span>
getbit user:visit:2023-01-01 <span class="token number">100</span>
</code></pre></div><p>获取值为1的位个数</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># bitcount key [start end [BYTE|BIT]]</span>
bitcount user:visit:2023-01-01
bitcount user:visit:2023-01-01 <span class="token number">10</span>
bitcount user:visit:2023-01-01 <span class="token number">10</span> <span class="token number">20</span>
</code></pre></div><p>获取特定位的偏移量</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># bitpos key bit [start [end [BYTE|BIT]]]</span>
bitpos user:visit:2023-01-01 <span class="token number">0</span>
bitpos user:visit:2023-01-01 <span class="token number">1</span>
 bitpos user:visit:2023-01-01 <span class="token number">1</span> <span class="token number">0</span> <span class="token number">100</span>
</code></pre></div><p>按位操作</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># bitop AND|OR|XOR|NOT destkey key [key ...]</span>
<span class="token comment"># AND</span>
bitop and user:visit:2023-01-01:2023-01-02 user:visit:2023-01-01 user:visit:2023-01-02
bitcount user:visit:2023-01-01:2023-01-02
</code></pre></div><h2 id="hyperloglog" tabindex="-1"><a class="header-anchor" href="#hyperloglog"><span>HyperLogLog</span></a></h2><p>HyperLogLog是一种特殊的字符串，使用基数算法，用于统计去除重复数据的独立总数。</p><p>添加元素</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># pfadd key [element [element ...]]</span>
pfadd visitors:2023-01-01 <span class="token number">1</span> <span class="token number">3</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">7</span>
pfadd visitors:2023-01-02 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">6</span> <span class="token number">7</span>
</code></pre></div><p>获取基数：获取多个key的基数时，会将多个key合并为1个临时的HyperLogLog，返回临时HyperLogLog的基数</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># pfcount key [key ...]</span>
pfcount visitors:2023-01-01
pfcount visitors:2023-01-02
pfcount visitors:2023-01-01 visitors:2023-01-02
</code></pre></div><p>合并HyperLogLog</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># pfmerge destkey [sourcekey [sourcekey ...]]</span>
pfmerge visitors:2023-01 visitors:2023-01-01 visitors:2023-01-02
pfcount visitors:2023-01
</code></pre></div><h2 id="地理空间" tabindex="-1"><a class="header-anchor" href="#地理空间"><span>地理空间</span></a></h2><p>添加成员</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># geoadd key [NX|XX] [CH] longitude latitude member [longitude latitude member ...]</span>
<span class="token comment"># 默认返回添加的元素数量，CH参数表示返回更改的元素数量</span>
</code></pre></div><p>获取指定成员的坐标</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># geopos key [member [member ...]]</span>
</code></pre></div><p>获取指定成员的坐标，以geo hash形式返回</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># geohash key [member [member ...]]</span>
</code></pre></div><p>获取2个成员之间的距离</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># geodist key member1 member2 [M|KM|FT|MI]</span>
<span class="token comment"># [M|KM|FT|MI]单位，默认M</span>
</code></pre></div><p>获取指定坐标在指定半径范围内的元素</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># georadius key longitude latitude radius M|KM|FT|MI [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT count [ANY]] [ASC|DESC] [STORE key|STOREDIST key]</span>
<span class="token comment"># longitude: 经度 </span>
<span class="token comment"># latitude: 纬度</span>
<span class="token comment"># radius M|KM|FT|MI: 半径 单位</span>
</code></pre></div><p>获取指定成员在指定半径范围内的元素</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># georadiusbymember key member radius M|KM|FT|MI [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT count [ANY]] [ASC|DESC] [STORE key|STOREDIST key]</span>
</code></pre></div><p>搜索指定范围内的成员：支持圆形范围和矩形范围</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># geosearch key FROMMEMBER member|FROMLONLAT longitude latitude BYRADIUS radius M|KM|FT|MI|BYBOX width height M|KM|FT|MI [ASC|DESC] [COUNT count [ANY]] [WITHCOORD] [WITHDIST]</span>
<span class="token comment"># FROMMEMBER member|FROMLONLAT longitude latitude: 搜索中心,可以使用成员或坐标</span>
<span class="token comment"># BYRADIUS radius M|KM|FT|MI|BYBOX width height M|KM|FT|MI: 搜索范围,可以使用圆形或矩形</span>
</code></pre></div>`,43),o=[p];function c(i,l){return a(),e("div",null,o)}const d=s(t,[["render",c],["__file","Redis数据结构.html.vue"]]);export{d as default};
