import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";

class App {
  async run() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
    const visitDate = await InputView.readDate();
    const orderMenu = await InputView.readMenu();
  }
}

export default App;
