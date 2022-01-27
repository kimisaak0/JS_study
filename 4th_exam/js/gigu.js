

$(document).ready(function(){
    var $gigu = $("#gigu");
    let sw = false;    

        $("#btnStart").click(function(){
            if(sw==false) {
                $gigu.animate({
                    left: "480px"
                }, 500);
                sw = true;
            } else {
                $gigu.animate({
                    left: "30px"
                }, 500);
                sw = false;
            }
        })
})