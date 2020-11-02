$(function (){
    var val = "";
    var td = "";
    var text = "";
    var i = 0;
    $('.img').on("click",function (){
        $('.add_eject2').show();
        $('.mask').show();
        $('.add_bu button').click(function (){
            $('.td_nav2 input').each(function (){
                val = $(this).val();
                if (val === ""){
                    alert('表单不能为空');
                    return false;
                }else {
                    $('.add_eject2').hide();
                    $('.mask').hide();
                    td = 1;
                    return td;
                }
            })
        })
    })
    $('.add_eject2 img').click(function (){
        $('.add_eject2').hide();
        $('.mask').hide();
    })
    $('.button_f button').click(function (){
        $('.nav2 input').each(function (){
            val = $(this).val();
            if (val === ""){
                td = 1;
                alert('表单不能为空');
                return false;
            }
        })
        $('.text td').each(function (){
            text += $(this).text();
            if (text === ""){
                alert('表格至少有一行不能为空');
                return false;
            }
            else {
                $('.promise_eject').show();
                $('.mask').show();
            }
        })

    })
    $('.bu_one button').click(function (){
        $('.promise_eject').hide();
        $('.mask').hide();
    })
    $('.bu_two button').click(function (){
        $('.promise_eject').hide();
        $('.success_eject2').show();
    })
    $('.success_eject2 button').click(function (){
        $('.success_eject2').hide();
        $('.mask').hide();
    })
    $('.add_bu button').click(function (){
        if (td === 1){
            var td1 = $('.td_nav2 input').eq(0).val();
            var td2 = $('.td_nav2 input').eq(1).val();
            var td3 = $('.td_nav2 input').eq(2).val();
            var td4 = $('.td_nav2 input').eq(3).val();
            var tr = "<tr class='text'><td>"+td1+"</td><td>"+td2+"</td><td>"+td3+"</td><td>"+td4+"</td></tr>";
            $("#tbody").append(tr);
            $('.text').eq(3).remove();
        }
    })
})