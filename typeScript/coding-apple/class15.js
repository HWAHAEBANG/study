"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//never 타입
//함수에 붙이는 return type으로 사용가능합니다.
// 어떤 함수가
// 조건 1) 절대 return을 하지 않아야하고
// 조건 2) 함수 실행이 끝나지 않아야합니다 (전문용어로 endpoint가 없어야합니다)
// 그런 함수에 붙일 수 있는 타입니다. 
// 끝나지 않게 하려면? 
// 1.중간에 에러를 내서 끝나지 않도록 한다.
function 함수13() {
    throw new Error('에러메세지');
}
// 2.무한루프
function 함수111() {
    while (true) {
        console.log(123);
    }
}
// never타입 쓸 일 없음. void 쓰면 됨.
// 보통 코딩하다 never를 마주치면 있을 수 없다~ 라는 의미일 거임.
