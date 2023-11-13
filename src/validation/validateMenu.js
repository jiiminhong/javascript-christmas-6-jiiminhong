import { MENU_CONSTANTS } from "../constants/constants";
import { MENU_ERROR } from "../messages/errorMessage";

const validateMenu = (orders) => {
  for (const order of orders) {
    const { menu, count } = order;

    if (!MENU_CONSTANTS[menu]) throw new Error(MENU_ERROR.valid);

    const greaterThanOne = /^([가-힣\s]+)-([1-9]\d*)$/;
    if (!greaterThanOne.test(`${menu}-${count}`))
      throw new Error(MENU_ERROR.form);
  }

  const menuList = new Set(orders.map((order) => order.menu));
  if (menuList.size !== orders.length) throw new Error(MENU_ERROR.duplication);
};

export default validateMenu;
