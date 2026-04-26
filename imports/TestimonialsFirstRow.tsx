"use client";
import svgPaths from "./svg-ka3gxzrk7r";
const imgImage6 = "/assets/eb6d18f53af6aaa4ca4ba41c0dd33753de948c06.png";
const imgImage12 = "/assets/499fa9eb8cb9670c9da4821fd8d1a4e7d4dca374.png";
const imgImage7 = "/assets/776a7c2889402bb13a67ca445df49166a25a8b95.png";
const imgImage13 = "/assets/a1f7cbe7bc945f61cedd3728ff8826dc1525f6d1.png";
const imgImage8 = "/assets/6aa25ce958444bae79943a5f7900cfb38a97eecc.png";
const imgImage9 = "/assets/d29e042c84a17cb0950712f4f098a45b8b6717cf.png";
const imgImage18 = "/assets/afd496d4331d780eff58f719d6176f7091f745ec.png";
const imgImage10 = "/assets/e4f9a8c1a7e08476e105f32763dc5941064d116b.png";
const imgUserProfile = "/assets/4b125dca3d22c8eba07c515ad92fba11cae08142.png";
const imgUserProfile1 = "/assets/affd8568bb1349c59e4a4dc8ea893b1346f41064.png";
const imgUserProfile2 = "/assets/1af2086220affecd5f498aeca93f64918a91bf86.png";
const imgImage4 = "/assets/221b4953f1c66ed33c4dec701c5dcab7214962b3.png";
const imgImage17 = "/assets/2c4d5a567fa8448169523684e4f0927bc45ce22a.png";
const imgImage11 = "/assets/bf1f0a9931d0c1854adfd1f4843963dc3dcd7a5e.png";
const imgImage14 = "/assets/0c291b20f521066143425f1aec0969e21ad096fc.png";
const imgImage15 = "/assets/3cdbd10b67feee50c5dd4cacd063c672345eb90a.png";
const imgImage16 = "/assets/ee95bbc1af69fccb44dba8c4948191f29a7cb2e8.png";
import { imgGroup1321321339 } from "./svg-wyydm";

function Frame3() {
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
      <Frame3 />
      <Rating />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] pr-0 py-0 relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">Awesome team and really dedicated to what they do! Very friendly and creative!</p>
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
      <a className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" href="https://www.trustpilot.com/users/66faa360710e8b611c5bc33a">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[20px] underline">Kwaku Amprako</p>
      </a>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap">Founder of Akrivi</p>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div className="absolute left-[-3px] size-[46px] top-[-3px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function UserProfile1() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div className="absolute left-[-3px] size-[46px] top-[-3px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="absolute left-0 size-[40px] top-0" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[10px] py-0 relative shrink-0">
      <UserProfile />
      <UserProfile1 />
    </div>
  );
}

function User() {
  return (
    <div className="content-stretch flex gap-[16px] h-[43px] items-center relative shrink-0 w-full" data-name="User">
      <UserDetail />
      <Frame8 />
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

function UserRatings() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col gap-[24px] h-[239px] items-start p-[8px] relative rounded-[16px] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] shrink-0 w-[370px]" data-name="User Ratings">
      <ReviewPlatformHeader />
      <User1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[20px] left-[0.03px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[66.871px_20px] top-[-0.01px] w-[66.871px]" style={{ maskImage: `url('${imgGroup1321321339}')` }}>
      <div className="absolute inset-[-47.99%_-14.35%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.068 39.1972">
          <g filter="url(#filter0_f_38_4433)" id="Group 1321321339">
            <path d={svgPaths.p3a2d4c80} fill="var(--fill-0, #EA4335)" id="Vector" />
            <path d={svgPaths.pac66680} fill="var(--fill-0, #34A853)" id="Vector_2" />
            <path d={svgPaths.p2fc42a00} fill="var(--fill-0, #4285F4)" id="Vector_3" />
            <path d={svgPaths.p370fc580} fill="var(--fill-0, #FBBC05)" id="Vector_4" />
            <path d={svgPaths.p2b920400} fill="var(--fill-0, #EA4335)" id="Vector_5" />
            <path d={svgPaths.p347ed380} fill="var(--fill-0, #4285F4)" id="Vector_6" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="39.1972" id="filter0_f_38_4433" width="86.068" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_38_4433" stdDeviation="4.7993" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[0.03px] top-[-0.01px]">
      {[...Array(7).keys()].map((_, i) => (
        <Group key={i} />
      ))}
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[20px] left-[0.03px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[66.871px_20px] mix-blend-multiply opacity-10 top-[-0.01px] w-[66.871px]" style={{ maskImage: `url('${imgGroup1321321339}')` }}>
      <div className="absolute inset-[-79.99%_-23.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.8662 51.9954">
          <g filter="url(#filter0_f_38_4425)" id="Group 1321321339">
            <path d={svgPaths.p24d88100} fill="var(--fill-0, #EA4335)" id="Vector" />
            <path d={svgPaths.p12b10d00} fill="var(--fill-0, #34A853)" id="Vector_2" />
            <path d={svgPaths.p2d1f8c00} fill="var(--fill-0, #4285F4)" id="Vector_3" />
            <path d={svgPaths.pd71ce80} fill="var(--fill-0, #FBBC05)" id="Vector_4" />
            <path d={svgPaths.pb291cf0} fill="var(--fill-0, #EA4335)" id="Vector_5" />
            <path d={svgPaths.p238aa980} fill="var(--fill-0, #4285F4)" id="Vector_6" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="51.9954" id="filter0_f_38_4425" width="98.8662" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_38_4425" stdDeviation="7.99883" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[0.03px] mix-blend-multiply top-[-0.01px]">
      {[...Array(7).keys()].map((_, i) => (
        <Group2 key={i} />
      ))}
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.871px]">
      <Group1 />
      <Group3 />
      <div className="absolute h-[14.855px] left-[52.8px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-52.768px_-0.332px] mask-size-[66.871px_20px] top-[0.32px] w-[2.303px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1321321339}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.30291 14.8548">
          <g id="Vector">
            <path d={svgPaths.p34124f0} fill="#34A853" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Rating1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[116px]" data-name="rating">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 20">
        <g id="rating">
          <path d={svgPaths.p942c500} fill="var(--fill-0, #FFC107)" id="Star 6" />
          <path d={svgPaths.p220d4870} fill="var(--fill-0, #FFC107)" id="Star 7" />
          <path d={svgPaths.p215dac00} fill="var(--fill-0, #FFC107)" id="Star 8" />
          <path d={svgPaths.p1fb96380} fill="var(--fill-0, #FFC107)" id="Star 9" />
          <path d={svgPaths.p28902740} fill="var(--fill-0, #FFC107)" id="Star 10" />
        </g>
      </svg>
    </div>
  );
}

function ReviewPlatformHeader1() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[354px]" data-name="Review Platform Header">
      <Frame />
      <Rating1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] pr-0 py-0 relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">Incredible work provided</p>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Content2 />
      <div className="absolute flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[29px] text-[rgba(255,255,255,0.4)] top-[14.5px] translate-y-[-50%] w-[330px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[20px]">“</p>
      </div>
    </div>
  );
}

function UserDetail1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="user detail">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Alex Gonzalez</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap">Confluent</p>
    </div>
  );
}

function UserProfile2() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div className="absolute left-[-2px] size-[44px] top-[-1.5px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function UserProfile3() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div className="absolute left-[-3px] size-[46px] top-[-3px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="absolute left-0 size-[40px] top-0" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[10px] py-0 relative shrink-0">
      <UserProfile2 />
      <UserProfile3 />
    </div>
  );
}

function User2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[43px] items-center relative shrink-0 w-full" data-name="User">
      <UserDetail1 />
      <Frame9 />
    </div>
  );
}

function User3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="User">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
          <Content3 />
          <User2 />
        </div>
      </div>
    </div>
  );
}

function UserRatings1() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col gap-[24px] h-[239px] items-start p-[8px] relative rounded-[16px] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] shrink-0 w-[370px]" data-name="User Ratings">
      <ReviewPlatformHeader1 />
      <User3 />
    </div>
  );
}

function Frame4() {
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

function Star1() {
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

function Stars1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Stars">
      {[...Array(5).keys()].map((_, i) => (
        <Star1 key={i} />
      ))}
    </div>
  );
}

function Rating2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="rating">
      <Stars1 />
    </div>
  );
}

function ReviewPlatformHeader2() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[354px]" data-name="Review Platform Header">
      <Frame4 />
      <Rating2 />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] pr-0 py-0 relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">Our collaboration with Brainy Circles resulted in a 2× increase in signups. Their strategic approach and execution had a direct impact on our business growth.</p>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Content4 />
      <div className="absolute flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[29px] text-[rgba(255,255,255,0.4)] top-[14.5px] translate-y-[-50%] w-[330px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[20px]">“</p>
      </div>
    </div>
  );
}

function UserDetail2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="user detail">
      <a className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-white w-full" href="https://www.trustpilot.com/users/66f6a7294de07b7f41539725">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[20px] underline">Tamer Okail</p>
      </a>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-full">Co-Founder QoQo.ai</p>
    </div>
  );
}

function UserProfile4() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div className="absolute left-0 size-[40px] top-0" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
    </div>
  );
}

function UserProfile5() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div className="absolute left-0 size-[40px] top-0" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[10px] py-0 relative shrink-0">
      <UserProfile4 />
      <UserProfile5 />
    </div>
  );
}

function User4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[43px] items-center relative shrink-0 w-full" data-name="User">
      <UserDetail2 />
      <Frame10 />
    </div>
  );
}

function User5() {
  return (
    <div className="h-[179px] relative rounded-[8px] shrink-0 w-full" data-name="User">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[12px] relative size-full">
          <Content5 />
          <User4 />
        </div>
      </div>
    </div>
  );
}

function UserRatings2() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col gap-[24px] h-[239px] items-start p-[8px] relative rounded-[16px] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] shrink-0 w-[370px]" data-name="User Ratings">
      <ReviewPlatformHeader2 />
      <User5 />
    </div>
  );
}

function Frame5() {
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

function Star2() {
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

function Stars2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Stars">
      {[...Array(5).keys()].map((_, i) => (
        <Star2 key={i} />
      ))}
    </div>
  );
}

function Rating3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="rating">
      <Stars2 />
    </div>
  );
}

function ReviewPlatformHeader3() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[354px]" data-name="Review Platform Header">
      <Frame5 />
      <Rating3 />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] pr-0 py-0 relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">{`Based on these positive outcomes, we're excited about the possibility of working together on future projects. Your combination of quality content creation...`}</p>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Content6 />
      <div className="absolute flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[29px] text-[rgba(255,255,255,0.4)] top-[14.5px] translate-y-[-50%] w-[330px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[20px]">“</p>
      </div>
    </div>
  );
}

function UserDetail3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="user detail">
      <a className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-white w-full" href="https://www.trustpilot.com/users/67ad6432616ded3ff63bd15e">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[20px] underline">Erika Patricia</p>
      </a>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-full">Product Marketing Associate at Phase</p>
    </div>
  );
}

function UserProfile6() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div className="absolute left-1/2 size-[42px] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage18} />
      </div>
    </div>
  );
}

function UserProfile7() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div className="absolute left-0 size-[40px] top-0" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[10px] py-0 relative shrink-0">
      <UserProfile6 />
      <UserProfile7 />
    </div>
  );
}

function User6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[43px] items-center relative shrink-0 w-full" data-name="User">
      <UserDetail3 />
      <Frame11 />
    </div>
  );
}

function User7() {
  return (
    <div className="h-[179px] relative rounded-[8px] shrink-0 w-full" data-name="User">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[12px] relative size-full">
          <Content7 />
          <User6 />
        </div>
      </div>
    </div>
  );
}

function UserRatings3() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col gap-[24px] h-[239px] items-start p-[8px] relative rounded-[16px] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] shrink-0 w-[370px]" data-name="User Ratings">
      <ReviewPlatformHeader3 />
      <User7 />
    </div>
  );
}

function Frame6() {
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

function Star3() {
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

function Stars3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Stars">
      {[...Array(5).keys()].map((_, i) => (
        <Star3 key={i} />
      ))}
    </div>
  );
}

function Rating4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="rating">
      <Stars3 />
    </div>
  );
}

function ReviewPlatformHeader4() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[354px]" data-name="Review Platform Header">
      <Frame6 />
      <Rating4 />
    </div>
  );
}

function Content8() {
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

function Content9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Content8 />
      <div className="absolute flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[29px] text-[rgba(255,255,255,0.4)] top-[14.5px] translate-y-[-50%] w-[330px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[20px]">“</p>
      </div>
    </div>
  );
}

function UserDetail4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="user detail">
      <a className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-white w-full" href="https://www.trustpilot.com/users/66e4479730ccea357053af98">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[20px] underline">Nicole Reed</p>
      </a>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-full">Partnerships Director</p>
    </div>
  );
}

function UserProfile8() {
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

function UserProfile9() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <UserProfile8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[10px] py-0 relative shrink-0">
      <UserProfile9 />
      <div className="mr-[-10px] relative shrink-0 size-[40px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
    </div>
  );
}

function User8() {
  return (
    <div className="content-stretch flex gap-[16px] h-[43px] items-center relative shrink-0 w-full" data-name="User">
      <UserDetail4 />
      <Frame7 />
    </div>
  );
}

function User9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="User">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
          <Content9 />
          <User8 />
        </div>
      </div>
    </div>
  );
}

function UserRatings4() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col gap-[24px] h-[239px] items-start p-[8px] relative rounded-[16px] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] shrink-0 w-[370px]" data-name="User Ratings">
      <ReviewPlatformHeader4 />
      <User9 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute h-[20px] left-[0.03px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[66.871px_20px] top-[-0.01px] w-[66.871px]" style={{ maskImage: `url('${imgGroup1321321339}')` }}>
      <div className="absolute inset-[-47.99%_-14.35%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.068 39.1972">
          <g filter="url(#filter0_f_38_4433)" id="Group 1321321339">
            <path d={svgPaths.p3a2d4c80} fill="var(--fill-0, #EA4335)" id="Vector" />
            <path d={svgPaths.pac66680} fill="var(--fill-0, #34A853)" id="Vector_2" />
            <path d={svgPaths.p2fc42a00} fill="var(--fill-0, #4285F4)" id="Vector_3" />
            <path d={svgPaths.p370fc580} fill="var(--fill-0, #FBBC05)" id="Vector_4" />
            <path d={svgPaths.p2b920400} fill="var(--fill-0, #EA4335)" id="Vector_5" />
            <path d={svgPaths.p347ed380} fill="var(--fill-0, #4285F4)" id="Vector_6" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="39.1972" id="filter0_f_38_4433" width="86.068" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_38_4433" stdDeviation="4.7993" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[0.03px] top-[-0.01px]">
      {[...Array(7).keys()].map((_, i) => (
        <Group4 key={i} />
      ))}
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute h-[20px] left-[0.03px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[66.871px_20px] mix-blend-multiply opacity-10 top-[-0.01px] w-[66.871px]" style={{ maskImage: `url('${imgGroup1321321339}')` }}>
      <div className="absolute inset-[-79.99%_-23.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.8662 51.9954">
          <g filter="url(#filter0_f_38_4425)" id="Group 1321321339">
            <path d={svgPaths.p24d88100} fill="var(--fill-0, #EA4335)" id="Vector" />
            <path d={svgPaths.p12b10d00} fill="var(--fill-0, #34A853)" id="Vector_2" />
            <path d={svgPaths.p2d1f8c00} fill="var(--fill-0, #4285F4)" id="Vector_3" />
            <path d={svgPaths.pd71ce80} fill="var(--fill-0, #FBBC05)" id="Vector_4" />
            <path d={svgPaths.pb291cf0} fill="var(--fill-0, #EA4335)" id="Vector_5" />
            <path d={svgPaths.p238aa980} fill="var(--fill-0, #4285F4)" id="Vector_6" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="51.9954" id="filter0_f_38_4425" width="98.8662" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_38_4425" stdDeviation="7.99883" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[0.03px] mix-blend-multiply top-[-0.01px]">
      {[...Array(7).keys()].map((_, i) => (
        <Group6 key={i} />
      ))}
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.871px]">
      <Group5 />
      <Group7 />
      <div className="absolute h-[14.855px] left-[52.8px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-52.768px_-0.332px] mask-size-[66.871px_20px] top-[0.32px] w-[2.303px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1321321339}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.30291 14.8548">
          <g id="Vector">
            <path d={svgPaths.p34124f0} fill="#34A853" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Rating5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[116px]" data-name="rating">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 20">
        <g id="rating">
          <path d={svgPaths.p942c500} fill="var(--fill-0, #FFC107)" id="Star 6" />
          <path d={svgPaths.p220d4870} fill="var(--fill-0, #FFC107)" id="Star 7" />
          <path d={svgPaths.p215dac00} fill="var(--fill-0, #FFC107)" id="Star 8" />
          <path d={svgPaths.p1fb96380} fill="var(--fill-0, #FFC107)" id="Star 9" />
          <path d={svgPaths.p28902740} fill="var(--fill-0, #FFC107)" id="Star 10" />
        </g>
      </svg>
    </div>
  );
}

function ReviewPlatformHeader5() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[354px]" data-name="Review Platform Header">
      <Frame1 />
      <Rating5 />
    </div>
  );
}

function Content10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] pr-0 py-0 relative w-full">
          <div className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">
            <p className="mb-0">Quick answers to questions, clear instructions and support throughout the cooperation 😌</p>
            <p>Dealing with Brainy was a pleasure. Thank you!We will be in touch for further</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Content10 />
      <div className="absolute flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[29px] text-[rgba(255,255,255,0.4)] top-[14.5px] translate-y-[-50%] w-[330px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[20px]">“</p>
      </div>
    </div>
  );
}

function UserDetail5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="user detail">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">Aleksandra Krasnoperova</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap">Sr. Global Supply Manager</p>
    </div>
  );
}

function UserProfile10() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div className="absolute left-[-2px] size-[44px] top-[-1.5px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
    </div>
  );
}

function UserProfile11() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div className="absolute left-[-3px] size-[46px] top-[-3px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="absolute left-0 size-[40px] top-0" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[10px] py-0 relative shrink-0">
      <UserProfile10 />
      <UserProfile11 />
    </div>
  );
}

function User10() {
  return (
    <div className="content-stretch flex gap-[16px] h-[43px] items-center relative shrink-0 w-full" data-name="User">
      <UserDetail5 />
      <Frame12 />
    </div>
  );
}

function User11() {
  return (
    <div className="h-[179px] relative rounded-[8px] shrink-0 w-full" data-name="User">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[12px] relative size-full">
          <Content11 />
          <User10 />
        </div>
      </div>
    </div>
  );
}

function UserRatings5() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col gap-[24px] h-[239px] items-start p-[8px] relative rounded-[16px] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] shrink-0 w-[370px]" data-name="User Ratings">
      <ReviewPlatformHeader5 />
      <User11 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute h-[20px] left-[0.03px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[66.871px_20px] top-[-0.01px] w-[66.871px]" style={{ maskImage: `url('${imgGroup1321321339}')` }}>
      <div className="absolute inset-[-47.99%_-14.35%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.068 39.1972">
          <g filter="url(#filter0_f_38_4433)" id="Group 1321321339">
            <path d={svgPaths.p3a2d4c80} fill="var(--fill-0, #EA4335)" id="Vector" />
            <path d={svgPaths.pac66680} fill="var(--fill-0, #34A853)" id="Vector_2" />
            <path d={svgPaths.p2fc42a00} fill="var(--fill-0, #4285F4)" id="Vector_3" />
            <path d={svgPaths.p370fc580} fill="var(--fill-0, #FBBC05)" id="Vector_4" />
            <path d={svgPaths.p2b920400} fill="var(--fill-0, #EA4335)" id="Vector_5" />
            <path d={svgPaths.p347ed380} fill="var(--fill-0, #4285F4)" id="Vector_6" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="39.1972" id="filter0_f_38_4433" width="86.068" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_38_4433" stdDeviation="4.7993" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[0.03px] top-[-0.01px]">
      {[...Array(7).keys()].map((_, i) => (
        <Group8 key={i} />
      ))}
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute h-[20px] left-[0.03px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[66.871px_20px] mix-blend-multiply opacity-10 top-[-0.01px] w-[66.871px]" style={{ maskImage: `url('${imgGroup1321321339}')` }}>
      <div className="absolute inset-[-79.99%_-23.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.8662 51.9954">
          <g filter="url(#filter0_f_38_4425)" id="Group 1321321339">
            <path d={svgPaths.p24d88100} fill="var(--fill-0, #EA4335)" id="Vector" />
            <path d={svgPaths.p12b10d00} fill="var(--fill-0, #34A853)" id="Vector_2" />
            <path d={svgPaths.p2d1f8c00} fill="var(--fill-0, #4285F4)" id="Vector_3" />
            <path d={svgPaths.pd71ce80} fill="var(--fill-0, #FBBC05)" id="Vector_4" />
            <path d={svgPaths.pb291cf0} fill="var(--fill-0, #EA4335)" id="Vector_5" />
            <path d={svgPaths.p238aa980} fill="var(--fill-0, #4285F4)" id="Vector_6" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="51.9954" id="filter0_f_38_4425" width="98.8662" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_38_4425" stdDeviation="7.99883" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[0.03px] mix-blend-multiply top-[-0.01px]">
      {[...Array(7).keys()].map((_, i) => (
        <Group10 key={i} />
      ))}
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.871px]">
      <Group9 />
      <Group11 />
      <div className="absolute h-[14.855px] left-[52.8px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-52.768px_-0.332px] mask-size-[66.871px_20px] top-[0.32px] w-[2.303px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1321321339}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.30291 14.8548">
          <g id="Vector">
            <path d={svgPaths.p34124f0} fill="#34A853" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Rating6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[116px]" data-name="rating">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 20">
        <g id="rating">
          <path d={svgPaths.p942c500} fill="var(--fill-0, #FFC107)" id="Star 6" />
          <path d={svgPaths.p220d4870} fill="var(--fill-0, #FFC107)" id="Star 7" />
          <path d={svgPaths.p215dac00} fill="var(--fill-0, #FFC107)" id="Star 8" />
          <path d={svgPaths.p1fb96380} fill="var(--fill-0, #FFC107)" id="Star 9" />
          <path d={svgPaths.p28902740} fill="var(--fill-0, #FFC107)" id="Star 10" />
        </g>
      </svg>
    </div>
  );
}

function ReviewPlatformHeader6() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[354px]" data-name="Review Platform Header">
      <Frame2 />
      <Rating6 />
    </div>
  );
}

function Content12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[24px] pr-0 py-0 relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">Helpful and super responsive!</p>
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Content12 />
      <div className="absolute flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[29px] text-[rgba(255,255,255,0.4)] top-[14.5px] translate-y-[-50%] w-[330px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[20px]">“</p>
      </div>
    </div>
  );
}

function UserDetail6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="user detail">
      <a className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" href="https://share.google/WqZYxOS1UwaboAnID">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[20px] underline">Julie Garcia</p>
      </a>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap">Vice President</p>
    </div>
  );
}

function UserProfile12() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div className="absolute left-[-2px] size-[44px] top-[-1.5px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage15} />
      </div>
    </div>
  );
}

function UserProfile13() {
  return (
    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]" data-name="user profile">
      <div className="absolute left-[-3px] size-[46px] top-[-3px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="absolute left-0 size-[40px] top-0" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage16} />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[10px] py-0 relative shrink-0">
      <UserProfile12 />
      <UserProfile13 />
    </div>
  );
}

function User12() {
  return (
    <div className="content-stretch flex gap-[16px] h-[43px] items-center relative shrink-0 w-full" data-name="User">
      <UserDetail6 />
      <Frame13 />
    </div>
  );
}

function User13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="User">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
          <Content13 />
          <User12 />
        </div>
      </div>
    </div>
  );
}

function UserRatings6() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col gap-[24px] h-[239px] items-start p-[8px] relative rounded-[16px] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] shrink-0 w-[370px]" data-name="User Ratings">
      <ReviewPlatformHeader6 />
      <User13 />
    </div>
  );
}

export default function TestimonialsFirstRow() {
  return (
    <div className="content-stretch flex gap-[96px] items-start relative size-full" data-name="Testimonials - First Row">
      <UserRatings />
      <UserRatings1 />
      <UserRatings2 />
      <UserRatings3 />
      <UserRatings4 />
      <UserRatings5 />
      <UserRatings6 />
    </div>
  );
}