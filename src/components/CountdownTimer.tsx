import CelebrationCard from './CelebrationCard';

const celebrations = [
  { 
    name: "🕯️Velitas", 
    date: new Date(2024, 11, 7)
  },
  { 
    name: "🎄Navidad", 
    date: new Date(2024, 11, 24) 
  }
];

export default function CountdownTimer() {
  return (
    <div className="grid gap-8 p-8">
      {celebrations.map((celebration, index) => (
        <CelebrationCard
          key={index}
          name={celebration.name}
          targetDate={celebration.date}
        />
      ))}
    </div>
  );
}