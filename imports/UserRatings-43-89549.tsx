"use client";
import svgPaths from "./svg-4ltdj7qn4g";
const imgUserProfile = "/assets/4b125dca3d22c8eba07c515ad92fba11cae08142.png";
const imgUserProfile1 = "/assets/affd8568bb1349c59e4a4dc8ea893b1346f41064.png";
const imgUserProfile2 = "/assets/1af2086220affecd5f498aeca93f64918a91bf86.png";
const imgImage4 = "/assets/221b4953f1c66ed33c4dec701c5dcab7214962b3.png";
const imgImage17 = "/assets/2c4d5a567fa8448169523684e4f0927bc45ce22a.png";
function Frame() {
  return (
    <div className="content-stretch flex gap-[3.077px] h-[20px] items-center justify-center relative shrink-0 w-[75.66px]">
      <div className="h-[18.462px] relative shrink-0 w-[19.507px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5065 18.4615">
          <path d={svgPaths.p188e88f2} fill="var(--fill-0, #219653)" id="Shape" />
        </svg>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12.308px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Trustpilot
      </p>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Star">
          <path d={svgPaths.p1d427300} fill="var(--fill-0, #219653)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Stars() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Stars">
      {[...Array(5).keys()].map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="rating">
      <Stars />
    </div>
  );
}

function ReviewPlatformHeader() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[354px]" data-name="Review Platform Header">
      <Frame />
      <Rating />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] pr-0 py-0 relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">Super easy to work with and communications was great!</p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Content />
      <div className="absolute flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[29px] text-[rgba(255,255,255,0.4)] top-[14.5px] translate-y-[-50%] w-[330px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[20px]">“</p>
      </div>
    </div>
  );
}

function UserDetail() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="user detail">
      <a className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-white w-full" href="https://www.trustpilot.com/users/66e4479730ccea357053af98">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[20px] underline">Nicole Reed</p>
      </a>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-full">Partnerships Director</p>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[40px] size-[40px] top-0" data-name="user profile">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[40px]">
        <div className="absolute bg-[#811ea1] inset-0 rounded-[40px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[40px] size-full" src={imgUserProfile} />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[40px] size-full" src={imgUserProfile1} />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[40px] size-full" src={imgUserProfile2} />
      </div>
      <div className="absolute left-[calc(50%+0.5px)] size-[41px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function UserProfile1() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <UserProfile />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[10px] py-0 relative shrink-0">
      <UserProfile1 />
      <div className="mr-[-10px] relative shrink-0 size-[40px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="content-stretch flex gap-[16px] h-[43px] items-center relative shrink-0 w-full" data-name="User">
      <UserDetail />
      <Frame1 />
    </div>
  );
}

function User1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="User">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
          <Content1 />
          <User />
        </div>
      </div>
    </div>
  );
}

export default function UserRatings() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[16px] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] size-full" data-name="User Ratings">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[8px] relative size-full">
          <ReviewPlatformHeader />
          <User1 />
        </div>
      </div>
    </div>
  );
}