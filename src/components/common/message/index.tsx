interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return <div className="text-red-500 text-center">{message}</div>;
}

export function NoResultsMessage() {
  return <div className="text-center text-gray-500">No results found</div>;
}
