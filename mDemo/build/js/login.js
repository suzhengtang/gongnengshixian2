$(document).ready(function () {
    //注册
    $('#btn-regist').click(function () {
        var nameValue = $("#username").val();
        var wordValue = $("#password").val();
        $.ajax({
            type: "post",
            url: "http://192.168.31.240:3000/api/user/reg",
            data: {username:nameValue, pwd:wordValue},
            dataType: "json",
            success: function(response){
                // console.log(response);
                if(response.status == 200){
                    console.log(response.data.username);
                    alert(response.msg);
                    window.location = 'login.html';
                }else{
                    alert(response.msg);
                }
            },
            error:function (err) {

            }
        });
    });


    //登录
    $('#btn-login').click(function () {
        var nameValue = $("#username").val();
        var wordValue = $("#password").val();
        $.ajax({
            type: "post",
            url: "http://192.168.31.240:3000/api/user/login",
            data: {username:nameValue, pwd:wordValue},
            dataType: "json",
            success: function(response){
                // console.log(response);
                if(response.status == 200){
                    console.log(response.data.username);
                    window.location = 'success.html';
                    alert(response.msg);
                }else{
                    alert(response.msg);
                }
            },
            error:function (err) {

            }
        });
    });


});