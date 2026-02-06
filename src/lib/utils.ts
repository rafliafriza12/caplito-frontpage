// Utility function untuk class names
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// Delay function untuk testing
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Format currency
export function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

// Truncate text
export function truncate(str: string, length: number) {
  return str.length > length ? str.substring(0, length) + "..." : str;
}
