var SERVER_PATH = 'http://bread.varsion.cn/'
layui.use('laypage', function() {
    var laypage = layui.laypage;

    //执行一个laypage实例
    laypage.render({
        elem: 'laypagation',
        url: '/demo/table/user/',
        curr: 1 //设定初始在第 5 页
            ,
        limit: 8,
        page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
            layout: ['limit', 'count', 'prev', 'page', 'next', 'skip', 'curr'] //自定义分页布局
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

/**
 * 页面渲染
 */
$(document).ready(function (){
    $.get(SERVER_PATH+'api/supadmin/tearecorddisplay',function (data){
        console.log(data)
        if(data.code == 200){

            let Str = ''
             for (var i = 0; i < data.data.data.length; i++){
                    console.log(data.data.data.length)
                Str += `
                         <tr class="am-text-center am-text-middle">
                            <td class="am-text-center am-text-middle">${data.data.data[i].form_id}</td>
                            <td class="am-text-center am-text-middle">${data.data.data[i].applicant_name}</td>
                            <td class="am-text-center am-text-middle">${data.data.data[i].updated_at}</td>
                            <td class="am-text-center am-text-middle">
                                <!-- 修改按钮 -->
                                <!-- <button type="button" class="btn-look">修改</button> -->
                                <button type="button" class="btn-look" id="btn-look1" data-am-modal="{target: '#movedalert'}">查看</button>
                                <button type="button" class="but-use" ">导出</button>
                            </td>
                        </tr>
                       `;
             }
            $('#table_list').empty();
            $('#table_list').append(Str);

            //总页数
            objNumService = data.data.total;
        }

    })
})

//搜索
function select(){
    var a = document.getElementById("name").value;
    console.log(a);
    $.ajax({
        type: "GET",
        cache: false,
        //contentType: "application/json;charset=UTF-8",
        url: SERVER_PATH + "api/supadmin/tearecordselect",
        data: {form_id: a},
        dataType: 'json',
        success: function (result) {
            console.log(result.data)
            if (result.code == 200) {
                let Str = '';
                for (var i = 0; i < result.data.data.length;i++){
                    Str += `
                    <tr class="am-text-center am-text-middle">
                            <td class="am-text-center am-text-middle">${result.data.data[i].form_id}</td>
                            <td class="am-text-center am-text-middle">${result.data.data[i].applicant_name}</td>
                            <td class="am-text-center am-text-middle">${result.data.data[i].created_at}</td>
                            <td class="am-text-center am-text-middle">
                                <!-- 修改按钮 -->
                                <!-- <button type="button" class="btn-look">修改</button> -->
                                <button type="button" class="btn-look" id="btn-look1" data-am-modal="{target: '#movedalert'}">查看</button>
                                <button type="button" class="but-use" ">导出</button>
                            </td>
                        </tr>
                    `;
                }
                $('#table_list').empty();
                $('#table_list').append(Str);

                //总页数
                objNumService = data.data.total;

        }
        if(result.code == 100){
            alert('搜索信息失败')
        }

        },
        error : function(e){
            alert('操作失败')
        }
    })

}