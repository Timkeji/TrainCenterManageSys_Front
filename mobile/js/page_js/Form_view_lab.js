window.onload=function(){

    var SERVER_PATH = 'http://bread.varsion.cn/'
    var a="C2010283959";
    var b="A2011024937"
    console.log(a)
    
    //    页面初始化

        $.ajax({
            type: "get",
            url : SERVER_PATH+"/api/fill/viewlabborrow",
            data: {form_id:b},// 将json数据转化为字符串
            success: function (data) {
              
                if(data.code==200){
                    // alert("提交成功")
                    // $("#forminformation")
               var date=`${data.data[0].created_at}`;
               $(".formdate").append( date)

        
                    var strhead=` 
                <tr>
                <td >申请实验室名称</td>
                <td >${data.data[0].laboratory_name}</td>      
            </tr>
            <tr>
            <td >实验室编号</td>
            <td >${data.data[0].laboratory_id}</td>      
        </tr>
        <tr>
            <td >学习班级</td>
            <td >${data.data[0].class_name}</td>      
        </tr>
        <tr>
            <td >人数</td>
            <td >${data.data[0].number}</td>      
        </tr>
        <tr>
            <td >实验目的</td>
            <td >${data.data[0].purpose}</td>      
        </tr>
        <tr>
            <td >具体使用时间</td>
            <td >${data.data[0].start_time}<br>第${data.data[0].start_class}节课至第${data.data[0].end_class}节课</td>      
        </tr>
        <tr>
            <td >实验室课程名称</td>
            <td >${data.data[0].course_name}</td>      
        </tr>
            <tr>
                <td colspan="3" >指导老师（申请人）承诺：<br>
                    1. 借用教师为借用期间实验室安全责任人，
                    必须保证实验室的安全。切实履行实验室用
                    电用水防盗防火安全。对实验人员进行安全
                    教育，保证实验室人员人身安全。<br>
                    2. 对实验人员进行必要仪器使用和实验技能
                    指导实验操作教育，保证实验操作规范及设
                    备正常。<br>
                    3. 督促实验人员按时完成实验项目。
                    
                       我已阅知实验室安全责任要求，保证切实履
                    行实验室安全责任。<br>
                    申请人：${data.data[0].applicant_name}  <br> 电话：${data.data[0].phone} <br>  ${data.data[0].created_at} </td>
            </tr>`;
                $("#forminfo").append( strhead)



                    
                    console.log("成功了"),
                    console.log( data)
                    
                }else{
                    console.log(data)
                    alert("提交失败")
                }
          
            },
            error: function (data) {
                // console.log(XMLHttpRequest.status);
                // console.log(XMLHttpRequest.readyState);
                // console.log(textStatus);
                console.log(data)
            }
        })

    

}
   