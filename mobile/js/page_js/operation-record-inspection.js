$(function () {
    $('#btn').on('click', function () {
        if ($('#op-week input').val() == '' || $('#op-week').val() == null) {
            // alert('申请实验室名称不得为空');
            $('#op-week p').html('周次不得为空')
        } else {
            $('#op-week p').html('');
        }

        if ($('#op-class select').val() == '' || $('#op-class select').val() == null) {
            $('#op-class p').html('专业班级不得为空')
        } else {
            $('#op-class p').html('')
        }

        if ($('#op-num input').val() == '' || $('#op-num input').val() == null) {
            $('#op-num p').html('人数不得为空')
        } else {
            $('#op-num p').html('')
        }

        if ($('#op-project input').val() == '' || $('#op-project input').val() == null) {
            // alert(11)
            $('#op-project p').html('课程名称/实验项目不得为空')
        } else {
            $('#op-project p').html('')
        }

        if ($('#op-teacher input').val() == '' || $('#op-teacher input').val() == null) {
            $('#op-teacher p').html('任课教师不得为空')
        } else {
            $('#op-teacher p').html('')
        }

        if ($('#op-equipment input').val() == '' || $('#op-equipment input').val() == null) {
            // alert(11)
            $('#op-equipment p').html('设备运行情况不得为空')
        } else {
            $('#op-equipment p').html('')
        }

        if ($('input').val() != '' && $('input').val() != null) {
            $('.layui-layer-page').show();
            $('.mask').show();
        }

    })
    $('.cancel').on('click', function () {
        $('.mask').hide();
        $('.site').hide();
    })
    $(".determine").on('click', function () {
        $('.success-alert').hide();
        $('.mask').hide();
    })
});