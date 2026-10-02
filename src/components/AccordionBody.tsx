//1. treat accordion as on selecting a comp, highlight it
//2. build accordion items. Each of them will have a state of its own. Based on this state, the item will expand or contract.
//3. selectedIndex = 0 --> global state
//4. onClick --> handleSelect --> setSelectedIndex(index) --> if (selectedIndex === index) --> itemState(!itemState)

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
    <main>
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
