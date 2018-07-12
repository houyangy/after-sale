$(document).ready(function () {
    $(".tabbutton").click(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass("active");
        $('.inputlogin li').removeClass("view").eq(index).addClass("view")
    })
});