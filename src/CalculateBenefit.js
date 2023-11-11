import { MENU_CONSTANTS } from "./constants/constants";

const CalculateBenefit = {
  calculateBenefit(visitDate, orderLis, totalBefore) {
    const date = new Date(2023, 11, 1);
    const specialDate = [3, 10, 17, 24, 25, 31];
    let benefit = {
      christmasDiscount: 0,
      weekdayDiscount: 0,
      weekendDiscount: 0,
      specialDiscount: 0,
      giftEvent: 0,
    };

    if (visitDate <= 25) benefit.christmasDiscount = 1000 + 100(visitDate - 1);

    if (date.getDay() >= 0 && date.getDay() <= 4)
      calculateDessertDiscount(orderList);

    if (date.getDay() === 5 || date.getDay() === 6)
      calculateWeekendDiscount(orderList);

    if (specialDate.includes(visitDate)) benefit.specialDiscount = 1000;

    if (totalBefore >= 120000) benefit.giftEvent += 25000;
  },

  calculateDessertDiscount(orderList) {
    orderList.forEach((menu) => {
      const menuItem = MENU_CONSTANTS[menu.menu];

      if (menuItem.type === "dessert")
        benefit.weekdayDiscount += 2023 * menu.count;
    });
  },

  calculateWeekendDiscount(orderList) {
    orderList.forEach((menu) => {
      const menuItem = MENU_CONSTANTS[menu.menu];

      if (menuItem.type === "main")
        benefit.weekendDiscount += 2023 * menu.count;
    });
  },
};

export default CalculateBenefit;
