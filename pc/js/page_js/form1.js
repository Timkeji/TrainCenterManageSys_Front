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
 * 方法作用 开放实验室申请表单查看
 * 请求接口 api/supadmin/labopendisplayinfo
 * @author chenmiao <github.com/Yidaaa-u>
 */
$.ajax({
    type: "GET",
    cache: true,
    url: SERVER_PATH + "api/supadmin/labopendisplayinfo",
    data: { form_id: form_id },
    dataType: 'json',
    async: false,
    success: function (data) {
        var forminfo = data.data.forminfo[0];
        var studentlist = data.data.stulist;
        var start_time = transformTimestamp(forminfo.start_time);
        var end_time = transformTimestamp(forminfo.end_time)
        var created_at = transformTimestamp(forminfo.created_at)
        console.log(studentlist)
        //表单信息
        var Str = ``;
        var table1 = `            <tbody id="formheader">
        <tr>
            <th colspan="4">开放实验室申请</th>
        </tr>
        <tr>
            <td>使用原因</td>
            <td colspan="3">${forminfo.reason_use}</td>
        </tr>
        <tr>
            <td>项目名称</td>
            <td colspan="3">${forminfo.porject_name}</td>
        </tr>
        <tr>
            <td>使用申请</td>
            <td colspan="3"><span>${start_time}</span><span>至</span><span>${end_time}</span> 每天8：20--22：00
            </td>

        </tr>
        <tr>
            <td colspan="4" style="text-align: left; padding-left: 65px;">申请学生名单为</td>
        </tr>
        <tr>
            <td>姓名</td>
            <td>学号</td>
            <td>联系电话</td>
            <td>承担工作</td>
        </tr>
    </tbody>
    <tbody id="forminfo">`;
        // 学生列表   
        var table2 = ``;
        for (let len = 0; len < studentlist.length; len++) {
            table2 += `                
        <tr>
            <td>${studentlist[len].student_name}</td>
            <td>${studentlist[len].student_id}</td>
            <td>${studentlist[len].phone}</td>
            <td>${studentlist[len].work}</td>
        </tr>`;
        }

        if (studentlist.length < 7) {
            for (let index = 0; index < 7 - studentlist.length; index++) {
                table2 += `                
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>`;
            }
        }
        table2 += `</tbody>`;

        var table3 = `            <tr>

        <td colspan="6" style="text-align: left; padding-left: 65px; height: 50px;"> 个人名单增减</td>
    </tr>
    <tr>

        <td colspan="4" rowspan="4">
            <p>疫情特殊时期，我承诺学生进入实验室后第一时间给学生宣讲《实验室疫情个人防护常识》，并拍照存档。 在实验室期间要求同学们隔位而坐。配合实验中心相关工作安排。
            </p>
            <p style="text-align: right; margin-top: 20px;">申请人：${forminfo.applicant_name}</p>

            <p style="text-align: right; margin-top: 20px;">日期 ${created_at}</p>
        </td>
    </tr>`;

        Str = table1 + table2 + table3;
        $('#test').empty();
        $('#test').append(Str);

    },
    error: function (e) {
        alert('操作失败')
    }
})




