import { MENU_CONSTANTS, MAX_MENU_CONSTANTS } from "../constants/constants";
import { MENU_ERROR } from "../messages/errorMessage";

const validateMenu = (orders) => {
  let menuCount = 0;

  for (const order of orders) {
    const { menu, count } = order;
    const greaterThanOne = /^([가-힣\s]+)-([1-9]\d*)$/;
    menuCount += count;

    if (!MENU_CONSTANTS[menu]) throw new Error(MENU_ERROR.valid);

    if (!greaterThanOne.test(`${menu}-${count}`))
      throw new Error(MENU_ERROR.form);
  }

  if (menuCount > MAX_MENU_CONSTANTS) throw new Error(MENU_ERROR.max);

  const allDrinks = orders.every(
    (order) => MENU_CONSTANTS[order.menu].type === "drink"
  );

  if (allDrinks) throw new Error(MENU_ERROR.allDrinks);

  const menuList = new Set(orders.map((order) => order.menu));
  if (menuList.size !== orders.length) throw new Error(MENU_ERROR.duplication);
};

export default validateMenu;
