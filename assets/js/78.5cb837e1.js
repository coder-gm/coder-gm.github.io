(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{688:function(e,t,v){"use strict";v.r(t);var a=v(33),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"作用与解释"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#作用与解释"}},[e._v("#")]),e._v(" 作用与解释")]),e._v(" "),v("p",[e._v("从 Java 8 引入的一个很有趣的特性是 Optional 类。Optional 类主要解决的问题是臭名昭著的空指针异常（NullPointerException） —— 每个 Java 程序员都非常了解的异常。")]),e._v(" "),v("p",[e._v("本质上，这是一个包含有可选值的包装类，这意味着 Optional 类既可以含有对象也可以为空。")]),e._v(" "),v("p",[e._v("Optional 是 Java 实现函数式编程的强劲一步，并且帮助在范式中实现。但是 Optional 的意义显然不止于此。")]),e._v(" "),v("h1",{attrs:{id:"方法详细信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法详细信息"}},[e._v("#")]),e._v(" 方法详细信息")]),e._v(" "),v("h2",{attrs:{id:"创建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[e._v("#")]),e._v(" 创建")]),e._v(" "),v("h3",{attrs:{id:"empty"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#empty"}},[e._v("#")]),e._v(" empty")]),e._v(" "),v("p",[v("strong",[e._v("创建一个空的 Optional 实例")])]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public static <T> Optional<T> empty()\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("返回一个空的"),v("code",[e._v("Optional")]),e._v("实例。  此可选项不存在值。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("API Note:")]),e._v(" "),v("p",[e._v("虽然这样做可能很诱人，但是如果Option.empty()返回的"),v("code",[e._v("Option.empty()")]),e._v("与"),v("code",[e._v("==")]),e._v("  ，则避免测试对象是否为空。 不能保证是单身人士。 相反，请使用"),v("RouterLink",{attrs:{to:"/01.Java/java/util/Optional.html#isPresent--"}},[v("code",[e._v("isPresent()")])]),e._v("  。")],1)]),e._v(" "),v("li",[v("p",[e._v("参数类型")]),e._v(" "),v("p",[v("code",[e._v("T")]),e._v(" - 不存在值的类型")])]),e._v(" "),v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[e._v("一个空的 "),v("code",[e._v("Optional")])])])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h3",{attrs:{id:"of"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#of"}},[e._v("#")]),e._v(" of")]),e._v(" "),v("p",[v("strong",[e._v("创建一个 Optional 实例，当 t为null时抛出异常")])]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public static <T> Optional<T> of(T value)\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("返回具有 "),v("code",[e._v("Optional")]),e._v("的当前非空值的Optional。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("参数类型")]),e._v(" "),v("p",[v("code",[e._v("T")]),e._v(" - 该类的值")])]),e._v(" "),v("li",[v("p",[e._v("参数")]),e._v(" "),v("p",[v("code",[e._v("value")]),e._v(" - 要存在的值，它必须是非空值")])]),e._v(" "),v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[e._v("一个 "),v("code",[e._v("Optional")]),e._v("的值存在")])]),e._v(" "),v("li",[v("p",[e._v("异常")]),e._v(" "),v("p",[v("code",[e._v("NullPointerException")]),e._v("  - 如果值为空")])])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h3",{attrs:{id:"ofnullable"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ofnullable"}},[e._v("#")]),e._v(" ofNullable")]),e._v(" "),v("p",[v("strong",[e._v("创建一个 Optional 实例，但当 t为null时不会抛出异常，而是返回一个空的实例")])]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public static <T> Optional<T> ofNullable(T value)\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("返回一个 "),v("code",[e._v("Optional")]),e._v("指定值的Optional，如果非空，则返回一个空的  "),v("code",[e._v("Optional")]),e._v(" 。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("参数类型")]),e._v(" "),v("p",[v("code",[e._v("T")]),e._v(" - 该类的值")])]),e._v(" "),v("li",[v("p",[e._v("参数")]),e._v(" "),v("p",[v("code",[e._v("value")]),e._v(" - 可能为null的值来描述")])]),e._v(" "),v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[e._v("一个 "),v("code",[e._v("Optional")]),e._v(" ，如果指定的值不为空，则为当前值，否则为空 "),v("code",[e._v("Optional")])])])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h2",{attrs:{id:"获取"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#获取"}},[e._v("#")]),e._v(" 获取")]),e._v(" "),v("h3",{attrs:{id:"获取optional实例中的对象-当optional-容器为空时报错"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#获取optional实例中的对象-当optional-容器为空时报错"}},[e._v("#")]),e._v(" 获取optional实例中的对象，当optional 容器为空时报错")]),e._v(" "),v("h4",{attrs:{id:"get"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[e._v("#")]),e._v(" get")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public T get()\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("如果 "),v("code",[e._v("Optional")]),e._v("中存在值，则返回值，否则抛出  "),v("code",[e._v("NoSuchElementException")]),e._v(" 。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[e._v("该 "),v("code",[e._v("Optional")]),e._v("非空值")])]),e._v(" "),v("li",[v("p",[e._v("异常")]),e._v(" "),v("p",[v("code",[e._v("NoSuchElementException")]),e._v("  - 如果没有值存在")])]),e._v(" "),v("li",[v("p",[e._v("另请参见：")]),e._v(" "),v("p",[v("RouterLink",{attrs:{to:"/01.Java/java/util/Optional.html#isPresent--"}},[v("code",[e._v("isPresent()")])])],1)])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h2",{attrs:{id:"判断"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#判断"}},[e._v("#")]),e._v(" 判断")]),e._v(" "),v("h3",{attrs:{id:"ispresent"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ispresent"}},[e._v("#")]),e._v(" isPresent")]),e._v(" "),v("p",[v("strong",[e._v("判断optional是否为空，如果空则返回false，否则返回true")])]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public boolean isPresent()\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("如果存在值，则返回 "),v("code",[e._v("true")]),e._v(" ，否则为 "),v("code",[e._v("false")]),e._v(" 。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[v("code",[e._v("true")]),e._v("若有存在值，否则为 "),v("code",[e._v("false")])])])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h3",{attrs:{id:"ifpresent"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ifpresent"}},[e._v("#")]),e._v(" ifPresent")]),e._v(" "),v("p",[v("strong",[e._v("如果optional不为空，则将optional中的对象传给Comsumer函数")])]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public void ifPresent(Consumer<? super T> consumer)\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("如果存在值，则使用该值调用指定的消费者，否则不执行任何操作。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("参数")]),e._v(" "),v("p",[v("code",[e._v("consumer")]),e._v(" - 如果存在值，则执行块")])]),e._v(" "),v("li",[v("p",[e._v("异常")]),e._v(" "),v("p",[v("code",[e._v("NullPointerException")]),e._v("  - 如果值存在且 "),v("code",[e._v("consumer")]),e._v("为空")])])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h3",{attrs:{id:"orelse"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#orelse"}},[e._v("#")]),e._v(" orElse")]),e._v(" "),v("p",[v("strong",[e._v("如果optional不为空，则返回optional中的对象；如果为null，则返回 other 这个默认值")])]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public T orElse(T other)\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("返回值如果存在，否则返回 "),v("code",[e._v("other")]),e._v(" 。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("参数")]),e._v(" "),v("p",[v("code",[e._v("other")]),e._v(" - 如果没有值存在则返回的值可以为null")])]),e._v(" "),v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[e._v("价值，如果存在，否则 "),v("code",[e._v("other")])])])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h3",{attrs:{id:"orelseget"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#orelseget"}},[e._v("#")]),e._v(" orElseGet")]),e._v(" "),v("p",[v("strong",[e._v("如果optional不为空，则返回optional中的对象；如果为null，则使用Supplier函数生成默认值other")])]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public T orElseGet(Supplier<? extends T> other)\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("返回值（如果存在），否则调用 "),v("code",[e._v("other")]),e._v("并返回该调用的结果。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("参数")]),e._v(" "),v("p",[v("code",[e._v("other")]),e._v(" - 一个 "),v("code",[e._v("Supplier")]),e._v(" ，如果没有值，则返回其结果")])]),e._v(" "),v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[e._v("的值（如果存在）的结果的其他方式 "),v("code",[e._v("other.get()")])])]),e._v(" "),v("li",[v("p",[e._v("异常")]),e._v(" "),v("p",[v("code",[e._v("NullPointerException")]),e._v("  - 如果值不存在，并且 "),v("code",[e._v("other")]),e._v("为空")])])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h3",{attrs:{id:"orelsethrow"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#orelsethrow"}},[e._v("#")]),e._v(" orElseThrow")]),e._v(" "),v("p",[v("strong",[e._v("如果optional不为空，则返回optional中的对象；如果为null，则抛出Supplier函数生成的异常")])]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public <X extends Throwable> T orElseThrow(Supplier<? extends X> exceptionSupplier)\n                                    throws X extends Throwable\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br")])]),v("p",[e._v("返回包含的值（如果存在），否则抛出由提供的供应商创建的异常。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("API Note:")]),e._v(" "),v("p",[e._v("可以使用具有空参数列表的异常构造函数的方法引用作为供应商。 例如，  "),v("code",[e._v("IllegalStateException::new")])])]),e._v(" "),v("li",[v("p",[e._v("参数类型")]),e._v(" "),v("p",[v("code",[e._v("X")]),e._v(" - 要抛出的异常的类型")])]),e._v(" "),v("li",[v("p",[e._v("参数")]),e._v(" "),v("p",[v("code",[e._v("exceptionSupplier")]),e._v(" - 将返回要抛出的异常的供应商")])]),e._v(" "),v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[e._v("现值")])]),e._v(" "),v("li",[v("p",[e._v("异常")]),e._v(" "),v("p",[v("code",[e._v("X")]),e._v(" - 如果没有值存在")]),e._v(" "),v("p",[v("code",[e._v("NullPointerException")]),e._v("  - 如果没有值， "),v("code",[e._v("exceptionSupplier")]),e._v("为空")]),e._v(" "),v("p",[v("code",[e._v("X extends Throwable")])])])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h2",{attrs:{id:"过滤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#过滤"}},[e._v("#")]),e._v(" 过滤")]),e._v(" "),v("h3",{attrs:{id:"filter"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[e._v("#")]),e._v(" filter")]),e._v(" "),v("p",[v("strong",[e._v("如果optional不为空，则执行断言函数p，如果p的结果为true，则返回原本的optional，否则返回空的optional")])]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public Optional<T> filter(Predicate<? super T> predicate)\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("如果一个值存在，并且该值给定的谓词相匹配时，返回一个 "),v("code",[e._v("Optional")]),e._v("描述的值，否则返回一个空的  "),v("code",[e._v("Optional")]),e._v(" 。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("参数")]),e._v(" "),v("p",[v("code",[e._v("predicate")]),e._v(" - 一个应用于该值的谓词（如果存在）")])]),e._v(" "),v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[e._v("一个 "),v("code",[e._v("Optional")]),e._v("描述此的值 "),v("code",[e._v("Optional")]),e._v("一个值是否存在，并且值给定的谓词相匹配，否则一个空  "),v("code",[e._v("Optional")])])]),e._v(" "),v("li",[v("p",[e._v("异常")]),e._v(" "),v("p",[v("code",[e._v("NullPointerException")]),e._v("  - 如果谓词为空")])])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h2",{attrs:{id:"映射"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#映射"}},[e._v("#")]),e._v(" 映射")]),e._v(" "),v("h3",{attrs:{id:"map"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[e._v("#")]),e._v(" map")]),e._v(" "),v("p",[v("strong",[e._v("如果optional不为空，则将optional中的对象 t 映射成另外一个对象 u，并将 u 存放到一个新的optional容器中。")])]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public <U> Optional<U> map(Function<? super T,? extends U> mapper)\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("如果存在值，则应用提供的映射函数，如果结果不为空，则返回一个"),v("code",[e._v("Optional")]),e._v("结果的"),v("code",[e._v("Optional")]),e._v("  。 否则返回一个空的"),v("code",[e._v("Optional")]),e._v(" 。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("API Note:")]),e._v(" "),v("p",[e._v("此方法支持对可选值进行后处理，无需明确检查返回状态。  例如，以下代码遍历文件名流，选择尚未处理的代码，然后打开该文件，返回"),v("code",[e._v("Optional<FileInputStream>")]),e._v("  ： "),v("code",[e._v("Optional<FileInputStream> fis = names.stream().filter(name -> !isProcessedYet(name)) .findFirst() .map(name -> new FileInputStream(name));")]),e._v("这里，  "),v("code",[e._v("findFirst")]),e._v("返回一个"),v("code",[e._v("Optional<String>")]),e._v("  ，然后"),v("code",[e._v("map")]),e._v("返回一个"),v("code",[e._v("Optional<FileInputStream>")]),e._v("为所需文件（如果存在）。")])]),e._v(" "),v("li",[v("p",[e._v("参数类型")]),e._v(" "),v("p",[v("code",[e._v("U")]),e._v(" - 映射函数的结果类型")])]),e._v(" "),v("li",[v("p",[e._v("参数")]),e._v(" "),v("p",[v("code",[e._v("mapper")]),e._v(" - 应用于值的映射函数（如果存在）")])]),e._v(" "),v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[e._v("一个 "),v("code",[e._v("Optional")]),e._v("描述了将映射函数应用于该值 "),v("code",[e._v("Optional")]),e._v("的值的  "),v("code",[e._v("Optional")]),e._v(" ，如果存在值，否则为空 "),v("code",[e._v("Optional")])])]),e._v(" "),v("li",[v("p",[e._v("异常")]),e._v(" "),v("p",[v("code",[e._v("NullPointerException")]),e._v("  - 如果映射函数为空")])])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h3",{attrs:{id:"flatmap"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flatmap"}},[e._v("#")]),e._v(" flatMap")]),e._v(" "),v("p",[v("strong",[e._v("跟上面一样，在optional不为空的情况下，将对象t映射成另外一个optional")])]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public <U> Optional<U> flatMap(Function<? super T,Optional<U>> mapper)\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("如果一个值存在，应用提供的"),v("code",[e._v("Optional")]),e._v("映射函数给它，返回该结果，否则返回一个空的"),v("code",[e._v("Optional")]),e._v("  。 这种方法类似于"),v("RouterLink",{attrs:{to:"/01.Java/java/util/Optional.html#map-java.util.function.Function-"}},[v("code",[e._v("map(Function)")])]),e._v("  ，但是提供的映射器是一个结果已经是"),v("code",[e._v("Optional")]),e._v("映射器，如果被调用，  "),v("code",[e._v("flatMap")]),e._v("不会用额外的"),v("code",[e._v("Optional")]),e._v(" 。")],1),e._v(" "),v("ul",[v("li",[v("p",[e._v("参数类型")]),e._v(" "),v("p",[v("code",[e._v("U")]),e._v(" - 返回的 "),v("code",[e._v("Optional")]),e._v("的类型参数")])]),e._v(" "),v("li",[v("p",[e._v("参数")]),e._v(" "),v("p",[v("code",[e._v("mapper")]),e._v(" - 应用于值的映射函数，如果存在映射函数")])]),e._v(" "),v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[e._v("施加的结果 "),v("code",[e._v("Optional")]),e._v("荷瘤映射函数此的值 "),v("code",[e._v("Optional")]),e._v(" ，如果一个值存在，否则一个空  "),v("code",[e._v("Optional")])])]),e._v(" "),v("li",[v("p",[e._v("异常")]),e._v(" "),v("p",[v("code",[e._v("NullPointerException")]),e._v("  - 如果映射函数为空或返回空结果")])])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h2",{attrs:{id:"equals"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#equals"}},[e._v("#")]),e._v(" equals")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public boolean equals(Object obj)\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("指示某个其他对象是否等于此可选项。另一个对象被认为是相等的：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("它也是一个"),v("code",[e._v("Optional")]),e._v("和;")])]),e._v(" "),v("li",[v("p",[e._v("或者;")])]),e._v(" "),v("li",[v("p",[e._v("现在的值通过"),v("code",[e._v("equals()")]),e._v(" “相等”。")])]),e._v(" "),v("li",[v("p",[e._v("重写：")]),e._v(" "),v("p",[v("code",[e._v("equals")]),e._v("在类别  "),v("code",[e._v("Object")])])]),e._v(" "),v("li",[v("p",[e._v("参数")]),e._v(" "),v("p",[v("code",[e._v("obj")]),e._v(" - 要进行相等测试的对象")])]),e._v(" "),v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[e._v("{code true}如果另一个对象“等于”这个对象否则 "),v("code",[e._v("false")])])]),e._v(" "),v("li",[v("p",[e._v("另请参见：")]),e._v(" "),v("p",[v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#hashCode--"}},[v("code",[e._v("Object.hashCode()")])]),e._v("  ， "),v("RouterLink",{attrs:{to:"/01.Java/java/util/HashMap.html"}},[v("code",[e._v("HashMap")])])],1)])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h2",{attrs:{id:"hashcode"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hashcode"}},[e._v("#")]),e._v(" hashCode")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public int hashCode()\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("返回当前值的哈希码值（如果有的话），如果没有值，则返回0（零）。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("重写：")]),e._v(" "),v("p",[v("code",[e._v("hashCode")]),e._v("在  "),v("code",[e._v("Object")])])]),e._v(" "),v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[e._v("当前值的哈希码值，如果没有值，则为0")])]),e._v(" "),v("li",[v("p",[e._v("另请参见：")]),e._v(" "),v("p",[v("RouterLink",{attrs:{to:"/01.Java/java/lang/Object.html#equals-java.lang.Object-"}},[v("code",[e._v("Object.equals(java.lang.Object)")])]),e._v("  ， "),v("RouterLink",{attrs:{to:"/01.Java/java/lang/System.html#identityHashCode-java.lang.Object-"}},[v("code",[e._v("System.identityHashCode(java.lang.Object)")])])],1)])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])]),e._v(" "),v("h2",{attrs:{id:"tostring"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tostring"}},[e._v("#")]),e._v(" toString")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("public String toString()\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("返回此可选的非空字符串表示，适用于调试。  准确的表示格式是未指定的，可能会在实现和版本之间变化。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("重写：")]),e._v(" "),v("p",[v("code",[e._v("toString")]),e._v("在  "),v("code",[e._v("Object")])])]),e._v(" "),v("li",[v("p",[e._v("实现要求：")]),e._v(" "),v("p",[e._v("如果存在值，则结果必须在其结果中包含其字符串表示形式。 空和现在可选择性必须明确区分。")])]),e._v(" "),v("li",[v("p",[e._v("结果")]),e._v(" "),v("p",[e._v("该实例的字符串表示形式")])])]),e._v(" "),v("p",[v("strong",[e._v("代码示例:")])])])}),[],!1,null,null,null);t.default=_.exports}}]);