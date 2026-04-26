"use client";
export default function Button() {
  return (
    <div className="bg-[#009689] relative rounded-[8px] size-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-nowrap">Button</p>
        </div>
      </div>
    </div>
  );
}