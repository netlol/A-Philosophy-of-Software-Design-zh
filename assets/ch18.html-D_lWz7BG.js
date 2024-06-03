import{_ as n,c as s,o as e,e as a}from"./app-Bg5U0y9_.js";const t={},o=a(`<h1 id="第-18-章-代码应该是显而易见的" tabindex="-1"><a class="header-anchor" href="#第-18-章-代码应该是显而易见的"><span>第 18 章 代码应该是显而易见的</span></a></h1><blockquote><p>Chapter 18 Code Should be Obvious</p></blockquote><blockquote><p>Obscurity is one of the two main causes of complexity described in Section 2.3. Obscurity occurs when important information about a system is not obvious to new developers. The solution to the obscurity problem is to write code in a way that makes it obvious; this chapter discusses some of the factors that make code more or less obvious.</p></blockquote><p>晦涩难懂是第 2.3 节中描述的导致复杂性的两个主要原因之一。当有关系统的重要信息对于新开发人员而言并不明显时，就会发生模糊(当和一个系统相关的一些重要信息对于新的开发人员不那么容易理解，那就是模糊性)。解决晦涩问题的方法是以显而易见的方式编写代码。本章讨论使代码或多或少变得显而易见的一些因素。</p><blockquote><p>If code is obvious, it means that someone can read the code quickly, without much thought, and their first guesses about the behavior or meaning of the code will be correct. If code is obvious, a reader doesn’t need to spend much time or effort to gather all the information they need to work with the code. If code is not obvious, then a reader must expend a lot of time and energy to understand it. Not only does this reduce their efficiency, but it also increases the likelihood of misunderstanding and bugs. Obvious code needs fewer comments than nonobvious code.</p></blockquote><p>如果代码很明显，则意味着某人可以不加思索地快速阅读该代码，并且他们对代码的行为或含义的最初猜测将是正确的。如果代码很明显，那么读者就不需要花费很多时间或精力来收集他们使用代码所需的所有信息。如果代码不明显，那么读者必须花费大量时间和精力来理解它。这不仅降低了它们的效率，而且还增加了误解和错误的可能性。明显的代码比不明显的代码需要更少的注释。</p><blockquote><p>“Obvious” is in the mind of the reader: it’s easier to notice that someone else’s code is nonobvious than to see problems with your own code. Thus, the best way to determine the obviousness of code is through code reviews. If someone reading your code says it’s not obvious, then it’s not obvious, no matter how clear it may seem to you. By trying to understand what made the code nonobvious, you will learn how to write better code in the future.</p></blockquote><p>读者的想法是“显而易见”（易读性是由读者来判断的）：注意到别人的代码不明显比发现自己的代码有问题要容易得多（相对来说关注到别人代码中的难理解比注意到自己的代码要容易的多）。因此，确定代码是否显而易见的最佳方法是通过代码审查。如果有人在阅读您的代码时说它并不明显，那么无论您看起来多么清晰，它也不是显而易见。通过尝试理解什么使代码变得不明显，您将学习如何在将来编写更好的代码。</p><h2 id="_18-1-things-that-make-code-more-obvious" tabindex="-1"><a class="header-anchor" href="#_18-1-things-that-make-code-more-obvious"><span>18.1 Things that make code more obvious</span></a></h2><blockquote><p>Two of the most important techniques for making code obvious have already been discussed in previous chapters. The first is choosing good names (Chapter 14). Precise and meaningful names clarify the behavior of the code and reduce the need for documentation. If a name is vague or ambiguous, then readers will have read through the code in order to deduce the meaning of the named entity; this is time-consuming and error-prone. The second technique is consistency (Chapter 17). If similar things are always done in similar ways, then readers can recognize patterns they have seen before and immediately draw (safe) conclusions without analyzing the code in detail.</p></blockquote><p>在前面的章节中已经讨论了使代码显而易见的两种最重要的技术。首先是选择好名字（第 14 章）。精确而有意义的名称可以阐明代码的行为，并减少对文档的需求。如果名称含糊不清或含糊不清，那么读者将通读代码以推论命名实体的含义；这既费时又容易出错。第二种技术是一致性（第 17 章）。如果总是以相似的方式完成相似的事情，那么读者可以识别出他们以前所见过的模式，并立即得出（安全）结论，而无需详细分析代码。</p><blockquote><p>Here are a few other general-purpose techniques for making code more obvious:</p></blockquote><p>以下是使代码更明显的其他一些通用技术：</p><blockquote><p>Judicious use of white space. The way code is formatted can impact how easy it is to understand. Consider the following parameter documentation, in which whitespace has been squeezed out:</p></blockquote><p>明智地使用空白。代码格式化的方式会影响其理解的容易程度。考虑以下参数文档，其中空格已被压缩：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> *  ...</span>
<span class="line"> *  <span class="token keyword">@param</span> <span class="token parameter">numThreads</span> The number of threads that this manager should</span>
<span class="line"> *  spin up in order to manage ongoing connections. The MessageManager</span>
<span class="line"> *  spins up at least one thread for every open connection, so this</span>
<span class="line"> *  should be at least equal to the number of connections you expect</span>
<span class="line"> *  to be open at once. This should be a multiple of that number if</span>
<span class="line"> *  you expect to send a lot of messages in a short amount of time.</span>
<span class="line"> *  <span class="token keyword">@param</span> <span class="token parameter">handler</span> Used as a callback in order to handle incoming</span>
<span class="line"> *  messages on this MessageManager&#39;s open connections. See</span>
<span class="line"> *  <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">MessageHandler</span></span></span><span class="token punctuation">}</span> and <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">handleMessage</span></span><span class="token punctuation">}</span> for details.</span>
<span class="line"> */</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>It’s hard to see where the documentation for one parameter ends and the next begins. It’s not even obvious how many parameters there are, or what their names are. If a little whitespace is added, the structure suddenly becomes clear and the documentation is easier to scan:</p></blockquote><p>很难看到一个参数的文档在哪里结束而下一个参数的文档在哪里开始。甚至不知道有多少个参数或它们的名称是什么。如果添加了一些空白，结构会突然变得清晰，文档也更容易扫描：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> *  <span class="token keyword">@param</span> <span class="token parameter">numThreads</span></span>
<span class="line"> *           The number of threads that this manager should spin up in</span>
<span class="line"> *           order to manage ongoing connections. The MessageManager spins</span>
<span class="line"> *           up at least one thread for every open connection, so this</span>
<span class="line"> *           should be at least equal to the number of connections you</span>
<span class="line"> *           expect to be open at once. This should be a multiple of that</span>
<span class="line"> *           number if you expect to send a lot of messages in a short</span>
<span class="line"> *           amount of time.</span>
<span class="line"> *  <span class="token keyword">@param</span> <span class="token parameter">handler</span></span>
<span class="line"> *           Used as a callback in order to handle incoming messages on</span>
<span class="line"> *           this MessageManager&#39;s open connections. See</span>
<span class="line"> *           <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">MessageHandler</span></span></span><span class="token punctuation">}</span> and <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">handleMessage</span></span><span class="token punctuation">}</span> for details.</span>
<span class="line"> */</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Blank lines are also useful to separate major blocks of code within a method, such as in the following example:</p></blockquote><p>空行也可用于分隔方法中的主要代码块，例如以下示例：</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">void</span><span class="token operator">*</span> <span class="token class-name">Buffer</span><span class="token double-colon punctuation">::</span><span class="token function">allocAux</span><span class="token punctuation">(</span>size_t numBytes<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//  Round up the length to a multiple of 8 bytes, to ensure alignment.</span></span>
<span class="line">    <span class="token keyword">uint32_t</span> numBytes32 <span class="token operator">=</span>  <span class="token punctuation">(</span><span class="token generic-function"><span class="token function">downCast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint32_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>numBytes<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token operator">~</span><span class="token number">0x7</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">assert</span><span class="token punctuation">(</span>numBytes32 <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//  If there is enough memory at firstAvailable, use that. Work down</span></span>
<span class="line">    <span class="token comment">//  from the top, because this memory is guaranteed to be aligned</span></span>
<span class="line">    <span class="token comment">//  (memory at the bottom may have been used for variable-size chunks).</span></span>
<span class="line">    <span class="token keyword">if</span>  <span class="token punctuation">(</span>availableLength <span class="token operator">&gt;=</span> numBytes32<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        availableLength <span class="token operator">-=</span> numBytes32<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> firstAvailable <span class="token operator">+</span> availableLength<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//  Next, see if there is extra space at the end of the last chunk.</span></span>
<span class="line">    <span class="token keyword">if</span>  <span class="token punctuation">(</span>extraAppendBytes <span class="token operator">&gt;=</span> numBytes32<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        extraAppendBytes <span class="token operator">-=</span> numBytes32<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> lastChunk<span class="token operator">-&gt;</span>data <span class="token operator">+</span> lastChunk<span class="token operator">-&gt;</span>length <span class="token operator">+</span> extraAppendBytes<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//  Must create a new space allocation; allocate space within it.</span></span>
<span class="line">    <span class="token keyword">uint32_t</span> allocatedLength<span class="token punctuation">;</span></span>
<span class="line">    firstAvailable <span class="token operator">=</span> <span class="token function">getNewAllocation</span><span class="token punctuation">(</span>numBytes32<span class="token punctuation">,</span> <span class="token operator">&amp;</span>allocatedLength<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    availableLength <span class="token operator">=</span> allocatedLength numBytes32<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> firstAvailable <span class="token operator">+</span> availableLength<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>This approach works particularly well if the first line after each blank line is a comment describing the next block of code: the blank lines make the comments more visible.</p></blockquote><p>如果每个空白行之后的第一行是描述下一个代码块的注释，则此方法特别有效：空白行使注释更可见。</p><blockquote><p>White space within a statement helps to clarify the structure of the statement. Compare the following two statements, one of which has whitespace and one of which doesn’t:</p></blockquote><p>语句中的空白有助于阐明语句的结构。比较以下两个语句，其中之一具有空格，而其中一个没有空格：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> pass<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>pass<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span><span class="token operator">!</span>empty<span class="token punctuation">;</span>pass<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> pass <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> pass <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>empty<span class="token punctuation">;</span> pass<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Comments. Sometimes it isn’t possible to avoid code that is nonobvious. When this happens, it’s important to use comments to compensate by providing the missing information. To do this well, you must put yourself in the position of the reader and figure out what is likely to confuse them, and what information will clear up that confusion. The next section shows a few examples.</p></blockquote><p>注释。有时无法避免非显而易见的代码。发生这种情况时，重要的是使用注释来提供缺少的信息以进行补偿。要做到这一点，您必须使自己处于读者的位置，弄清楚什么可能会使他们感到困惑，以及哪些信息可以消除这种混乱。下一部分显示了一些示例。</p><h2 id="_18-2-things-that-make-code-less-obvious-使代码不那么明显的事情" tabindex="-1"><a class="header-anchor" href="#_18-2-things-that-make-code-less-obvious-使代码不那么明显的事情"><span>18.2 Things that make code less obvious 使代码不那么明显的事情</span></a></h2><blockquote><p>There are many things that can make code nonobvious; this section provides a few examples. Some of these, such as event-driven programming, are useful in some situations, so you may end up using them anyway. When this happens, extra documentation can help to minimize reader confusion.</p></blockquote><p>有很多事情可以使代码变得不明显。本节提供了一些示例。其中某些功能（例如事件驱动的编程）在某些情况下很有用，因此您可能最终还是要使用它们。发生这种情况时，额外的文档可以帮助最大程度地减少读者的困惑。</p><blockquote><p>Event-driven programming. In event-driven programming, an application responds to external occurrences, such as the arrival of a network packet or the press of a mouse button. One module is responsible for reporting incoming events. Other parts of the application register interest in certain events by asking the event module to invoke a given function or method when those events occur.</p></blockquote><p>事件驱动的编程。在事件驱动的编程中，应用程序对外部事件做出响应，例如网络数据包的到来或按下鼠标按钮。一个模块负责报告传入事件。应用程序的其他部分通过在事件发生时要求事件模块调用给定的函数或方法来注册对某些事件的兴趣。</p><blockquote><p>Event-driven programming makes it hard to follow the flow of control. The event handler functions are never invoked directly; they are invoked indirectly by the event module, typically using a function pointer or interface. Even if you find the point of invocation in the event module, it still isn’t possible to tell which specific function will be invoked: this will depend on which handlers were registered at runtime. Because of this, it’s hard to reason about event-driven code or convince yourself that it works.</p></blockquote><p>事件驱动的编程使其很难遵循控制流程。永远不要直接调用事件处理函数。它们是由事件模块间接调用的，通常使用函数指针或接口。即使您在事件模块中找到了调用点，也仍然无法确定将调用哪个特定功能：这将取决于在运行时注册了哪些处理程序。因此，很难推理事件驱动的代码或说服自己相信它是可行的。</p><blockquote><p>To compensate for this obscurity, use the interface comment for each handler function to indicate when it is invoked, as in this example:</p></blockquote><p>为了弥补这种模糊性，请为每个处理程序函数使用接口注释，以指示何时调用该函数，如以下示例所示：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * This method is invoked in the dispatch thread by a transport if a</span>
<span class="line"> * transport-level error prevents an RPC from completing.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token class-name">Transport</span><span class="token operator">::</span><span class="token class-name">RpcNotifier</span><span class="token operator">::</span><span class="token function">failed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>img Red Flag: Nonobvious Code img</p></blockquote><blockquote><p>If the meaning and behavior of code cannot be understood with a quick reading, it is a red flag. Often this means that there is important information that is not immediately clear to someone reading the code.</p></blockquote><p>如果无法通过快速阅读来理解代码的含义和行为，则它是一个危险标记。通常，这意味着有些重要的信息对于阅读代码的人来说并不能立即清除。</p><blockquote><p>Generic containers. Many languages provide generic classes for grouping two or more items into a single object, such as Pair in Java or std::pair in C++. These classes are tempting because they make it easy to pass around several objects with a single variable. One of the most common uses is to return multiple values from a method, as in this Java example:</p></blockquote><p>通用容器。许多语言提供了用于将两个或多个项目组合到一个对象中的通用类，例如 Java 中的 Pair 或 C++ 中的 std :: pair。这些类很诱人，因为它们使使用单个变量轻松传递多个对象变得容易。最常见的用途之一是从一个方法返回多个值，如以下 Java 示例所示：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Pair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Boolean</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>currentTerm<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>Unfortunately, generic containers result in nonobvious code because the grouped elements have generic names that obscure their meaning. In the example above, the caller must reference the two returned values with result.getKey() and result.getValue(), which give no clue about the actual meaning of the values.</p></blockquote><p>不幸的是，通用容器导致代码不清晰，因为分组后的元素的通用名称模糊了它们的含义。在上面的示例中，调用者必须使用 result.getKey（）和 result.getValue（）引用两个返回的值，而这两个值都不提供这些值的实际含义。</p><blockquote><p>Thus, it’s better not to use generic containers. If you need a container, define a new class or structure that is specialized for the particular use. You can then use meaningful names for the elements, and you can provide additional documentation in the declaration, which is not possible with the generic container.</p></blockquote><p>因此，最好不要使用通用容器。如果需要容器，请定义专门用于特定用途的新类或结构。然后，您可以为元素使用有意义的名称，并且可以在声明中提供其他文档，而对于常规容器而言，这是不可能的。</p><blockquote><p>This example illustrates a general rule: software should be designed for ease of reading, not ease of writing. Generic containers are expedient for the person writing the code, but they create confusion for all the readers that follow. It’s better for the person writing the code to spend a few extra minutes to define a specific container structure, so that the resulting code is more obvious.</p></blockquote><p>此示例说明了一条通用规则：<strong>软件的设计应易于阅读而不是易于编写</strong>。通用容器对于编写代码的人来说是很方便的，但是它们会使随后的所有读者感到困惑。对于编写代码的人来说，花一些额外的时间来定义特定的容器结构是更好的选择，以便使生成的代码更加明显。</p><blockquote><p>Different types for declaration and allocation. Consider the following Java example:</p></blockquote><p>不同类型的声明和分配。考虑以下 Java 示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Message</span><span class="token punctuation">&gt;</span></span> incomingMessageList<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">incomingMessageList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Message</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>The variable is declared as a List, but the actual value is an ArrayList. This code is legal, since List is a superclass of ArrayList, but it can mislead a reader who sees the declaration but not the actual allocation. The actual type may impact how the variable is used (ArrayLists have different performance and thread-safety properties than other subclasses of List), so it is better to match the declaration with the allocation.</p></blockquote><p>将该变量声明为 List，但实际值为 ArrayList。这段代码是合法的，因为 List 是 ArrayList 的超类，但是它会误导看到声明但不是实际分配的读者。实际类型可能会影响变量的使用方式（ArrayList 与 List 的其他子类相比，具有不同的性能和线程安全属性），因此最好将声明与分配匹配。</p><blockquote><p>Code that violates reader expectations. Consider the following code, which is the main program for a Java application</p></blockquote><p>违反读者期望的代码。考虑以下代码，这是 Java 应用程序的主程序</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">RaftClient</span><span class="token punctuation">(</span>myAddress<span class="token punctuation">,</span> serverAddresses<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Most applications exit when their main programs return, so readers are likely to assume that will happen here. However, that is not the case. The constructor for RaftClient creates additional threads, which continue to operate even though the application’s main thread finishes. This behavior should be documented in the interface comment for the RaftClient constructor, but the behavior is nonobvious enough that it’s worth putting a short comment at the end of main as well. The comment should indicate that the application will continue executing in other threads. Code is most obvious if it conforms to the conventions that readers will be expecting; if it doesn’t, then it’s important to document the behavior so readers aren’t confused.</p></blockquote><p>大多数应用程序在其主程序返回时退出，因此读者可能会认为这将在此处发生。但是，事实并非如此。RaftClient 的构造函数创建其他线程，即使应用程序的主线程完成，该线程仍可继续运行。应该在 RaftClient 构造函数的接口注释中记录此行为，但是该行为不够明显，因此值得在 main 末尾添加简短注释。该注释应指示该应用程序将继续在其他线程中执行。如果代码符合读者期望的惯例，那么它是最明显的。如果没有，那么记录该行为很重要，以免使读者感到困惑。</p><h2 id="_18-3-conclusion-结论" tabindex="-1"><a class="header-anchor" href="#_18-3-conclusion-结论"><span>18.3 Conclusion 结论</span></a></h2><blockquote><p>Another way of thinking about obviousness is in terms of information. If code is nonobvious, that usually means there is important information about the code that the reader does not have: in the RaftClient example, the reader might not know that the RaftClient constructor created new threads; in the Pair example, the reader might not know that result.getKey() returns the number of the current term.</p></blockquote><p>关于显而易见性的另一种思考方式是信息。如果代码不是显而易见的，则通常意味着存在有关读者所不具备的代码的重要信息：在 RaftClient 示例中，读者可能不知道 RaftClient 构造函数创建了新线程；在“配对”示例中，读者可能不知道 result.getKey（）返回当前项的编号。</p><blockquote><p>To make code obvious, you must ensure that readers always have the information they need to understand it. You can do this in three ways. The best way is to reduce the amount of information that is needed, using design techniques such as abstraction and eliminating special cases. Second, you can take advantage of information that readers have already acquired in other contexts (for example, by following conventions and conforming to expectations) so readers don’t have to learn new information for your code. Third, you can present the important information to them in the code, using techniques such as good names and strategic comments.</p></blockquote><p>为了使代码清晰可见，您必须确保读者始终拥有理解它们所需的信息。您可以通过三种方式执行此操作。最好的方法是使用抽象等设计技术并消除特殊情况，以减少所需的信息量。其次，您可以利用读者在其他情况下已经获得的信息（例如，通过遵循约定并符合期望），从而使读者不必为代码学习新的信息。第三，您可以使用诸如好名和战略注释之类的技术在代码中向他们提供重要信息。</p>`,66),i=[o];function p(l,c){return e(),s("div",null,i)}const u=n(t,[["render",p],["__file","ch18.html.vue"]]),d=JSON.parse('{"path":"/ch18.html","title":"第 18 章 代码应该是显而易见的","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"18.1 Things that make code more obvious","slug":"_18-1-things-that-make-code-more-obvious","link":"#_18-1-things-that-make-code-more-obvious","children":[]},{"level":2,"title":"18.2 Things that make code less obvious 使代码不那么明显的事情","slug":"_18-2-things-that-make-code-less-obvious-使代码不那么明显的事情","link":"#_18-2-things-that-make-code-less-obvious-使代码不那么明显的事情","children":[]},{"level":2,"title":"18.3 Conclusion 结论","slug":"_18-3-conclusion-结论","link":"#_18-3-conclusion-结论","children":[]}],"git":{"updatedTime":1717384858000},"filePathRelative":"ch18.md"}');export{u as comp,d as data};
