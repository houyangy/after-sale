$(document).ready(function () {
    var $step = $("#step");

    $step.step({
        index: 0,
        time: 500,
        title: ["维修类型", "详细描述","申请成功"]
    });

    $("#prevBtn").on("click", function() {
        $step.prevStep();
        let index=$step.getIndex();
        $('.repairbox li').eq(index).addClass("visible").siblings().removeClass('visible')
    });

    $("#nextBtn").on("click", function() {
        if($(".type").hasClass("selected")){
            $step.nextStep();
            let index=$step.getIndex();
            if($(".type.selected").val()=='meter'){
                $(".meter_box").css("display",'block');
                $(".system_box").css("display",'none')
            }
            if($(".type.selected").val()=='system'){
                $(".system_box").css("display",'block');
                $(".meter_box").css("display",'none');
            }
            $('.repairbox li').eq(index).addClass("visible").siblings().removeClass('visible')
        }
    });

    $(".type").click(function (val,index) {
        // console.log($(this).val());
        $(this).addClass("selected").siblings().removeClass("selected")
    })
    $(".breakdown button").click(function (val,index) {
        $(this).addClass("selected").siblings().removeClass("selected")
    })
    $(".software button").click(function (val,index) {
        $(this).addClass("selected").siblings().removeClass("selected")
    })
});