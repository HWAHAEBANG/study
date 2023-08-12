// 함수 자체를 타입 지정하는 방법

// 함수타입은 화살표 함수로 해야함
type 함수타입 = (a :string) => number; // 이런식으로하면됨
                              //{return number}가 축약된거라함.

// 사용은 함수 표현식에만 가능함.
let 함수22 :함수타입 = function (a){
    return 10
}


// (숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 
// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 
// - type 키워드를 쓰든 말든 알아서 합시다. 


type 회원타입 = {
    name : string,
    age : number,
    plusOne : (a: number) => number,
    changeName : () => void,
}

let 회원정보:회원타입 = {
    name : 'kim',
    age : 30,
    plusOne (x){
        return x + 1
    },
    changeName : () => {
        console.log('안녕')
    }
}

console.log(회원정보.plusOne(1));
회원정보.changeName();

// (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 


type CutZeroType = (str:string) => string
type RemoveDashType = (str:string) => number

const cutZero :CutZeroType= (str) => {
    if(str[0] === '0'){
        return str.slice(1)
    } else {
        return str
    }
    }

const removeDash :RemoveDashType = (str) => {
    return parseFloat(str.replace(/-/g,'')) //str.replace('-','') 안됨
}

// str.replace('-',''):
// 이 방법은 첫 번째로 발견되는 하이픈 문자 하나만을 대체합니다. 즉, 문자열에서 첫 번째로 발견되는 하이픈만이 빈 문자열로 대체됩니다. 나머지 하이픈은 변경되지 않습니다.

// str.replace(/-/g,''):
// 이 방법은 정규식을 사용하여 문자열 내의 모든 하이픈을 대체합니다. /-/g는 하이픈을 찾기 위한 정규식 패턴이며, g 플래그는 전역 검색을 의미합니다. 따라서 문자열 내의 모든 하이픈이 빈 문자열로 대체됩니다.

// 즉, 두 방법의 차이는 대체되는 범위입니다. 첫 번째 방법은 첫 번째로 발견되는 하이픈만을 대체하고, 두 번째 방법은 문자열 내의 모든 하이픈을 대체합니다. 필요에 따라 어떤 방법을 선택하느냐는 처리하고자 하는 데이터의 특성과 목적에 따라 다를 수 있습니다.


console.log('컷제로',cutZero('010-1111-2222'));
console.log('리무브대시',removeDash('10-1111-2222'));


// (숙제3) 함수에 함수를 집어넣고 싶습니다.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
// 이 함수는 어떻게 만들면 될까요?
// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.


type MixType = (a:string, b:CutZeroType, c:RemoveDashType) => number

const mix :MixType = (a,b,c) => {
    return c(b(a));
}

console.log('맞음?',mix('010-1111-2222', cutZero, removeDash));

