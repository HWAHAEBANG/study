
let 회원돌 :(number|string)[] = [1,'2',3];
let 오브젝트 :{a: string|number} = {a:'123'}

//할당하는 순간 타입은 string 또는 number 중 하나로 변합니다.


// any 타입은 타입실드 해제문법임

// unknown타입 이라는게 있는데 any와 비슷한다. any보다 약간 더 안전성이 있음.
let 네임 :unknown;
네임 = 123;

// 위에서 만든 언노운에 넘버를 넣고 스트링타입 변수에 할당했을 때, 막힘.
// any를 사용하면 타입실드 해제들 해버려서 스트링타입 변수에 할당돼버림
// let 변수1 :string = 네임

//  네임- 1  // 이런거 안됨. unknown은 빼기연산을 못하게 되어있음
// 숫자가 할당 되어 있어도 언노운은 언노운이다.
 // any, number, bigint만 가능

 // 근데 실은 코드짜다가 any, unknown 부여할 경우는 별로 없습니다.


//  네임[0];
//  네임 - 1;
//  네임.data;
//  이래도 에러가 납니다. 
 
//  (any는 안그럼)


let 나이 :string|number;
// 나이 + 1; // 안됨

// 문자열 + 1 도 가능하고, 숫자 + 1도 가능하지만, string|number는 또다른 새로운 타입을 만들어낸것.
// Narrowing / Assertion을 적용해야 함.


//Q1.
let user :string = 'kim';
let ages :undefined | number = undefined;
let married :boolean = false; 
let 철수 :(string|undefined|number|boolean)[] = [user, age, married];


// Q2.
let 학교 :{
    score : (number|boolean)[],
    teacher : string,
    friend : string|string[]
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}

학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

