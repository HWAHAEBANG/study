//type narrowing
// 가끔 이걸 "defensive 하게 코딩한다"라고 하기도 합니다.
//in, instanceof 키워드도 사용가능합니다.

 

// 근데 또 함수 안에서 if문 쓸 때는 마지막에 else {} 이거 없으면 에러가 납니다.
// return 하지않는 조건문이 있다면 나중에 버그가 생길 수 있어서 에러를 내주는 것인데 
// "noImplicitReturns": false, 
// 이게 성가시다면 tsconfig.js 파일에서 이걸 추가하면 됩니다. 근데 굳이 수정하는 것 보다는 엄격하게 씁시다. 

// assertion은 
// "나는 이 변수를 number라고 주장하겠습니다~" 
// 이런 뜻으로 코드를 짜면 타입스크립트 컴파일러가 눈감아줍니다. 
// 가급적이면 쓰지말고
// 남이 짠 코드가 왜 에러나는지 모르겠을 때, 이럴때나 쓰라.
// 디버깅용 비상용
// 1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나
// 2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때


// 옛날 as문법
// <number>이름
// 태그랑 너무 비슷해서 요즘엔 그냥 as만 쓴다고 보면됨

// Q. 근데 내함수('123') 이렇게 숫자말고 문자를 입력하면 어떻게 됩니까
// A. as number라고 썼긴 했지만 number 타입처럼 +1 해주진 않습니다. 콘솔창에 결과 출력해보면 '1231' 이렇게 출력될걸요
// as는 그냥 주장만 하는거지 실제로 타입을 바꿔주는건 아니기 때문입니다. 




// 혹은 as는 이럴 때 유용하게 쓰기도 합니다
// 가끔 타입을 강제로 부여하는 기계를 하나 만들어쓰고 싶은 때가 있습니다.
// 그럴 때 함수에 데이터를 넣으면 as 타입명을 붙여서 return 하는 함수를 만들어서 사용하면 됩니다. 
type Person = {
    name : string
}
function 변환기<T>(data: string): T {
    return JSON.parse(data) as T;
}
const jake = 변환기<Person>('{"name":"kim"}');




// (숙제1) 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다. 
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
// 모르는 부분은 구글검색해도 봐드림 

// 내답안
function cleaning(arr :(string|number)[]) :number[]{
   const result = arr.map((item)=> {
       if(typeof item === "string"){
        return parseInt(item)
       } else {
        return item;
       }
    })
    return result;
}

console.log(cleaning(['1', 2, '']));


// 강사 답안
function 클리닝함수(a :(number|string)[]){

    let 클리닝완료된거 :number[] = [];
  
    a.forEach((b)=>{
      if (typeof b === 'string') {
        클리닝완료된거.push(parseFloat(b))
      } else {
        클리닝완료된거.push(b)
      }
    })
  
    return 클리닝완료된거
  }

  console.log( 클리닝함수(['1', 2, '']) )

  //============

//   (숙제2) 다음과 같은 함수를 만들어보십시오.

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 


// 철수쌤같은 선생님 object 자료를 집어넣으면 
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다. 

// 내 답안
function lastSubject(teacher:{subject:string|string[]}) :string{
if(typeof teacher.subject === 'object'){
    return teacher.subject[teacher.subject.length-1]
}else{
    return teacher.subject
}
}

console.log(lastSubject(민수쌤));

// 강사답안
function 만들함수( x :{subject : string | string[]} ){
    if (typeof x.subject === 'string') {
      return x.subject
    } else if (Array.isArray(x.subject) ){
      return x.subject[x.subject.length - 1]
    } else {
      return '없쪄'
    }
  }
  


  