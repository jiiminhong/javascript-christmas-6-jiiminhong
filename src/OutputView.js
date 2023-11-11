import { Console } from "@woowacourse/mission-utils";
import CalculateTotal from "./CalculateTotal";

const OutputView = {
  printMenu(orderList) {
    Console.print("<주문 메뉴>");

    for (const menu of orderList) Console.print(`${menu.menu} ${menu.count}개`);
  },

  printTotalBeforeDiscount(orderList) {
    Console.print("<할인 전 총주문 금액>");

    const totalBefore = CalculateTotal.calculateTotalBefore(orderList);
    Console.print(`${totalBefore.toLocaleString()}원`);

    if (totalBefore >= 120000) {
      Console.print("<증정 메뉴>");
      Console.print("샴페인 한 개 증정");
    }
  },
};

export default OutputView;
