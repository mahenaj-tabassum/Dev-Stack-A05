import { XIcon } from "lucide-react";

import type { TechnologiesType } from "../types/technology";

interface StackItemProps {
  selectedStack: TechnologiesType[];
}

const StackItem = ({ selectedStack }: StackItemProps) => {
  return (
    <>
      {selectedStack.length !== 0 &&
        selectedStack.map((stack) => (
          <div
            key={stack.id}
            className="border border-gray-200 rounded-lg flex items-center justify-between px-5 py-3"
          >
            <div className="flex items-center gap-3">
              <img className="h-8" src={stack.icon} alt={stack.name} />
              <div>
                <p className="font-bold text-slate-900">{stack.name}</p>

                <p className="text-[12px] text-gray-400">{stack.category}</p>
              </div>
            </div>
            <button className="cursor-pointer">
              <XIcon className="text-red-500 size-5" />
            </button>
          </div>
        ))}
    </>
  );
};

export default StackItem;
