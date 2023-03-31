{
  // Array
  const fruits: string[] = ["🍅", "🍌"]; // 의 두가지 정의 방법은 결과는 동일하나다.
  const scroes: Array<number> = [1, 3, 4]; // 어떤게 좋고 나쁘다는 없은 비슷한 것들임.
  // 한가지 차이점을 들자면 아래와 같음
  function printArray(fruits: readonly string[]) {} //
  // 전달된 인자가 함수 내부에서 변경되지 않도록 하기위해서 readonly를 붙여 보장.
  // 이 readonly라는 것을 사용하기 ㅜ이해서는 string[]방법을 사용해줘야함. 후자는 아직 허용되지 않음.
  // 또한 코드의 일관상이 중요하다보니 보통은 string[]을 많이 씀.

  // Tuple -> interface, type alias, class // 배열이긴 배열인데 서로 다름 타입을 함께 가질 수 있는 배열임.
  let student: [string, number]; // 이렇게 고정된 사이즈의 서로 다른 타입이 있을 때 사용할 수 있음.
  student = ["name", 123];
  student[0]; // name  => 가독성이 좋지 않음  (콘솔 찍어봐야 뭔지 아니깐)
  student[1]; // 123   => 가독성이 좋지 않음
  // 하지만 튜플을 사용하는 것은 뭔장하지 않음
  // 이유1. 배열에 접근할 때 위 처럼 인덱스로 접근하는게 정말 가독성이 떨어짐

  // 따라서 튜플을 사용할 수 있는 곳에는 웬만하면 interface, type alias, class 로 대체해서 사용하는 것이 좋음

  // 이걸 피할 수 있는 방법이 있긴함.
  //바로 오브젝트디스트럭쳐링으로 접근하면 좀 더 명확하게 이름과 나이를 확안할 수 있다.
  const [name, age] = student;

  // 튜플의 대표적인 예시로는 리액트의 useState를 예시로 들 수 있다.
  // useState는 배열 안에 첫번째 타입과 두번째 타입이 다른 튜플이다.
  // const [count, setCount] = useState(0);
  // 이런 경우에는 튜플을 굉장이 잘 활용한 경우라고 할 수 있다.
  // 하지만 이것들을 interface, type alias, class로 남용해서 사용할 수 있음에도 불구하고
  // 너무 남용하는 것은 좋지않다.
}
