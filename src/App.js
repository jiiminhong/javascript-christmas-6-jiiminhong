import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import CalculateTotal from "./CalculateTotal.js";
import CalculateBenefit from "./CalculateBenefit.js";
import CalculateDiscount from "./CalculateDiscount.js";

class App {
  async handleError(callback) {
    try {
      await callback();
    } catch (error) {
      Console.print(error.message);
    }
  }

  runPrints(orderList, totalBefore, benefitList, totalBenefit) {
    OutputView.printMenu(orderList);
    OutputView.printTotalBeforeDiscount(totalBefore);
    OutputView.printGift(totalBefore);
    OutputView.printBenefits(benefitList);
    OutputView.printTotalDiscount(totalBenefit, totalBefore);
    OutputView.printBadge(totalBenefit);
  }

  async run() {
    await this.handleError(async () => {
      Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");

      const visitDate = await InputView.readDate();
      const orderList = await InputView.readMenu();

      Console.print(
        `12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
      );

      const totalBefore = CalculateTotal.calculateTotalBefore(orderList);
      const benefitList = CalculateBenefit.calculateBenefit(
        visitDate,
        orderList,
        totalBefore
      );
      const totalBenefit = CalculateDiscount.calculateDiscount(benefitList);

      this.runPrints(orderList, totalBefore, benefitList, totalBenefit);
    });
  }
}

export default App;
