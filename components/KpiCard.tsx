import {
    formatCurrency,
    formatNumber,
    formatPercentage,
} from "@/lib/formatters";
import { ReactNode } from "react";

interface KpiCardProps {
    label: string;
    value: number;
    icon: ReactNode;
    format?: "number" | "currency" | "percentage";
}

export function KpiCard({ label, value, icon, format = "number" }: KpiCardProps) {
    const formattedValue =
        format === "currency"
            ? formatCurrency(value)
            : format === "percentage"
                ? formatPercentage(value)
                : formatNumber(value);

    return (
        <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-4
      dark:bg-slate-700">

            <div className="rounded-lg bg-white p-2 shadow-sm text-slate-500
        dark:bg-slate-800 dark:text-slate-300">
                {icon}
            </div>

            <div>
                <div className="text-xs uppercase tracking-wide text-slate-500
          dark:text-slate-400">
                    {label}
                </div>
                <div className="mt-1 text-2xl font-semibold text-slate-900
          dark:text-slate-100">
                    {formattedValue}
                </div>
            </div>
        </div>
    );
}

