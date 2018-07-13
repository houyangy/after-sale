$(document).ready(function () {
    $(".list ul li").click(function () {
       $(this).addClass("first").siblings().removeClass("first");
       let index=$(this).index();
       $('.detile ul.qa').eq(index).addClass("selected").siblings().removeClass("selected")
    })
});