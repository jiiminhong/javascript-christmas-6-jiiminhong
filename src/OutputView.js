const OutputView = {
  printMenu(orderList) {
    Console.print("<주문 메뉴>");

    for (const menu of orderList) Console.print(`${menu.menu} ${menu.count}개`);
  },
  // ...
};

export default OutputView;
