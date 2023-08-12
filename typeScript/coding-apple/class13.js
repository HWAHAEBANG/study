var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 레스트 파라미터 : 여러개의 파라미터를 의미하는 ...rest는 함수선언할 때 소괄호 안에
function 함함수수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함함수수(1, 5, 3, 5, 6, 6);
// 스프레드 연산자 : array 혹은 object 괄호 벗기고 싶을 때 왼쪽에 사용
var arr1 = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log(arr3);
// 디스트럭쳐림 :  array, object 안에 있는 데이터를 빼서 변수로 만들고 싶을 때
// - 배열
var _a = ['안녕', 100], 변수1 = _a[0], 변수2 = _a[1];
console.log(변수1);
console.log(변수2);
// - 객체
// let { student : student, age1 : age1} = {student : true, age1 : 20} 
var _b = { student: true, age1: 20 }, student = _b.student, age1 = _b.age1; // 위의 축약형
function 함수5(_a) {
    var student = _a.student, age1 = _a.age1;
    console.log(student, age1);
}
함수5({ student: true, age1: 20 });
//==================================================================
// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈 
// 내 답
function max() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var maxim = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxim) {
            maxim = arr[i];
            console.log('바', maxim);
        }
    }
    return maxim;
}
console.log('최대값', max(13, 12, -1, 9));
//강사답
function 최댓값() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var result = 0;
    x.forEach(function (i) {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
console.log(최댓값(4, 6, 3, 2));
function 함슈(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user);
    console.log(comment);
    console.log(admin);
}
함슈({ user: 'kim', comment: [3, 5, 4], admin: false });
function 함슈슈(arr) {
    arr.forEach(function (i) { return console.log(i); });
}
함슈슈([40, 'wine', false]);
// 강사답
function 함슈슈슈(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a);
    console.log(b);
    console.log(c);
}
함슈슈슈([40, 'wine', false]);
