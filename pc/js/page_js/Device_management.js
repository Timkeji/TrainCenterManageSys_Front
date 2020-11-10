$(function () {
    show();
})
//展示页面
function show() {
    $.ajax({
        type: "get",
        url:  "http://bread.varsion.cn/api/supadmin/shownew",
        dataType: "json",
        success: function (data) {
            if (data.code == 200) {

                console.log("展示页面" + data.msg)
            }
            if (data.code == 100) {
                console.log("展示页面" + data.msg)
            }
            let str = ``
            console.log(data);
            for (var i = 0; i < data.data.data.length; i++) {
                str += `
                   <tr class="am-text-center am-text-middle">
                            <input type="hidden" name="equipment_id" id="equipment_id" value="${data.data.data[i].equipment_id}">
                            <td class="am-text-center am-text-middle" id="equipment_name">${data.data.data[i].equipment_name}</td>
                            <td class="am-text-center am-text-middle" id="model">${data.data.data[i].model}</td>
                            <td class="am-text-center am-text-middle" id="number">${data.data.data[i].number}</td>
                            <td class="am-text-center am-text-middle" id="annex"><span class="thcom">${data.data.data[i].annex}</span></td>
                            <td class="am-text-center am-text-middle">
                                <button type="button" class="btn-look" id="btn-look1" data-am-modal="{target: '#movedalert'}" onclick="goBack(${data.data.data[i].equipment_id})">修改</button>
                                <button type="button" class="but-use site_delete" >删除</button>
                            </td>
                        </tr>
                  
                  `
            }
            $('#table_list').empty().append(str);
            rmNew();
        }
    })
}
//新增
function addDevice(){
    $.ajax({
        type:"POST",
        url:"http://bread.varsion.cn/api/supadmin/adddevice",
        dataType:"json",
        data:{
            equipment_name:$('#ename').val(),
            model:$('#emodel').val(),
            number:$('#enumber').val(),
            annex:$('#eannex').val(),
        },
        success:function (data){

            if(data.code===200){
                console.log(123);
                console.log(data.msg)
            }
            if(data.code==100){
                console.log("数据增加失败");
            }
            location.reload();
        },
        error:function(data){
            console.log("error");
        }


    })
}
//查询
function searchNew(){
    var value=document.getElementById("name").value;
    $.ajax({
        type:"GET",
        url:"http://bread.varsion.cn/api/supadmin/searchnew",
        dataType:"json",
        data:{model: value},
        success:function(data){
            var str;
            if(value){
                for(let i=0;i<data.data.data.length;i++){
                    str+=`
                   <tr class="am-text-center am-text-middle">
                            <td class="am-text-center am-text-middle">${data.data.data[i].equipment_name}</td>
                            <td class="am-text-center am-text-middle">${data.data.data[i].model}</td>
                            <td class="am-text-center am-text-middle">${data.data.data[i].number}</td>
                            <td class="am-text-center am-text-middle"><span class="thcom">${data.data.data[i].annex}</span></td>
                            <td class="am-text-center am-text-middle">
                                <button type="button" class="btn-look" id="btn-look1" data-am-modal="{target: '#movedalert'}" >修改</button>
                                <button type="button" class="but-use" onclick="">删除</button>
                            </td>
                        </tr>
                `
                }
                $('#table_list').empty().append(str);
            }
            else{
                show();
            }
        }
    })
}

//删除
function rmNew() {
    $(".site_delete").click(function () {
        var a = document.getElementById('equipment_id').value
        var name = $(this).parent().siblings("#equipment_name").text();
        var model= $(this).parent().siblings('#model').text();
        var number= $(this).parent().siblings("#number").text();
        var annex= $(this).parent().siblings("#annex").text();

        $.ajax({
            type: "post",
            dataType: "json",
            url: 'http://bread.varsion.cn/api/supadmin/rmnew',
            data:{
                equipment_id:a,
                equipment_name:name,
                model:model,
                number:number,
                annex:annex
            },
            success: function (data) {
                console.log(data)
                if (data.code == 200) {
                    console.log(data.msg)
                }
                location.reload();
            }

        })
    })
}

//回显
function goBack(id) {
    $.ajax({
        type: "get",
        data: {equipment_id: id},
        dataType: "json",
        url: "http://bread.varsion.cn/api/supadmin/goback",
        success: function (data) {
            console.log(data.data)
            var str = ``;
            str += ` 
      
        <div class="am-modal-dialog am-mover" id="movedalert1">
            <div class="am-modal-hd am-u-sm-centered">修改</div>
            <div class="am-modal-bd am-u-sm-centered am-bd-1">
                <div class="am-g textam am-u-sm-centered">
                    <div class="am-u-sm-4 am-left">
                        <p class="am-text-center am-text-middle textp am-text-sm ">设备名称</p>
                    </div>
                    <div class="am-u-sm-7 am-u-sm-offset-1 am-left ">
                        <p class="am-text-left" id="equipment_name">${data.data.equipment_name}</p>
                    </div>
                </div>
                <div class="am-g textam">
                    <div class="am-u-sm-4 am-left ">
                        <p class="am-text-center am-text-middle textp am-text-sm">设备型号</p>
                    </div>
                    <div class="am-u-sm-7 am-u-sm-offset-1 am-left ">
                        <p class="am-text-center am-text-middle textp am-text-sm">
                            <input type="text"   value="${data.data.model}" class="inputmovedd model">
                        </p>
                    </div>
                </div>
                <div class="am-g textam">
                    <div class="am-u-sm-4 am-left">
                        <p class="am-text-center am-text-middle textp am-text-sm">设备数量</p>
                    </div>
                    <div class="am-u-sm-7 am-u-sm-offset-1 am-left ">
                        <p class="am-text-center am-text-middle textp am-text-sm">
                            <input type="text"  value="${data.data.number}" class="inputmovedd  number">
                        </p>
                    </div>
                </div>
                <div class="am-g textam">
                    <div class="am-u-sm-4 am-left ">
                        <p class="am-text-center am-text-middle textp am-text-sm">设备附件</p>
                    </div>
                    <div class="am-u-sm-7 am-u-sm-offset-1 am-left ">
                        <p class="am-text-center am-text-middle textp am-text-sm">
                            <input type="text" value="${data.data.annex}" class="inputmovedd  annex" >
                        </p>
                    </div>
                </div>
            </div>
            <div class="am-modal-footer am-u-sm-centered">
                <div class="am-modal-btn footbtn site_update" onclick="exitnew(${id})">修改</div>
                <div class="am-modal-btn footbtn">取消</div>
            </div>
        </div>
    
                    `
            $('#movedalert1').empty().append(str);

        },
        error: function (data) {
            console.log('失败' + data);
        }
    })

}

//修改
function  exitnew(id){

    console.log(id,$('#equipment_name').text(),$('.model').val(),$('.number').val(),$('.annex').val())
    $.ajax({
            type: 'POST',
            data: {
                equipment_id: id,
                equipment_name: $('#equipment_name').text(),
                model: $('.model').val(),
                number: $('.number').val(),
                annex: $('.annex').val()
            },
            dataType: "json",
            url: "http://bread.varsion.cn/api/supadmin/exitnew",
            success: function (data) {
                // location.reload()
                console.log(data)
                if (data.code === 200) {
                    console.log(data.msg)
                }
            }
        }

    )
}


//获取展示的总页数
$.ajax({
    type: "get",
    cache: true,
    url: "http://bread.varsion.cn/api/supadmin/shownew",
    dataType: 'json',
    async: false,
    success: function (data) {
        console.log(data.data)
        totalPageasd = data.data.last_page
        console.log(data.data.last_page)
    },
    error: function (e) {
    }
});
//根据获取到的展示总页数分页展示
$.jqPaginator('#pagination2', {
    totalPages: totalPageasd,
    visiblePages: 8,
    currentPage: 1,
    first: '<li class="first" style="margin-left: 10px; margin-right: 10px;"><a href="javascript:void(0);">首页</a></li>',
    prev: '<li class="prev" style="margin-left: 10px; margin-right: 10px;"><a href="javascript:;">前一页</a></li>',
    next: '<li class="next" style="margin-left: 10px; margin-right: 10px;"><a href="javascript:void(0);">下一页</a></li>',
    last: '<li class="last" style="margin-left: 10px; margin-right: 10px;"><a href="javascript:void(0);">尾页</a></li>',
    page: '<li class="page" style="margin-left: 10px; margin-right: 10px;"><a href="javascript:;">{{page}}</a></li>',
    onPageChange: function (num) {
        $.get("http://bread.varsion.cn/api/supadmin/shownew?page=" + num, function (data) {
            var str = '';
            console.log(data.code)
            for (var i = 0; i < data.data.data.length; i++) {
                str += ` 
                 <tr class="am-text-center am-text-middle">
                    <td hidden><input type="text" value=${data.data.data[i].equipment_id} id="lab_id" hidden ></td>
                    <td class="am-text-center am-text-middle">${data.data.data[i].equipment_name}
                    <td class="am-text-center am-text-middle"><span class="thcom">${data.data.data[i].model}</span></td>
                    <td class="am-text-center am-text-middle"><span class="thcom">${data.data.data[i].number}</span></td>
                    <td class="am-text-center am-text-middle"><span class="thcom">${data.data.data[i].annex}</span></td>
                    <td class="am-text-center am-text-middle layui-input-block">
                                
                    </td>
                    <td class="am-text-center am-text-middle">
                    <button type="button" class="btn-look" id="btn-look1" data-am-modal="{target: '#movedalert'}" onclick="goBack(${data.data.data[i].equipment_id})">修改</button>
                    <button type="button" class="but-use  site_delete" >删除</button>
                    </td>
                  </tr>
                `
            }
            console.log(str);
            $('#table_list').empty();
            $('#table_list').append(str);

        })
    }
});