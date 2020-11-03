/**
 * 回显实验室仪器设备借用单
 * @param [
 *	'form_id':表单编号
 *  ]
 *   @author yangsiqi <github.com/Double-R111>
 */
var url = window.location.href;
$(document).ready(function () {
    var form_id = url.split('=')[1];
    console.log(form_id);
    $.ajax({
        type: "GET",
        datatype: "json",
          url: "http://bread.varsion.cn/api/approval/reshowall?code=xxxx&form_id=" + form_id, //通过表单编号和申请人姓名查询表单
     //  url: "http://127.0.0.1:8000/api/approval/reshowall?code=xxxx&form_id=1", //通过表单编号和申请人姓名查询表单
        error: function (data, type, err) {
            console.log("ajax错误类型：" + data);
            console.log(err);
        },
        success: function (data) {
            var str = ``;
            if (data.code === 100) {
                //  alert(data.msg);
                console.log(data);
            }
            if (data.code === 200) {
                console.log(data)
            }
            let timeStr = ``
            let result_str = ``
            result_str += `不通过原因:
            ${data.data.other_information[0].reason} `
            $(".no_result").empty().append(result_str)
            timeStr = ` 
             <p>实验室仪器设备借用单</p>
             <p>${data.data.equipment_borrow[0].created_at}</p>`
            $(".labLoan_title").empty().append(timeStr)
            str += `
       <form>
                            <table>
                                <tr>
                                    <td colspan="2">借用部门</td>
                                    <td colspan="2">${data.data.equipment_borrow[0].borrow_department}</td>
                                </tr>
                                <tr>
                                    <td colspan="2">设备用途</td>
                                    <td colspan="2">${data.data.equipment_borrow[0].borrow_application}</td>
                                </tr>
                                <tr>
                                    <td colspan="2">使用时间</td>
                                    <td colspan="2"><span>${data.data.equipment_borrow[0].destine_start_time}-${data.data.equipment_borrow[0].destine_end_time}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">借用人</td>
                                    <td colspan="2">${data.data.equipment_borrow[0].borrower_name}</td>
                                </tr>
                                <tr>
                                    <td colspan="2">电话</td>
                                    <td  colspan="2">${data.data.equipment_borrow[0].borrower_phone}</td>
                                </tr>
                                <tr>
                                    <td colspan="4">设备清单</td>
                                </tr>
                                <tr>
                                    <td>设备名称</td>
                                    <td>型号</td>
                                    <td>数量</td>
                                    <td>附件</td>
                                </tr>`
            for (var i = 0; i < data.data.equipment_borrow_checklist.length; i++) {
                str += `<tr>
                                                <td>${data.data.equipment_borrow_checklist[i].equipment_name}</td>
                                                <td>${data.data.equipment_borrow_checklist[i].model}</td>
                                                <td>${data.data.equipment_borrow_checklist[i].number}</td>
                                                <td>${data.data.equipment_borrow_checklist[i].annex}</td>
                                             </tr>`
            }
            str += `</table></form>`
            $('.labLoan_form').empty().append(str);
        }
    })
})
var url_l = window.location.href;
$(function () {
// 获取状态status
    console.log(url_l)
    console.log(url_l.charAt(url_l.length - 1))
    var status = url_l.charAt(url_l.length - 1)
    if (status == 1) {
        $(".hty_ok").show()
    } else {
        $(".hty_no").show()
    }

})



