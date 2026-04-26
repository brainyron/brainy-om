"use client";
import svgPaths from "./svg-iec7ielvdk";
const imgImageWix = "/assets/76977b0f430be3c0ae2ac41e2783e52de66ef2de.png";
const imgImageCairoAmmanBank = "/assets/efe325f7dc4d1b06932d1cba32a08b5644fe8e76.png";
const imgImageFlop = "/assets/da894252a368666c9aefbf873d1271cb3fb0321c.png";
const imgImageFontFella = "/assets/caef67f74bc909a921513a5a2d6e17c9b3115b0d.png";
function Container() {
  return <div className="absolute bg-gradient-to-b from-[#fafafa] h-[831px] left-0 to-[#ffffff] top-0 w-[1371px]" data-name="Container" />;
}

function ImageWix() {
  return (
    <div className="absolute h-[28px] left-[142.5px] top-0 w-[73px]" data-name="Image (Wix)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWix} />
    </div>
  );
}

function ImageCairoAmmanBank() {
  return (
    <div className="absolute h-[28px] left-[299.5px] top-0 w-[144.5px]" data-name="Image (Cairo Amman Bank)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageCairoAmmanBank} />
    </div>
  );
}

function ImageFlop() {
  return (
    <div className="absolute h-[28px] left-[528px] top-0 w-[113.5px]" data-name="Image (Flop)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageFlop} />
    </div>
  );
}

function ImageFontFella() {
  return (
    <div className="absolute h-[28px] left-[725.5px] top-0 w-[132px]" data-name="Image (FontFella)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageFontFella} />
    </div>
  );
}

function Clients() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[1000px]" data-name="Clients">
      <ImageWix />
      <ImageCairoAmmanBank />
      <ImageFlop />
      <ImageFontFella />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[240px] left-0 top-[92px] w-[1000px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[80px] left-[500.4px] not-italic text-[#171717] text-[64px] text-center top-px tracking-[0.2188px] translate-x-[-50%] w-[929px]">We help Omani enterprises scale through world-class digital experience</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[54px] left-[113px] top-[396px] w-[774px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-[387.4px] not-italic text-[#009689] text-[18px] text-center top-[0.5px] tracking-[0.1105px] translate-x-[-50%] w-[737px]">Bad UX silently kills growth, adoption, and trust. We redesign websites, platforms, and systems to perform at enterprise scale.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27px] relative shrink-0 w-[250.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-[125.5px] not-italic text-[18px] text-center text-nowrap text-white top-[0.5px] tracking-[-0.4395px] translate-x-[-50%]">Book a free digital assessment</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute bg-[#009689] content-stretch flex gap-[8px] h-[59px] items-center justify-center left-0 rounded-[10px] top-px w-[322.359px]" data-name="Hero">
      <Text />
      <Icon />
    </div>
  );
}

function Hero1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[61px] items-center justify-center left-[338.36px] px-[25px] py-[17px] rounded-[10px] top-0 w-[188.219px]" data-name="Hero">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#1e1e1e] text-[18px] text-center text-nowrap tracking-[-0.4395px]">See how it works</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[61px] left-[236.71px] top-[514px] w-[526.578px]" data-name="Container">
      <Hero />
      <Hero1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[575px] left-[185.5px] top-[128px] w-[1000px]" data-name="Container">
      <Clients />
      <Heading />
      <Paragraph />
      <Container1 />
    </div>
  );
}

export default function Hero2() {
  return (
    <div className="relative size-full" data-name="Hero">
      <Container />
      <Container2 />
    </div>
  );
}