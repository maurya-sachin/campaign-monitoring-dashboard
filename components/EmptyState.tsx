interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="rounded border bg-white p-4 text-sm text-gray-600">
      {message}
    </div>
  );
}
