type Props = { error: Error; resetError: () => void };

export default function ErrorFallback({ error, resetError }: Props) {
  return (
    <div className="errorBox">
      <h2>Something went wrong</h2>
      <p className="errorMsg">{error.message}</p>
      <div className="row">
        <button onClick={resetError}>Try Again</button>
        <button onClick={() => window.location.reload()}>Reload Page</button>
      </div>
    </div>
  );
}