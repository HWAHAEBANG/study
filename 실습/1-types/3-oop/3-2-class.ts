{
  // 객체지향으로 만들어보기
  // 1. 오브젝트를 이용해서 커피기계를 만들어야하고
  // 2. 커피머신이라는 클래스를 구현
  // 3. 커피 머신은 coffeebeans속성과 makeCoffee라는 메서드를 ㄱ ㅏ져야함
  // 4. 이 클래스르 이용한 인스턴스(객체)를 만들어서 실체로 커피를 만드는 내용까지 코딩

  // {
  //   type CoffeeCup = {
  //     shots: number;
  //     hasMilk: boolean;
  //   };

  //   const BEANS_GRAMM_PER_SHOT: number = 7;

  //   let coffeeBeans: number = 0;
  //   function makeCoffee(shots: number): CoffeeCup {
  //     if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
  //       throw new Error('Not enough coffee beans!');
  //     }
  //     coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
  //     return {
  //       shots,
  //       hasMilk: false,
  //     };
  //   }

  //   coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  //   const coffee = makeCoffee(2);
  //   console.log(coffee);
  // }

  ////

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7;
    coffeeBeans: number = 0;

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      // 흠 이부분 납득안감
      return new CoffeeMaker(coffeeBeans);
    }

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT > this.coffeeBeans) {
        throw new Error("원두가 부족하다~");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker.makeCoffee(5));
}
