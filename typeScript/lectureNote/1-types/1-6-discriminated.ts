{
  // discriminated : 차별화하는 구분할 수 있는
  //  다 동일하지만 state별로 다른 값을 가지고 있도록 만들어야한다.

  // function: login -> success, fail ⏱
  type SuccessState = {
    result: "success"; // 추가
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail"; // 추가
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success", // 추가
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      // result로 구분
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }

  // 핵심 : union 타입을 사용할 때 공통적인 프로퍼티를 가지고 있음으로써 조금 더 구분하기 쉽게 만듣다!!
}
