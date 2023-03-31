{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩 <= 값이 있는지 없는지 아무 것도 결정되지 않은 상태
  let age: number | undefined; // 숫자 또는 undefnined 릃 할당할 수있음
  // 보편적으로는 null 보다 undefined을 많이 이용함.

  age = undefined;
  age = 1;
  function find(): number | undefined {
    // 찾았다면 숫자를 리턴하고 찾지못하면  undefined를 리턴하는 함수
    return undefined;
  }

  // null
  let person: null; // 💩 <= 조금 더 명확게 텅텅비어있다고 이야기해주는 것.
  let person2: string | null; // 숫자 또는 null 릃 할당할 수있음

  // unknown 💩 "알수없는"이라는 뜻, 어떤 종류의 데이터가 담길지 알 수가 없는 경우인 것
  // 존재 이유는? 타입스크립트는 타입이 없는 자바스크립트와 연동해서 쓸 수 있기 때문이다.
  // 가능하면 쓰지 않는게 좋다.
  let notSure: unknown = 0; // 0으로 할당했음에도 불구하고 아래 할당문 문제없음.
  notSure = "he";
  notSure = true;

  // any 💩 이것도 가능하면 쓰지 않는게 좋음
  let anything: any = 0;
  anything = "hello";
  // unkown이랑 any둘다 정말 피치못할 때만 써야한다.

  // void 함수에서 아무것도 리턴하지 않으면 void가 됨
  // void는 생략할 수 있는데, 회사별 스탈일에 따라 다를 수 있음.
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩 이렇게하면 undefined밖에 못 담음
  // 이렇게 변수로 선언하는 경우는 극히 드믈다. 본적 없다.

  // never 쓰는 경우는 어플리케이션에서 정말 예상치못한,
  // 그리고 핸들링할 수 없는 에러가 발생했을 때 호출할 수 있는 함수
  function throwError(message: string): never {
    // 에러 메시지를 받아서 never를 리턴하게 됨
    // "이 함수를 호출하면 나는 리턴할 계획이 전혀 없어. 그 점을 가만해서 코딩해"
    // message -> server (log)
    throw new Error(message);
    while (true) {} // 또는 이렇게 무한루프일때도 never가 된다.
  }
  // 즉 에러를 던지던지, 끝나지 않게하던지.

  let neverEnding: never; // 💩 참고로 이렇게 변수에 선언하는 경우는 없음.

  // objet
  let obj: object; // 💩 원시타입을 제외한 모든 오브젝트 타입을 할당할 수 있어서
  // 배열, 험수도 담을 수 있기 때문에 너무 범위가 넓어서 쓰지 않는 것이 좋음.
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
