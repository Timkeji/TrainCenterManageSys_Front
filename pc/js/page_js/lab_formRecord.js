var SERVER_PATH = 'http://bread.varsion.cn/'

var url=location.search;
var group;
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
group= Request["group"];

 $(document).ready(function (){
    $.get(SERVER_PATH+'api/supadmin/getlaball?group='+group,function (data){
        console.log(data)
        if(data.code == 200){
            let Str = ''
           if(data.data.length == 0){
               Str =`
                <tr>
                    <th>序号</th>
                    <th>周次</th>
                    <th>时间</th>
                    <th>专业班级（综合班）</th>
                    <th>教师</th>
                    <th>人数 </th>
                    <th>课程名称/实验项目</th>
                    <th>课程类型</th>
                    <th>设备运行情况</th>
                    <th>备注</th>
                </tr>
                <tr>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                </tr>
                <tr>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                </tr>
                <tr>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                </tr>
                <tr>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                </tr>
                <tr>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                </tr>
               
               `
           }else{
               Str = `
               <tr>
                    <th>序号</th>
                    <th>周次</th>
                    <th>时间</th>
                    <th>专业班级（综合班）</th>
                    <th>教师</th>
                    <th>人数 </th>
                    <th>课程名称/实验项目</th>
                    <th>课程类型</th>
                    <th>设备运行情况</th>
                    <th>备注</th>
                </tr>
               `
               for (var i = 0; i < data.data.length;i++){
                   Str += `
                    <tr>
                    <td><input type="text" readonly value="${parseInt(i)+1}"></td>
                    <td><input type="text" readonly value="${data.data[i].week}" ></td>
                    <td><input type="text" readonly value="${data.data[i].time}" ></td>
                    <td><input type="text" readonly value="${data.data[i].class_id}" ></td>
                    <td><input type="text" readonly value="${data.data[i].teacher}" ></td>
                    <td><input type="text" readonly value="${data.data[i].number}" ></td>
                    <td><input type="text" readonly value="${data.data[i].class_name}" ></td>
                    <td><input type="text" readonly value="${data.data[i].class_type}" ></td>
                    <td><input type="text" readonly value="${data.data[i].situation}" ></td>
                    <td><input type="text" readonly value="${data.data[i].remark}" ></td>
                </tr>
                   `
               }

           }
            $('#list_table').empty(Str);
            $('#list_table').append(Str);

        }



    })

})