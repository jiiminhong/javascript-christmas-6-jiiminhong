import { MENU_CONSTANTS, MAX_MENU_CONSTANTS } from "../constants/constants";
import { MENU_ERROR } from "../messages/errorMessage";

const validateMenu = (orders) => {
  let menuCount = 0;
  const menuList = new Set(orders.map((order) => order.menu));

  for (const order of orders) {
    const { count } = order;
    menuCount += count;
  }

  if (menuCount > MAX_MENU_CONSTANTS) throw new Error(MENU_ERROR.max);

  if (orders.every((order) => MENU_CONSTANTS[order.menu].type === "drink"))
    throw new Error(MENU_ERROR.allDrinks);

  if (menuList.size !== orders.length) throw new Error(MENU_ERROR.duplication);
};

export default validateMenu;
