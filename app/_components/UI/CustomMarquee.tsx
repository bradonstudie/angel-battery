import { marqueeItems } from "@/app/_config";

export const CustomMarquee = () => {
  return (
    <div className="relative flex overflow-x-hidden border border-dashed italic text-sm">
      <div className="animate-marquee whitespace-nowrap">
        {marqueeItems.map((item) => (
          <span className="mx-10" key={`${item}-marquee-1`}>
            {item},
          </span>
        ))}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
        {marqueeItems.map((item) => (
          <span className="mx-10" key={`${item}-marquee-2`}>
            {item},
          </span>
        ))}
      </div>
    </div>
  );
};
