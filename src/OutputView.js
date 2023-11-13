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

  printBenefits(benefitList) {
    Console.print("<혜택 내역>");

    Object.values(benefitList).map((benefit) => {
      Console.print(`${benefit.name}: -${benefit.discount}원`);
    });
  },

  printTotalDiscount(benefitList, totalBefore) {
    const totalBenefit = Object.values(benefitList.discount).reduce(
      (acc, cur) => acc + cur,
      0
    );

    const totalPayment = totalBefore - totalBenefit;

    Console.print("<총혜택 금액>");
    Console.print(`-${totalBenefit.toLocaleString()}원`);
    Console.print("<할인 후 예상 결제 금액>");
    Console.print(`${totalPayment.toLocaleString()}원`);
  },
};

export default OutputView;
