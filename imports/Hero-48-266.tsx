"use client";
import svgPaths from "./svg-ehn2azdh0w";
const imgImage4 = "/assets/76977b0f430be3c0ae2ac41e2783e52de66ef2de.png";
const imgImage3 = "/assets/efe325f7dc4d1b06932d1cba32a08b5644fe8e76.png";
const imgImage2 = "/assets/da894252a368666c9aefbf873d1271cb3fb0321c.png";
const imgImage5 = "/assets/caef67f74bc909a921513a5a2d6e17c9b3115b0d.png";
function Clients() {
  return (
    <div className="content-stretch flex gap-[84px] h-[28px] items-center justify-center relative shrink-0 w-full" data-name="Clients">
      <div className="h-[28px] relative shrink-0 w-[73px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="h-[28px] relative shrink-0 w-[144.5px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="h-[28px] relative shrink-0 w-[113.5px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="h-[28px] relative shrink-0 w-[132px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[231px] items-start relative shrink-0 w-[1000px]" data-name="Heading 1">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#171717] text-[64px] text-center">We help Omani enterprises scale through world class digital experiences</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-center relative shrink-0 w-[1000px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#009689] text-[18px] text-center tracking-[0.5496px] w-[774px]">Bad UX silently kills growth, adoption, and trust. We redesign websites, platforms, and systems to perform at enterprise scale.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Content">
      <Heading />
      <Paragraph />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Arrow right">
          <path d={svgPaths.p3f191380} id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#009689] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[-0.4395px]">Book a free digital assessment</p>
        <ArrowRight />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e1e1e] text-[18px] text-nowrap tracking-[-0.4395px]">See how it works</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="CTA">
      <Button />
      <Button1 />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-center justify-center max-w-[1000px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <Clients />
      <Content />
      <Cta />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#fafafa] relative size-full to-[#ffffff]" data-name="Hero">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[77.5px] py-[140px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}