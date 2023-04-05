{
  //union과 완전히 반대되는 성격 intersection

  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    // 두타입을 모두 충족해야하고
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    // 모든 데이터가 들어있는 오브젝트를 전달해야함.
    name: "ellie",
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
