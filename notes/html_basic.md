## 浏览器请求数据过程


<center>
<img src="https://raw.githubusercontent.com/link12st/markdownImgs/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E8%AF%B7%E6%B1%82%E6%95%B0%E6%8D%AE%E7%9A%84%E8%BF%87%E7%A8%8B.png" width="700px" />
</center>



#### 1.URL

- http://127.0.0.1/index.html（浏览器会自动添加80）
- http://127.0.0.1:80/index.html（完整的格式）

**拆分**
- http://           URL协议的类型                    
- 127.0.0.1     服务器IP地址                 相当于现实生活中的地址
- :80               服务器的端口号             相当于现实生活中的门牌号码
- index.html    需要访问的资源名称

#### 2.HTTP协议
HTTP是Hypertext Transfer Protocol的协议，超文本传输协议

## HTML基础
### 1. HTML定义
HTML是HyperText markup Language的缩写， 超文本标记语言

### 2. HTML发展史


### 3. DTD文档声明
1. 什么是DTD文档声明?
- 由于HTML有很多个版本的规范，每个版本的规范之间又有一定的差异，所以为了让浏览器能够正确的编译/解析/渲染我们的网页，我们需要在HTML文件的第一行告诉浏览器，我们当前这个网页是用哪一个版本的HTML规范来编写的。

2. DTD文档声明的注意点
- 任何一个标准的HTML网页，第一行一定是DTD文档声明。也就是说DTD文档声明必须写在HTML的第一行
- DTD文档声明不区分大小写
    - <!DOCTYPE html>
    - <!doctype html>
- DTD文档声明不是一个标签
- 虽然DTD文档声明的作用是用于告诉浏览器我们的网页是用哪一个版本的标准编写的，以便于方便浏览器解析和渲染。但是浏览器并不是完全依赖这个DTD文档声明，浏览器有一套属于自己的机制，也就是说DTD文档声明不写网页也能正常运行，但是由于W3C规定第一行必须写上DTD文档声明，所以为了遵守规定，无论怎么我们都应该在第一行写上DTD文档声明

#### 4. html、xhtm1和html5的区别

- html语法非常松散、容错性强
- xhtml更为严格，它要求标签必须小写、必须严格闭合、标签中的属性必须使用引号等
- html5是html下一个版本，所以除了非常松散、容错性强以外，还增加许多新的特性


#### 5. .htm和.html扩展名区别
- DOS操作系统（win95或win98）下只能支持长度为3的后缀名，所以是htm
- 但在windows后缀名长度可以大于3位，所以windows下无所谓htm和html，html是为长文件的格式命名的
- 所以htm是为了兼容过去的DOS命名格式存在的

### 6. HTML标签

#### html标签

- 作用：
  - 用于告诉浏览器这是一个网页，也就是说告诉浏览器我是一个HTML文档

- 注意点：
  - 其他所有的标签都必须写在html标签里面，也就是写在html开始标签和结束标签中间 

#### head标签

- （1）作用：
  - 用于给网站添加一些配置信息
  - 例如：
    - 指定网站的标题/指定网站的小图片
    - 添加网站的SEO相关的信息（指定网站的关键字/指定网站的描述信息）
    - 外挂一些外部的css/js文件
    - 添加一些浏览器适配相关的内容

- （2）注意点：
  - 一般情况下，写在head标签内部的内容都不会显示给用户查看，也就是说一般情况下写在head标签内部的内容我们都看不到。

- （3）head里面的标签
  - title标签
    - 作用：专门用户指定网站的标题，并且这个指定的标题将来还会作为用户保存网站的默认标签
  - base标签
    - 专门用来统一的指定当前网页中所有的超链接（a标签）需要如何打开
    - 注意点：base标签必须写在head标签的开始标签和结束标签直接
    - 格式：
    ```html
    <base target="_blank">
    ```

  - meta标签
    1. 作用：指定当前网页的字符集
 
    2. 为什么会出现乱码现象？
        - 因为我们在编写网页的时候没有指定字符集    
    3. 如何解决乱码现象？
        - 在head标签中添加 `<meta charset="GBK"/>` ，指定字符集

    4. 什么是字符集?
        - 字符集就是字符的集合，也就是很多字符堆在一起。其实字符集就像我们古代的“活字印刷术”，在活字印刷术中就是将很多有汉字的小章放到一个盒子中，然后需要印刷文字的时候再去盒子中取这个小章出来用，正式因为如此，所以出钱了乱码问题。
    5. GBK(GB2312)和UTF-8区别
        - GBK(GB2312)里面存储的字符比较少，仅仅存储了汉字和一些常用外文，体积比较小
        - UTF-8里面存储的世界上所有的文字，体积比较大
    6. 那么在企业开发中我们应该使用GBK(GB2312)还是UTF-8？
        - 如果你的网站仅仅包含中文，那么推荐使用GB2312，因为它的体积更小，访问速度更快
        - 如果你的网站除了中文以外，还包含一些其他国家的语言，那么推荐使用UTF-8
        - 懒人推荐：不管三七二十一，一律写UTF-8即可
        - 注意点：
                1. 在html文件中指定的字符集必须和保存这个文件的字符集一致，否则还会出现乱码
                2. 所以仅仅指定字符集不一定能解决乱码问题，还需要保存文件的时候，文件的保存格式必须和指定的字符集一致才能保证没有乱码问题

<center>     
<img src="https://github.com/link12st/markdownImgs/blob/master/%E5%AD%97%E7%AC%A6%E9%9B%86%E4%B8%80%E8%87%B4%E6%80%A7.png?raw=true" width="700px" />
</center>




#### body标签

- 作用：
  - 专门用于定义HTML文档中需要显示给用户查看的内容（文字/图片/音频/视频）

- 注意点
  - 虽然说有时候你可能将内容写到了别的地方在网页中也能看到，但是千万不要这么干，一定要将需要显示的内容写在body中
  - 一对html标签中（一个html开始标签和一个html结束标签）只能有一对body标签

#### br标签

- 由于html的作用就是用来给文本添加语义，而br标签的语义是不另起一个段落换行，而在企业开发中一般情况下需要换行都是因为需要另起一个段落，所以在企业开发中很少使用br标签


#### img标签和a标签

- title：用于告诉浏览器，当鼠标悬停在图片上时，需要弹出的描述框中显示什么内容
- alt其实是英文alternate的缩写，它的作用就是用于告诉浏览器，当需要显示的图片找不到时显示什么内容（img标签特有）

- src 路径问题注意点：
    - 以后企业开发中如果需要编写路径，统一使用反斜杠/，不要使用正斜杠\。因为将来我们开发的程序可能会部署到其他操作系统的服务器上，而在其他的操作系统中路径都是/，所以如果你写的不是/，可能会引发问题

- target属性（a标签特有）
    - 专门用于控制如何跳转
    - _self：用于在当前选项卡中跳转，也就是不新建界面跳转。默认就是 _slef
    - _blank：用于在新的选项卡中跳转，也就是新建界面跳转

- 假链接
    - 什么是假链接？
        - 就是在点击之后不会跳转的链接，就称之为假链接
    - 假链接存在的意义：
        - 在企业开发前期，其他的界面都没有写出来，那么我们就不知道应该跳转到什么地方，所以就只能使用假链接来代替。当项目后期其他界面都已经完成时再将假链接替换为真链接
    - 假链接的格式：
        ```
        1. #
        2. javascript:
        ```
        两者之间的区别：
        `#` 的假链接会自动回到网页的顶部，而 `javascript:` 的假链接不会自动回到网页顶部
        ```html
        <h1>我是顶部</h1>
        <br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/>
        <a href="#">点我1</a>
        <a href="javascript:">点我2</a>
        ``` 
        
- 锚点
    - 要想通过a标签跳转到指定的位置，那么必须告诉a标签一个独一无二的身份证号码，这样a标签才能在当前界面中找到需要跳转到的目标位置
    - 如何与html中的标签绑定一个独一无二的身份证号码呢？
        - 在html中，每一个标签都有一个名称叫做id的属性，这个属性就是用来给标签指定一个独一无二的身份证号码的
    - 想要实现通过a标签跳转到指定位置分为两步：
    - 给目标位置的标签加一个id属性，然后指定一个独一无二的值
    - 告诉a标签你需要跳转到的目标标签对应的独一无二的身份证号码是多少
    - 格式：
        ```html
        <a href="#center">跳转到中部</a>
        <h2 id="center">我是中部</h2>
        ```
    - 注意点：
        1. 通过a标签跳转到指定的位置，是没有过度动画的，是直接一下子就跳转到了指定位置
        2. a 标签除了可以跳转到当前界面的指定位置以外，还可以在跳转到其他界面的时候，直接跳转到其他界面的指定位置
        3. 格式：
        ```html
        <a href="锚点测试界面.html#bottom">跳转到锚点测试界面</a>
        <h2 id="bottom">我是锚点测试界面底端</h2>
        ```
#### 列表标签
- 什么是列表标签？
    - 列表标签的作用：给一堆数据添加列表语义，也就是告诉搜索引擎告诉浏览器这一堆数据是一个整体
     
- html中的列表标签的分类
    - 无序列表（最多）（unordered list）
    - 有序列表（最少）（ordered list）
    - 定义列表（其次）（definition list）
###### 1. 无序列表
- 无序列表作用：
    - 给一堆数据添加列表语义，并且这一堆数据中所有的数据都没有先后之分

- 什么叫有先后之分？例如：排行榜
- 什么叫没有先后之分？例如：中国有哪些城市

- 无序列表格式:
    ```html
    <ul>
        <li>需要显示的条目内容</li>
    </ul>
    ```
    - li其实是英文list item的缩写
    - list是列表的意思，item是条目的意思，所以结合起来就是 `列表条目` 的意思

- 注意点：
    1. 一定要记住ul标签是用来给一堆数据添加列表语义的，而不是用来给他们添加小圆点的
    2. ul标签和li标签是一个整体，是一个组合，所以一般情况下ul标签和li标签都是一起出现，不会单个出现
    3. 由于ul标签和li标签是一个组合，所以ul标签中不推荐包含其他标签。也就是ul标签中只能看到li标签

- 无序列表的应用场景
    1. 新闻列表
    2. 商品列表
    3. 导航条

###### 2. 有序列表
- 有序列表作用：
    - 给一堆数据添加列表语义，并且这一堆数据中所有的数据都有先后之分 
    ```html
    <ol type="I">
        <li>演员</li>
        <li>小丑</li>
        <li>女人不应该让男人太累</li>
        <li>男人不应该让女人流泪</li>
    </ol>
    ```

###### 3. 定义列表


- 其实dt和dd都是英文的缩写
    - dt是英文definition title的缩写，所以dt的含义就是用来定义列表中的标题
    - dt是英文definition description的缩写，所以dd的含义就是用来定义标题对应的描述

- 定义列表的格式：
    ```html
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
    ```

- 定义列表的应用场景
    - 做网站尾部的相关信息
    - 做图文混排


- 定义列表的注意点
    - 和ul/ol一样，dl和dt/dd是一个整体，所以他们一般情况不会单独出现，都是一起出现
    - 和ul/ol一样，由于dl和dt/dd是一个组合标签，所以dl中建议只放dt和dd标签
    - 一个dt可以没有对应的dd，也可以有多个对应的dd，但是无论有或者没有dd都不推荐使用。推荐使用一个dt对应一个dd
    - 和li标签一样，当需要丰富界面时，我们可以在dt和dd标签中继续添加其他标签


#### 表格标签

> 在过去表格标签用的非常非常的多，绝大多数的网站都是使用表格标签来制作的，也就是说表格标签是一个时代的代表。

- 表格标签的作用：
    - 用来给一堆数据条件语义。表格是一种数据的展现形式，当数据量非常大的时候，表格这种展现形式被认为是最为清晰的一种展现形式

- 表格标签的格式：
    ```html
    <table>
        <tr>
            <td>需要显示的内容</td>
        </tr>
    </table>
    ```
    1. 表格标签中的table代表++整个表格++，也就是一堆table标签就是一个表格
    2. 表格标签中的tr代表整个表格中的++一行数据++，也就是说一对tr标签就是表格中的一行
    3. 表格标签中的td代表表格中一行中的++一个单元格++，也就是说一对td标签就是一行中的一个单元格

- 注意点：
    - 表格标签有一个边框属性，这个属性决定了边框的宽度。默认情况下这个属性的值是0，所以看不到边框
    - 表格标签和列表标签一样，它是一个组合标签，所以table/tr/td要么一起出现，要么一起不出现，不会单个出现


- 宽度和高度的属性
>    - 可以在table和td标签中使用
>    - 表格的宽度和高度默认是按照内容的尺寸来调整的，也可以通过给table标签设置width/height属性的方式手动指定表格的宽度和高度
>    - 如果个td标签设置width/height属性，会修改当前单元格的宽度和高度，不会影响整个表格的宽度和高度

- 水平对齐和垂直对齐的属性
>    - 水平对齐可以在table、tr和td标签中使用；垂直对齐只能在tr和td标签中使用
>        - 给table标签设置align属性，可以控制表格在水平方向的对齐方式
>        - 给tr标签设置align属性，可以控制当前行中所有单元格内容的水平方向的对齐方式
>        - 给td标签设置align属性，可以控制当前单元格中内容在水平方向的对齐方式
>            - 注意点：如果td中设置了align属性，tr中也设置了align属性，那么单元格中的内容会按照td中设置的来对齐
>        - 给tr标签设置valign属性，可以控制当前行中所有单元格中的内容，在垂直方向的对齐方式
>        - 给td标签设置valign属性，可以控制当前单元格中的内容在垂直方向的对齐方式
>            - 注意点：如果td中设置了valign属性，tr中也设置了valign属性，那么单元格中的内容会按照td中设置的来对齐


3. 外边距和内边距的属性（只能给table标签使用）
>    - 外边距就是单元格和单元格之间的距离，我们称之为外边距。默认情况下单元格和单元格之间的外边距的距离是2px
>    - 内边距就是单元格的边框和文字之间的间隙，我们称之为内边距。默认情况下内边距是1px


注意：以上讲解的内容仅仅作为了解，以后在企业开发中所有控制样式的都是通过CSS


> 在表格标签中想通过指定外边距为0来实现细线表格是不靠谱的，其实它是将2条线合并为了一条线，所以看上去很不舒服。

**细线表格的制作方式：**
1. 给table标签设置bgcolor
2. 给tr标签设置bgcolor
3. 给table标签设置cellspacing="1px"
注意点：table、tr和td标签都支持bgcolor属性

```html
<table bgcolor="black" cellpadding="1px">
    <tr bgcolor="white">
        <td>1.1</td>
        <td>1.2</td>
    </tr>
    <tr bgcolor="white">
        <td>2.1</td>
        <td>2.2</td>
    </tr>
</table>
```
- 表格标题
    - 在表格标签中提供了一个标专门用来设置表格的标题，这个标签叫做caption
    - 只要将标题写在caption标签中，那么标题就会自动相对于表格的宽度居中
    - caption标签的注意点：
        - caption一定要写在table标签中，否则无效
        - caption一定要紧跟在table标签后面
    - 标题单元格标签
        - 在表格标签中提供了一个标签专门用来存储每一列的标题，这个标签叫做th标签，只要将当前列的标题存储在这个标签中就会自动居中，加粗文字
        - 到此为止我们就发现，其实表格中有两种单元格，一种是td，一种是th，td是专门用来存储数据的，th是专门用来存储当前列的标题

-  表格的结构
> 由于表格中存储的数据比较复杂，为了方便管理，以及提升语义，我们可以对表格中存储的数据进行分类
    
    

- 表格中存储的数据可以分为4类:
    1. 表格的标题
    2. 表格的表头信息
    3. 表格的主体信息
    4. 表格的表尾信息

```html
<table>
    <caption>表格的标题</caption>
    <thead>
        <tr>
            <th>每一列的标题</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>数据</td>
        </tr>
    </tbody>
    <tfood>
        <tr>
            <td>数据</td>
        </tr>
    </tfood>
</table>
```

    - caption作用：指定表格的标题
    - thead作用：指定表格的表头信息
    - tbody作用：指定表格的主体信息
    - tfood作用：指定表格的附加信息

- 注意点：
    1. 如果我们没有编写tbody，系统会给自动添加tbody
    2. 如果指定了thead和tfood，那么在修改整个表格的高度时，thead和tfood有自己默认的高度，不会随着表格的高度变化而变化


1. 水平方向上的单元格合并:
    - 可以给td标签添加一个colspan属性，来指定把某一个单元格当做多个单元格来看待（水平方向）

> 例如： `<td clospan="2"></td>`  
> 含义：把当前单元格当做两个单元格来看待

2. 垂直方向上的单元格合并：
    - 可以给td标签设置一个rowspan属性，来指定把某一个单元格当做多个单元格来看待（垂直方向）
> 例如： `<td clospan="2"></td>`  
> 含义：把当前单元格当做两个单元格来看待

- 注意点：
    - 由于把某一个单元格当做了多个单元格来看到，所以就会多出一些单元格，所以需要删掉一些单元格才能正常显示
一定到记住单元格合并永远都是向后或者向下合并，而不能向前或者向上合并


#### 表单标签

1. 什么是表单
    - 表单就是专门用来收集用户信息的


2. 什么是表单元素
    - 什么是元素
    - 在html中标签/标记/元素都是指html中的标签
    - 例如：<a> a标签/a标记/a元素

> 表单元素其实还是HTML中的一些标签，只不过这些标签比较特殊，在浏览器重所有的表单标签都有特殊的外观和默认的功能

3. 标签的格式:
    ```html
    <form>
        <表单元素>
    </form>
    ```

4. 常见的表单元素
    > input标签，input标签主要是type属性，这个属性有很多类型的取值，取值的不同就决定了input标签的功能和外观

- 单选框
    - 默认情况下单选框不会互斥，要想单选框互斥那么必须给每一个单选框标签都设置一个name属性，然后name属性还必须设置相同的值
    - 要想让单选框默认选中某一个框子，可以给input标签添加一个checked属性
    - 在html中如果属性的取值和属性的名称一样，可以只写一个。但是在XHTML中必须写上取值，所以在企业开发中我们推荐大家不要省略取值
    
    ```html
    <form>
    性别：
        <input type="radio" name="sex">男
        <input type="radio" name="sex">女
        <input type="radio" name="sex" checked="checked">保密
        <input type="radio" name="sex" checked>保密
    </form>
    ```
- 多选框
    ```html
    <form>
    爱好：
        <input type="checkbox">篮球
        <input type="checkbox">足球
        <input type="checkbox" checked>棒球
        <input type="checkbox" checked>足浴
    </form>
    ```
    - 多选框设置多个checked属性，单选按钮也可以设置多个checked属性，但是浏览器只认最后一个。

- 提交按钮
    - 作用：将表单中的数据提交到远程服务器
- 注意点
    - 要想把表单中的数据提交到远程服务器，必须满足两个条件
        1. 告诉表单需要提交到哪个服务器
            - 可以通过form标签的action属性来告诉表单，需要提交到哪个服务器
        2. 告诉表单，表单中的哪些数据需要提交
    ```html
    <form action="http://baidu.com">
        性别：
        <input type="radio" name="gender">男
        <input type="radio" name="gender" checked>女
        <input type="text" value="123" name="aa">
        <input type="submit">
    </form>
    https://www.baidu.com/?gender=on&aa=123
    <!--
        gender=on，可以通过设置value属性来传值
    -->
    <form action="http://baidu.com">
        性别：
        <input type="radio" name="gender" value="male">男
        <input type="radio" name="gender" value="female" checked>女
        <input type="text" value="123" name="aa">
        <input type="submit">
    </form>
    https://www.baidu.com/?gender=female&aa=123
     <!--
        单选按钮和多选按钮的传值方式是一样的，都需要设置value属性
    -->
    ```
- label标签
    - 默认情况下文字和输入框是没有关联关系的，也就是说点击输入框不会聚焦，如果想点击文字时让对应的输入框聚焦，那么就需要让文字和输入框进行绑定
    - 要想让输入框和文字绑定在一起，那么我们可以使用label标签
    - 绑定的格式：
        1. 将文字利用label标签包裹起来
        2. 给输入框添加一个id属性
        3. 在label标签中通过for属性和输入框中的id进行绑定即可
    ```html
    <label for="account">账户：</label><input type="text" id="account"><br>
    <label for="pwd">密码：</label><input type="password" id="pwd"><br>
    <label>密码：<input type="password"></label><br>
    <label for="bbb">账户：</label><input type="text" id="aaa"><br>
    <label for="aaa">密码：</label><input type="password" id="bbb"><br>
    ```


- datalist标签
    - 作用：给输入框绑定待选项
    - datalist格式：
    ```html
    <datalist>
        <option>待选内容</option>
    </datalist>
    ```
    - 如何给输入框绑定待选列表
        1. 搞一个输入框
        2. 搞一个datalist列表
        3. 给datalist列表标签加一个id
        4. 给输入框添加一个list属性，将datalist的id对应的值赋值给list属性即可
    > 但是这个标签大多数浏览器都不支持，所以不建议使用

- select标签
    - 作用：用于定义下拉列表
    - 格式：
    ```html
    <select>
        <optgroup label="分组名称">
            <option>列表数据</option>
        </optgroup>
    </select>
    ```
    - 注意点：
        1. 下拉列表不能输入内容，但是可以直接在列表中选择内容
        2. 可以通过给option标签添加一个selected属性来指定列表的默认值
        3. 可以通过给option标签包裹一层optgroup标签来给下拉列表中的数据分类

- textarea标签
    - 作用：定义一个多行输入框
    - 格式：
    ```html
    <textarea></textarea>
    ```
    - 注意点：
        - 默认情况下输入框可以无限换行
        - 默认情况下输入框有自己的宽度和高度，可以通过cols和rows来指定输入框的宽度和高度
        - 虽然指定了列数和行数，但是还是可以无限往下输入
        - 默认情况下输入框是可以手动拉伸的

#### 多媒体标签

- video标签
    - 作用：播放视频
    - 格式：
    ```html
    <video src=""></video>
    ```
    - video标签的属性
        - src：用于告诉video标签需要播放的视频地址
        - autoplay：用于告诉video标签是否需要自动播放视频
        - controls：用于告诉video标签是否需要显示控制条
        - poster：用于告诉video标签视频没有播放之前显示的占位图片
        - loop：一般用于做广告视频，用于告诉video标签视频播放完毕之后是否需要循环播放
        - preload：预加载视频，但是需要注意preload和autoplay相冲，如果设置了autoplay属性，那么preload属性就会失效
        - muted：静音
        - width/height：和img标签一模一样

    - video标签的第二种格式
    ```html
    <video>
        <source src="" type=""></source>
        <source src="" type=""></source>
    </video>
    ```
    - 第二种格式存在的意义：
        - 由于视频数据非常非常的重要，所以五大浏览器厂商都不愿意支持别人的视频格式，所以导致了没有视频格式是所有浏览器都支持的，这个时候W3C为了解决这个问题，所以推出了第二个video标签的格式
        - video标签的第二种格式存在的意义就是为了解决浏览器适配问题
        - video元素支持三种视频格式，我们可以把这三种格式都通过source标签指定给video标签，那么以后当浏览器播放视频时，它就会从这三种中选择一种自己支持的格式来播放

    - 注意点：
        - 当前通过video标签的第二种格式虽然能够指定所有浏览器都支持的视频格式，但是显然所有浏览器都通过video标签播放视频还有一个前提条件，就是浏览器必须支持HTML5标签，否则同样无法播放
        - 在过去的一些浏览器是不支持HTML5标签的，所以为了让过去的一些浏览器也能够通过video标签来播放视频，那么我们以后可以通过一个JS的框架——html5media来实现



- audio视频
    - 作用：播放音频
    - 格式：
    ```html
    <audio src=""></audio>
    <audio>
        <source src="" type=""></source>
    </audio>
    ```
    - 注意点：
      - audio标签和video标签的使用基本一样，video标签中能使用的属性在audio标签中大部分都能够使用，并且功能都一样。
      - 只不过有3个属性不能用，height/width/poster

- 详情和概要标签
    - 作用：利用summary标签来描述概要信息，利用details标签
    - 格式：
    ```html
    <details>
        <summary>概要信息</summary>
        详细信息
    </details>
    ```
- marquee标签
    - 作用：跑马灯
    - 格式：
    ```html
    <marquee>内容</marquee>
    ```
    - 属性：
        - direction：设置滚动方向left/right/up/down
        - scrollamount：设置滚动属性，值越大就越快
        - loop：设置滚动次数，默认是-1，也就是无限滚动
        - behavior：设置滚动类型slide滚动到边界就停止，alternate滚动到边界就弹回
    - 注意点：
        - marquee标签不是W3C推荐的标签，在W3C官方文档中也无法查询这个标签，但是各大浏览器对这个标签的支持非常好
'
- 字符实体
&lt;
&gt;
&copy;


<hr>

> 为什么html中有一部分标签会被废弃？
>   - 因为当前html中的标签只有一个作用，就是用来添加语义，而早期的html标签中有一部分标签是没有语义的，有一部分标签是用来修改样式的，所以这部分标签就被淘汰了
>   - 被废弃的标签 `<br><hr><font><b><u><i><s>`

> `<b><u><i><s>` 这些标签都没有语义的，都是用来修改样式的
>    - b(bold)加粗文本，没有任何语义的
>    - u(underlined)给文本添加下划线，没有任何语义的
>    - i(italic)将文本倾斜，没有任何语义的
>    - s(strikethrough)给文本添加下划线，没有任何语义的

> 注意点：在企业开发中，不到万不得已一定不要使用这些被废弃掉的标签，如果一定要使用，一般情况下都是用来作为CSS的钩子来使用


标签 | 语义
---|---
strong == b | 定义重要性强调的文字
ins == u    | 定义插入的文字
em == i     | 定义强调的文字
del == s    | 定义被删除的文字









## webstorm开发工具
- 如何在webstorm中利用快捷键创建一个新的.html的文件
    - 同时按Ctrl + Alt + Insert
    
 
- 如何在WebStorm中让光标移动到当前行的末尾
    - 按下End键


- 如何在WebStorm中让光标移动到当前行的最前面
    - 按下Home键


- 如何在WebStorm中让光标在多行中闪烁
    - 按住Alt键不放，然后再按住鼠标的左键不放，然后在拖动鼠标即可


- 如何在WebStorm中快速的复制光标所在的那一行
    - Ctrl + D
    

- 如何在WebStorm中快速的删除光标所在的那一行
    - Ctrl + X


- 如何在WebStorm中让标签包裹一段内容，也就是自动在一段内容前后加上标签
    - Ctrl + Alt + T，然后按下回车，然后输入相应的标签即可


- 如何在WebStorm中快速编写一个ul格式
    - ul>li     
    - 含义：生成一对ul标签，然后在这对ul标签中再生成一对li标签
    - ul>li*3
    - 含义：生成一对ul标签，然后在这对ul标签中再生成3对里标签
    - 公式写完需要按下tab键


- 快速移动选中的代码，上下移动
    - 往上移动Ctrl + Shift + ↑（方向键上）
    - 往下移动Ctrl + Shift + ↓（方向键下）


- 快速合并和展开代码（合并和展开的是某一个标签）
    - 合并：Ctrl + -
    - 展开：Ctrl + +


- 快速合并和展开代码（合并和展开选中的所有标签）
    - 合并：Ctrl + Shift + -
    - 展开：Ctrl + Shift + +


- 快速新启一行
    - Shift + Enter




































