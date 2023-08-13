export {}


// 테크닉

// 이걸 쓰면, undefined를 걸러주는 내로잉을 할 수 있음.
// 정확한 이유를 아는게 중요하겠음.
// 단축편가는 &&를 기준으로 앞이 거짓이면 그 값을 사용하고, 참이면 그 뒤까지 참인지봄.
// 만약 언디파인이 들어오면 faulsy이므로  뒤는 볼것도 없이 undefined 임
// 스트링이 들어오면 trusy 이므로 뒤에 것도 확인함.
function 단축평가(a :string | undefined){
    if(a && typeof a === 'string'){

    }
}

//참고로 if (변수 != null) 이렇게 조건식을 써도 null, undefined 이거 두 개를 동시에 거를 수 있습니다. 


// 다음과 같은 경우에는 typeof로 네로인이 안된다.
type Fish = {swim :string}
type Bird = {fly : string}

// in 키워드를 사용하기 : 베타적인 속성을 찾아서 비교
function 동물 (animal :Fish | Bird){
    if ('swim' in animal) { // 이렇게 안에있는 키를 기준을 확인할 수 있음
        animal.swim
    }
}


// instanceof를 이용하는 방법도 있다,
// 오브젝트 instanceof 부모class

// 이건 내로잉이 필요없겠지만 굳이 예를 들자면.
let 날짜 = new Date()
if (날짜 instanceof Date){
    
}

// 아래와 같은 형식이라면 어떻게해야할까?
type Carr = {
    wheel : '4개', // (핵심) 리터럴 타입
    color : string
}

type Bike = {
    wheel : '2개',
    color : string
}

function 함함수(X : Carr | Bike) {
    if (X.wheel === '4개'){
    console.log('x는 Car타입이에요');
    }
}

// 배타적인 속성이 없어 in 으로는 해결할 수 없다.
// 또 부모가 없기 때문에 instanceof도 쓸 수 없엄.
// 이럴 때는 어떤 프로퍼티의 타입에 강제로 리터럴타입을 만들어두면 됨.

