import { MENU_CONSTANTS } from "./constants/constants";

const CalculateTotal = {
  calculateTotalBefore(orderList) {
    let total = 0;

    for (const menu of orderList) {
      const menuItem = MENU_CONSTANTS[menu.menu];

      if (menuItem) total += menuItem.price * menu.count;
    }

    return total;
  },
};

export default CalculateTotal;
