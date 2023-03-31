{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  // 내답 (실패)
  function printLoginState(res: ResourceLoadState) {
    switch (res.state) {
      case "loading":
        return "👀 loading...";
      case "success":
        return "😃 loaded";
      case "fail":
        return "😱 no network";
      default:
        throw new Error("unknown command");
    }
  }

  // 모법답안
  function printLoginState2(res: ResourceLoadState) {
    switch (res.state) {
      case "loading":
        console.log("👀 loading...");
        break;
      case "success":
        console.log("😃 loaded");
        break;
      case "fail":
        console.log("😱 no network");
        break;
      default:
        throw new Error("unknown command");
    }
  }

  printLoginState2({ state: "loading" }); // 👀 loading...
  printLoginState2({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState2({ state: "fail", reason: "no network" }); // 😱 no network
}
