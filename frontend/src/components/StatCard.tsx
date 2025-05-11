interface StatCardProps {
  label: string;
  value: number | string;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 text-center w-32">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-xl font-bold text-[#1a1f36]">{value}</p>
    </div>
  );
}
