//  if ~ else if ~ else
//  switch ~ case
//  for, while, do while
//  모두 C계열 문법과 거의 동일

//  연습문제 1-1) for 문 구구단
//  2단 ~ 9단까지 루프 돌며 출력
console.log("========== for문 구구단");
for (let dan = 2; dan < 10; dan++) {
    console.log(dan + "단");
    for (let num = 1; num < 10; num++) {
        console.log(dan, "*", num, "=", dan * num);
    }
}

//  연습문제 1-2) whiel 문 구구단
//  2단 ~ 9단까지 루프 돌며 출력
console.log("========= while문 구구단");
let dan = 2;    //  반복 변수 초기화
while (dan < 10) {
    console.log(dan + "단");
    let num = 1;
    while (num < 10) {
        console.log(dan, "*", num, "=", dan * num);
        num++;
    }
    dan++;
}

//  연습문제 2-1) for 문을 이용 별그리기
/*

*****
****
***
**
*

*/
console.log("========== for문 별그리기");
/*
for (let k = 5; k > 0; k--) {
    for (let y = 5; y < k; y--) {
        console.log("*");
    }
    console.log("*");
}
*/
for (let row = 5; row > 0; row--) {
    let stars = '';
    for (let col = 1; col <= row; col++) {
        stars += "*";
    }
    console.log(stars);
}

//  연습문제 2-2) while 문을 이용 별그리기
console.log("========== while문 별그리기");
/*
let k = 5;
let y =5;
while (k > 0) {
    while (y < k) {
        console.log("*");
        --y;
    }
    console.log("*");
    --k;
}
*/
let row = 5;
while (row > 0) {
    let stars = '';
    let col = 1;
    while (col <= row) {
        stars += "*";
        col++;
    }
    console.log(stars);
    row--;
}

//  TODO: for ... in
//      - 객체의 속성 key를 반복하는 루프


//  TODO: for ... of
//      - 컬렉션 객체(배열)의 요소 순환
