//  함수
//  입력 -> 함수 -> 로직 수행 -> 출력
//  코드의 집합을 다른 곳에서 재사용

//  함수 선언문
function sum(a, b) {
    return a + b;
}
//  sum - 함수 이름
//  a, b - 함수 매개변수, 입력
//  return - 출력

console.log(sum(10, 20));
console.log(sum(30, 40));

//  함수 표현식: 이름이 없는 함수 -> 익명 함수
const asum = function (a, b) {
    return a + b;
}

console.log(typeof asum, asum(10, 20));

//  Functional Programming (함수형 프로그래밍)