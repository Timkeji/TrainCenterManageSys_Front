

var SERVER_PATH = 'http://bread.varsion.cn/'
var url=location.search;
var form_id;
var Request = new Object();
if(url.indexOf("?")!=-1)
{
    var str = url.substr(1);
    strs= str.split("&");
    for(var i=0;i<strs.length;i++)
    {
        Request[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
    }
}
form_id= Request["form_id"];


$(document).ready(function (){
    $.get(SERVER_PATH+'api/supadmin/tearecorddispalyinfo?form_id='+form_id,function (data){
        console.log(data)
        console.log(data.data.forminfo.length)
    let Str = ''
        let str = ''
        if(data.code === 200) {


                if(data.data.forminfo.length ===0)
                {
                    Str +=`
                       <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                 <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
               <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
               <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                     `
                }
                else {
                    for (var i = 0;i<data.data.forminfo.length;i++){
                    Str +=`
                      <tr>
                    <td>${data.data.forminfo[i].laboratory_id}</td>
                    <td>${data.data.forminfo[i].laboratory_name}</td>
                    <td>${data.data.forminfo[i].class_name}</td>
                    <td>${data.data.forminfo[i].teacher}</td>
                    <td>${data.data.forminfo[i].teach_operating_condition}</td>
                    <td>${data.data.forminfo[i].operating_condition}</td>
                    <td>${data.data.forminfo[i].remark}</td>
                </tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                     `}
                }



            for (var i = 0;i < data.data.reocrd_info.length;i++){
                str = `
         <tr>
                <td colspan="7">
                    <div><p class="redr" >记录人:</p> <p id="recorder_name">${data.data.reocrd_info[0].applicant_name}</p></div>
                    <div ><p class="redrnum" >记录编号：</p><p id="recorder_id">${data.data.reocrd_info[0].form_id}</p> </div>
                </td>

            </tr>
         `
            }
            }


        $('#this').empty(Str);
        $('#this').append(Str);
        $('#this').append(str);

    })


})

// function getHtml(){
//     var html = document.querySelector(".getHtml");
//     console.log(html)
//     $.ajax({
//         type: "GET",
//         cache: false,
//         //contentType: "application/json;charset=UTF-8",
//         url: "127.0.0.1:8000/api/supadmin/demo",
//         data: {html: html},
//         dataType: 'json',
//         success:function (data){
//             if (data.code == 200){
//                 alert('导出成功')
//             }
//             if(data.code == 100){
//                 alert('导出失败')
//             }
//         },
//         error: function (){
//             alert('操作失败')
//         }
//     })
// }



// else {
//     Str +=`

// `
// }