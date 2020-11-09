var SERVER_PATH = 'http://bread.varsion.cn/'


// layui.use('laypage', function() {
//     var laypage = layui.laypage;
//
//     //执行一个laypage实例
//     laypage.render({
//         elem: 'laypagation',
//         url: '/demo/table/user/',
//         curr: 1 //设定初始在第 5 页
//             ,
//         limit: 8,
//         page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
//             layout: ['limit', 'count', 'prev', 'page', 'next', 'skip', 'curr'] //自定义分页布局
//                 ,
//
//             groups: 1 //只显示 1 个连续页码
//                 ,
//             count: 10,
//             theme: '#1E9FFF',
//             first: false //不显示首页
//                 ,
//             last: false //不显示尾页
//
//         }, //注意，这里的 test1 是 ID，不用加 # 号
//
//         count: 50 //数据总数，从服务端得到
//     });
// });


>
//下拉框渲染
$(document).ready(function() {
    console.log(SERVER_PATH)
    $.get(SERVER_PATH+'api/supadmin/getlab',function (data){
        console.log(data)
        let Str = ''
        if(data.code == 200){
                Str = `
                 <select id="choose" onchange="xialakuangliandong()">
                        <option value="null">--请选择--</option>
                        `

                    for (var i = 0;i < data.data.length; i++){
                        Str += ` <option value="${data.data[i]}">${data.data[i]}</option>`
                    }
                Str +=`</select>`

            $('#choose1').empty();
            $('#choose1').append(Str);
        }
        if (data.code == 100){
            alert('下拉框获取失败')
        }


    })



    })


//页面渲染
    $.get(SERVER_PATH+'api/supadmin/getlaballinfo',function (data){

            console.log(data)
            var Str = ''
            for ( var i = 0;i < data.result.data.length; i++){
                Str += `
                <tr class="am-text-center am-text-middle">
                            <td class="am-text-center am-text-middle">${data.result.data[i].group}</td>
                            <td class="am-text-center am-text-middle">${data.result.data[i].created_at}</td>
                            <td class="am-text-center am-text-middle">
                                
                                <button type="button" class="btn-look" id="btn-look1" onclick="watch(this)">查看</button>
                                <button type="button" class="but-use" onclick="dc_getmes(this)">导出</button>
                            </td>
                        </tr>
                `;
            }
            $('#table_list').empty();
            $('#table_list').append(Str);

            //总页数
            objNumService = data.result.total;



    })





//下拉联动
function xialakuangliandong() {
    var type = $("#choose option:selected");
    var lab_name = type.val();
    console.log(lab_name);
    $.get(SERVER_PATH+'api/supadmin/getlaboperationrecords?lab_name='+lab_name,function (data){

        console.log(data)
        var Str = ''
        for ( var i = 0;i < data.result.data.length; i++){
            Str += `
                <tr class="am-text-center am-text-middle">
                            <td class="am-text-center am-text-middle">${data.result.data[i].group}</td>
                            <td class="am-text-center am-text-middle">${data.result.data[i].created_at}</td>
                            <td class="am-text-center am-text-middle">
                                
                                <button type="button" class="btn-look" id="btn-look1" onclick="watch(this)" >查看</button>
                                <button type="button" class="but-use"onclick="dc_getmes(this)">导出</button>
                            </td>
                        </tr>
                `;
        }
        $('#table_list').empty();
        $('#table_list').append(Str);

        //总页数
        objNumService = data.result.total;


    })

}

//搜索
function select3(){
    var a = document.getElementById('name').value
    console.log(a)
    $.ajax({
        type: "GET",
        cache: false,
        //contentType: "application/json;charset=UTF-8",
        url: SERVER_PATH + "api/supadmin/select",
        data: {num: a},
        dataType: 'json',
        success:function (data){
            if(data.code == 200){
                console.log(data)
                let Str = ''
                    Str += `
                <tr class="am-text-center am-text-middle">
                            <td class="am-text-center am-text-middle">${data.data.group}</td>
                            <td class="am-text-center am-text-middle">${data.data.created_at}</td>
                            <td class="am-text-center am-text-middle">
                                
                                <button type="button" class="btn-look" id="btn-look1" onclick="watch(this)">查看</button>
                                <button type="button" class="but-use" onclick="dc_getmes(this)">导出</button>
                            </td>
                        </tr>
                `;

                $('#table_list').empty();
                $('#table_list').append(Str);

                //总页数
                objNumService = data.total;
            }
        }

    })

}

//查看
function watch(a){
    console.log( $(a).parent().parent().children().eq(0).text())
    var group = $(a).parent().parent().children().eq(0).text();
    window.location.href = "lab_formRecord.html?group="+group;
}

//导出
function dc_getmes(a) {
    var group = $(a).parent().parent().children().eq(0).text();
    window.location.href = "lab_formRecord.html?group="+group+"&&"+"flag="+1;

}



