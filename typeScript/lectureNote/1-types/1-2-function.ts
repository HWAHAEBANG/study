{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    // 넘버타입과 넘버타입을 받아서 넘버타입을 리턴하는 함수다.
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // 무언가를 fetch를해서
    // code ... 어떤 코드가 발생하다가.
    // code ...
    // code ... // 프로미스를 리턴하는 함수
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // 위 코드를 조금 더 타입스크립트 답게 변환
  // TypeScript ✨
  function fetchNum(id: string): Promise<number> {
    // 리턴값은 프로미스고 프로미스 중에서도 숫자를 프로미스 한다.
    // 이 프로미스는 이 fectch가 완료된 다음에 숫자의 데이터를 리턴하겠구나 라고 예상할 수 있음
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //=====================================================
  // 이하는 함수를 조금 더 잘 활욯할 수 있는 팁!!!!!
  // JavaScript ✨ => TypeScript
  //자바스크립트 에서도 사용이 가능하고, 타입스크립트에서 더 활용도를 높일 수 있는  타입이 정해진 함수 정의 방법
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    // 파라미터에 물을표를 달면 전달해도되고 안해도되는 파라미터가 된다.
    // lastName: string | undefined 와 같이 사용하면 호출하는 부분에서 printName('Steve', undefined); 이렇게 써야해도 보기 안 좋다.
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName("Steve", "Jobs");
  printName("Ellie");
  printName("Anna");

  // Default parameter  // 기본 메시지를 출력할 수 있다.
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // 옵셔널파라미터에서는 전달하지 않으면 언디파인이 될 수도 있지만
  // 디폴트 파라미터에서는 전달하지 않으면 기본값으로 설정이 되어진다.

  // Rest parameter
  // 인자의
  // 입력하는 모든 숫자들을 배열로 받아오는 것
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
