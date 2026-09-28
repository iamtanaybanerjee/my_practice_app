import ShimmerItem from "./ShimmerItem";

export default function ShimmerContainer() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {Array.from({ length: 20 }, (_, i) => (
        <ShimmerItem key={i} />
      ))}
    </div>
  );
}
