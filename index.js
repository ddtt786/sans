function acyncMovePage(url){
    // ajax option
    let ajaxOption = {
        url : url,
        async : true,
        type : "POST",
        dataType : "html",
        cache : false
    };
    
    $.ajax(ajaxOption).done(function(data){
        // Contents 영역 삭제
        $('body').children().remove();
        // Contents 영역 교체
        $('body').html(data);
    });
}
if (localStorage.getItem("name") === null) {
    localStorage.clear();
    localStorage.name = "무명의 유튜버";
    localStorage.sub = 0;
}
//localStorage.getItem("dwqdwdqwwd") === null
