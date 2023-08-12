// (숙제1) Car 클래스를 만들고 싶습니다.
// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
// 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 


// 필드값에도 model :string 타입지정하고
// 파라미터에도 a :string 타입지정하면 뭔가 쓸데없는 중복같은 느낌이 들지만 
// 필드값은 디폴트값 이런 걸로 생각하셔도 괜찮습니다. 


class Car {
model:string;
price:number;
constructor(a :string, b:number){
    this.model = a
    this.price = b
}

tax() :number{
    return this.price/10
}
}

let car = new Car("그랜저 신형", 6000)

console.log(car);
console.log(car.tax());



// (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 

// 오답 : 대충 논리는 근접한것 같은데 네로잉에 걸림.
// class Word{
//     num :number[];
//     str :string[];
//     constructor(...words : (number | string)[]){
//         let arr = [...words]
//         this.num = arr.filter((item)=>(typeof item === 'number'))
//         this.str = arr.filter((item)=>(typeof item === 'string'))
//     }
// }


class word{
    num :number[];
    str :string[];

    constructor(...param : (number | string)[]){
        let 숫자들 :number[] = [];
        let 문자들 :string[] = [];

        param.forEach((i)=>{
            if(typeof i === 'string'){
                문자들.push(i)
            }else{
                숫자들.push(i)
            }
        })

        this.num = 숫자들;
        this.str = 문자들;
    }
}


let obj22 = new word('kim',3,5,'park','bang',7);

console.log(obj22);
console.log(obj22.num);
console.log(obj22.str);
