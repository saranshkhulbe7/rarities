export const convertToRupeesFormat = (amount) => {
  const options = {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };
  return new Intl.NumberFormat("en-IN", options).format(amount);
};
