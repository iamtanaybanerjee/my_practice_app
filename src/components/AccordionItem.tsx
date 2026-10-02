type AccordionItemProps = {
  id: number;
  title: string;
  description: string;
  onClick: (index: number) => void;
  selectedIndex: number;
};

export default function AccrodionItem({
  id,
  title,
  description,
  onClick,
  selectedIndex,
}: AccordionItemProps) {
  return (
    <div className="w-full rounded-lg bg-gray-200 text-black">
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-4"
        onClick={() => {
          onClick(id);
        }}
      >
        <span>{title}</span>
        <span>{selectedIndex === id ? "_" : "+"}</span>
      </button>

      {selectedIndex === id && <p className="px-4 pb-3">{description}</p>}
    </div>
  );
}
