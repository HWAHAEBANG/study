"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//타입스크립트 기본 타입 정리 (primitive types)
//변수에 타입을 지정하는 것은 변수에 "실드"를 씌우는 것임. 타입실드!
var 회원들 = 'park'; // 타입지정 원래 자동으로 됨. 타입지정 문법 생략가능. 커서 올려보셈
//회원들 = 123;
// 처음에 할당한걸로 타입쉴드가 씌워짐
// 쓰는게 좋으면 그냥 알아서 하기.
//// 아래 설명 툴람
var 김치;
김치 = 'kim';
김치 = 43;
// 심지어 변수만 만들고
// 
// 나중에 가서 여기에 'kim'을 할당해도 타입이 자동으로 string으로 변합니다. ??????????????? 아닌데?
// 
// 그래서 간단한 변수들은 타입을 생략하도록 합시다.타입지정하는게 보기좋으시다면 그렇게 하도록 합시다. 
//Q1
var nam = '방충림';
var age = 27;
var area = '천안';
//Q2
var fav = { song: "그녀가 말했다", singer: "권진아" };
//Q3
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
