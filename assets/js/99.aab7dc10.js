(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{717:function(s,a,r){"use strict";r.r(a);var e=r(33),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"第一种方式-指定docker的安装目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第一种方式-指定docker的安装目录"}},[s._v("#")]),s._v(" 第一种方式:指定docker的安装目录")]),s._v(" "),r("h2",{attrs:{id:"修改配置文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v('#编辑docker配置文件\nvim /etc/docker/daemon.json\n\n#配置文件内容：graph代表docker指定的安装目录\n{\n"registry-mirrors": ["http://hub-mirror.c.163.com"],\n"graph":"/opt/docker"\n}\n')])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br")])]),r("h2",{attrs:{id:"然后开始安装docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#然后开始安装docker"}},[s._v("#")]),s._v(" 然后开始安装docker")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("#安装docker\nyum -y install docker \n#启动docker\nsystemctl start docker\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br")])]),r("h2",{attrs:{id:"启动docker后观察docker的安装目录已经ok了-下图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动docker后观察docker的安装目录已经ok了-下图"}},[s._v("#")]),s._v(" 启动docker后观察docker的安装目录已经ok了，下图：")]),s._v(" "),r("p",[r("img",{attrs:{src:"2022-04-05-%E5%AE%89%E8%A3%85docker%E5%B9%B6%E6%8C%87%E5%AE%9A%E5%AE%89%E8%A3%85%E7%9B%AE%E5%BD%95/img.png",alt:""}})]),s._v(" "),r("h1",{attrs:{id:"第二种方式-使用软连接的方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第二种方式-使用软连接的方式"}},[s._v("#")]),s._v(" 第二种方式:使用软连接的方式")]),s._v(" "),r("h2",{attrs:{id:"首先安装docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#首先安装docker"}},[s._v("#")]),s._v(" 首先安装docker")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("#安装docker\nyum -y install docker \n\n#启动docker后会生产docker的环境目录\nsystemctl start docker\n\n#停止docker\nsystemctl stop docker\n\n#将docker安装目录移动到/opt/docker\nmv /var/lib/docker /opt/docker\n\n#创建软连接\nln -s /opt/docker /var/lib/docker\n\n#最后启动docker\nsystemctl start docker\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br")])]),r("h2",{attrs:{id:"查看-var-lib-docker目录大小-大小为0kb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看-var-lib-docker目录大小-大小为0kb"}},[s._v("#")]),s._v(" 查看/var/lib/docker目录大小,大小为0kb")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("#进入目录\ncd /var/lib/docker\n#查看当前目录大小，0kb\ndu -sh\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);