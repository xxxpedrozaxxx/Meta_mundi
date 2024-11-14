interface TimeUnitProps {
  value: number;
  label: string;
  animate?: boolean;
}

export default function TimeUnit({ value, label, animate = false }: TimeUnitProps) {
  return (
    <div className={`bg-white bg-opacity-40 rounded-lg p-3 transition-all duration-300 ${animate ? 'animate-pulse' : ''}`}>
      <span className="text-4xl font-bold text-white transition-all">
        {value.toString().padStart(2, '0')}
      </span>
      <p className="text-xs text-white mt-1">{label}</p>
    </div>
  );
}