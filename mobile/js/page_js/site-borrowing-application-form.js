$(function () {
    $('#btn').on('click', function () {
        if ($('#site-name input').val() == '' || $('#site-name').val() == null) {
            // alert('申请实验室名称不得为空');
            $('#site-name p').html('申请实验室名称不得为空')
        } else {
            $('#site-name p').html('');
        }

        if ($('#site-num input').val() == '' || $('#site-num input').val() == null) {
            $('#site-num p').html('实验室编号不得为空')
        } else {
            $('#site-num p').html('')
        }

        if ($('#site-subject input').val() == '' || $('#site-subject input').val() == null) {
            $('#site-subject p').html('实验室课程名称不得为空')
        } else {
            $('#site-subject p').html('')
        }

        if ($('#site-class select').val() == '' || $('#site-class select').val() == null) {
            // alert(11)
            $('#site-class p').html('学生班级不得为空')
        } else {
            $('#site-class p').html('')
        }

        if ($('#site-purpose input').val() == '' || $('#site-purpose input').val() == null) {
            $('#site-purpose p').html('实验目的不得为空')
        } else {
            $('#site-purpose p').html('')
        }

        if ($('#site-range input').val() == '' || $('#site-range input').val() == null || $('#time input').val() == '' || $('#time input').val() == null) {
            $('#time p').html('具体使用时间不得为空')
        } else {
            $('#time p').html('')
        }

        if ($('input').val() != '' && $('input').val() != null) {
            $('.mask').show();
            $('.site').show();
        }

    })
    $('.cancel').on('click', function () {
        $('.mask').hide();
        $('.site').hide();
    })
    $('.nocancel').on('click', function () {
        $('.site').hide();
        $('.success-alert').show();
        $('.mask').show();
    })
    $(".determine").on('click', function () {
        $('.success-alert').hide();
        $('.mask').hide();
    })
})