export {}


// type alias

type Girlfriend = {
    readonly name : string // readonly 쓰면 object자료수정도 막을 수 있음. 실수로 수정하면 에러내줌.
} // 근데 에러를 띄워 알려주기만 하는거도 실행은 된다는 점 주의. 경고사항일 뿐.

const 여친 :Girlfriend = {
    name : '엠버'
}

//type 변수 당연히 union type으로 합치기 가능
type Name = string;
type Age = number;
type Personn = Name | Age;

// 타입이 오브젝트인데, 둘을 합치고 싶다면?
type PositionX = {x:number};
type PositionY = {y:number};
type newType = PositionX & PositionY // 전문 용어로 extend
let position :newType= {x:43, y:45}

// 물론 Type alias & Type alias 만 가능한게 아니라 
// Type alias & { name : string } 이런 것도 가능합니다. 

// type 키워드는 재정의가 불가능합니다.

// 나중에 type 키워드랑 매우 유사한 interface 키워드를 배우게 될텐데
// 이 키워드를 쓰면 재정의가 가능합니다. 재정의하면 & 하는거랑 똑같은 기능을 하는데
// 하지만 재정의 불가능한 편이 더 안전하지 않을까요. 


// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
// 그건 여러분들이 한번 테스트해보길 바랍니다. 
type PX = {x:number};
type UX = {x:string};
type newX = PX & UX // 전문 용어로 extend
// let test :newX = {x:43} // x의 타입이 never가 되어서 어떤것도 할당하지 못한다

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
// type alias로 만들어보셈 

type Figure = {color?:string, size:number, readonly position: number[] }



// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 


type Info = { name : string, phone : number, email? : string }


// (숙제4) 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
// 3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.

type InfoExtend = Info & {young: boolean}

let 회원가입정보 :InfoExtend = {
    name : 'kim',
    young : false,
    phone : 1234
}