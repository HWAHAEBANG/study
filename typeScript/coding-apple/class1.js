"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Typescript 필수문법 10분 정리와 설치 셋팅 (Vue, React 포함)
var str = 'kim';
var arr = ['bang', 'jang'];
var obj = { name: 'kim' }; //특정 속성이 선택사항이면 물음표를 기입가능합니다. 
var union_type = ["가나다"];
var type_alias = 123;
function func(x) {
    return x * 3;
}
func(3);
var john = [123, true];
var jane = { name: "kim", age: '3' };
// object 타입도 정의가 너무 길면 type 키워드로 변수에 담아 사용가능합니다.
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var 이름 = 'park';
//가능
// 타입스크립트는 지금 변수의 타입이 확실하지 않으면 마음대로 연산할 수 없습니다.
// 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용해야 허락해줍니다. 
function 함수명(x) {
    if (typeof x === 'number') {
        return x * 2;
    }
}
