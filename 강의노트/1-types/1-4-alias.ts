{
  // 타입스크립트를 쓰는 이유! 터압스크립트가 강력한 이유! type alias
  // 이것을 사용하게 되면 기본적인 타입 정의부터시작해서 굉장히 복잡하고 재밌는 타입들을 정의해볼 수 있따.

  /**
   * Type Aliases // 말그대로 새로운 타입을 내가 정의할 수 있다는 말이다.
   */
  type Text = string; // 지금부터 Text라는 새로운 타입은 문자열을 말한다.
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    // 원시타입뿐 아니라 오브젝트타입도 정의할 수 있음
    name: string;
    age: number;
  };
  const student: Student = {
    // 이렇게 간략하게 사용할 수 있게해준다.
    name: "ellie",
    age: 12,
  };

  /**
   * alias와 연결된 타입이 하나 더 있음.
   * String Literal Types
   */
  type Name = "name"; // 이런 식으로 문자열을 정의할 수 있는데
  let ellieName: Name; // 이런식으로 사용하면
  ellieName = "name"; // 값으로 'name' 밖에 할당할 수 없게됨.
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
}
