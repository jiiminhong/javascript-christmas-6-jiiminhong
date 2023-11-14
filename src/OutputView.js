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
    Console.print("<증정 메뉴>");

    Console.print(totalBefore >= 120000 ? "샴페인 1개" : "없음");
  },

  printBenefits(benefitList) {
    Console.print("<혜택 내역>");

    let count = 5;

    const benefitArr = Object.values(benefitList);
    benefitArr.forEach((benefit) => {
      if (benefit.discount !== 0) {
        Console.print(
          `${benefit.name}: -${benefit.discount.toLocaleString()}원`
        );
        count--;
      }
    });

    if (count === 5) Console.print("없음");
  },

  printTotalDiscount(totalBenefit, totalBefore) {
    const totalPayment = totalBefore - totalBenefit;

    Console.print("<총혜택 금액>");
    Console.print(`-${totalBenefit.toLocaleString()}원`);
    Console.print("<할인 후 예상 결제 금액>");
    Console.print(`${totalPayment.toLocaleString()}원`);
  },

  printBadge(totalBenefit) {
    Console.print("<12월 이벤트 배지>");

    switch (totalBenefit) {
      case totalBenefit >= 20000:
        Console.print("산타");
        break;
      case totalBenefit >= 10000 && totalBenefit < 20000:
        Console.print("트리");
        break;
      case totalBenefit >= 5000 && totalBenefit < 10000:
        Console.print("별");
        break;
      default:
        Console.print("없음");
    }
  },
};

export default OutputView;
