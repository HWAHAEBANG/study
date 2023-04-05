type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

interface CoffeeMaker {
  makeCoffee(shots: number): CoffeeCup;
}

interface CommercialCoffeeMaker {
  makeCoffee(shots: number): CoffeeCup;
  fillCoffeeBeans(Beans: number): void;
  clean(): void;
}

class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
  private static BEANS_GRAMM_PER_SHOT: number = 7;
  private coffeeBeans: number = 0;

  static makeMachine(coffeeBeans: number): CoffeeMachine {
    // 흠 이부분 납득안감
    return new CoffeeMachine(coffeeBeans);
  }

  private constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }

  fillCoffeeBeans(beans: number) {
    if (beans < 0) {
      throw new Error("vlaue for beans should be greater than 0");
    }
    this.coffeeBeans += beans;
  }

  clean() {
    console.log("cleaning the machine...");
  }

  private grindBeans(shots: number) {
    if (shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT > this.coffeeBeans) {
      throw new Error("원두가 부족하다~");
    }
    this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
  }

  private preheat(): void {
    console.log("heating up...");
  }

  private extract(shots: number): CoffeeCup {
    console.log(`pulling ${shots} shots... `);
    return {
      shots,
      hasMilk: false,
    };
  }

  makeCoffee(shots: number): CoffeeCup {
    this.grindBeans(shots);
    this.preheat();
    return this.extract(shots);

    // if (shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT > this.coffeeBeans) {
    //   throw new Error("원두가 부족하다~");
    // }
    // this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    // return {
    //   shots: shots,
    //   hasMilk: false,
    // };
  }
}

class AmateurUser {
  constructor(private machine: CoffeeMaker) {}
  makeCoffee() {
    const coffee = this.machine.makeCoffee(2);
    console.log(coffee);
  }
}

class ProBarista {
  constructor(private machine: CommercialCoffeeMaker) {}
  makeCoffee() {
    const coffee = this.machine.makeCoffee(2);
    console.log(coffee);
    this.machine.fillCoffeeBeans(45);
    this.machine.clean();
  }
}

const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
const amatuer = new AmateurUser(maker);
const pro = new ProBarista(maker);
pro.makeCoffee();

// maker.fillCoffeeBeans(32);
// console.log(maker.makeCoffee(5));
// // maker.coffeeBeans = 3;

// maker.makeCoffee(2);

// const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
// maker2.fillCoffeeBeans(32);
// maker2.makeCoffee(2);
// maker2.clean();
