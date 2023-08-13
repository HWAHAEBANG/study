"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 리터럴 타입 
// 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입을 literal type 이라고 부릅니다.
var 이룸;
이룸 = 123;
var 접니다;
접니다 = '솔로';
// 변수에 뭐가 들어올지 더 엄격하게 관리가능
// 자동완성
function 함수3(a) {
    return 1;
}
함수3('hello');
function 감만보(a) {
    return ['가위', '바위'];
}
console.log(감만보("보"));
// 주의할 점!!!!
var 자료 = {
    name: 'kim'
};
function 내함수(a) {
}
// 위와같이 되어있을 때 내 함수의 파라미터에 자료.name을 넣으면 에러가난다.
// 내함수(자료.name)
// 자료.name은 분명히 kim을 담고 있는데 왜그럴까.
// (a : 'kim') 라는 것은
// kim이라는 자료만 들어올 수 있다는 말이 아니다.
// kim 이라는 "타입"만 들어올 수 있다.
// 자료.name은 string 자료형이다.
// 이를 해결하기 위한 방법은 3가지가 있다.
// 1. 객체에 타입을 줄 때 name의 타입을 'kim'으로 준다.
// 2. assertion을 사용한다.
// 3. as const 라는 키워드를 사용한다
//    이것을 사용하면,  효과1 해당 값을 타입으로 줘버린다. kim 타입
// 효과2 object 속성들에 모두 readonly붙여줌
var 자료22 = {
    name: 'kim'
}; // 이런식으로 사용하면 된다.
// 자료22.name = 123; // 리드온리라서 값을 바꿀 수 없는 걸을 볼 수 있다.
