import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printMenu(orderList) {
    Console.print("<주문 메뉴>");

    for (const menu of orderList) Console.print(`${menu.menu} ${menu.count}개`);
  },

  printTotalBeforeDiscount(totalBefore) {
    Console.print("<할인 전 총주문 금액>");

    Console.print(`${totalBefore.toLocaleString()}원`);
  },

  printGift(totalBefore) {
    Console.print("증정 메뉴");

    Console.print(
      totalBefore >= 120000
        ? Console.print("샴페인 1개")
        : Console.print("없음")
    );
  },
};

export default OutputView;
