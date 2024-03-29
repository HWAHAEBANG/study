export {}


// 타입스크립트 쓰면 자바스크립트에 없는 문법도 사용가능합니다.
// 객체지향 언어에서 제공하는 public, private, static, protected 이런 키워드를 사용가능한데 


// public 키워드
// 원하는 속성 왼쪽에 붙이면 그 속성은 아무데서나 수정이 가능합니다.

class User0 {
    public name: string;
  
    constructor(){
      this.name = 'kim';
    }
  }
  
  let 유저0 = new User0();
  유저0.name = 'park';  //가능

//   public이 붙은 속성은 자식 object들이 마음대로 사용하고 수정가능합니다.
// 실은 public 붙이든 안붙이든 똑같긴 합니다
// 왜냐면 필드값 같은걸 그냥 만들면 public이 몰래 왼쪽에 부여되기 때문

// (참고) public 키워드는 class 내의 prototype 함수에도 붙일 수 있습니다.

//===================================================================================
// private 키워드를 붙이면 수정이 불가능해집니다. 
// 무조건 class { } 중괄호 안에서만 수정 및 사용가능

class User2 {
    public name :string;
    private familyName :string;  
  
    constructor(){
      this.name = 'kim';
      let hello = this.familyName + '안뇽'; //가능
    }
  }
  
  let 유저11 = new User2();
  유저11.name = 'park';  //가능
//   유저11.familyName = 456; //에러남


//   Q. private 부여된 속성을 class 밖에서 수정해야할 경우?
// 1. private 속성을 수정하는 함수를 class 안에 만들어서 2. 함수를 실행시키면 됩니다. 

class User3 {
    public name :string;
    private familyName :string;
  
    constructor(){
      this.name = 'kim';
      let hello = this.familyName + '안뇽';
    }
    changeSecret(){
      this.familyName = 'park';
    }
  }
  
  let 유저22 = new User3();
//   유저22.familyName = 'park';  //에러남
  유저22.changeSecret()        //가능



  //============================================================================================
//   public, private 키워드 쓰면 이런 것도 가능
// constructor 안에서 this.name = name 이런걸 생략할 수 있습니다. 

class Person11 { 
    name;
    constructor ( name :string ){  
      this.name = name;
    } 
  }
  let 사람22 = new Person11('john')
  
  
  class Person22 { 
    constructor ( public name :string ){   // 요거요거. 아직으로선 ㅁ낳이 생소..
    
    } 
  }
  let 사람33 = new Person22('john')