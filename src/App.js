import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import CalculateTotal from "./CalculateTotal.js";

class App {
  async run() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");

    const visitDate = await InputView.readDate();
    const orderList = await InputView.readMenu();

    Console.print(
      `12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );

    const totalBefore = CalculateTotal.calculateTotalBefore(orderList);

    OutputView.printMenu(orderList);
    OutputView.printTotalBeforeDiscount(totalBefore);
    OutputView.printGift(totalBefore);
  }
}

export default App;
