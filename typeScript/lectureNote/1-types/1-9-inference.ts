{
  /**
   * Type Inference  // 타입추론
   */
  let text = "hello"; // 타입이 뻔한 경우에는 생략해도 된잖다. 스트링이란걸 이제는 알아서 <= 타입추론
  //text=1 //하면 빨간줄 뜸
  function print(message = "hello") {
    // 이렇게  초기값을 주거나 타입을 지정해주지 않으면
    // 점점점 밑줄이 뜸. 기본적으로 any 타입이 지정되기 때문임.
  }
  print("hello");

  function add(x: number, y: number): number {
    // 숫자 두개를 받아서 더했으니까 리턴되는 값은 바로 숫자겠군 <= 타입추론
    return x + y;
  }
  // const result = add(1, 2);

  // 이처럼 타입스크립트에서도 꼬박꼬박 타입을 명시할 필요는 없다
  // 하지만!!! 실무의 코드는 복잡하기때문에 웬만하면 정확하게 명시하는 것이 좋다.
  // 다만 let text = 'hello'; 같은 경우에는 너무 뻔하고 딱봐도 문자열이기 때문에 이런 경우는 생략할 수 있다.
}
