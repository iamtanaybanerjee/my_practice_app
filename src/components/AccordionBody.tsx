import { useState } from "react";
import AccrodionItem from "./AccordionItem";

type AccordionItem = {
  id: number;
  title: string;
  description: string;
};

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "item 1",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit quos sunt assumenda officia pariatur minus facere adipiscing eligendi dolorem eligendi similique voluptatum molestias officia in excepteur in qui amet velit quos voluptatum velit velit animi sint minim voluptas voluptas consectetur dolor est dolore velit omnis amet esse minus optio imperdiet optio",
  },
  {
    id: 2,
    title: "item 2",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit quos sunt assumenda officia pariatur minus facere adipiscing eligendi dolorem eligendi similique voluptatum molestias officia in excepteur in qui amet velit quos voluptatum velit velit animi sint minim voluptas voluptas consectetur dolor est dolore velit omnis amet esse minus optio imperdiet optio",
  },
  {
    id: 3,
    title: "item 3",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit quos sunt assumenda officia pariatur minus facere adipiscing eligendi dolorem eligendi similique voluptatum molestias officia in excepteur in qui amet velit quos voluptatum velit velit animi sint minim voluptas voluptas consectetur dolor est dolore velit omnis amet esse minus optio imperdiet optio",
  },
];

export default function AccordionBody() {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleSelect = (id: number) => {
    setSelectedIndex(selectedIndex === id ? -1 : id);
  };
  return (
    <main className="flex flex-col px-20">
      {accordionItems.map((item) => (
        <AccrodionItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          onClick={handleSelect}
          selectedIndex={selectedIndex}
        />
      ))}
    </main>
  );
}
