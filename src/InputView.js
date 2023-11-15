import { Console } from "@woowacourse/mission-utils";
import validateDate from "./validation/validateDate";
import validateMenu from "./validation/validateMenu";
import validateOrder from "./validation/validateOrder";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(
      "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)"
    );

    validateDate(input);

    return input;
  },

  async readMenu() {
    const input = await Console.readLineAsync(
      "주문하실 메뉴를 메뉴와 개수로 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)"
    );
    const inputs = input.split(",");

    const orders = inputs.map((menu) => {
      const [name, quantity] = menu.split("-");
      return { menu: name, count: quantity };
    });

    validateOrder(orders);
    validateMenu(orders);

    return orders;
  },
};

export default InputView;
