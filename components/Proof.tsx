"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";

// Import SVG paths from Figma
import svgPathsFirstRow from "../imports/svg-ka3gxzrk7r";
import svgPathsSecondRow from "../imports/svg-6x17qzztl0";
import svgPathsOld from "../imports/svg-dl67tzunnq";

// Import images for first row testimonials
const imgImage6Kwaku = "/assets/eb6d18f53af6aaa4ca4ba41c0dd33753de948c06.png";
const imgImage12Kwaku = "/assets/499fa9eb8cb9670c9da4821fd8d1a4e7d4dca374.png";
const imgImage7Alex = "/assets/776a7c2889402bb13a67ca445df49166a25a8b95.png";
const imgImage13Alex = "/assets/a1f7cbe7bc945f61cedd3728ff8826dc1525f6d1.png";
const imgImage8Tamer = "/assets/6aa25ce958444bae79943a5f7900cfb38a97eecc.png";
const imgImage9Tamer = "/assets/d29e042c84a17cb0950712f4f098a45b8b6717cf.png";
const imgImage18Erika = "/assets/afd496d4331d780eff58f719d6176f7091f745ec.png";
const imgImage10Erika = "/assets/e4f9a8c1a7e08476e105f32763dc5941064d116b.png";
const imgUserProfile = "/assets/4b125dca3d22c8eba07c515ad92fba11cae08142.png";
const imgUserProfile1 = "/assets/affd8568bb1349c59e4a4dc8ea893b1346f41064.png";
const imgUserProfile2 = "/assets/1af2086220affecd5f498aeca93f64918a91bf86.png";
const imgImage4 = "/assets/221b4953f1c66ed33c4dec701c5dcab7214962b3.png";
const imgImage17Nicole = "/assets/2c4d5a567fa8448169523684e4f0927bc45ce22a.png";
const imgImage11Aleksandra = "/assets/bf1f0a9931d0c1854adfd1f4843963dc3dcd7a5e.png";
const imgImage14Aleksandra = "/assets/0c291b20f521066143425f1aec0969e21ad096fc.png";
const imgImage15Julie = "/assets/3cdbd10b67feee50c5dd4cacd063c672345eb90a.png";
const imgImage16Julie = "/assets/ee95bbc1af69fccb44dba8c4948191f29a7cb2e8.png";
// Import images for second row testimonials
const imgImage6Madi = "/assets/0d5de5cf1c85a1dee68adfac8366a1f250336ed0.png";
const imgImage7Madi = "/assets/eb6d18f53af6aaa4ca4ba41c0dd33753de948c06.png";
const imgImage12Madi = "/assets/461703f1f98599cf6fc456097652c5b6f1b8aa6c.png";
const imgImage8Jamila = "/assets/4cea00236304da52a1ba9659667a12b1a9d2338c.png";
const imgImage9Jamila = "/assets/204e03bc1a7c0b3bda3a932a8ef63b0aacc8f444.png";
const imgImage10Sebastian = "/assets/9d7089792861332bcedd48007de6d96c6bf64023.png";
const imgImage16Sebastian = "/assets/43994099641f944f65e709f83cf65f4b6dbd9588.png";
const imgImage11Daria = "/assets/4525bb2ec8b1dcf9ec815aa105492ab862138c13.png";
const imgImage13Daria = "/assets/f50146505edd32012d0cb6862ce9220480480f8c.png";
const imgImage14Amr = "/assets/594b7b499b93180bb0f4ef168dfcb51a3bd56897.png";
const imgImage15Amr = "/assets/6f81533fcd7e8660562516cf30b57c9ed643569e.png";
const imgImage17Aleena = "/assets/717a149ff2f930c2cab10edadc6fc17e28378aed.png";
const imgImage18Aleena = "/assets/5a13c38ea1589171af025d2b579121c1bf213e25.png";
import { imgGroup1321321339 } from "../imports/svg-wyydm";
import { imgGroup1321321339 as imgGroup1321321339Second } from "../imports/svg-n3tdm";

interface TestimonialCardProps {
  platform: 'google' | 'trustpilot';
  quote: string;
  name: string;
  title: string;
  link?: string;
  image1: string;
  image2: string;
  specialNicole?: boolean;
  companyLogo?: string;
  isShortQuote?: boolean;
}

type TestimonialData = Omit<TestimonialCardProps, 'platform'> & {
  platform: 'google' | 'trustpilot';
};

// Testimonial Card Component matching Figma design
function TestimonialCard({ platform, quote, name, title, link, image1, image2, specialNicole, companyLogo, isShortQuote }: TestimonialCardProps) {
  const svgPaths = svgPathsFirstRow;
  
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col gap-[24px] h-[239px] items-start p-[8px] relative rounded-[16px] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] shrink-0 w-[370px] mr-[24px]">
      {/* Review Platform Header */}
      <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[354px]">
        {platform === 'google' ? (
          <>
            {/* Google Logo */}
            <div className="h-[20px] relative shrink-0 w-[66.871px]">
              <div className="absolute contents left-[0.03px] top-[-0.01px]">
                {[...Array(7).keys()].map((_, i) => (
                  <div key={i} className="absolute h-[20px] left-[0.03px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[66.871px_20px] top-[-0.01px] w-[66.871px]" style={{ maskImage: `url('${imgGroup1321321339}')` }}>
                    <div className="absolute inset-[-47.99%_-14.35%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.068 39.1972">
                        <g filter="url(#filter0_f_38_4433)" id="Group 1321321339">
                          <path d={svgPaths.p3a2d4c80} fill="#EA4335" />
                          <path d={svgPaths.pac66680} fill="#34A853" />
                          <path d={svgPaths.p2fc42a00} fill="#4285F4" />
                          <path d={svgPaths.p370fc580} fill="#FBBC05" />
                          <path d={svgPaths.p2b920400} fill="#EA4335" />
                          <path d={svgPaths.p347ed380} fill="#4285F4" />
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
                ))}
              </div>
              <div className="absolute contents left-[0.03px] mix-blend-multiply top-[-0.01px]">
                {[...Array(7).keys()].map((_, i) => (
                  <div key={i} className="absolute h-[20px] left-[0.03px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[66.871px_20px] mix-blend-multiply opacity-10 top-[-0.01px] w-[66.871px]" style={{ maskImage: `url('${imgGroup1321321339}')` }}>
                    <div className="absolute inset-[-79.99%_-23.92%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.8662 51.9954">
                        <g filter="url(#filter0_f_38_4425)" id="Group 1321321339">
                          <path d={svgPaths.p24d88100} fill="#EA4335" />
                          <path d={svgPaths.p12b10d00} fill="#34A853" />
                          <path d={svgPaths.p2d1f8c00} fill="#4285F4" />
                          <path d={svgPaths.pd71ce80} fill="#FBBC05" />
                          <path d={svgPaths.pb291cf0} fill="#EA4335" />
                          <path d={svgPaths.p238aa980} fill="#4285F4" />
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
                ))}
              </div>
              <div className="absolute h-[14.855px] left-[52.8px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-52.768px_-0.332px] mask-size-[66.871px_20px] top-[0.32px] w-[2.303px]" style={{ maskImage: `url('${imgGroup1321321339}')` }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.30291 14.8548">
                  <path d={svgPaths.p34124f0} fill="#34A853" />
                </svg>
              </div>
            </div>
            {/* Google Stars */}
            <div className="h-[20px] relative shrink-0 w-[116px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 20">
                <path d={svgPaths.p942c500} fill="#FFC107" />
                <path d={svgPaths.p220d4870} fill="#FFC107" />
                <path d={svgPaths.p215dac00} fill="#FFC107" />
                <path d={svgPaths.p1fb96380} fill="#FFC107" />
                <path d={svgPaths.p28902740} fill="#FFC107" />
              </svg>
            </div>
          </>
        ) : (
          <>
            {/* Trustpilot Logo */}
            <div className="content-stretch flex gap-[3.077px] h-[20px] items-center justify-center relative shrink-0 w-[75.66px]">
              <div className="h-[18.462px] relative shrink-0 w-[19.507px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5065 18.4615">
                  <path d={svgPaths.p188e88f2} fill="#219653" />
                </svg>
              </div>
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[12.308px] text-nowrap text-white">
                Trustpilot
              </p>
            </div>
            {/* Trustpilot Stars */}
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
              {[...Array(5).keys()].map((_, i) => (
                <div key={i} className="relative shrink-0 size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p1d427300} fill="#219653" />
                  </svg>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content with border */}
      <div className={`relative rounded-[8px] shrink-0 w-full ${isShortQuote ? 'basis-0 grow min-h-px min-w-px' : 'h-[179px]'}`}>
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="size-full">
          <div className={`content-stretch flex flex-col items-start p-[12px] relative size-full ${isShortQuote ? 'justify-between' : 'gap-[32px]'}`}>
            {/* Quote */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="size-full">
                  <div className="content-stretch flex flex-col items-start pl-[24px] pr-0 py-0 relative w-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">
                      {quote}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[29px] text-[rgba(255,255,255,0.4)] top-[14.5px] translate-y-[-50%] w-[330px]">
                <p className="leading-[20px]">"</p>
              </div>
            </div>
            
            {/* User Info */}
            <div className="content-stretch flex gap-[16px] h-[43px] items-center relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
                {link ? (
                  <a className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[16px] text-white w-full" href={link}>
                    <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[20px] underline">{name}</p>
                  </a>
                ) : (
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[16px] text-white w-full">
                    {name}
                  </p>
                )}
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-full">
                  {title}
                </p>
              </div>
              <div className="content-stretch flex items-center pl-0 pr-[10px] py-0 relative shrink-0">
                {specialNicole ? (
                  <>
                    {/* Nicole's special composite profile image */}
                    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]">
                      <div className="absolute left-0 overflow-clip rounded-[40px] size-[40px] top-0">
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[40px]">
                          <div className="absolute bg-[#811ea1] inset-0 rounded-[40px]" />
                          <Image alt="" fill sizes="40px" className="max-w-none object-cover rounded-[40px]" src={imgUserProfile} />
                          <Image alt="" fill sizes="40px" className="max-w-none object-cover rounded-[40px]" src={imgUserProfile1} />
                          <Image alt="" fill sizes="40px" className="max-w-none object-cover rounded-[40px]" src={imgUserProfile2} />
                        </div>
                        <div className="absolute left-[calc(50%+0.5px)] size-[41px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                          <Image alt="" fill sizes="41px" className="max-w-none object-cover pointer-events-none" src={imgImage4} />
                        </div>
                      </div>
                    </div>
                    {/* WIX Logo */}
                    <div className="mr-[-10px] relative shrink-0 size-[40px]">
                      <Image alt="" fill sizes="40px" className="max-w-none object-cover pointer-events-none rounded-[40px]" src={image2} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]">
                      <Image alt="" fill sizes="40px" className="max-w-none object-cover pointer-events-none" src={image1} />
                    </div>
                    <div className="mr-[-10px] overflow-clip relative rounded-[40px] shrink-0 size-[40px]">
                      <Image alt="" fill sizes="40px" className="max-w-none object-cover pointer-events-none" src={image2} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Rating Platform Badges
function RatingPlatforms() {
  const svgPaths = svgPathsOld;
  
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[24px] sm:gap-[48px] md:gap-[96px] items-center justify-center relative shrink-0 w-full">
      {/* Google Rating Badge */}
      <div className="bg-[#1e1e1e] content-stretch flex gap-[14.978px] items-center p-[11.982px] relative rounded-[16px] shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0">
        <div className="content-stretch flex flex-col gap-[7.988px] items-center justify-center px-[1.997px] py-[7.988px] relative shrink-0">
          <p className="font-['Inter:Bold',sans-serif] font-bold h-[31.953px] leading-[32.26px] not-italic relative shrink-0 text-[#1c54e3] text-[43.013px] text-center w-[69.397px]">5</p>
          <div className="content-stretch flex gap-[1.997px] items-start relative shrink-0">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="relative shrink-0 size-[19.97px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath={`url(#clip0_star_${i})`}>
                    <path d={svgPaths.p3cde700} fill="#FFB300" />
                  </g>
                  <defs>
                    <clipPath id={`clip0_star_${i}`}>
                      <rect fill="white" height="19.9704" width="19.9704" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex flex-col gap-[7.988px] h-full items-center justify-center p-[4px] relative rounded-[8px] shrink-0">
            <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[0.499px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="content-stretch flex flex-col gap-[3.994px] items-center not-italic relative shrink-0 text-center text-nowrap">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.978px] relative shrink-0 text-[11.982px] text-white">Rating</p>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[7.489px] relative shrink-0 text-[7.988px] text-[rgba(255,255,255,0.7)]">
                Based on <span className="font-bold">20 reviews</span>
              </p>
            </div>
            <div className="h-[16px] relative shrink-0 w-[53.497px]">
              <Image
                src={imgGroup1321321339}
                alt="Google"
                fill
                sizes="54px"
                unoptimized
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trustpilot Rating Badge */}
      <div className="bg-[#1e1e1e] content-stretch flex gap-[14.978px] items-center justify-center p-[11.982px] relative rounded-[16px] shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0">
        <div className="content-stretch flex flex-col gap-[7.988px] items-center justify-center px-[1.997px] py-[7.988px] relative shrink-0">
          <p className="font-['Inter:Bold',sans-serif] font-bold h-[31.953px] leading-[32.26px] not-italic relative shrink-0 text-[43.013px] text-white w-[69.397px]">4.7</p>
          <div className="content-stretch flex gap-[1.96px] items-start relative shrink-0">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="relative shrink-0 size-[19.601px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6006 19.6006">
                  <rect fill="#219653" height="19.6006" width="19.6006" />
                  <path d={svgPaths.p17d85180} fill="#1E1E1E" />
                </svg>
              </div>
            ))}
            <div className="relative shrink-0 size-[19.601px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6006 19.6006">
                <rect fill="url(#paint0_linear_half)" height="19.6006" width="19.6006" />
                <path d={svgPaths.p17d85180} fill="#1E1E1E" />
                <defs>
                  <linearGradient id="paint0_linear_half" x1="0" x2="19.6006" y1="9.80028" y2="9.80028">
                    <stop offset="0.5" stopColor="#219653" />
                    <stop offset="0.5001" stopColor="#219653" stopOpacity="0" />
                    <stop offset="0.5002" stopColor="#D9D9D9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex flex-col gap-[7.988px] h-full items-center justify-center p-[4px] relative rounded-[8px] shrink-0">
            <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[0.499px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="content-stretch flex flex-col gap-[3.994px] items-center not-italic relative shrink-0 text-center text-nowrap">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.978px] relative shrink-0 text-[11.982px] text-white">Excellent</p>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[7.489px] relative shrink-0 text-[7.988px] text-[rgba(255,255,255,0.7)]">
                Based on <span className="font-bold">28 reviews</span>
              </p>
            </div>
            <div className="content-stretch flex gap-[1.997px] items-center justify-center relative shrink-0">
              <div className="h-[11.982px] relative shrink-0 w-[12.66px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
                  <path d={svgPaths.p6fb0bf0} fill="#219653" />
                </svg>
              </div>
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[12.981px] relative shrink-0 text-[7.988px] text-nowrap text-white">
                Trustpilot
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Proof() {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  
  // First row testimonials (from TestimonialsFirstRow.tsx)
  const firstRowTestimonials: TestimonialData[] = [
    {
      platform: 'trustpilot' as const,
      quote: 'Awesome team and really dedicated to what they do! Very friendly and creative!!',
      name: 'Kwaku Amprako',
      title: 'Founder of Akrivi',
      link: 'https://www.trustpilot.com/users/66faa360710e8b611c5bc33a',
      image1: imgImage6Kwaku,
      image2: imgImage12Kwaku,
      isShortQuote: true
    },
    {
      platform: 'google' as const,
      quote: 'Incredible work provided',
      name: 'Alex Gonzalez',
      title: 'Confluent',
      link: '',
      image1: imgImage7Alex,
      image2: imgImage13Alex,
      isShortQuote: true
    },
    {
      platform: 'trustpilot' as const,
      quote: 'Our collaboration with Brainy Circles resulted in a 2× increase in signups. Their strategic approach and execution had a direct impact on our business growth.',
      name: 'Tamer Okail',
      title: 'Co-Founder QoQo.ai',
      link: 'https://www.trustpilot.com/users/66f6a7294de07b7f41539725',
      image1: imgImage8Tamer,
      image2: imgImage9Tamer,
      isShortQuote: false
    },
    {
      platform: 'trustpilot' as const,
      quote: `Based on these positive outcomes, we're excited about the possibility of working together on future projects. Your combination of quality content creation...`,
      name: 'Erika Patricia',
      title: 'Product Marketing Associate at Phase',
      link: 'https://www.trustpilot.com/users/67ad6432616ded3ff63bd15e',
      image1: imgImage18Erika,
      image2: imgImage10Erika,
      isShortQuote: false
    },
    {
      platform: 'trustpilot' as const,
      quote: 'Super easy to work with and communications was great!',
      name: 'Nicole Reed',
      title: 'Partnerships Director',
      link: 'https://www.trustpilot.com/users/66e4479730ccea357053af98',
      image1: '',
      image2: imgImage17Nicole,
      specialNicole: true,
      isShortQuote: true
    },
    {
      platform: 'google' as const,
      quote: 'Quick answers to questions, clear instructions Detailed throughout the cooperation 😊 Delivery was on time was a pleasure. Thank you so much! Highly recommended 👍',
      name: 'Aleksandra Krasnoperova',
      title: 'Sr. Global Supply Manager',
      link: '',
      image1: imgImage11Aleksandra,
      image2: imgImage14Aleksandra,
      isShortQuote: false
    },
    {
      platform: 'google' as const,
      quote: 'Helpful and super responsive!',
      name: 'Julie Garcia',
      title: 'Vice President',
      link: 'https://share.google/WqZYxOS1UwaboAnID',
      image1: imgImage15Julie,
      image2: imgImage16Julie,
      isShortQuote: true
    }
  ];
  
  // Second row testimonials (from SecondRow.tsx)
  const secondRowTestimonials: TestimonialData[] = [
    {
      platform: 'google' as const,
      quote: `I'm very excited about our cooperation. The team's efficiency and professionalism have exceeded my expectations, and I highly recommend their services.`,
      name: 'Madi McCreesh',
      title: 'Digital Designer',
      link: 'https://share.google/XRrOjbTwuBfu8Vt73',
      image1: imgImage6Madi,
      image2: imgImage12Madi,
      isShortQuote: false
    },
    {
      platform: 'trustpilot' as const,
      quote: 'The branding solutions provided were not only visually compelling but also aligned perfectly with our company\'s values and market positioning.',
      name: 'Jamila Ahmadova',
      title: 'Coordinator',
      link: 'https://www.trustpilot.com/reviews/68dd270444da9921fa5e6ce4',
      image1: imgImage8Jamila,
      image2: imgImage9Jamila,
      isShortQuote: false
    },
    {
      platform: 'trustpilot' as const,
      quote: 'Kyle and his Team perfectly captured the essence of both brands with creativity and professionalism. The designs are unique, modern, and reflect exactly what...',
      name: 'Sébastien Maigrot',
      title: 'Founder CEO of Artemis',
      link: 'https://www.trustpilot.com/users/66ffb033caacfed4b049b0c8',
      image1: imgImage10Sebastian,
      image2: imgImage16Sebastian,
      isShortQuote: false
    },
    {
      platform: 'trustpilot' as const,
      quote: 'Easy submission via special form, good and professional communication. It is not our first time working with UX Brainy; every time, the job was done according...',
      name: 'Daria Nuykina',
      title: 'Head of Marketing at Clay.Global',
      link: 'https://www.trustpilot.com/users/6720e94096b7944421eb2305',
      image1: imgImage11Daria,
      image2: imgImage13Daria,
      isShortQuote: false
    },
    {
      platform: 'google' as const,
      quote: 'Super professional and Efficient!',
      name: 'Amr Eid',
      title: 'Senior Manager',
      link: 'https://share.google/XPX9sOYj2eQ1HBEIY',
      image1: imgImage14Amr,
      image2: imgImage15Amr,
      isShortQuote: true
    },
    {
      platform: 'trustpilot' as const,
      quote: 'The whole process was easy and the constant support of the team to clear the doubts was helpful.',
      name: 'Aleena Sultana',
      title: 'Brand Manager',
      link: 'https://www.trustpilot.com/users/67af7fe05aa6b35da78b36e6',
      image1: imgImage17Aleena,
      image2: imgImage18Aleena,
      isShortQuote: true
    }
  ];
  
  // Double for seamless loop
  const firstRowCards = [...firstRowTestimonials, ...firstRowTestimonials];
  const secondRowCards = [...secondRowTestimonials, ...secondRowTestimonials];
  
  return (
    <section
      className="relative py-24 sm:py-28 md:py-32 lg:py-36 xl:py-40"
      style={{ 
        background: '#2c2c2c'
      }}
      aria-labelledby="proof-heading"
    >
      <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Heading */}
        <motion.div
          className="content-stretch flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center justify-center max-w-[1200px] relative shrink-0 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          <p 
            id="proof-heading"
            className="font-['Inter:Medium',sans-serif] font-medium leading-tight not-italic relative shrink-0 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-center text-white tracking-[0.3711px] px-4"
          >
            {language === 'ar' ? 'مثبت عالمياً. بُني لعمان.' : 'Proven globally. Built for Oman.'}
          </p>
          
          {/* Rating Platforms */}
          <RatingPlatforms />
        </motion.div>
      </div>

      {/* Testimonials Marquee - Full Width */}
      <div 
        className="w-full overflow-hidden" 
        style={{ marginTop: '48px', marginBottom: '48px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* First Row - Right to Left */}
        <div className="overflow-hidden mb-[24px]">
          <div 
            className="flex marquee-rtl"
            style={{ 
              animationName: 'marqueeRTL',
              animationDuration: '40s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationPlayState: isHovered ? 'paused' : 'running',
              width: 'max-content'
            }}
          >
            {firstRowCards.map((testimonial, index) => (
              <TestimonialCard 
                key={`row1-${index}`}
                platform={testimonial.platform}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                link={testimonial.link}
                image1={testimonial.image1}
                image2={testimonial.image2}
                specialNicole={testimonial.specialNicole}
                companyLogo={testimonial.companyLogo}
                isShortQuote={testimonial.isShortQuote}
              />
            ))}
          </div>
        </div>

        {/* Second Row - Left to Right */}
        <div className="overflow-hidden">
          <div 
            className="flex marquee-ltr"
            style={{ 
              animationName: 'marqueeLTR',
              animationDuration: '40s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationPlayState: isHovered ? 'paused' : 'running',
              width: 'max-content'
            }}
          >
            {secondRowCards.map((testimonial, index) => (
              <TestimonialCard 
                key={`row2-${index}`}
                platform={testimonial.platform}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                link={testimonial.link}
                image1={testimonial.image1}
                image2={testimonial.image2}
                isShortQuote={testimonial.isShortQuote}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PrimaryButton href="#assessment">
            {language === 'ar' ? 'احجز تقييم رقمي مجاني' : 'Book a free digital assessment'}
          </PrimaryButton>
        </motion.div>
      </div>

      {/* Marquee Animation Styles */}
      <style>{`
        @keyframes marqueeRTL {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeLTR {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-rtl,
        .marquee-ltr {
          will-change: transform;
        }
      `}</style>
    </section>
  );
}