$(function() {

    seatTab();
    sltSeat();

});

// 구역선택
function seatTab() {
    var tabBtn = $("#areaTab .a-btn"),
        seatImg = $("#areaFg .areaImg"),
        seatArray = ["a", "b", "c", "d", "e", "f", "g", "h"],
        areaInfo = $("#wrap-areaInfo");
    tabBtn.on("click", function() {
        var $this = $(this),
            idx = $this.closest("li").index();
        if( !$this.hasClass('off') ) {
            tabBtn.removeClass("on");
            $this.addClass("on");
            seatImg.attr("src","/img/booking/area_" + seatArray[idx] + ".jpg");
            areaInfo.show();
        } else {
            areaInfo.hide();
        }
    });
}

// 좌석선택
function sltSeat() {
    var seat = $("#seatArea > ul > li");
    seat.on("click", function() {
        var $this = $(this);
        $this.toggleClass("on");

        var $others = seat.not(".on");
        var $itms = seat.filter(".on");
        if ( !$itms.length ) {
            seat.removeClass("f-sm");
        } else {
            $itms.removeClass("f-sm");
            $others.addClass("f-sm");
        }
    });
}
