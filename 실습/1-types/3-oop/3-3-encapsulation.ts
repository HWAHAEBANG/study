type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

class CoffeeMaker {
  private static BEANS_GRAMM_PER_SHOT: number = 7;
  private coffeeBeans: number = 0;

  static makeMachine(coffeeBeans: number): CoffeeMaker {
    // 흠 이부분 납득안감
    return new CoffeeMaker(coffeeBeans);
  }

  private constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }

  fillCoffeebeans(beans: number) {
    if (beans < 0) {
      throw new Error("vlaue for beans should be greater than 0");
    }
    this.coffeeBeans += beans;
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

const maker = CoffeeMaker.makeMachine(32);
maker.fillCoffeebeans(32);
console.log(maker.makeCoffee(5));
// maker.coffeeBeans = 3;
