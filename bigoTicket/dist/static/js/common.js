$(function() {

    fixedPop(".a-btn.seat", ".pop-seatChk", ".pop-seatChk .a-x");

});

// 고정 레이어 팝업 띄우기
function fixedPop(op, itm, cls) {
    var popOpen = $(op),
        pop = $(itm),
        popCls = $(cls),
        popWrap = $("#wrap-pop");

    popOpen.on("click", function() {
        popWrap.css("z-index", "100");
        var wd = pop.width();
        var ht = pop.height();
        pop.css({
            display: "block",
            position: "fixed",
            left: "50%",
            marginLeft: -wd/2,
            top: "50%",
            marginTop: -ht/2
        });
        $("body").css({
            overflow: "hidden"
        });
        return false;
    });

    popCls.on("click", function() {
        popWrap.css("z-index", "-1");
        pop.css({
            display: "none"
        });
        $("body").css({
            overflow: "auto"
        });
    });

}

// 레이어 팝업 비노출
function hidePop(itm) {
    $(itm).hide();
    $(itm).closest("#wrap-pop").css("z-index", "-1");
}

// 레이어 팝업 노출
function showPop(itm) {
    $(itm).show();
    $(itm).closest("#wrap-pop").css("z-index", "100");
}
