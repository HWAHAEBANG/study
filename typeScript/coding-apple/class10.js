// 함수 자체를 타입 지정하는 방법
//{return number}가 축약된거라함.
// 사용은 함수 표현식에만 가능함.
var 함수22 = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
console.log(회원정보.plusOne(1));
회원정보.changeName();
var cutZero = function (str) {
    if (str[0] === '0') {
        return str.slice(1);
    }
    else {
        return str;
    }
};
var removeDash = function (str) {
    return parseFloat(str.replace(/-/g, '')); //str.replace('-','') 안됨
};
// str.replace('-',''):
// 이 방법은 첫 번째로 발견되는 하이픈 문자 하나만을 대체합니다. 즉, 문자열에서 첫 번째로 발견되는 하이픈만이 빈 문자열로 대체됩니다. 나머지 하이픈은 변경되지 않습니다.
// str.replace(/-/g,''):
// 이 방법은 정규식을 사용하여 문자열 내의 모든 하이픈을 대체합니다. /-/g는 하이픈을 찾기 위한 정규식 패턴이며, g 플래그는 전역 검색을 의미합니다. 따라서 문자열 내의 모든 하이픈이 빈 문자열로 대체됩니다.
// 즉, 두 방법의 차이는 대체되는 범위입니다. 첫 번째 방법은 첫 번째로 발견되는 하이픈만을 대체하고, 두 번째 방법은 문자열 내의 모든 하이픈을 대체합니다. 필요에 따라 어떤 방법을 선택하느냐는 처리하고자 하는 데이터의 특성과 목적에 따라 다를 수 있습니다.
console.log('컷제로', cutZero('010-1111-2222'));
console.log('리무브대시', removeDash('10-1111-2222'));
var mix = function (a, b, c) {
    return c(b(a));
};
console.log('맞음?', mix('010-1111-2222', cutZero, removeDash));
