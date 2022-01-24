function calc() {
    var currentYear = 2022;
    var birthYear = prompt("태어난 년도를 입력하세요", "YYYY");
    var age = 0;
    age = currentYear - birthYear + 1;
    //querySelector()는 id가 result인 웹 요소를 의미함. 
    //innerHTML은 대입한 값으로 html 문서를 바꾸라는 뜻
    document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세 입니다.";
}