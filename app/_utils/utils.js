export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "INR" }).format(
    value
  );
export const formatNumber = (value) =>
  new Intl.NumberFormat("en", { useGrouping: true }).format(value);
