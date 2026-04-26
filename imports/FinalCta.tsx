"use client";
import svgPaths from "./svg-f30pfp1cmj";

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center max-w-[672px] not-italic relative shrink-0 text-center w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[48px] text-white tracking-[0.3516px] w-full">Fix your digital experience. Unlock real growth.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.4)] tracking-[-0.4492px] w-full">One assessment can reveal millions in hidden inefficiencies.</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px]">Full Name *</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#2c2c2c] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] text-nowrap tracking-[-0.1504px]">Ahmed Al-Said</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#444] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px]">Email Address *</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#2c2c2c] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] text-nowrap tracking-[-0.1504px]">ahmed@company.om</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#444] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[58px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px]">Company / Organization *</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#2c2c2c] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] text-nowrap tracking-[-0.1504px]">Your Company</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#444] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel2 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px]">Tell us about your challenge</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#2c2c2c] h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] text-nowrap tracking-[-0.1504px]">{`Describe your platform, current challenges, and what you're looking to achieve...`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#444] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel3 />
      <Textarea />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3fe18e80} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[374.344px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.5px] tracking-[-0.1504px]">{`Confidential. No obligation. We'll respond within 24 hours.`}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(42,167,156,0.2)] h-[54px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#444] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center pl-[17px] pr-px py-px relative size-full">
          <Icon />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Arrow right">
          <path d={svgPaths.p3f191380} id="Icon" stroke="var(--stroke-0, #D9D9D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#009689] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[-0.4395px]">Book a free digital assessment</p>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Form">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Button />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#242424] content-stretch flex flex-col items-start p-[48px] relative rounded-[14px] shrink-0 w-[672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#444] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Form />
    </div>
  );
}

function Container8() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[inherit] px-[48px] py-0 relative w-full">
          <Container />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

export default function FinalCta() {
  return (
    <div className="bg-[#1e1e1e] relative size-full" data-name="FinalCTA">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[48px] py-[96px] relative size-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}