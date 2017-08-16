$(document).ready(function(){
    $(function(){
        $.ajax({
                 type: "get",
                 async: false,
                 url: "http://activity.cnmobi.com.cn/activity/personal-center/home.html",
                 dataType: "jsonp",
                 jsonpCallback:"callbackfunction",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
                 success: function(json){
                     if (json.code == 40001) {
                        location.href = "http://activity.cnmobi.com.cn/activity/personal-center/start.html";
                     }
                 },
                 error: function(){
                 }
             });
    });
})