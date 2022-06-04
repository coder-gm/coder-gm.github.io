(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{715:function(s,e,a){"use strict";a.r(e);var r=a(33),t=Object(r.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装环境"}},[s._v("#")]),s._v(" 安装环境：")]),s._v(" "),a("ul",[a("li",[s._v("阿里"),a("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[s._v("云服务器"),a("OutboundLink")],1),s._v("（centos7.9）")]),s._v(" "),a("li",[s._v("docker 1.13.1")]),s._v(" "),a("li",[s._v("安装模式")]),s._v(" "),a("li",[s._v("单机版")])]),s._v(" "),a("h1",{attrs:{id:"检查docker中是否有redis容器和镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查docker中是否有redis容器和镜像"}},[s._v("#")]),s._v(" "),a("strong",[s._v("检查docker中是否有redis容器和镜像")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有容器 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看镜像 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h1",{attrs:{id:"拉取redis镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取redis镜像"}},[s._v("#")]),s._v(" "),a("strong",[s._v("拉取redis镜像")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不指定版本号，默认拉取最新版的redis ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull redis\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看镜像是否拉取成功")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"2022-04-05-docker%E5%AE%89%E8%A3%85redis/img.png",alt:""}})]),s._v(" "),a("h1",{attrs:{id:"启动容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[s._v("#")]),s._v(" "),a("strong",[s._v("启动容器")])]),s._v(" "),a("h3",{attrs:{id:"docker启动redis命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker启动redis命令"}},[s._v("#")]),s._v(" docker启动redis命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 --name redis -v /docker-software/redis/redis.conf:/data/redis/redis.conf  -v /docker-software/redis/data:/data -d redis redis-server /data/redis/redis.conf --appendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("  --requirepass Gm923850\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("命令分析")]),s._v(" "),a("p",[s._v("-p 6379:6379 端口映射：前表示主机部分，：后表示容器部分。")]),s._v(" "),a("p",[s._v("–name redis 指定该容器名称，查看和进行操作都比较方便。")]),s._v(" "),a("p",[s._v("-v 挂载文件或目录 ：前表示主机部分，：后表示容器部分。")]),s._v(" "),a("p",[s._v("-d redis 表示后台启动redis")]),s._v(" "),a("p",[s._v("redis-server /etc/redis/redis.conf\n以配置文件启动redis，加载容器内的conf文件，最终找到的是挂载的目录/usr/local/docker/redis.conf")]),s._v(" "),a("p",[s._v("–appendonly yes 开启redis 持久化")]),s._v(" "),a("p",[s._v("–requirepass 123456 设置密码为123456")])]),s._v(" "),a("h3",{attrs:{id:"检查redis容器是否在运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查redis容器是否在运行"}},[s._v("#")]),s._v(" 检查redis容器是否在运行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker ps\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"2022-04-05-docker%E5%AE%89%E8%A3%85redis/img_6.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"使用连接工具测试-使用云服务器放开相应端口号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用连接工具测试-使用云服务器放开相应端口号"}},[s._v("#")]),s._v(" 使用连接工具测试，使用云服务器放开相应端口号")]),s._v(" "),a("h1",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("p",[s._v("参考网上博文安装失败的原因在于没有说明要给redis.conf文件授权，对于小白来说比较容易忽略。如果使用我的办法没有用的话。请参考Docker挂载主机目录Docker访问出现Permission denied的解决办法")]),s._v(" "),a("p",[s._v("参考博文：\n[https://www.cnblogs.com/linkvan/p/14257033.html]")])])}),[],!1,null,null,null);e.default=t.exports}}]);