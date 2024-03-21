import{_ as n,o as a,c as s,d as t}from"./app-HBA039kk.js";const e={},p=t(`<h1 id="实现背包数据结构" tabindex="-1"><a class="header-anchor" href="#实现背包数据结构"><span>实现背包数据结构</span></a></h1><p>背包（Bag），顺序不重要的数据集合。</p><h2 id="使用单链表实现背包" tabindex="-1"><a class="header-anchor" href="#使用单链表实现背包"><span>使用单链表实现背包</span></a></h2><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h3><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>public class LinkedBag&lt;E&gt; implements Iterable&lt;E&gt;{
    private Node&lt;E&gt; head = null;
    
    /**
     * 加入背包
     * */
    public void add(E value){
        Node&lt;E&gt; oldHead = head;
        head = new Node&lt;&gt;();
        head.value = value;
        head.next = oldHead;
    }

    @Override
    public Iterator&lt;E&gt; iterator() {
        return new LinkedBagIterator();
    }

    private class LinkedBagIterator implements Iterator&lt;E&gt;{
        private Node&lt;E&gt; cursor = head;

        @Override
        public boolean hasNext() {
            return cursor != null;
        }

        @Override
        public E next() {
            E value = cursor.value;
            cursor = cursor.next;
            return value;
        }
    }

    private static class Node&lt;E&gt;{
        private E value;
        private Node&lt;E&gt; next;

        public E getValue() {
            return value;
        }

        public void setValue(E value) {
            this.value = value;
        }

        public Node&lt;E&gt; getNext() {
            return next;
        }

        public void setNext(Node&lt;E&gt; next) {
            this.next = next;
        }
    }
}
</code></pre></div><h3 id="测试用例" tabindex="-1"><a class="header-anchor" href="#测试用例"><span>测试用例</span></a></h3><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">LinkedBag</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> bag <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedBag</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// add</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bag<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// iterator</span>
<span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> iterator <span class="token operator">=</span> bag<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),o=[p];function c(l,u){return a(),s("div",null,o)}const r=n(e,[["render",c],["__file","实现背包数据结构.html.vue"]]);export{r as default};
