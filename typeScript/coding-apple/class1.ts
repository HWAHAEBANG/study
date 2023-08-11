//Typescript 필수문법 10분 정리와 설치 셋팅 (Vue, React 포함)

let str: string = 'kim'

let arr : string[] =  ['bang','jang']

let obj : {name? : string} = {name:'kim'} //특정 속성이 선택사항이면 물음표를 기입가능합니다. 

let union_type : string[] | number = ["가나다"]

let type_alias : My_type =  123;

type My_type = string | number; // 타입명 대문자로 작성

function func(x: number): number{
    return x * 3 ;
}

func(3)

type Tuple_type = [number, boolean]

let john: Tuple_type = [123,true]

type All_obj_prop = {
    [key :string] : string, // 모든 오브젝트 속성들이 키와 값이 string이다. ndex signature라고 합니다. 
}

let jane :All_obj_prop = {name:"kim", age:'3'}

// object 타입도 정의가 너무 길면 type 키워드로 변수에 담아 사용가능합니다.
class User {
    name :string;
    constructor(name :string){
        this.name = name;
    }
}

type LiteralType = 'kim' | 'park'; //string number 이런 것 뿐만 아니라 나만의 타입을 만들어 사용가능합니다.

let 이름 :LiteralType = 'park';

//가능
// 타입스크립트는 지금 변수의 타입이 확실하지 않으면 마음대로 연산할 수 없습니다.
// 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용해야 허락해줍니다. 
function 함수명(x :number | string) {
    if (typeof x === 'number'){
      return x * 2
    } 
  }