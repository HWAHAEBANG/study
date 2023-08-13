"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class에서 사용가능한 protected, static 키워드
//class 안에서 쓰는 static 키워드 
// 우리가 class { } 안에 집어넣는 변수, 함수 이런건 전부 class로 부터 새로 생성되는 object (일명 instance) 에 부여됩니다. 
// 근데 class에 직접 변수나 함수를 부여하고 싶으면 static 키워드를 왼쪽에 붙여주면 됩니다. 
var User4 = /** @class */ (function () {
    function User4() {
        this.y = 20;
    }
    User4.x = 10;
    return User4;
}());
var johnho = new User4();
//   johnho.x //불가능
User4.x; //가능
// - 함수도 static 붙이기 가능
// - extends 로 class를 복사할 경우 static 붙은 것들도 따라옵니다. 
// (참고) static은 private, protected, public 키워드와 동시 사용가능합니다. 
var User5 = /** @class */ (function () {
    function User5() {
    }
    User5.x = 10;
    return User5;
}());
// Q. static 이런걸 언제 씁니까
// 주로 class 안에 간단한 메모를 하거나, 기본 설정값을 입력하거나
// class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용합니다. 
// =============================================================
// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
var User6 = /** @class */ (function () {
    function User6() {
        this.z = 30; // 익스텐스 한 클레스에서 수정가능
    }
    User6.x = 10; // 해당 글래서 안에서 User6.x 이렇게 사용해야 수정가능
    User6.y = 20; // 어디에서든 User6.y 해서 수정가능
    return User6;
}());
// 누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들이요.   // 접근할 수 있으면 수정 다 되는 거 아닌가?
// 친구가 물어봤을 때 어떻게 답해줄 것입니까
// =============================================================
// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
var User7 = /** @class */ (function () {
    function User7() {
    }
    User7.addOne = function (a) { User7.x += a; };
    ;
    User7.printX = function () {
        console.log(User7.x);
    };
    User7.x = 10;
    User7.y = 20;
    return User7;
}());
User7.addOne(3); //이렇게 하면 x가 3 더해져야함
User7.addOne(4); //이렇게 하면 x가 4 더해져야함
User7.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
//   저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요? 
// 그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
// (조건) private static x = 10; 이 코드 수정금지 
// =============================================================
// (숙제3) 이런거 어떻게 만들게요 
// 웹 요소 애니메이팅하는거 이런 것의 기초 격인데 
// let 네모1 = new Square1(30, 30, 'red');
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 네모.draw()
//이렇게 네모.draw()를 할 때마다
// index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
// 가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
// // 내 답 실패
// class Square1{
//     width :number;
//     height :number;
//     color :string;
// constructor(a:number,b:number,c:string){
//     this.width = a;
//     this.height = b;
//     this.color = c;
// }
// // draw(){
// //   }
// }
var Square1 = /** @class */ (function () {
    function Square1(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square1.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative;\n   top: ".concat(a * 400, "px;\n   left: ").concat(a * 400, "px;\n   width: ").concat(this.width, "px;\n   height: ").concat(this.height, "px;\n   background: ").concat(this.color, "\n   \"></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square1;
}());
var 네모1 = new Square1(30, 30, 'red');
네모1.draw();
네모1.draw();
네모1.draw();
네모1.draw();
네모1.draw();
네모1.draw();
네모1.draw();
네모1.draw();
네모1.draw();
// 
// (4) insertAdjacentHTML 이런거 이용하면 원하는 곳에 html 추가가 가능합니다.
