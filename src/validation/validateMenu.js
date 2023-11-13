import { MENU_CONSTANTS } from "../constants/constants";
import { MENU_ERROR } from "../messages/errorMessage";

const validateMenu = (menu) => {
  if (!MENU_CONSTANTS.includes(menu)) throw new Error(MENU_ERROR.valid);

  const greaterThanOne = /^([가-힣\s]+)-([1-9]\d*)$/;
  if (!greaterThanOne.test(menu)) throw new Error(MENU_ERROR.form);

  // 중복 추가
};

export default validateMenu;
