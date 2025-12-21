import { ReactNode } from "react";

interface PanelProps {
    title?: string;
    children: ReactNode;
}

export function Panel({ title, children }: PanelProps) {
    return (
        <section className="rounded-2xl bg-white p-6 shadow-sm space-y-4
      dark:bg-slate-800 dark:border dark:border-slate-700">
            {title && (
                <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {title}
                </h2>
            )}
            {children}
        </section>
    );
}
