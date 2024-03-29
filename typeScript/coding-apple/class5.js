"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 파라미터에 타입을 지정하면 필수 파라미터가 됩니다. 
// 파라미터가 옵션일 경우엔
// 파라미터변수? :타입
// 과같이 사용하면 되는데
// 변수? : number 는 사실 변수:number|undefined와 같음
// 함수에 return 방지장치를 주고 싶을 때 void 타입을 활용하시면 되겠습니다. 
//===========
// function 내함수(x? :number) :number { 
//     return x * 2 
//   }  
//   이런 코드도 타입스크립트가 엄격하게 금지합니다.
//   number 맞는데 왜저럴까요 빨리 혼자 말해보셈
//   x라는 파라미터는 옵션이고, 옵션인 파라미터는 number | undefined 이런 식으로 타입정의가 된다고 하지 않았습니까.
//   그래서 아직 x라는 파라미터가 뭔지 확실하지 않기 때문에 에러를 내줍니다.
// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다.
function greetingMachine(name) {
    if (name) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name));
    }
    else {
        console.log('이름이 없습니다.');
    }
}
// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 
function counter(input) {
    if (typeof input === 'number') {
        return input.toString().length;
    }
    else {
        return input.length;
    }
}
// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
// (예시)
// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.
function 결혼확률(월소득, 집보유여부, 매력점수) {
    var score = 월소득;
    if (집보유여부)
        score += 500;
    if (매력점수 === '상')
        score += 100;
    if (score >= 600) {
        return "결혼가능";
    }
}
console.log(결혼확률(100, true, 'tkd'));
