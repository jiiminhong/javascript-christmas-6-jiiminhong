const DATE_ERROR = Object.freeze({
  valid: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  type: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
});

const MENU_ERROR = Object.freeze({
  valid: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
  form: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
  duplication: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
  max: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
  allDrinks: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
});

module.exports = { DATE_ERROR, MENU_ERROR };
