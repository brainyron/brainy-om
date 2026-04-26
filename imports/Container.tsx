"use client";
import svgPaths from "./svg-wklqeydsdy";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3fe18e80} id="Vector" stroke="var(--stroke-0, #14AE5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[374.344px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1e1e1e] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">{`Confidential. No obligation. We'll respond within 24 hours.`}</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[rgba(0,128,67,0.1)] relative rounded-[10px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center pl-[17px] pr-px py-px relative size-full">
          <Icon />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}