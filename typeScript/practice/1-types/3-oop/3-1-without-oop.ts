{
  //1. 전역적으로 커피콩을 가지고 있는 변수를 만들고
  //2. 그것을 이용해서 커피를 만들 수 있는 함수를 만든다.
  //3. 커피를 만드는 makeCoffee함수는 한가지 인자를 전달 받는다. shots

  const coffeeBeans = 100;

  function makeCoffee(shots: number): string {
    const SERVING_PER_SHOT = 20;
    const remainCoffeeBeans = coffeeBeans - SERVING_PER_SHOT * shots;
    return `${shots}샷의 커피가 추출되었습니다. 남은 원두의 양은 ${remainCoffeeBeans}g 입니다.}`;
  }

  console.log(makeCoffee(1));
  console.log(makeCoffee(2));
  console.log(makeCoffee(3));
  console.log(makeCoffee(4));
  console.log(makeCoffee(5));
}
