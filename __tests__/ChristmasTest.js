import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();

  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join(LINE_SEPARATOR);
};

const expectLogContains = (received, expectedLogs) => {
  expectedLogs.forEach((log) => {
    expect(received).toContain(log);
  });
};

describe("예외 테스트", () => {
  test("방문 날짜 예외 테스트", async () => {
    // given
    const INVALID_DATE_MESSAGE =
      "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["a", "크리스마스파스타-3"];
    const logSpy = getLogSpy();
    mockQuestions([...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expectLogContains(getOutput(logSpy), [INVALID_DATE_MESSAGE]);
  });

  test("주문 수 초과 테스트", async () => {
    // given
    const ORDER_COUNT_EXCEED_MESSAGE =
      "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = [
      "3",
      "티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1,타파스-1,시저샐러드-1,양송이수프-1,아이스크림-1,레드와인-1,샴페인-1,티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1,타파스-1,시저샐러드-1,양송이수프-1,아이스크림-1,레드와인-1,샴페인-1",
    ];
    const logSpy = getLogSpy();
    mockQuestions([...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expectLogContains(getOutput(logSpy), [ORDER_COUNT_EXCEED_MESSAGE]);
  });

  test("주문 메뉴가 모두 음료일 때 테스트", async () => {
    // given
    const ALL_ORDERS_ISDRINK_MESSAGE =
      "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["3", "제로콜라-1,레드와인-2,샴페인-1"];
    const logSpy = getLogSpy();
    mockQuestions([...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expectLogContains(getOutput(logSpy), [ALL_ORDERS_ISDRINK_MESSAGE]);
  });
});
