// var pic = document.querySelector("#pic");
var pic1 = document.getElementById("pic");

// pic.addEventListener("mouseover", changePic, false);
// pic.addEventListener("mouseout", originPic, false);
pic1.addEventListener("mouseover", changePic, false);
pic1.addEventListener("mouseout", originPic, false);

function changePic() {
    // pic.src = "images/boy.png";
    pic1.src = "images/boy.png";
}

function originPic() {
    // pic.src = "images/girl.png";
    pic1.src = "images/girl.png";
}

//getElementById() : id선택자가 있는 웹 요소에 접근할때 사용하는 한가지의 방법
//DOM노드 중에서 요소 노드까지만 접근이 가능하다.
//querySelector() : 노드요소 뿐만 아니라 텍스트 노드와 속성 노드까지 접근가능하다.