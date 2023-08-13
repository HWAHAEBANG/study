export {}


// export import 

// (숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다
// 이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고 
// 아무것도 return 해주지 않아야합니다. 
// 함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데
// 이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요

export type Func = (a:{}) => void;

// (숙제3) 타입 중복이 너무 많이 발생합니다.
namespace Space1{
    export type Dog = string;
}

namespace Space2{
    export interface Dog { name : string };
}


let dog1 :Space1.Dog = 'bark';
let dog2 :Space2.Dog = { name : 'paw' }
// 위 코드에서 에러를 없애야합니다. 어떻게 코드를 짜면 될까요? 
// (조건) type Dog, interface Dog의 타입이름 변경 금지, 파일 분할 금지 