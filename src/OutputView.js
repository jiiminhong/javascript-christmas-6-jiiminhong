import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printMenu(orderList) {
    Console.print("<주문 메뉴>");

    for (const menu of orderList) Console.print(`${menu.menu} ${menu.count}개`);
  },

  printTotalBeforeDiscount(orderList) {
    Console.print("<할인 전 총주문 금액>");

    Console.print(`${totalBefore.toLocaleString()}원`);
  },
};

export default OutputView;
