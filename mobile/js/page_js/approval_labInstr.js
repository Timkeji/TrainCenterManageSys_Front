
/**
 * 实验室仪器设备借用单审核
 * @author DuJingWen<github.com/DJWKK>
 */
var SERVER_PATH = 'http://127.0.0.1:8000/'
$(function(){

    // 点击“审批不通过”按钮：蒙版+审批意见 显现
    $(".no_app").click(function(){
        $(".pop").show()
        $("#no_dialog").show()
    })

    // ”审批不通过“弹出框:点击“取消”按钮
    $(".no_cancel_btn").click(function(){
        $(".pop").hide()
        $("#no_dialog").hide()
    })

    /**
     * 实验室仪器设备借用单审核不通过
     * @api api/approval/noPass
     * @param[
     *      'code':钉钉code
     *      'form_id':表单编号
     *      'reason':审批不通过原因
     * ]
     * @author DuJingWen<github.com/DJWKK>
     */
    // 设定一个判断值,1为通过，2为不通过
    var app_status =0
     // ”审批不通过“弹出框:点击“确定”按钮
     $(".no_ok_btn").click(function(){
         if($("#suggest").val() ==""){
             alert("审批意见为空噢~~~请输入")
         }
         else{
             $.ajax({
                 url: SERVER_PATH + 'api/approval/noPass',
                 type: 'POST',
                 dataType: 'json',
                 data:{
                     code:200,
                     form_id:$(".table_no").html(),
                     reason:$("#suggest").val(),
                 },
                 success: function (data) {
                     if (data.code === 200) {
                         console.log('实验室仪器设备借用单审核不通过成功');
                         alert("审核不通过成功");
                         window.location.href ='approval_no.html'
                         $(".pop").hide()
                         $("#ok_dialog").hide()
                         app_status =1
                     } else if (data.code === 100) {
                         console.log("实验室仪器设备借用单审核未通过");
                     }
                 },
                 error: function (data) {
                     console.log("error");
                     $(".pop").show()
                     $("#ok_dialog img").attr({"src":"../images/no.png"})
                     $(".ok_title").text("审批提交失败")
                     $("#ok_dialog").show()
                     $(".ok_btn").click(function(){
                         $(".pop").hide()
                         $("#ok_dialog").hide()
                         app_status =1
                     })
                 }
             })
             $(".pop").hide()
        $("#no_dialog").hide()
         }
        app_status=2
    })


    /**
     * 实验室仪器设备借用单审核通过
     * @api api/approval/pass
     * @param[
     *      'code':钉钉code
     *      'form_id':表单编号
     * ]
     * @author DuJingWen<github.com/DJWKK>
     */
 // 点击“审批通过”按钮：蒙版+审批意见 显现
 $(".ok_app").click(function(){
     $.ajax({
         url: SERVER_PATH + 'api/approval/pass',
         type: 'GET',
         dataType: 'json',
         data:{
             code:200,
             form_id:$(".table_no").html(),
         },
         success: function (data) {
             alert((".table_no").html());
             if (data.code === 200) {
                 console.log('实验室仪器设备借用单审核通过');
                 $(".ok_btn").click(function(){
                     window.location.href ='approval_no.html'
                     $(".pop").hide()
                     $("#ok_dialog").hide()
                     app_status =1
                 })
             } else if (data.code === 100) {
                 console.log("实验室仪器设备借用单审核未通过");
             }
         },
         error: function (data) {
             console.log("error");
             $(".pop").show()
             $("#ok_dialog img").attr({"src":"../images/no.png"})
             $(".ok_title").text("审批提交失败")
             $("#ok_dialog").show()
             $(".ok_btn").click(function(){
                 $(".pop").hide()
                 $("#ok_dialog").hide()
                 app_status =1
             })
         }
     })
    $(".pop").show()
    $("#ok_dialog").show()
})

})