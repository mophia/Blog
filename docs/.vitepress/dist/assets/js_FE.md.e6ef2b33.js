import{_ as n,c as a,o as s,d as e}from"./app.bc0011b9.js";const f='{"title":"\u539F\u578B\u548C\u539F\u578B\u94FE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5"},{"level":2,"title":"indexOf","slug":"indexof"},{"level":2,"title":"findIndex","slug":"findindex"},{"level":2,"title":"\u4EC0\u4E48\u662F\u95ED\u5305","slug":"\u4EC0\u4E48\u662F\u95ED\u5305"},{"level":3,"title":"\u95ED\u5305\u7684\u7279\u5F81","slug":"\u95ED\u5305\u7684\u7279\u5F81"},{"level":2,"title":"ES5 \u7EE7\u627F","slug":"es5-\u7EE7\u627F"},{"level":2,"title":"\u6570\u7EC4\u89E3\u6784","slug":"\u6570\u7EC4\u89E3\u6784"},{"level":2,"title":"\u9632\u6296debounce","slug":"\u9632\u6296debounce"},{"level":2,"title":"\u8282\u6D41 throttle","slug":"\u8282\u6D41-throttle"},{"level":2,"title":"\u7BAD\u5934\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u7684\u533A\u522B","slug":"\u7BAD\u5934\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u7684\u533A\u522B"},{"level":2,"title":"new \u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u8FC7\u7A0B","slug":"new-\u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u8FC7\u7A0B"},{"level":2,"title":"\u91CD\u6392\u548C\u91CD\u7ED8","slug":"\u91CD\u6392\u548C\u91CD\u7ED8"}],"relativePath":"js/FE.md","lastUpdated":1642564598627}',t={},p=e(`<h1 id="\u539F\u578B\u548C\u539F\u578B\u94FE" tabindex="-1">\u539F\u578B\u548C\u539F\u578B\u94FE <a class="header-anchor" href="#\u539F\u578B\u548C\u539F\u578B\u94FE" aria-hidden="true">#</a></h1><h2 id="\u6982\u5FF5" tabindex="-1">\u6982\u5FF5 <a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a></h2><p>JavaScript\u53EA\u6709\u4E00\u79CD\u7ED3\u6784\uFF1A\u5BF9\u8C61\u3002\u6BCF\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A\u79C1\u6709\u5C5E\u6027 <code>_proto_</code>\uFF0C\u6307\u5411\u5B83\u7684\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61<code>prototype</code>\u3002\u8BE5\u539F\u578B\u5BF9\u8C61\u4E5F\u6709\u81EA\u5DF1\u7684\u539F\u578B\u5BF9\u8C61<code>_proto_</code>\u3002\u5C42\u5C42\u5411\u4E0A\uFF0C\u77E5\u9053\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61\u4E3A<code>null</code>\u3002<code>null</code>\u6CA1\u6709\u539F\u578B\uFF0C\u5E76\u4F5C\u4E3A\u539F\u578B\u94FE\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" target="_blank" rel="noopener noreferrer">\u7EE7\u627F\u4E0E\u539F\u578B\u94FE - JavaScript | MDN (mozilla.org)</a></p><h1 id="indexof-\u548C-findindex" tabindex="-1">indexOf \u548C findIndex <a class="header-anchor" href="#indexof-\u548C-findindex" aria-hidden="true">#</a></h1><h2 id="indexof" tabindex="-1">indexOf <a class="header-anchor" href="#indexof" aria-hidden="true">#</a></h2><blockquote><p>Array.prototype.indexOf()</p><p>indexOf() \u65B9\u6CD5\u8FD4\u56DE\u5728\u6570\u7EC4\u4E2D\u53EF\u4EE5\u627E\u5230\u7684\u7B2C\u4E00\u4E2A\u7ED9\u5B9A\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u7D22\u5F15\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE -1.</p></blockquote><p>\u4F8B\u5982\uFF1A</p><div class="language-typescript"><pre><code><span class="token keyword">const</span> sister <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sister<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// -1</span>
</code></pre></div><p>\u8BF7\u6CE8\u610F\uFF1A<code>indexOf()</code> \u4F7F\u7528\u4E25\u683C\u7B49\u53F7\u6765\u6BD4\u8F83\u5143\u7D20\u3002\u6240\u4EE5\uFF0C<code>indexOf</code> \u66F4\u591A\u7684\u662F\u7528\u4E8E\u67E5\u627E\u57FA\u672C\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5219\u662F\u5224\u65AD\u662F\u5426\u662F\u540C\u4E00\u5BF9\u8C61\u7684\u5F15\u7528\u3002</p><h2 id="findindex" tabindex="-1">findIndex <a class="header-anchor" href="#findindex" aria-hidden="true">#</a></h2><blockquote><p>Array.prototype.findIndex()</p><p>findIndex() \u65B9\u6CD5\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6EE1\u8DB3\u63D0\u4F9B\u6D4B\u8BD5\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u7D22\u5F15\u3002\u82E5\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684\u5143\u7D20\uFF0C\u5219\u8FD4\u56DE -1</p></blockquote><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" target="_blank" rel="noopener noreferrer">Array.prototype.findIndex() - JavaScript | MDN (mozilla.org)</a></p><div class="language-javascript"><pre><code><span class="token keyword">const</span> sisters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token function-variable function">isLargerNumber</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> element <span class="token operator">&gt;</span> <span class="token number">13</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sisters<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>isLargerNumber<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre></div><p><code>findIndex()</code>\u671F\u671B\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5982\u679C\u4F60\u9700\u8981\u975E\u57FA\u672C\u7C7B\u578B\u6570\u7EC4\uFF08\u4F8B\u5982\u5BF9\u8C61\u7684\u7D22\u5F15\uFF09\uFF0C\u6216\u8005\u4F60\u7684\u67E5\u627E\u6761\u4EF6\u66F4\u590D\u6742\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5</p><h1 id="\u95ED\u5305" tabindex="-1">\u95ED\u5305 <a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a></h1><h2 id="\u4EC0\u4E48\u662F\u95ED\u5305" tabindex="-1">\u4EC0\u4E48\u662F\u95ED\u5305 <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u95ED\u5305" aria-hidden="true">#</a></h2><p>\u95ED\u5305\u662F\u80FD\u591F\u8BFB\u53D6\u5176\u4ED6\u51FD\u6570\u4F5C\u7528\u57DF\u53D8\u91CF\u7684\u51FD\u6570\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures" target="_blank" rel="noopener noreferrer">\u95ED\u5305 - JavaScript | MDN (mozilla.org)</a></p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u95ED\u5305\u7684\u7279\u5F81" tabindex="-1">\u95ED\u5305\u7684\u7279\u5F81 <a class="header-anchor" href="#\u95ED\u5305\u7684\u7279\u5F81" aria-hidden="true">#</a></h3><ul><li>\u51FD\u6570\u5185\u518D\u5D4C\u5957\u51FD\u6570</li><li>\u5185\u90E8\u51FD\u6570\u53EF\u4EE5\u5F15\u7528\u5916\u5C42\u7684\u53C2\u6570\u548C\u53D8\u91CF</li><li>\u53C2\u6570\u548C\u53D8\u91CF\u4E0D\u4F1A\u88AB\u5783\u573E\u56DE\u6536\u5236\u56DE\u6536</li></ul><h1 id="\u7EE7\u627F" tabindex="-1">\u7EE7\u627F <a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a></h1><h2 id="es5-\u7EE7\u627F" tabindex="-1">ES5 \u7EE7\u627F <a class="header-anchor" href="#es5-\u7EE7\u627F" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">function</span> <span class="token function">SuperType</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u5C5E\u6027</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span> name <span class="token operator">=</span> <span class="token string">&#39;SuperType&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u539F\u578B\u65B9\u6CD5</span>
SuperType<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h1 id="es6" tabindex="-1">ES6 <a class="header-anchor" href="#es6" aria-hidden="true">#</a></h1><h2 id="\u6570\u7EC4\u89E3\u6784" tabindex="-1">\u6570\u7EC4\u89E3\u6784 <a class="header-anchor" href="#\u6570\u7EC4\u89E3\u6784" aria-hidden="true">#</a></h2><div class="language-"><pre><code>let [a, b, c] = [1, 2, 3] // a: 1, b: 2, c: 3
let [d, [e], f] = [1, [2], 3] // \u5D4C\u5957\u6570\u7EC4\u89E3\u6784 d: 1, e: 2, f: 3
let [g, ...h] = [1, 2, 3] // \u6570\u7EC4\u62C6\u5206 g: 1, h: [ 2, 3]
let [i, , j] = [ 1, 2, 3] // \u8DF3\u8DC3\u89E3\u6784 i: 1, j: 3
let [k, l] = [1, 2, 3] // \u5C40\u90E8\u89E3\u6784 k: 1, l: 2
</code></pre></div><h1 id="\u7F51\u7EDC\u534F\u8BAE" tabindex="-1">\u7F51\u7EDC\u534F\u8BAE <a class="header-anchor" href="#\u7F51\u7EDC\u534F\u8BAE" aria-hidden="true">#</a></h1><p>\u7F51\u7EDC\u5206\u5C42\u5206\u4E3A\u4E24\u79CD\uFF1A OSI\u6A21\u578B\u548C TCP/IP\u6A21\u578B</p><p>OSI\u6A21\u578B\uFF1A \u5E94\u7528\u5C42 Application\u3001\u8868\u793A\u5C42 Presentation \u3001\u4F1A\u8BDD\u5C42 Session \u3001\u4F20\u8F93\u5C42 Transport \u3001\u7F51\u7EDC\u5C42 Network \u3001\u6570\u636E\u94FE\u8DEF\u5C42 Data Link\u3001\u7269\u7406\u5C42 Physical</p><p>TCP/IP\u6A21\u578B\uFF1A\u5E94\u7528\u5C42 Application \u3001\u4F20\u8F93\u5C42Host-to-Host Transport\u3001\u4E92\u8054\u7F51\u5C42 Internet\u3001\u7F51\u7EDC\u63A5\u53E3\u5C42 Network Interface</p><h1 id="\u51FD\u6570\u7684\u9632\u6296\u548C\u8282\u6D41" tabindex="-1">\u51FD\u6570\u7684\u9632\u6296\u548C\u8282\u6D41 <a class="header-anchor" href="#\u51FD\u6570\u7684\u9632\u6296\u548C\u8282\u6D41" aria-hidden="true">#</a></h1><h2 id="\u9632\u6296debounce" tabindex="-1">\u9632\u6296<code>debounce</code> <a class="header-anchor" href="#\u9632\u6296debounce" aria-hidden="true">#</a></h2><ul><li>\u591A\u6B21\u89E6\u53D1\uFF0C\u53EA\u5728\u6700\u540E\u4E00\u6B21\u89E6\u53D1\u65F6\uFF0C\u6267\u884C\u76EE\u6807\u51FD\u6570\u3002</li></ul><h2 id="\u8282\u6D41-throttle" tabindex="-1">\u8282\u6D41 <code>throttle</code> <a class="header-anchor" href="#\u8282\u6D41-throttle" aria-hidden="true">#</a></h2><p>\u9650\u5236\u76EE\u6807\u51FD\u6570\u8C03\u7528\u7684\u9891\u7387\uFF0C\u6BD4\u59821\u79D2\u4E0D\u80FD\u8C03\u75282\u6B21\u3002</p><h2 id="\u7BAD\u5934\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u7684\u533A\u522B" tabindex="-1">\u7BAD\u5934\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u7684\u533A\u522B <a class="header-anchor" href="#\u7BAD\u5934\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u7684\u533A\u522B" aria-hidden="true">#</a></h2><ul><li>\u8BED\u6CD5\u66F4\u52A0\u7B80\u6D01\u3001\u6E05\u6670</li><li>\u7BAD\u5934\u51FD\u6570\u4E0D\u4F1A\u521B\u5EFA\u81EA\u5DF1\u7684this\uFF0C\u6240\u4EE5\u5B83\u6CA1\u6709\u81EA\u5DF1\u7684this\uFF0C\u5B83\u53EA\u4F1A\u4ECE\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF\u94FE\u7684\u4E0A\u4E00\u5C42\u7EE7\u627Fthis\u3002</li><li>\u4E0D\u80FD\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u4F7F\u7528</li><li>\u6CA1\u6709\u81EA\u5DF1\u7684arguments\u5BF9\u8C61</li><li>\u6CA1\u6709\u539F\u578Bprototype</li><li>\u4E0D\u80FD\u7528\u4F5CGenerator\u51FD\u6570\uFF0C\u4E0D\u80FD\u4F7F\u7528yield\u5173\u952E\u5B57</li></ul><h2 id="new-\u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u8FC7\u7A0B" tabindex="-1">new \u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u8FC7\u7A0B <a class="header-anchor" href="#new-\u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u8FC7\u7A0B" aria-hidden="true">#</a></h2><ul><li>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7A7A\u5BF9\u8C61</li><li>\u5C06\u65B0\u5BF9\u8C61\u7684 <code>__proto__</code> \u6307\u5411\u6784\u9020\u51FD\u6570\u7684prototype</li><li>\u5C06\u6784\u9020\u51FD\u6570\u4E2Dthis\u6307\u5411\u65B0\u5BF9\u8C61\uFF08\u501F\u52A9 call/apply\uFF09</li><li>\u5224\u65AD\u6784\u9020\u51FD\u6570\u7684\u8FD4\u56DE\u503C</li><li>\u8BBE\u7F6E\u4E86\u8FD4\u56DE\u503C\uFF1A</li><li>\u82E5\u8FD4\u56DE\u503C\u4E3A\u5F15\u7528\u503C\uFF0C\u5219\u8FD4\u56DE\u5F15\u7528\u503C\uFF1B\u82E5\u8FD4\u56DE\u503C\u4E3A\u539F\u59CB\u6570\u636E\uFF0C\u5219\u8FD4\u56DE\u65B0\u5BF9\u8C61\uFF1B\u672A\u8BBE\u7F6E\u8FD4\u56DE\u503C\uFF1A\u8FD4\u56DE\u65B0\u5BF9\u8C61\u3002</li></ul><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">newFn</span> <span class="token punctuation">(</span><span class="token parameter">Fn<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7A7A\u5BF9\u8C61 instance</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// \u5C06 instance \u7684 __proto__ \u5C5E\u6027\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\uFF08Fn.prototype\uFF09</span>
    instance<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype
    
    <span class="token keyword">const</span> instance <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
    <span class="token comment">// \u4EE5 instance \u6765\u8C03\u7528\u6267\u884C\u6784\u9020\u51FD\u6570\uFF08\u501F\u52A9 call/apply\uFF09</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">Fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> params<span class="token punctuation">)</span>

    <span class="token comment">// \u5224\u65AD\u6784\u9020\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF0C\u8FD4\u56DE instance \u6216\u51FD\u6570\u8FD4\u56DE\u503C\uFF08\u5F53\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u503C\u4E3A object \u65F6\uFF09</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>result <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span> result <span class="token operator">:</span> instance
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u91CD\u6392\u548C\u91CD\u7ED8" tabindex="-1">\u91CD\u6392\u548C\u91CD\u7ED8 <a class="header-anchor" href="#\u91CD\u6392\u548C\u91CD\u7ED8" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/6844904083212468238" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844904083212468238</a></li><li><a href="https://imweb.io/topic/5c2206a7611a25cc7bf1d848" target="_blank" rel="noopener noreferrer">https://imweb.io/topic/5c2206a7611a25cc7bf1d848</a></li></ul>`,44),o=[p];function c(l,i,r,u,d,k){return s(),a("div",null,o)}var b=n(t,[["render",c]]);export{f as __pageData,b as default};