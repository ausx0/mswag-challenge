import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatAmountWithCurrency = (
  amount: any,
  currencySymbol = "IQD"
) => {
  const formattedAmount = new Intl.NumberFormat("en-US").format(amount);
  return `${formattedAmount} ${currencySymbol}`;
};
