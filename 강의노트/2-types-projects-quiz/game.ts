{
  /**
   * Let's make a game 🕹
   */

  let position = { x: 0, y: 0 };

  // 내답

  function move(act: "up" | "down" | "left" | "right") {
    switch (act) {
      case "up":
        return position.y++;
      case "down":
        return position.y--;
      case "left":
        return position.x--;
      case "right":
        return position.x++;
      default:
        throw new Error("unknown command");
    }
  }

  // 모범답안
  function move2(act: "up" | "down" | "left" | "right") {
    switch (act) {
      case "up":
        position.y += 1;
        break;
      case "down":
        position.y -= 1;
        break;
      case "left":
        position.x -= 1;
        break;
      case "right":
        position.x += 1;
        break;
      default:
        throw new Error("unknown command");
    }
  }

  console.log(position); // { x: 0, y: 0}
  move2("up");
  console.log(position); // { x: 0, y: 1}
  move2("down");
  console.log(position); // { x: 0, y: 0}
  move2("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}
}
