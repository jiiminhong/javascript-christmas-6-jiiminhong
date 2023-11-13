import { MENU_CONSTANTS } from "./constants/constants";

const CalculateBenefit = {
  calculateBenefit(visitDate, orderLis, totalBefore) {
    const date = new Date(2023, 11, 1);
    let benefit = {
      christmasDiscount: { name: "크리스마스 디데이 할인", discount: 0 },
      weekdayDiscount: { name: "평일 할인", discount: 0 },
      weekendDiscount: { name: "주말 할인", discount: 0 },
      specialDiscount: { name: "특별 할인", discount: 0 },
      giftEvent: { name: "증정 이벤트", discount: 0 },
    };

    if (visitDate <= 25)
      benefit.christmasDiscount.discount = 1000 + 100(visitDate - 1);

    if (date.getDay() >= 0 && date.getDay() <= 4)
      calculateDessertDiscount(orderList);

    if (date.getDay() === 5 || date.getDay() === 6)
      calculateWeekendDiscount(orderList);

    if ([3, 10, 17, 24, 25, 31].includes(visitDate))
      benefit.specialDiscount.discount = 1000;

    if (totalBefore >= 120000) benefit.giftEvent.discount += 25000;

    return benefit;
  },

  calculateDessertDiscount(orderList) {
    orderList.forEach((menu) => {
      const menuItem = MENU_CONSTANTS[menu.menu];

      if (menuItem.type === "dessert")
        benefit.weekdayDiscount.discount += 2023 * menu.count;
    });
  },

  calculateWeekendDiscount(orderList) {
    orderList.forEach((menu) => {
      const menuItem = MENU_CONSTANTS[menu.menu];

      if (menuItem.type === "main")
        benefit.weekendDiscount.discount += 2023 * menu.count;
    });
  },
};

export default CalculateBenefit;