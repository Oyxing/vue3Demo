function Jsonp(){

    window.callback_jsonp = function (flag) {
        clearTimeout(window.jsonp_timer);
        console.log('请求成功');
        console.log("flag")
        console.log(flag)
    };
    // 3s超时处理,避免服务器端出错
    window.jsonp_timer = setTimeout(function () {
        window.callback_jsonp = function () {
            console.log('jsonp请求超时后返回数据');
        };
        console.log('jsonp请求超时');
    }, 3000);
    var new_script = document.createElement('script');
    new_script.src = url+"callback=window.callback_jsonp";
    document.body.appendChild(new_script);
    
    document.body.removeChild(new_script);
    console.log('jsonp请求');
}


 