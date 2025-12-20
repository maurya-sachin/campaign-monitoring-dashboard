import {
  formatCurrency,
  formatNumber,
  formatPercentage,
} from "@/lib/formatters";

interface MetricProps {
  label: string;
  value: number;
  format?: "number" | "currency" | "percentage";
}

export function Metric({ label, value, format = "number" }: MetricProps) {
  const formattedValue =
    format === "currency"
      ? formatCurrency(value)
      : format === "percentage"
      ? formatPercentage(value)
      : formatNumber(value);

  return (
    <div className="rounded border bg-white p-4">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-xl font-semibold">{formattedValue}</div>
    </div>
  );
}
