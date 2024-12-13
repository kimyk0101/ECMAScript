function logicA() {
    console.log("begin logic A");                       //  1
    setTimeout(() => {
        console.log("callbackA called");                //  3
        console.log("begin logic B");                   //  4
        setTimeout(() => {
            console.log("callbackB called");            //  6
            console.log("begin logic C");               //  7
            setTimeout(() => {
                console.log("callbackC called");        //  9
            }, 2000);
            console.log("end logic C");                 //  8
        }, 2000);
        console.log("end logic B");                     //  5
    }, 2000);
    console.log("end logic A");                         //  2
}   //  Callback Hell
// logicA();

//  비동기 처리를 수행하되 흐름을 동기방식처럼 처리할 필요가 있다 
//  -> Promise
function logicPromise() {
    console.log("begin logicPromise");

    return new Promise(function (resolve, reject) { //  new Promise(대기)
        //  resolve => fulfill(이행) 상태로 이전시킬 때 사용하는 콜백
        //  reject => rejected(실패) 상태로 이전시킬 때 사용하는 콜백
        console.log("begin logicPromise");
        setTimeout(() => {
            // resolve("RESOLVE");  //  then
            reject("REJECTED");     //  catch
        }, 3000);
    });
}

function testLogicPromise() {
    console.log("Test Logic Promise");
    logicPromise()  //  Promise
        //  .then: fullfill 상태로 이전할 때 호출
        .then(value => {console.log("PROMISE resolve:", value)})
        .catch(reason => {console.error("PROMISE reject:", reason)});
}
// testLogicPromise();

//  좀 더 편하게 비동기 구현을 위해 async/await 키워드를 이용
//  async 함수는 비동기 처리를 위해 Promise를 반환
async function f() {
    console.log("async function");  //  3 
    return 1;   //  5
}

console.log("Before f()");  //  1
f().then(console.log);  //  2
console.log("End Of Code"); //  4

//  가상 시나리오
//  프라미스를 이용, 네트워크 통신(Ajax)으로 데이터 가져올 때
function fetchData() {
    //  네트워크 통신: 가정
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("서버로부터 가져온 데이터");
        }, 3000);
    });   
}

async function processData() {
    console.log("데이터를 가져오는 중...");
    
    //  await 키워드: Promise가 해결될 때까지 코드를 일시 중단시킴
    //  Promise가 해결되면 await는 Promise의 결과를 반환
    const data = await fetchData();
    console.log("가져온 데이터:", data);
}
processData();