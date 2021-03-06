// function newRegister() {
//     var newP = document.createElement("p");  //새로운 p요소를 만들기
//     var userName = document.querySelector("#userName");
//     var newText = document.createTextNode(userName.value); //새로운 텍스트 노드를 만드는 것
//     newP.appendChild(newText); //p노드가 상위요소가 되고 text라는 하위 요소를 연결하기

//     var delBtn = document.createElement("span"); //새로운 버튼을 추가
//     var delText = document.createTextNode("X"); //새로운 텍스트 노드를 추가
//     delBtn.setAttribute("class", "del");   //버튼에다가 class선택자 속성을 추가
//     delBtn.appendChild(delText);  //텍스트 노드가 button하위요소로 연결하기
//     newP.appendChild(delBtn);  //delBtn을 p요소의 하위요소로 만들기
    
//     var nameList = document.querySelector("#nameList");
//     nameList.insertBefore(newP, nameList.childNodes[0]); //p요소를 #nameList의 맨앞에 추가
//     //nameList.appendChild(newP); //p노드가 #nameList의 하위요소가 된다.
//     userName.value = ""; //텍스트 필드 지우기

//     var removeBtns = document.querySelectorAll(".del");
//     //removeBtns 즉, "X"의 전체를 반복한다.
//     for(var i=0; i<removeBtns.length; i++) {
//         //removeBtns의 각각의 버튼에 이벤트를 등록하고 있다.
//         removeBtns[i].addEventListener("click", function(){
//             //#nameList를 의미를 하게 되는 것이다.span태그의 부모가 p이고 p의 부모가
//             //#nameList이기 때문이다.
//             if(this.parentNode.parentNode) {
//                 this.parentNode.parentNode.removeChild(this.parentNode); //p태그를 삭제함
//             }
//         });
//     }
// }

function newRegister() {
    //새로운 요소 만들기
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    //새로운 텍스트 노드 만들기
    var newText = document.createTextNode(userName.value); 
    //상위 요소인 p태그 안에 text노드를 하위 요소로 연결함
    newP.appendChild(newText);

    //새로운 버튼이 들어갈 공간 추가
    var delBtn = document.createElement("span");
    //새로운 텍스트 노드 추가
    var delText = document.createTextNode("X");
    //버튼에다가 class하위요소 연결
    delBtn.setAttribute("class", "del");
    //delBtn요소에 delText 텍스트 노드 연결
    delBtn.appendChild(delText); 
    //newP 요소에 delBtn요소를 연결
    newP.appendChild(delBtn);


    var nameList = document.querySelector("#nameList");
    ////p노드가 #nameList의 하위요소로 추가됨
    ////ameList.appendChild(newP);
    //p요소를 #nameList의 맨 앞에 추가
    nameList.insertBefore(newP, nameList.childNodes[0]);
    //텍스트 필드 지우기
    userName.value = "";

    var removeBtns = document.querySelectorAll(".del");

    for(var i=0; i<removeBtns.length; i++) {
        removeBtns[i].addEventListener("click", function(){
            //현재 위치 span태그, 부모는 p턔그, p의 부모가 #nameList
            if(this.parentNode.parentNode) {
                //p태그를 삭제함
                this.parentNode.parentNode.removeChild(this.parentNode);
                

            }
        });
    }

}