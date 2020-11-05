var SERVER_PATH = 'http://bread.varsion.cn/'
var url = location.search;
var form_id;
var Request = new Object();
if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
        Request[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
    }
}
form_id = Request["form_id"];
console.log(form_id);

/**
 * 方法作用 将时间戳转化为年月日
 * @author chenmiao <github.com/Yidaaa-u>
 */
const transformTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const Y = date.getFullYear();
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    const D = date.getDate();
    const h = date.getHours() + ':';
    const m = date.getMinutes();
    // const s = date.getSeconds(); // 秒
    const dateString = Y + '  年 ' + M + '  月 ' + D + '  日  ';
    return dateString;
}

/**
 * 方法作用 实验室仪器设备借用单查看
 * 请求接口 api/supadmin/labequipdisplayinfo
 * @author chenmiao <github.com/Yidaaa-u>
 */
$.ajax({
    type: "GET",
    cache: true,
    url: SERVER_PATH + "api/supadmin/labequipdisplayinfo",
    data: { form_id: form_id },
    dataType: 'json',
    async: false,
    success: function (data) {

        var updated_at = transformTimestamp(data.data.frominfo[0].updated_at);
        let str = `
            <tr>
            <td>借用部门负责人签字</td>
            <td colspan="4">${data.data.frominfo[0].borrowing_department_name}</td>
        </tr>
        <tr>
            <td>实验室借用管理员签字</td>
            <td colspan="4">${data.data.frominfo[0].borrowing_manager_name}</td>
        </tr>
        <tr>
            <td>实验中心主任签字</td>
            <td colspan="4">${data.data.frominfo[0].center_director_name}</td>
        </tr>
        <tr>
            <td>设备管理员出库签字</td>
            <td>${data.data.frominfo[0].device_administrator_out_name}</td>
            <td>借用出库签字</td>
            <td colspan="2">${data.data.frominfo[0].borrower_name}</td>
        </tr>
        <tr>
            <td rowspan="2">归还记录</td>
            <td colspan="4" rowspan="2" style="text-align: left;">
                <p>归还日期：${updated_at}</p> <br>
                <p> 验收：</p><br>
                <p>通过/不通过（原因）：${data.data.frominfo[0].reason}</p>
                <br>
                <p> 验收人签字：${data.data.frominfo[0].device_administrator_acceptance_name} </p> <br>
                <p> 归还人签字：${data.data.frominfo[0].borrower_name}</p>
            </td>

        </tr>
            `
        $("#formfoot").append(str)
        $('#department').append(data.data.frominfo[0].borrow_department);
        $('#application').append(data.data.frominfo[0].borrow_application);
        $('#start_time').append(transformTimestamp(data.data.frominfo[0].destine_start_time));
        $('#expect_time').append(transformTimestamp(data.data.frominfo[0].destine_end_time));
        $('#borrow_name').append(data.data.frominfo[0].borrower_name);
        $('#phone').append(data.data.frominfo[0].borrower_phone);

        var Str = ``;
        var equiplist = data.data.equiplist;
        for (let index = 0; index < equiplist.length; index++) {
            Str += `                
            <tr class="asd">
            <td rowspan="1"></td>
            <td>${equiplist[index].equipment_name}</td>
            <td>${equiplist[index].model}</td>
            <td>${equiplist[index].equipment_number}</td>
            <td>${equiplist[index].annex}</td>
        </tr>`;
        }
        if (equiplist.length < 7) {
            for (let index = 0; index < 7 - equiplist.length; index++) {
                Str += `                
                <tr class="asd">
                <td rowspan="1"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>`;
            }
        }
        $('#forminfo').empty().append(Str);


    },
    error: function (e) {
        alert('操作失败')
    }
})