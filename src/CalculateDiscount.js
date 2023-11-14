const CalculateDiscount = {
  calculateDiscount(benefitList) {
    let totalBenefit = 0;

    Object.values(benefitList).forEach((benefit) => {
      totalBenefit += benefit.discount;
    });

    return totalBenefit;
  },
};

export default CalculateDiscount;
