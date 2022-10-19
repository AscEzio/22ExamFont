/*
    整个todolist分三个组件,Header、List、Footer
    其中主要动态组件在List中，例如，Item的数量，名字，完成状态等
    所以考虑哪些state放在哪些组件上（state中的数据驱动着页面的展示）

    那...谁展示东西我就把state放在谁身上？
        List展示Item，所以把Item的数量、名字、完成状态等放在List的state中
        用一个todos:[]储存，然后给List遍历就行了
    这样想好像确实没问题，但是对于Header呢？
        Header要做的是不是添加新的todos啊
        那就意味着Header要去操作List里的state
        现在来说，兄弟组件之间进行交互很困难（对于现在的我来说）
        所以这个方法不太行
    兄弟之间不好传参数，那么父(App)子组件之间是可通过props传递
        List这边直接用props
        我们只要解决Header对App中的state进行操作即可
    子组件操作父组件state的方法：
    
    List部分能够展示后，考虑Header框的作用：
        在输入框中输入任务名，按下回车，将任务添加到state里面，List更新
        1.获取输入框中的内容（当用户按下回车键时）
            找到Header里的input框，绑定一个键盘事件
            当用户按下Enter键，则更新state
            state的更新驱动着页面的展示
        2.将获取的数据传给App，更新state
            父组件给子组件传递一个参数，那么子组件就能操作这个函数
            所以该函数具体功能为，子组件调用并传递参数（todoObj），该函数的作用是更新todo
    
    List的css交互
        鼠标移入一个Item，该Item高亮，并且出现删除按钮
            1.先给Item里的li标签绑定鼠标移入移出事件
                鼠标移入移出表示这一种状态，将这种状态存储到state（Item的）中
                然后判断state来决定是否高亮和显示删除按钮
            2.写好handleMouse函数与state
                每当鼠标移入移出是，传递一个参数
                移入传入true，移出传入false
                根据参数修改state的值
                注意：因为要传参数，所以handleMouse必须返回一个函数，不然在鼠标事件中就是调用函数
            3.根据state中的值来修改高亮和删除按钮
                style={{backgroundColor:mouse? "#ddd":"white"}}
                style={{display:mouse?"block":"none"}}
    下一步就是List的交互
        每一个Item都有done这个属性，这个属性的变化根据勾选框来决定的，并且涉及到后面删除所有已完成的交互
        思路：
            当你勾选、或者取消勾选一个Item时，就要找到App上对应的todo，然后修改done的值
            这时就要用到id来找到对应的todo了
            修改done的值，方法和addTodo类似
        在Item中找到checkbox类型的input框，有个属性，onChange={}，写好handleChange回调函数
    #状态（state）在哪里，操作状态的方法就在哪里
    删除Item功能
        为删除按钮绑定一个onClick事件
        因为还是要修改App里的state，所以方法和前面的一样
    Header和List的功能基本完成了，接下来考虑Footer的功能
        首先是 已完成/全部 这一部分，只要App把todos交给Footer，那么Footer就能很快解决
        然后就是全部勾选框，当 已完成等于全部 那么就勾选，否则取消勾选
            注意有两种情况：
            1.不点击全部勾选框，当全部任务完成（勾选），全部勾选框勾选上，当有一个未完成，全部勾选框取消勾选
                使用checked属性来实现
            2.点击全部勾选框，所有任务勾选，取消勾选，全部任务取消勾选
                使用onChange属性来实现
*/