import type { Dispatch, SetStateAction } from "react";
import type { TechnologiesType } from "../types/technology";
import StackItem from "./StackItem";

interface StackSidebarProps {
  selectedStack: TechnologiesType[];
  setSelectedStack: Dispatch<SetStateAction<TechnologiesType[]>>;
}
const StackSidebar = ({
  selectedStack,
  setSelectedStack,
}: StackSidebarProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <p className="text-xl font-semibold">Your Stack</p>
      {selectedStack.length === 0 ? (
        <p className="text-[14px] ml-1 text-gray-400 mt-3 mb-5">
          No technologies selected yet
        </p>
      ) : (
        <p className="text-[14px] ml-1 text-gray-400 mt-3 mb-5">
          {selectedStack.length} Technology Selected
        </p>
      )}

      {selectedStack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-lg mt-5 flex items-center justify-center h-20">
          <p className="text-[14px] text-gray-400">Your stack is empty</p>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <StackItem
            setSelectedStack={setSelectedStack}
            selectedStack={selectedStack}
          />
        </div>
      )}
    </div>
  );
};

export default StackSidebar;
