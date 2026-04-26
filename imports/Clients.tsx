"use client";
const imgImage4 = "/assets/76977b0f430be3c0ae2ac41e2783e52de66ef2de.png";
const imgImage3 = "/assets/efe325f7dc4d1b06932d1cba32a08b5644fe8e76.png";
const imgImage2 = "/assets/da894252a368666c9aefbf873d1271cb3fb0321c.png";
const imgImage5 = "/assets/caef67f74bc909a921513a5a2d6e17c9b3115b0d.png";
export default function Clients() {
  return (
    <div className="content-stretch flex flex-wrap gap-6 sm:gap-12 md:gap-16 lg:gap-[84px] items-center justify-center relative w-full px-4" data-name="Clients">
      <div className="h-[20px] sm:h-[24px] md:h-[28px] relative shrink-0 w-[52px] sm:w-[62px] md:w-[73px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="h-[20px] sm:h-[24px] md:h-[28px] relative shrink-0 w-[103px] sm:w-[124px] md:w-[144.5px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="h-[20px] sm:h-[24px] md:h-[28px] relative shrink-0 w-[81px] sm:w-[97px] md:w-[113.5px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="h-[20px] sm:h-[24px] md:h-[28px] relative shrink-0 w-[94px] sm:w-[113px] md:w-[132px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}