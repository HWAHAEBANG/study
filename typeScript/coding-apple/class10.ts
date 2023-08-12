//타입스크립트로 HTML 변경과 조작할 때 주의점
// "strictNullChecks": true

// 문제의 코드
// let 제목 = document.querySelector('#titie');
// 제목.innerHTML = '반갑소'

// 해결방법1 : if를 사용한 narrowing
// let 제목 = document.querySelector('#title');

// if(제목 != null){
//     제목.innerHTML = '반갑소'
// } 

// 해결방법2 instanceof를 사용한 narrowing <가장 좋음!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!>
// let 제목 = document.querySelector('#title');

// if(제목 instanceof HTMLElement){
//     제목.innerHTML = '반갑소'
// } 

// 해결방법3 assertion
// let 제목 = document.querySelector('#title') as HTMLElement;
//     제목.innerHTML = '반갑소'

// 해결방법4 optional chaining 연산자
// let 제목 = document.querySelector('#title');
//     if(제목?.innerHTML){
//         제목.innerHTML = '반갑소'
//     }

// 해결방법5 strict 설정 false로 설정


// instanceof가 가장 좋은 이유
let 링크 = document.querySelector('#link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com'
}

// html 태그 종류별로 정확한 타입명칭이 있습니다.
// a 태그는 HTMLAnchorElement
// img 태그는 HTMLImageElemen
// h4 태그는 HTMLHeadingElement
// ..
// 백만개가 있는데 이런 정확한 타입으로 narrowing 해주셔야 html 속성 수정을 제대로할 수 있습니다.
// 전부 외울 필요는 없고 자동완성 잘 될걸요


 let 버튼 = document.getElementById('button');
 버튼?.addEventListener('click', function(){
    console.log('안녕');
 })




// (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
// <img id="image" src="test.jpg">
// html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다. \
// 이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
// 성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?
// 

let 이미지 = document.getElementById('image');

if(이미지 instanceof HTMLImageElement){
    이미지.src = 'new.jpg'
}

// (숙제2) 바꾸고 싶은 html 요소가 많습니다.
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a> 
// 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
// 자바스크립트 코드를 어떻게 짜야할까요? 


//오답
// let 링크들 = document.querySelector('.naver')
// if(링크들 instanceof HTMLAnchorElement){
//     링크들.href = 'https://kakao.com'
// }


//정답
let 링크들 = document.querySelectorAll('.naver')
링크들.forEach((a)=>{
    if(a instanceof HTMLAnchorElement){
        a.href = 'https://kakao.com'
    }
})


/// 사용한 html
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script src ="class10.js" defer></script>
//     훈련소에 오신것을 환영합니다.
//     <h4 id="title">안녕하세요</h4>
//     <a href="https://naver.com" id="link">링크</a>
//     <button id="button">버튼</button>
//     <img id="image" src="test.jpg">
//     <a class="naver" href="https://naver.com">링크</a>
//     <a class="naver" href="https://naver.com">링크</a>
//     <a class="naver" href="https://naver.com">링크</a> 
// </body>
// </html>