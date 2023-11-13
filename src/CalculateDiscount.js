const CalculateDiscount = {
  calculateDiscount(benefitList) {
    const totalBenefit = Object.values(benefitList.discount).reduce(
      (acc, cur) => acc + cur,
      0
    );

    return totalBenefit;
  },
};

export default CalculateDiscount;
