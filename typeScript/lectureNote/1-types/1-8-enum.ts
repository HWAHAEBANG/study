{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // 타입스크립트에서 enum은 가능한한 쓰지 않는 것이 좋다.

  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday"; // 이렇게 유니온으로 쓰는 것이 바람직
  // 실무에서 enum으로 대체할 수 없는 경우는 거의 없음.
  enum Days { // 이넘 사용 자제
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  // day = 10; // 이넘의 문제점. 이넘으로 타입이 지정된 변수에 다른 어떤 숫자도 할당할 수 있다는 것
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
}
