export {}


// 레스트 파라미터 : 여러개의 파라미터를 의미하는 ...rest는 함수선언할 때 소괄호 안에
function 함함수수(...a :number[]) :void{
    console.log(a);
}

함함수수(1,5,3,5,6,6);

// 스프레드 연산자 : array 혹은 object 괄호 벗기고 싶을 때 왼쪽에 사용
let arr1 = [1,2,3];
let arr2 = [4,5];
let arr3 = [...arr1, ...arr2]
console.log(arr3);



// 디스트럭쳐림 :  array, object 안에 있는 데이터를 빼서 변수로 만들고 싶을 때
// - 배열
    let [변수1, 변수2] = ['안녕',100]
    console.log(변수1);
    console.log(변수2);
// - 객체
    // let { student : student, age1 : age1} = {student : true, age1 : 20} 
    let { student, age1} = {student : true, age1 : 20} // 위의 축약형


// 디스트럭쳐링 활용 
// 항상 같은 모습의 object, array 자료가 들어올 때 쓰는 문법
interface Fun{student: boolean, age1: number}
function 함수5 ({student, age1}:Fun){  // 타입은 오브젝트 처럼하면 되겠네
    console.log(student, age1);
}

함수5({student : true, age1 : 20});



//==================================================================

// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈 

// 내 답
function max (...arr :number[]):number{
    let maxim= 0
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > maxim){
            maxim = arr[i]
            console.log('바', maxim);   
        }
    }
    return maxim;
}

console.log('최대값' ,max(13,12,-1,9));

//강사답
function 최댓값(...x : number[]) {
    let result = 0;
    x.forEach((i)=>{
      if (result < i) {
        result = i
      }
    })
     return result;
  }
  console.log(최댓값(4,6,3,2)) 

//==================================================================

// (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 함수( { user : 'kim', comment : [3,5,4], admin : false } )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.

interface ObjType { user : string, comment : number[], admin : boolean }

function 함슈({user, comment, admin}: ObjType) :void{
    console.log(user);
    console.log(comment);
    console.log(admin);
}

함슈( { user : 'kim', comment : [3,5,4], admin : false } )

//=================================================================

// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 함수( [40, 'wine', false] )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.

//==================================================================

// 내답 : 이건 그냥 평범한 함수 잖아?
type ArrType = ( number | string | false )[]

function 함슈슈(arr :ArrType){
    arr.forEach((i)=>console.log(i)
    )
}

함슈슈( [40, 'wine', false] )

// 강사답
function 함슈슈슈([a,b,c] :ArrType){
    console.log(a);
    console.log(b);
    console.log(c);
}

함슈슈슈( [40, 'wine', false] )