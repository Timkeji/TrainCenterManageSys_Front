$(function (){
    var v_index = 0;
    var index;
    $('.add_bu button').on("click",function (){
        $('.add_eject').hide();
        $('.mask').hide();//确认新增
        var d1 = $('.sec1').val();
        var d2 = $('.sec2').val();
        var d3 = $('.td_nav2 input').eq(0).val();
        var d4 = $('.td_nav2 input').eq(1).val();
        var d5 = $('.sec3').val();
        var d6 = $('.sec4').val();
        var d7 = $('.td_nav2 input').eq(2).val();
        var tr = "<tr><td>"+d2+"</td><td>"+"..."+"</td><td>"+d5+"</td><td>"+d6+"</td><td>"+"<button type='button' class='button'>修&nbsp;改</button>"+"</td></tr>";
        $("#tbody").append(tr);
    })
    $('.button_fa button').on('click',function () {
        $('.success_eject').show();
        $('.mask').show();
    })
    $('.success_eject button').click(function (){
        $('.success_eject').hide();
        $('.mask').hide();
    })
    $('.button').on("click",function (){
        $(".from_eject").show();
        $('.mask').show();
        index = $(this).parents('tr').index();
        v_index = index;
        return index;
    })
    $('.bu_one button').on("click",function (){
        $('.from_eject').hide();
        $('.mask').hide();
        $('#tbody tr').eq(index).remove();
    })
    $('.bu_two button').click(function (){
        $('.from_eject').hide();
        $('.mask').hide();
    })
    $('.from_eject img').click(function (){
        $('.from_eject').hide();
        $('.mask').hide();
    })
    $(".img_fa img").click(function (){
        $('.add_eject').show();
        $('.mask').show();
    })
    $('.add_eject img').click(function (){
        $('.add_eject').hide();
        $('.mask').hide();
    })
})
