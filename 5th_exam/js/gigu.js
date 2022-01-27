var $gigu = null;

$(document).ready(function() {
    init_zigu();
    event_zigu();
});

function init_zigu() {
    $gigu = $("#gigu");
}

function event_zigu() {
    $("#btnStart").click(function(){
        var x = parseInt($("#txtX").val());
        var y = parseInt($("#txtY").val());
        moveZigu(x,y);
    });
}

function moveZigu(x,y) {
    if((x >= 0 && x <= 500)  && (y >= 0 && y <= 300) ) {
        $gigu.css({
            left: x,
            top: y
        });
    } else {
        alert("입력된 값이 범위를 벗어났습니다.")
    }
}