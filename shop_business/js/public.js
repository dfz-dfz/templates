/*
 * Descripttion 
 * version 
 * Author dfz
 * Date 2019-11-12 14:28:49
 * LastEditors dfz
 * LastEditTime 2019-11-12 14:29:37
 */
//当有弹窗时禁止滑动页面
var bodyScroll = function(event){
    event.preventDefault();
}
var scrollHeight;
// 禁止滑动
function stopScroll(){
    document.body.addEventListener('touchmove',bodyScroll,false);
    scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    $('body').css({'position':'fixed',"width":"100%",'top':'-'+scrollHeight+'px'});
}
//恢复滑动
function starScroll(){
    document.body.removeEventListener('touchmove',bodyScroll,false);
    $("body").css({"position":"initial","height":"auto",'top':'auto'});
    $(window).scrollTop(scrollHeight)
}