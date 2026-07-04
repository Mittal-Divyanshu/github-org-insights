type Props = {
  title: string;
  message: string;
  retry?: () => void;
};

function ErrorMessage({
  title,
  message,
  retry,
}: Props) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">

      <div className="bg-white rounded-2xl shadow-lg border border-red-200 p-10 w-full max-w-lg text-center">

        <div className="text-6xl mb-5">
          ⚠️
        </div>

        <h2 className="text-3xl font-bold text-red-600">
          {title}
        </h2>

        <p className="text-gray-600 mt-4">
          {message}
        </p>

        {retry && (
          <button
            onClick={retry}
            className="mt-8 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800"
          >
            Try Again
          </button>
        )}

      </div>

    </div>
  );
}

export default ErrorMessage;