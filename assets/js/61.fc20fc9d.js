(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{660:function(a,e,v){"use strict";v.r(e);var t=v(33),_=Object(t.a)({},(function(){var a=this,e=a.$createElement,v=a._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"作用与解释"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#作用与解释"}},[a._v("#")]),a._v(" 作用与解释")]),a._v(" "),v("ul",[v("li",[a._v("Class "),v("code",[a._v("Object")]),a._v("是类"),v("code",[a._v("Object")]),a._v("结构的根。  每个班都有"),v("code",[a._v("Object")]),a._v("作为超类。 所有对象（包括数组）都实现了这个类的方法。")])]),a._v(" "),v("h1",{attrs:{id:"构造方法详细信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#构造方法详细信息"}},[a._v("#")]),a._v(" 构造方法详细信息")]),a._v(" "),v("h2",{attrs:{id:"object"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[a._v("#")]),a._v(" Object")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("public Object()\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br")])]),v("p",[v("strong",[a._v("代码示例:")])]),a._v(" "),v("h1",{attrs:{id:"方法详细信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法详细信息"}},[a._v("#")]),a._v(" 方法详细信息")]),a._v(" "),v("h2",{attrs:{id:"获取类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#获取类"}},[a._v("#")]),a._v(" 获取类")]),a._v(" "),v("h3",{attrs:{id:"getclass"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#getclass"}},[a._v("#")]),a._v(" getClass")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("public final 类<?> getClass()\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br")])]),v("p",[a._v("返回此"),v("code",[a._v("Object")]),a._v("的运行时类。返回的"),v("code",[a._v("类")]),a._v("对象是被表示类的"),v("code",[a._v("static synchronized")]),a._v("方法锁定的对象。")]),a._v(" "),v("p",[v("strong",[a._v("实际结果的类型是"),v("code",[a._v("Class<? extends |X|>")]),a._v("其中"),v("code",[a._v("|X|")]),a._v("是静态类型上其表达的擦除"),v("code",[a._v("getClass")]),a._v("被调用。")]),a._v("  例如，在此代码片段中不需要转换：")]),a._v(" "),v("p",[v("code",[a._v("Number n = 0;")]),a._v(" "),v("code",[a._v("Class<? extends Number> c = n.getClass();")])]),a._v(" "),v("ul",[v("li",[v("p",[a._v("结果")]),a._v(" "),v("p",[a._v("表示 "),v("code",[a._v("类")]),a._v("对象的运行时类的Class对象。")])]),a._v(" "),v("li",[v("p",[a._v("See The Java™ Language  Specification:")]),a._v(" "),v("p",[a._v("15.8.2类文字")])])]),a._v(" "),v("p",[v("strong",[a._v("代码示例:")])]),a._v(" "),v("h2",{attrs:{id:"获取对象的哈希码值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#获取对象的哈希码值"}},[a._v("#")]),a._v(" 获取对象的哈希码值")]),a._v(" "),v("h3",{attrs:{id:"hashcode"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hashcode"}},[a._v("#")]),a._v(" hashCode")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("public int hashCode()\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br")])]),v("p",[a._v("返回对象的哈希码值。支持这种方法是为了散列表，如"),v("RouterLink",{attrs:{to:"/01.Java/java/util/HashMap.html"}},[v("code",[a._v("HashMap")])]),a._v("提供的"),v("RouterLink",{attrs:{to:"/01.Java/java/util/HashMap.html"}},[a._v("那样")]),a._v(" 。")],1),a._v(" "),v("p",[v("code",[a._v("hashCode")]),a._v("的总合同是：")]),a._v(" "),v("ul",[v("li",[a._v("只要在执行Java应用程序时多次在同一个对象上调用该方法，  "),v("code",[a._v("hashCode")]),a._v("方法必须始终返回相同的整数，前提是修改了对象中"),v("code",[a._v("equals")]),a._v("比较中的信息。  该整数不需要从一个应用程序的执行到相同应用程序的另一个执行保持一致。")]),a._v(" "),v("li",[a._v("如果根据"),v("code",[a._v("equals(Object)")]),a._v("方法两个对象相等，则在两个对象中的每个对象上调用"),v("code",[a._v("hashCode")]),a._v("方法必须产生相同的整数结果。")]),a._v(" "),v("li",[v("em",[a._v("不")]),a._v("要求如果两个对象根据"),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#equals-java.lang.Object-"}},[v("code",[a._v("equals(java.lang.Object)")])]),a._v("方法不相等，那么在两个对象中的每个对象上调用"),v("code",[a._v("hashCode")]),a._v("方法必须产生不同的整数结果。  但是，程序员应该意识到，为不等对象生成不同的整数结果可能会提高哈希表的性能。")],1)]),a._v(" "),v("p",[a._v("尽可能多的合理实用，由类别"),v("code",[a._v("Object")]),a._v("定义的hashCode方法确实为不同对象返回不同的整数。  （这通常通过将对象的内部地址转换为整数来实现，但Java的编程语言不需要此实现技术。）")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("结果")]),a._v(" "),v("p",[a._v("该对象的哈希码值。")])]),a._v(" "),v("li",[v("p",[a._v("另请参见：")]),a._v(" "),v("p",[v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#equals-java.lang.Object-"}},[v("code",[a._v("equals(java.lang.Object)")])]),a._v("  ， "),v("RouterLink",{attrs:{to:"/01.Java/java/lang/System.html#identityHashCode-java.lang.Object-"}},[v("code",[a._v("System.identityHashCode(java.lang.Object)")])])],1)])]),a._v(" "),v("p",[v("strong",[a._v("代码示例:")])]),a._v(" "),v("h2",{attrs:{id:"比较两个对象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#比较两个对象"}},[a._v("#")]),a._v(" 比较两个对象")]),a._v(" "),v("h3",{attrs:{id:"equals"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#equals"}},[a._v("#")]),a._v(" equals")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("public boolean equals(Object obj)\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br")])]),v("p",[a._v("指示一些其他对象是否等于此。")]),a._v(" "),v("p",[v("code",[a._v("equals")]),a._v("方法在非空对象引用上实现等价关系：")]),a._v(" "),v("ul",[v("li",[v("em",[a._v("自反性")]),a._v(" ：对于任何非空的参考值"),v("code",[a._v("x")]),a._v(" ，  "),v("code",[a._v("x.equals(x)")]),a._v("应该返回"),v("code",[a._v("true")]),a._v(" 。")]),a._v(" "),v("li",[a._v("它是"),v("em",[a._v("对称的")]),a._v(" ：对于任何非空引用值"),v("code",[a._v("x")]),a._v("和"),v("code",[a._v("y")]),a._v(" ，  "),v("code",[a._v("x.equals(y)")]),a._v("应该返回"),v("code",[a._v("true")]),a._v("当且仅当"),v("code",[a._v("y.equals(x)")]),a._v("回报"),v("code",[a._v("true")]),a._v("  。")]),a._v(" "),v("li",[v("em",[a._v("传递性")]),a._v(" ：对于任何非空引用值"),v("code",[a._v("x")]),a._v(" ， "),v("code",[a._v("y")]),a._v("和"),v("code",[a._v("z")]),a._v("  ，如果"),v("code",[a._v("x.equals(y)")]),a._v("回报"),v("code",[a._v("true")]),a._v("个"),v("code",[a._v("y.equals(z)")]),a._v("回报"),v("code",[a._v("true")]),a._v("  ，然后"),v("code",[a._v("x.equals(z)")]),a._v("应该返回"),v("code",[a._v("true")]),a._v(" 。")]),a._v(" "),v("li",[a._v("它是"),v("em",[a._v("一致的")]),a._v(" ：对于任何非空引用值"),v("code",[a._v("x")]),a._v("和"),v("code",[a._v("y")]),a._v("  ，多次调用"),v("code",[a._v("x.equals(y)")]),a._v("始终返回"),v("code",[a._v("true")]),a._v("或始终返回"),v("code",[a._v("false")]),a._v("  ，没有设置中使用的信息"),v("code",[a._v("equals")]),a._v("比较上的对象被修改。")]),a._v(" "),v("li",[a._v("对于任何非空的参考值"),v("code",[a._v("x")]),a._v(" ，  "),v("code",[a._v("x.equals(null)")]),a._v("应该返回"),v("code",[a._v("false")]),a._v(" 。")])]),a._v(" "),v("p",[a._v("该"),v("code",[a._v("equals")]),a._v("类方法"),v("code",[a._v("Object")]),a._v("实现对象上差别可能性最大的相等关系;  也就是说，对于任何非空的参考值"),v("code",[a._v("x")]),a._v("和"),v("code",[a._v("y")]),a._v("  ，当且仅当"),v("code",[a._v("x")]),a._v("和"),v("code",[a._v("y")]),a._v("引用相同的对象（ "),v("code",[a._v("x == y")]),a._v("具有值"),v("code",[a._v("true")]),a._v(" ）时，该方法返回"),v("code",[a._v("true")]),a._v(" 。")]),a._v(" "),v("p",[a._v("请注意，无论何时覆盖该方法，通常需要覆盖"),v("code",[a._v("hashCode")]),a._v("方法，以便维护"),v("code",[a._v("hashCode")]),a._v("方法的通用合同，该方法规定相等的对象必须具有相等的哈希码。")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("参数")]),a._v(" "),v("p",[v("code",[a._v("obj")]),a._v(" - 与之比较的参考对象。")])]),a._v(" "),v("li",[v("p",[a._v("结果")]),a._v(" "),v("p",[v("code",[a._v("true")]),a._v("如果此对象与obj参数相同;  "),v("code",[a._v("false")]),a._v("否则。")])]),a._v(" "),v("li",[v("p",[a._v("另请参见：")]),a._v(" "),v("p",[v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#hashCode--"}},[v("code",[a._v("hashCode()")])]),a._v(" ， "),v("RouterLink",{attrs:{to:"/01.Java/java/util/HashMap.html"}},[v("code",[a._v("HashMap")])])],1)])]),a._v(" "),v("p",[v("strong",[a._v("代码示例:")])]),a._v(" "),v("h2",{attrs:{id:"tostring"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tostring"}},[a._v("#")]),a._v(" toString")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("public String toString()\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br")])]),v("p",[a._v("返回对象的字符串表示形式。一般来说，  "),v("code",[a._v("toString")]),a._v("方法返回一个“textually代表”这个对象的字符串。结果应该是一个简明扼要的表达，容易让人阅读。建议所有子类覆盖此方法。")]),a._v(" "),v("p",[a._v("该"),v("code",[a._v("toString")]),a._v("类方法"),v("code",[a._v("Object")]),a._v("返回一个由其中的对象是一个实例，该符号字符"),v("code",[a._v("的类的名称的字符串")]),a._v("@`  ”和对象的哈希码的无符号的十六进制表示。 换句话说，这个方法返回一个等于下列值的字符串：")]),a._v(" "),v("blockquote",[v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v(" getClass().getName() + '@' + Integer.toHexString(hashCode())\n \n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br"),v("span",{staticClass:"line-number"},[a._v("2")]),v("br")])])]),a._v(" "),v("ul",[v("li",[v("p",[a._v("结果")]),a._v(" "),v("p",[a._v("对象的字符串表示形式。")])])]),a._v(" "),v("p",[v("strong",[a._v("代码示例:")])]),a._v(" "),v("h2",{attrs:{id:"唤醒线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#唤醒线程"}},[a._v("#")]),a._v(" 唤醒线程")]),a._v(" "),v("h3",{attrs:{id:"唤醒单个线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#唤醒单个线程"}},[a._v("#")]),a._v(" 唤醒单个线程")]),a._v(" "),v("h4",{attrs:{id:"notify"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#notify"}},[a._v("#")]),a._v(" notify")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("public final void notify()\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br")])]),v("p",[a._v("唤醒正在等待对象监视器的单个线程。如果任何线程正在等待这个对象，其中一个被选择被唤醒。选择是任意的，并且由实施的判断发生。线程通过调用"),v("code",[a._v("wait")]),a._v("方法之一等待对象的监视器。")]),a._v(" "),v("p",[a._v("唤醒的线程将无法继续，直到当前线程放弃此对象上的锁定为止。  唤醒的线程将以通常的方式与任何其他线程竞争，这些线程可能正在积极地竞争在该对象上进行同步;  例如，唤醒的线程在下一个锁定该对象的线程中没有可靠的权限或缺点。")]),a._v(" "),v("p",[a._v("该方法只能由作为该对象的监视器的所有者的线程调用。 线程以三种方式之一成为对象监视器的所有者：")]),a._v(" "),v("ul",[v("li",[a._v("通过执行该对象的同步实例方法。")]),a._v(" "),v("li",[a._v("通过执行在对象上"),v("code",[a._v("synchronized")]),a._v(" synchronized语句的正文。")]),a._v(" "),v("li",[a._v("对于类型为"),v("code",[a._v("Class,")]),a._v("的对象，通过执行该类的同步静态方法。")])]),a._v(" "),v("p",[a._v("一次只能有一个线程可以拥有一个对象的显示器。")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("异常")]),a._v(" "),v("p",[v("code",[a._v("IllegalMonitorStateException")]),a._v("  - 如果当前线程不是此对象的监视器的所有者。")])]),a._v(" "),v("li",[v("p",[a._v("另请参见：")]),a._v(" "),v("p",[v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#notifyAll--"}},[v("code",[a._v("notifyAll()")])]),a._v(" ， "),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#wait--"}},[v("code",[a._v("wait()")])])],1)])]),a._v(" "),v("p",[v("strong",[a._v("代码示例:")])]),a._v(" "),v("h3",{attrs:{id:"唤醒所有线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#唤醒所有线程"}},[a._v("#")]),a._v(" 唤醒所有线程")]),a._v(" "),v("h4",{attrs:{id:"notifyall"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#notifyall"}},[a._v("#")]),a._v(" notifyAll")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("public final void notifyAll()\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br")])]),v("p",[a._v("唤醒正在等待对象监视器的所有线程。线程通过调用"),v("code",[a._v("wait")]),a._v("方法之一等待对象的监视器。")]),a._v(" "),v("p",[a._v("唤醒的线程将无法继续，直到当前线程释放该对象上的锁。  唤醒的线程将以通常的方式与任何其他线程竞争，这些线程可能正在积极地竞争在该对象上进行同步;  例如，唤醒的线程在下一个锁定该对象的线程中不会有可靠的特权或缺点。")]),a._v(" "),v("p",[a._v("该方法只能由作为该对象的监视器的所有者的线程调用。  有关线程可以成为监视器所有者的方法的说明，请参阅"),v("code",[a._v("notify")]),a._v("方法。")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("异常")]),a._v(" "),v("p",[v("code",[a._v("IllegalMonitorStateException")]),a._v("  - 如果当前线程不是此对象的监视器的所有者。")])]),a._v(" "),v("li",[v("p",[a._v("另请参见：")]),a._v(" "),v("p",[v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#notify--"}},[v("code",[a._v("notify()")])]),a._v(" ，  "),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#wait--"}},[v("code",[a._v("wait()")])])],1)])]),a._v(" "),v("p",[v("strong",[a._v("代码示例:")])]),a._v(" "),v("h2",{attrs:{id:"阻塞线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#阻塞线程"}},[a._v("#")]),a._v(" 阻塞线程")]),a._v(" "),v("h3",{attrs:{id:"wait"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#wait"}},[a._v("#")]),a._v(" wait")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("public final void wait(long timeout)\n                throws InterruptedException\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br"),v("span",{staticClass:"line-number"},[a._v("2")]),v("br")])]),v("p",[a._v("导致当前线程等待，直到另一个线程调用此对象的"),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#notify--"}},[v("code",[a._v("notify()")])]),a._v("方法或"),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#notifyAll--"}},[v("code",[a._v("notifyAll()")])]),a._v("方法，或指定的时间已过。")],1),a._v(" "),v("p",[a._v("当前的线程必须拥有该对象的显示器。")]),a._v(" "),v("p",[a._v("此方法使当前线程（称为T ）将其放置在该对象的等待集中，然后放弃对该对象的任何和所有同步声明。  线程T变得禁用线程调度目的，并且休眠，直到发生四件事情之一：")]),a._v(" "),v("ul",[v("li",[a._v("一些其他线程调用该对象的"),v("code",[a._v("notify")]),a._v("方法，并且线程T恰好被任意选择为被唤醒的线程。")]),a._v(" "),v("li",[a._v("某些其他线程调用此对象的"),v("code",[a._v("notifyAll")]),a._v("方法。")]),a._v(" "),v("li",[a._v("一些其他线程"),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Thread.html#interrupt--"}},[a._v("interrupts")]),a._v("线程T。")],1),a._v(" "),v("li",[a._v("指定的实时数量已经过去，或多或少。  然而，如果"),v("code",[a._v("timeout")]),a._v("为零，则不考虑实时，线程等待直到通知。")])]),a._v(" "),v("p",[a._v("然后从该对象的等待集中删除线程T ，并重新启用线程调度。然后它以通常的方式与其他线程竞争在对象上进行同步的权限;一旦获得了对象的控制，其对对象的所有同步声明就恢复到现状 -  也就是在调用"),v("code",[a._v("wait")]),a._v("方法之后的情况。线程T然后从调用"),v("code",[a._v("wait")]),a._v("方法返回。因此，从返回"),v("code",[a._v("wait")]),a._v("方法，对象和线程的同步状态"),v("code",[a._v("T")]),a._v("正是因为它是当"),v("code",[a._v("wait")]),a._v("被调用的方法。")]),a._v(" "),v("p",[a._v("线程也可以唤醒，而不会被通知，中断或超时，即所谓的"),v("em",[a._v("虚假唤醒")]),a._v(" 。  虽然这在实践中很少会发生，但应用程序必须通过测试应该使线程被唤醒的条件来防范，并且如果条件不满足则继续等待。  换句话说，等待应该总是出现在循环中，就像这样：")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("  synchronized (obj) {\n         while (<condition does not hold>)\n             obj.wait(timeout);\n         ... // Perform action appropriate to condition\n     } \n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br"),v("span",{staticClass:"line-number"},[a._v("2")]),v("br"),v("span",{staticClass:"line-number"},[a._v("3")]),v("br"),v("span",{staticClass:"line-number"},[a._v("4")]),v("br"),v("span",{staticClass:"line-number"},[a._v("5")]),v("br")])]),v("p",[a._v("（有关此主题的更多信息，请参阅Doug  Lea的“Java并行编程（第二版）”（Addison-Wesley，2000）中的第3.2.3节或Joshua  Bloch的“有效Java编程语言指南”（Addison- Wesley，2001）。")]),a._v(" "),v("p",[a._v("如果当前线程"),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Thread.html#interrupt--"}},[a._v("interrupted")]),a._v("任何线程之前或在等待时，那么"),v("code",[a._v("InterruptedException")]),a._v("被抛出。  如上所述，在该对象的锁定状态已恢复之前，不会抛出此异常。")],1),a._v(" "),v("p",[a._v("请注意， "),v("code",[a._v("wait")]),a._v("方法，因为它将当前线程放入该对象的等待集，仅解锁此对象;  当前线程可以同步的任何其他对象在线程等待时保持锁定。")]),a._v(" "),v("p",[a._v("该方法只能由作为该对象的监视器的所有者的线程调用。  有关线程可以成为监视器所有者的方法的说明，请参阅"),v("code",[a._v("notify")]),a._v("方法。")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("参数")]),a._v(" "),v("p",[v("code",[a._v("timeout")]),a._v(" - 以毫秒为单位等待的最长时间。")])]),a._v(" "),v("li",[v("p",[a._v("异常")]),a._v(" "),v("p",[v("code",[a._v("IllegalArgumentException")]),a._v("  - 如果超时值为负。")]),a._v(" "),v("p",[v("code",[a._v("IllegalMonitorStateException")]),a._v("  - 如果当前线程不是对象监视器的所有者。")]),a._v(" "),v("p",[v("code",[a._v("InterruptedException")]),a._v("  - 如果任何线程在当前线程等待通知之前或当前线程中断当前线程。  当抛出此异常时，当前线程的"),v("em",[a._v("中断状态")]),a._v("将被清除。")])]),a._v(" "),v("li",[v("p",[a._v("另请参见：")]),a._v(" "),v("p",[v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#notify--"}},[v("code",[a._v("notify()")])]),a._v(" ，  "),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#notifyAll--"}},[v("code",[a._v("notifyAll()")])])],1)])]),a._v(" "),v("p",[v("strong",[a._v("代码示例:")])]),a._v(" "),v("h3",{attrs:{id:"wait-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#wait-2"}},[a._v("#")]),a._v(" wait")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("public final void wait(long timeout,\n                       int nanos)\n                throws InterruptedException\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br"),v("span",{staticClass:"line-number"},[a._v("2")]),v("br"),v("span",{staticClass:"line-number"},[a._v("3")]),v("br")])]),v("p",[a._v("导致当前线程等待，直到另一个线程调用此对象的"),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#notify--"}},[v("code",[a._v("notify()")])]),a._v("方法或"),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#notifyAll--"}},[v("code",[a._v("notifyAll()")])]),a._v("方法，或其他一些线程中断当前线程，或一定量的实时时间。")],1),a._v(" "),v("p",[a._v("这种方法类似于一个参数的"),v("code",[a._v("wait")]),a._v("方法，但它允许对放弃之前等待通知的时间进行更精细的控制。  以纳秒为单位的实时数量由下式给出：")]),a._v(" "),v("blockquote",[v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v(" 1000000*timeout+nanos\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br")])])]),a._v(" "),v("p",[a._v("在所有其他方面，该方法与一个参数的方法"),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#wait-long-"}},[v("code",[a._v("wait(long)")])]),a._v("相同。  特别是， "),v("code",[a._v("wait(0, 0)")]),a._v("意味着同样的事情"),v("code",[a._v("wait(0)")]),a._v(" 。")],1),a._v(" "),v("p",[a._v("当前的线程必须拥有该对象的显示器。 线程释放此监视器的所有权，并等待直到发生以下两种情况之一：")]),a._v(" "),v("ul",[v("li",[a._v("另一个线程通知等待该对象的监视器的线程通过调用"),v("code",[a._v("notify")]),a._v("方法或"),v("code",[a._v("notifyAll")]),a._v("方法来唤醒。")]),a._v(" "),v("li",[a._v("由"),v("code",[a._v("timeout")]),a._v("毫秒加"),v("code",[a._v("nanos")]),a._v("纳秒参数指定的超时时间已过。")])]),a._v(" "),v("p",[a._v("然后线程等待，直到它可以重新获得监视器的所有权并恢复执行。")]),a._v(" "),v("p",[a._v("像在一个参数版本中，中断和虚假唤醒是可能的，并且该方法应该始终在循环中使用：")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("  synchronized (obj) {\n         while (<condition does not hold>)\n             obj.wait(timeout, nanos);\n         ... // Perform action appropriate to condition\n     } \n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br"),v("span",{staticClass:"line-number"},[a._v("2")]),v("br"),v("span",{staticClass:"line-number"},[a._v("3")]),v("br"),v("span",{staticClass:"line-number"},[a._v("4")]),v("br"),v("span",{staticClass:"line-number"},[a._v("5")]),v("br")])]),v("p",[a._v("该方法只能由作为该对象的监视器的所有者的线程调用。有关线程可以成为监视器所有者的方式的说明，请参阅"),v("code",[a._v("notify")]),a._v("方法。")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("参数")]),a._v(" "),v("p",[v("code",[a._v("timeout")]),a._v(" - 以毫秒为单位等待的最长时间。")]),a._v(" "),v("p",[v("code",[a._v("nanos")]),a._v(" - 额外的时间，以纳秒范围0-999999。")])]),a._v(" "),v("li",[v("p",[a._v("异常")]),a._v(" "),v("p",[v("code",[a._v("IllegalArgumentException")]),a._v("  - 如果超时值为负值或 "),v("code",[a._v("IllegalArgumentException")]),a._v("值不在0-999999范围内。")]),a._v(" "),v("p",[v("code",[a._v("IllegalMonitorStateException")]),a._v("  - 如果当前线程不是此对象的监视器的所有者。")]),a._v(" "),v("p",[v("code",[a._v("InterruptedException")]),a._v("  - 如果任何线程在当前线程等待通知之前或当前线程中断当前线程。  当抛出此异常时，当前线程的"),v("em",[a._v("中断状态")]),a._v("将被清除。")])])]),a._v(" "),v("p",[v("strong",[a._v("代码示例:")])]),a._v(" "),v("h3",{attrs:{id:"wait-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#wait-3"}},[a._v("#")]),a._v(" wait")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("public final void wait()\n                throws InterruptedException\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br"),v("span",{staticClass:"line-number"},[a._v("2")]),v("br")])]),v("p",[a._v("导致当前线程等待，直到另一个线程调用该对象的"),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#notify--"}},[v("code",[a._v("notify()")])]),a._v("方法或"),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#notifyAll--"}},[v("code",[a._v("notifyAll()")])]),a._v("方法。换句话说，这个方法的行为就好像简单地执行呼叫"),v("code",[a._v("wait(0)")]),a._v(" 。")],1),a._v(" "),v("p",[a._v("当前的线程必须拥有该对象的显示器。  该线程释放此监视器的所有权，并等待另一个线程通知等待该对象监视器的线程通过调用"),v("code",[a._v("notify")]),a._v("方法或"),v("code",[a._v("notifyAll")]),a._v("方法"),v("code",[a._v("notifyAll")]),a._v("  。 然后线程等待，直到它可以重新获得监视器的所有权并恢复执行。")]),a._v(" "),v("p",[a._v("像在一个参数版本中，中断和虚假唤醒是可能的，并且该方法应该始终在循环中使用：")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("  synchronized (obj) {\n         while (<condition does not hold>)\n             obj.wait();\n         ... // Perform action appropriate to condition\n     } \n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br"),v("span",{staticClass:"line-number"},[a._v("2")]),v("br"),v("span",{staticClass:"line-number"},[a._v("3")]),v("br"),v("span",{staticClass:"line-number"},[a._v("4")]),v("br"),v("span",{staticClass:"line-number"},[a._v("5")]),v("br")])]),v("p",[a._v("该方法只能由作为该对象的监视器的所有者的线程调用。有关线程可以成为监视器所有者的方式的说明，请参阅"),v("code",[a._v("notify")]),a._v("方法。")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("异常")]),a._v(" "),v("p",[v("code",[a._v("IllegalMonitorStateException")]),a._v("  - 如果当前线程不是对象监视器的所有者。")]),a._v(" "),v("p",[v("code",[a._v("InterruptedException")]),a._v("  - 如果任何线程在当前线程等待通知之前或当前线程中断当前线程。  当抛出此异常时，当前线程的"),v("em",[a._v("中断状态")]),a._v("将被清除。")])]),a._v(" "),v("li",[v("p",[a._v("另请参见：")]),a._v(" "),v("p",[v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#notify--"}},[v("code",[a._v("notify()")])]),a._v(" ，  "),v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#notifyAll--"}},[v("code",[a._v("notifyAll()")])])],1)])]),a._v(" "),v("p",[v("strong",[a._v("代码示例:")])]),a._v(" "),v("h2",{attrs:{id:"垃圾收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集器"}},[a._v("#")]),a._v(" 垃圾收集器")]),a._v(" "),v("h3",{attrs:{id:"finalize"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#finalize"}},[a._v("#")]),a._v(" finalize")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("protected void finalize()\n                 throws Throwable\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br"),v("span",{staticClass:"line-number"},[a._v("2")]),v("br")])]),v("p",[a._v("当垃圾收集确定不再有对该对象的引用时，垃圾收集器在对象上调用该对象。一个子类覆盖了处理系统资源或执行其他清理的"),v("code",[a._v("finalize")]),a._v("方法。")]),a._v(" "),v("p",[v("code",[a._v("finalize")]),a._v("的一般合同是，如果Java¢虚拟机已经确定不再有任何方法可以被任何尚未死亡的线程访问的方法被调用，除非是由于最后确定的其他对象或类的准备工作所采取的行动。  "),v("code",[a._v("finalize")]),a._v("方法可以采取任何行动，包括使此对象再次可用于其他线程; 然而，  "),v("code",[a._v("finalize")]),a._v("的通常目的是在对象不可撤销地丢弃之前执行清除动作。  例如，表示输入/输出连接的对象的finalize方法可能会在对象被永久丢弃之前执行显式I / O事务来中断连接。")]),a._v(" "),v("p",[a._v("所述"),v("code",[a._v("finalize")]),a._v("类的方法"),v("code",[a._v("Object")]),a._v("执行任何特殊操作;  它只是返回正常。 Object的"),v("code",[a._v("Object")]),a._v("可以覆盖此定义。")]),a._v(" "),v("p",[a._v("Java编程语言不能保证哪个线程将为任何给定的对象调用"),v("code",[a._v("finalize")]),a._v("方法。  但是，确保调用finalize的线程在调用finalize时不会持有任何用户可见的同步锁。  如果finalize方法抛出未捕获的异常，则会忽略该异常，并终止该对象的定类。")]),a._v(" "),v("p",[a._v("在为对象调用"),v("code",[a._v("finalize")]),a._v("方法之后，在Java虚拟机再次确定不再有任何方式可以通过任何尚未被死亡的线程访问此对象的任何方法的情况下，将采取进一步的操作，包括可能的操作由准备完成的其他对象或类别，此时可以丢弃对象。")]),a._v(" "),v("p",[v("code",[a._v("finalize")]),a._v("方法从不被任何给定对象的Java虚拟机调用多次。")]),a._v(" "),v("p",[v("code",[a._v("finalize")]),a._v("方法抛出的任何异常都会导致该对象的终止被停止，否则被忽略。")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("异常")]),a._v(" "),v("p",[v("code",[a._v("Throwable")]),a._v(" - 这个方法提出的  "),v("code",[a._v("异常")])])]),a._v(" "),v("li",[v("p",[a._v("另请参见：")]),a._v(" "),v("p",[v("RouterLink",{attrs:{to:"/01.Java/java/lang/ref/WeakReference.html"}},[v("code",[a._v("WeakReference")])]),a._v(" ，  "),v("RouterLink",{attrs:{to:"/01.Java/java/lang/ref/PhantomReference.html"}},[v("code",[a._v("PhantomReference")])])],1)]),a._v(" "),v("li",[v("p",[a._v("See The Java™ Language  Specification:")]),a._v(" "),v("p",[a._v("12.6类实例的定稿")])])]),a._v(" "),v("p",[v("strong",[a._v("代码示例:")])])])}),[],!1,null,null,null);e.default=_.exports}}]);