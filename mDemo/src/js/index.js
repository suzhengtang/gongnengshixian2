$(document).ready(function () {
    //点击开关
    $('.open').click(function () {
        $('.open .cel').hasClass('cel-right') ? $('.open .cel').removeClass('cel-right') : $('.open .cel').addClass('cel-right')
        //开启和关闭状态应做的事
        if($('.open .cel').hasClass('cel-right')){
            console.log("打开状态");
        }else{
            console.log("关闭状态");
        }
    })
});