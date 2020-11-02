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
    // 设定一个判断值,1为通过，2为不通过
    var app_status =0
     // ”审批不通过“弹出框:点击“确定”按钮
     $(".no_ok_btn").click(function(){
         if($("#suggest").val() ==""){
             alert("审批意见为空噢~~~请输入")
             
         }
         else{
             $(".pop").hide()
        $("#no_dialog").hide()
         }
        app_status=2
    })
    

 // 点击“审批通过”按钮：蒙版+审批意见 显现
 $(".ok_app").click(function(){
    $(".pop").show()
    $("#ok_dialog").show()
})


  // ”审批通过“弹出框:点击“确定”按钮
  $(".ok_btn").click(function(){
   $(".pop").hide()
   $("#ok_dialog").hide()
   app_status =1
   
})

 

})