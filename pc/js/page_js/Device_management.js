layui.use('laypage', function() {
    var laypage = layui.laypage;

    //执行一个laypage实例
    laypage.render({
        elem: 'laypagation',
        url: '/demo/table/user/',
        page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
            layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'] //自定义分页布局
                //,curr: 5 //设定初始在第 5 页
                ,
            groups: 1 //只显示 1 个连续页码
                ,
            count: 10,
            theme: '#1E9FFF',
            first: false //不显示首页
                ,
            last: false //不显示尾页

        }, //注意，这里的 test1 是 ID，不用加 # 号

        count: 50 //数据总数，从服务端得到
    });
});