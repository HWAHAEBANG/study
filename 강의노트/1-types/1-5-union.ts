{
  /**
   *  Union Types: OR  // 굉장히 많이 쓰임!!!
   */
  type Direction = "left" | "right" | "up" | "down";
  // 디렉션이라는  타입은 총 4개지의 값을 가질 수 있다.

  function move(direction: Direction) {
    console.log(direction);
  }
  move("down"); // 이렇게 인자를 입력하려는 순간 사용할 수 있는 옵션들이 뜸
  // 'left' | 'right' | 'up' | 'down' 이 네가지가 보일 것임.

  type TileSize = 8 | 16 | 32; // 이것도
  const tile: TileSize = 16; // 위 세가지 중에 하나만 넣을 수 있게 되는 것임

  // function: login -> success, fail ⏱ // 중첩되는 형식으로도 구현될 수 있음
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  // function login(): LoginState {  // 스코프 안먹혀서 주석처리 해둠
  //   return {
  //     response: {
  //       body: "logged in!",
  //     },
  //   };
  // }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  // function printLoginState(state: LoginState) /* :void */ {  // 스코프 안먹혀서 주석처리 해둠
  //   if ("response" in state) {
  //     // response라는 키가 state 오브젝트 안에 있다면
  //     console.log(`🎉 ${state.response.body}`); // state안에있는 reponse 접근 가능
  //   } else {
  //     console.log(`😭 ${state.reason}`); // 아니라면, reason 출력
  //   }
  // }

  // 하지만!!!!!!!!!!!!!!!!!! in이라는 것을 쓰는 것은 좋지않다.
  // 따라서 discriminated라는 것을 쓴다
}
