type Props = {
  title: string;
  value: string | number;
};

function StatCard({ title, value }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6">

      <p className="text-sm text-gray-500 uppercase tracking-wide">

        {title}

      </p>

      <h2 className="mt-3 text-4xl font-bold text-slate-900">

        {value}

      </h2>

    </div>
  );
}

export default StatCard;