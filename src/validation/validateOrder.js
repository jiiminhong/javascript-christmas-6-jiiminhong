import { MENU_CONSTANTS } from "../constants/constants";
import { MENU_ERROR } from "../messages/errorMessage";

const validateOrder = (orders) => {
  for (const order of orders) {
    const { menu, count } = order;
    const greaterThanOne = /^([가-힣\s]+)-([1-9]\d*)$/;

    if (!MENU_CONSTANTS[menu]) throw new Error(MENU_ERROR.valid);

    if (!greaterThanOne.test(`${menu}-${count}`))
      throw new Error(MENU_ERROR.form);
  }
};

export default validateOrder;
