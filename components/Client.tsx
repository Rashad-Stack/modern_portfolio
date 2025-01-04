import { skills } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Clients() {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        My
        <span className="text-purple"> skills and expertise</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={skills} direction="right" speed="slow" />
      </div>
    </div>
  );
}
