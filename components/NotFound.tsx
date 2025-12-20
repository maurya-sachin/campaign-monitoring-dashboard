interface NotFoundProps {
  title: string;
  description: string;
}

export function NotFound({ title, description }: NotFoundProps) {
  return (
    <div className="rounded border bg-white p-6">
      <h2 className="mb-2 text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
