export {}


//Object에 타입을 지정할 떄는 inerface라는 걸 쓰기도 함. 초이스가 두개
type Square = { color : string, width : number}
interface Square2 {color : string, width : number} 
let 네모 :Square2 = { color : 'red', width : 100}
// 위 두개는 똑같은 거임. 타입바꿔주고 등호만 없애주면 됨.
// 형태를 보면 약간 일종의 클래스만드는 법과 비슷하다고 보면 됨.


interface Student { name :string}
// interface Teacher { name :string, age :number}
interface Teacher extends Student { age :number} // extands
// extends 문법은 interface 여기에 복사해달라는 뜻입니다. 
// 타입은 &(intersection) 하면 비슷하긴 가능하긴함.
// 그런데 두가지는 약간 다르다. &는 복사해달라는 뜻이 아니라 '교차해달라'라는 뜻이기 때문.
// == 왼쪽도 만족하고, 오른쪽도 만족하도록 만들어 주세요 라는 것.
// 사실 interface도 &기호 사용해서 하는데 별 문제는 없음.

// 가장 중요한 차이점은!!!!!!!!!
// interface는 중복선언이 가능하다.

let 학생 :Student = {name : 'kim'}
let 선생 :Teacher = {name : 'kim', age :20}


// interface 의 장점
// 1. extends 가능
// 2. 중복선언이 가능하다 (중요)

interface Test  {name : string}
interface Test  {score : number}

// 이렇게 사용하면 타입과 다르게 에러도 안나고, 두가지 다 Test 에 들어가있음. 자동 익스텐드 느낌.

// 외부 라이브러리 같은 경우는 interface 많이 쓰는데, 사용자가 커스텀해서 쓰기 용이하도록 하기위함
// type은 너무 엄격행 ㅎㅎ
// 내가 짠 코드가 다른 사람이 많이 이용할 것 같다싶으면 interface사용하면 됨.


// 일반 변수나 함수는 그냥 타입으로 선언을하고, 모든 오브젝트는 in terface로 선언을 해도 좋음.
// 선택하기 나름임. 알이서.

// 한가지 알고갈 점.
// 익스텐드 하는데 키가 같으면 에러님. 키가 같은건 안됨.
// type에서 & 기호 썼을 때 키가 겹치면 newer타입이됨 주의.

//=================================================================================================
//(숙제1) interface 이용해서 간단하게 타입을 만들어봅시다

let 상품:Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
// 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?

interface Product { brand : string, serialNumber : number, model : string[] }

//=================================================================================================

// (숙제2) array 안에 object 여러개가 필요합니다.

// 쇼핑몰 장바구니를 구현하려고 하는데 

let 장바구니 :Cart[]= [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
// 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요? 

interface Cart {product : string, price : number}
type basket = Cart[]

//=================================================================================================
// (숙제3) 위에서 만든 타입을 extends 해봅시다.
// 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 

let 뉴 :newCart = { product : '청소기', price : 7000, card : false }
// 위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.

interface newCart extends Cart {card: boolean};

//=================================================================================================

// (숙제4) object 안에 함수를 2개 넣고 싶은데요 

// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 

// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 

// 이 object 자료를 어떻게 만들면 될까요? 

// interface를 이용해서 object에 타입지정도 해보십시오. 

let machine :Machine = {
    plus : (a,b) => a+b,
    minus : (a,b) => a-b
}

interface Machine {
    plus: (a:number, b:number) => number , 
    minus: (a:number, b:number) => number ,
}

console.log('더함',machine.plus(5,3));
console.log('뺌',machine.minus(5,3));

