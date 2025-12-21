interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="rounded-xl bg-white p-4 text-sm text-slate-600
  dark:bg-slate-800 dark:text-slate-300">
      {message}
    </div>
  );
}
