type MemeItemProps = {
  imgUrl: string;
  title: string;
};

export default function MemeItem({ imgUrl, title }: MemeItemProps) {
  return (
    <div className="w-50 rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <div
        className="h-50 w-50 bg-gray-300 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />

      {/* Title */}
      <div className="p-4">
        <p className="text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
}
