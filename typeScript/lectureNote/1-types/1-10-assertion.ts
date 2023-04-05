{
  /**
   * Type Assertions 💩 어썰션을 쓰는 것은 좋은 것은 아니다.

Assertion :
assertion 
1. (사실임을) 주장 (=claim)
2. (권리 등의) 행사

//타입 어썰션은 내가 정말정말정말 장담할 때 그렇게 쓰야함.

   */
  // 예를들어 any의 타입을 가지는 어떠한 함수가 있다.
  // 근데 이함수는 무조건 문자열을 반환하는 함수이다. 무조건
  function jsStrFunc(): any {
    return "string";
    return 2; // 근데 정말 확신했는데 다른게 나오면? 너무 확신했기 때문에 오류를 띄워주지도 않는다
    // 대신 언디파인이 출력되는 것을 볼수 있다. 이런경우가 있으므로 어썰션은 자제하는 것이 좋다.
  }
  const result = jsStrFunc(); // any로 출력되지 때문에 result.length 같은 메서드의 사용이 불가능하다.
  console.log((result as string).length); //그래서 이렇게 스트링이라고 명시해주는 것을 어썰션이라고한다.
  console.log((<string>result).length); // 이것도 없다.

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱 // 프로그램이 죽기도함.

  function findNumbers(): number[] | undefined {
    // 숫자를 찾으면 넘버 어래이를 리던하고 없으면 언디파인을 리턴하는 함수
    return undefined; // 지금은 일단 언디파인을 리턴해보기로 한다
  }
  const numbers = findNumbers()!; // 느낌표를 붙이면 무조건 값이 있다고 장담할 수 있다. 이것도 어썰션이다.
  numbers.push(2); // 😱 numbers는 숫자 배열일 수도 있지만 언디파인일수도 있기 때문에.
  const button = document.querySelector("class")!;
  // 쿼리셀랙터의 함수정의를 들여다 보면 요소를 찾으면 요소를 리턴할 수도 있고,
  // 요소가 존재하지 않는다면 null를 리턴하는 함수다.
  // 근데 너무너무 확실할 때 이것도 느낌표를 달아 어썰션을 적용해줄 수 있다.
}
