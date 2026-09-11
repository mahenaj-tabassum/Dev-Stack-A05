import { use } from "react";
import type { TechnologiesType } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologySectionProps {
  // Array of Object
  devStackDataPromise: Promise<TechnologiesType[]>;
}

const TechnologySection = ({ devStackDataPromise }: TechnologySectionProps) => {
  const technologies = use(devStackDataPromise);
  return (
    <div className="grid grid-cols-[3fr_1fr]">
      <div className="grid lg:grid-cols-3 gap-6 items-stretch mb-20">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default TechnologySection;
