const MENU_CONSTANTS = Object.freeze({
  soup: { price: 6000, type: appetizer },
  tapas: { price: 5500, type: appetizer },
  salad: { price: 8000, type: appetizer },
  steak: { price: 55000, type: main },
  barbeque: { price: 54000, type: main },
  seafoodPasta: { price: 35000, type: main },
  christmasPasta: { price: 25000, type: main },
  chocoCake: { price: 15000, type: dessert },
  icecream: { price: 5000, type: dessert },
  zeroCoke: { price: 3000, type: drink },
  redWine: { price: 60000, type: drink },
  champagne: { price: 25000, type: drink },
});

module.exports = { MENU_CONSTANTS };
