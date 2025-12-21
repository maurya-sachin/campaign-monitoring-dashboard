interface StatusBadgeProps {
    status: "active" | "paused" | "completed";
}

const STATUS_STYLES = {
    active:
        "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    paused:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    completed:
        "bg-slate-200 text-slate-700 dark:bg-slate-600 dark:text-slate-200",
};


export function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium capitalize ${STATUS_STYLES[status]}`}
        >
            {status}
        </span>
    );
}
