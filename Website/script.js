$(function(){
    $("#navbarToggle").blur(function (event){
        var screenwidth= window.innerWidth;
        if(screenwidth < 992){
           $("#collapsable-nav").collapse('hide');
        }
    });
});
(function(global){
    var dc = {};
    var homeHtml = "snippets/main-content.html";
    
    var insertHtml = function (selector, html){
        var targetElem = document.querySelector(selector);
        targetElem.insertHtml=html;
    };

    var showLoading = function (selector){
        var html = "<div class ='text-center'>";
        html+="<img src='ajax-loader.gif'></div>";
        insertHtml(selector, html);
    };

    document.addEventListener("DOMContentLoaded", function(event){

        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function (responseText){
                document.querySelector("#main-content").innerHTML = responseText;

            },
            false)
    });
    global.$dc=dc;

})(window);