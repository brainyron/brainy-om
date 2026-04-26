"use client";
import svgPaths from "./svg-efmibgdsly";
const imgAvatar = "/assets/2048d278b42a915edecb907b44b6c3fbb1f25fd2.png";
import { imgGroup } from "./svg-m0eko";

function Group() {
  return (
    <div className="h-[35.355px] relative shrink-0 w-[47.054px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 36">
        <g id="Group">
          <path d={svgPaths.p14c22a80} data-figma-bg-blur-radius="25.4718" fill="var(--fill-0, white)" fillOpacity="0.4" id="Path 50" />
          <path d={svgPaths.p3f993780} data-figma-bg-blur-radius="25.4718" fill="var(--fill-0, white)" fillOpacity="0.2" id="Path 47" />
          <path d={svgPaths.p1a5c52c0} data-figma-bg-blur-radius="25.4718" fill="var(--fill-0, white)" fillOpacity="0.6" id="Path 48" />
          <path d={svgPaths.p29cb1780} data-figma-bg-blur-radius="25.4718" fill="var(--fill-0, white)" fillOpacity="0.8" id="Path 49" />
          <path d={svgPaths.p2bfe0c00} data-figma-bg-blur-radius="25.4718" fill="var(--fill-0, #F6F7F9)" id="Path 46" />
        </g>
        <defs>
          <clipPath id="bgblur_0_4_4501_clip_path" transform="translate(18.4586 19.8078)">
            <path d={svgPaths.p14c22a80} />
          </clipPath>
          <clipPath id="bgblur_1_4_4501_clip_path" transform="translate(25.4718 6.35177)">
            <path d={svgPaths.p3f993780} />
          </clipPath>
          <clipPath id="bgblur_2_4_4501_clip_path" transform="translate(9.82927 25.4718)">
            <path d={svgPaths.p1a5c52c0} />
          </clipPath>
          <clipPath id="bgblur_3_4_4501_clip_path" transform="translate(5.52251 19.8165)">
            <path d={svgPaths.p29cb1780} />
          </clipPath>
          <clipPath id="bgblur_4_4_4501_clip_path" transform="translate(5.48116 6.33063)">
            <path d={svgPaths.p2bfe0c00} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Sidebar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Sidebar">
          <path d={svgPaths.p18f3be00} id="Icon" stroke="var(--stroke-0, #B9B9BA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Head() {
  return (
    <div className="relative shrink-0 w-full" data-name="Head">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-0 relative w-full">
          <Group />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[20px] pt-[10px] px-0 relative shrink-0 w-full" data-name="Logo">
      <Head />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-0.8px_0_0_0]" style={{ "--stroke-0": "rgba(12, 13, 16, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 217 1">
            <path d={svgPaths.p1fac6200} fill="var(--stroke-0, #0C0D10)" id="Line" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Table">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Table">
          <path d={svgPaths.p3cc96c00} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[#3a3a3b] relative rounded-[20px] shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[#747476] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[6px] relative w-full">
          <Table />
          <p className="font-['outfit:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap" dir="auto">
            Dashboard
          </p>
        </div>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="User">
          <path d={svgPaths.p39e64980} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[6px] relative w-full">
          <User />
          <p className="font-['outfit:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap" dir="auto">
            Accounts
          </p>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Card">
          <path d={svgPaths.p236a1900} id="Vector" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[6px] relative w-full">
          <Card />
          <p className="font-['outfit:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap" dir="auto">
            Cards
          </p>
        </div>
      </div>
    </div>
  );
}

function Loan() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Loan">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Loan">
          <path d={svgPaths.p2f371c00} id="Vector" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item3() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[6px] relative w-full">
          <Loan />
          <p className="font-['outfit:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap" dir="auto">{`Loans & Facilities`}</p>
        </div>
      </div>
    </div>
  );
}

function TrendingUp() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Trending up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Trending up">
          <path d={svgPaths.p32b1280} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item4() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[6px] relative w-full">
          <TrendingUp />
          <p className="font-['outfit:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap" dir="auto">
            Trade Finance
          </p>
        </div>
      </div>
    </div>
  );
}

function BarChart() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Bar chart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Bar chart">
          <path d={svgPaths.p3cdd4e00} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item5() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[6px] relative w-full">
          <BarChart />
          <p className="font-['outfit:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap" dir="auto">{`Statements & Reports`}</p>
        </div>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Grid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Grid">
          <g id="Icon">
            <path d={svgPaths.p1207200} stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p259afa80} stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1a05d900} stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p4ffcd00} stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Item6() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[6px] relative w-full">
          <Grid />
          <p className="font-['outfit:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap" dir="auto">{`Services & Tools`}</p>
        </div>
      </div>
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Items">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
    </div>
  );
}

function General() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="General">
      <Items />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-0.8px_0_0_0]" style={{ "--stroke-0": "rgba(12, 13, 16, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 217 1">
            <path d={svgPaths.p1fac6200} fill="var(--stroke-0, #0C0D10)" id="Line" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Transaction() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Transaction">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Transaction">
          <path d={svgPaths.p375ca30} id="Vector" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item7() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[6px] relative w-full">
          <Transaction />
          <p className="font-['outfit:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap" dir="auto">
            Transfers
          </p>
        </div>
      </div>
    </div>
  );
}

function CreditCard() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Credit card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Credit card">
          <path d={svgPaths.p7d55200} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item8() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[6px] relative w-full">
          <CreditCard />
          <p className="font-['outfit:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap" dir="auto">{`Payroll & Salaries`}</p>
        </div>
      </div>
    </div>
  );
}

function Bill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Bill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Bill">
          <path d={svgPaths.p3ffe9800} fill="var(--stroke-0, #F6F7F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item9() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[6px] relative w-full">
          <Bill />
          <p className="font-['outfit:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap" dir="auto">
            Bill Payments
          </p>
        </div>
      </div>
    </div>
  );
}

function Items1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Items">
      <Item7 />
      <Item8 />
      <Item9 />
    </div>
  );
}

function Payments() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Payments">
      <Items1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-0.8px_0_0_0]" style={{ "--stroke-0": "rgba(12, 13, 16, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 217 1">
            <path d={svgPaths.p1fac6200} fill="var(--stroke-0, #0C0D10)" id="Line" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Help circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_4_4490)" id="Help circle">
          <path d={svgPaths.p2a852000} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_4_4490">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item10() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[6px] relative w-full">
          <HelpCircle />
          <p className="font-['outfit:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap" dir="auto">
            Help
          </p>
        </div>
      </div>
    </div>
  );
}

function MessageSquare() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Message square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Message square">
          <path d={svgPaths.p383b2000} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item11() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[6px] relative w-full">
          <MessageSquare />
          <p className="font-['outfit:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap" dir="auto">
            Feedback
          </p>
        </div>
      </div>
    </div>
  );
}

function Items2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Items">
      <Item10 />
      <Item11 />
    </div>
  );
}

function Support() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Support">
      <Items2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Menu">
      <General />
      <Payments />
      <Support />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[48px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgAvatar} />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center not-italic relative shrink-0 text-nowrap" data-name="Name">
      <p className="font-['outfit:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#f6f7f9] text-[16px]" dir="auto">
        Ahmet Yavari
      </p>
      <p className="font-['outfit:Regular',sans-serif] leading-[18px] relative shrink-0 text-[#b9b9ba] text-[14px]" dir="auto">
        Manager
      </p>
    </div>
  );
}

function Profile() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Profile">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[10px] relative w-full">
          <Avatar />
          <Name />
        </div>
      </div>
    </div>
  );
}

function Theme() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Theme">
      <Profile />
    </div>
  );
}

function Sidebar1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between overflow-clip relative shrink-0 w-[217px]" data-name="Sidebar">
      <Logo />
      <Menu />
      <Theme />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chevron right">
          <path d="M7.5 15L12.5 10L7.5 5" id="Icon" stroke="var(--stroke-0, #7F8081)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center pb-0 pt-[3px] px-0 relative shrink-0" data-name="Icon">
      <ChevronRight />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Breadcrumb">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center px-[8px] py-0 relative w-full">
          <p className="font-['outfit:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7f8081] text-[18px] text-nowrap" dir="auto">
            Home
          </p>
          <Icon />
          <p className="font-['outfit:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f6f7f9] text-[18px] text-nowrap" dir="auto">
            Dashboard
          </p>
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Search">
          <path d={svgPaths.p272bfa00} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Icone() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(23,24,27,0.7)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[38px]" data-name="Icone">
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Search />
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Bell">
          <path d={svgPaths.p27e72a00} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Icone1() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(23,24,27,0.7)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[38px]" data-name="Icone">
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Bell />
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Action">
      <Icone />
      <Icone1 />
      <div className="absolute left-[69px] size-[9px] top-[9px]" data-name="Notif">
        <div className="absolute inset-[-16.67%]" style={{ "--fill-0": "rgba(237, 81, 0, 1)", "--stroke-0": "rgba(23, 24, 27, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="var(--fill-0, #ED5100)" id="Notif" r="5.25" stroke="var(--stroke-0, #17181B)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MenuAction() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[610px]" data-name="Menu Action">
      <Action />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-[#0b0c0f] relative rounded-[20px] shrink-0 w-full" data-name="TopBar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Breadcrumb />
          <MenuAction />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#0c0d10] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[28.973px] relative shrink-0 w-[30px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 29">
        <g id="Icon">
          <path d={svgPaths.p8418080} fill="url(#paint0_linear_4_2858)" id="Vector" />
          <path d={svgPaths.paff1380} fill="url(#paint1_linear_4_2858)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_2858" x1="30" x2="7.39718" y1="19.8293" y2="19.8293">
            <stop stopColor="#A2D28A" />
            <stop offset="1" stopColor="#39834D" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_4_2858" x1="7.99382e-07" x2="22.6028" y1="9.14416" y2="9.14416">
            <stop stopColor="#A2D28A" />
            <stop offset="1" stopColor="#39834D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.7)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[60px]" data-name="Icon">
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Icon1 />
    </div>
  );
}

function Item12() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(58,58,59,0.3)] grow min-h-px min-w-px relative rounded-[28px] shrink-0" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[10px] relative w-full">
          <Icon2 />
          <div className="basis-0 flex flex-col font-['outfit:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f6f7f9] text-[16px]">
            <p className="leading-[22px]" dir="auto">
              New Transfer
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="[grid-area:1_/_1] bg-[#4875b7] h-[21.325px] ml-[14.1px] mt-0 rounded-[2.096px] w-[15.904px]" data-name="Rectangle" />
      <div className="[grid-area:1_/_1] bg-[#7fa3d8] h-[21.325px] ml-[6.87px] mt-[3.98px] rounded-[2.096px] w-[15.904px]" data-name="Rectangle" />
      <div className="[grid-area:1_/_1] bg-[#6f97d3] h-[21.325px] mix-blend-screen ml-0 mt-[8.31px] rounded-[2.096px] w-[15.904px]" data-name="Rectangle" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.7)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[60px]" data-name="Icon">
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Icon3 />
    </div>
  );
}

function Item13() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(58,58,59,0.3)] grow min-h-px min-w-px relative rounded-[28px] shrink-0" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[10px] relative w-full">
          <Icon4 />
          <div className="basis-0 flex flex-col font-['outfit:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f6f7f9] text-[16px]">
            <p className="leading-[22px]" dir="auto">
              Create Payroll
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function Icon5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="[grid-area:1_/_1] h-[16.765px] ml-0 mt-0 relative w-[30px]">
        <div className="absolute inset-[0_2.89%_2.04%_2.75%]" style={{ "--fill-0": "rgba(249, 193, 109, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 17">
            <path d={svgPaths.p3ba0fb00} fill="var(--fill-0, #F9C16D)" id="Vector 6" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[16.765px] ml-0 mt-[8.82px] relative w-[30px]">
        <div className="absolute inset-[0_2.89%_2.04%_2.75%]" style={{ "--fill-0": "rgba(248, 175, 68, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 17">
            <path d={svgPaths.p3ba0fb00} fill="var(--fill-0, #F8AF44)" id="Vector 5" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] bg-[#ffac0c] h-[9.146px] mix-blend-screen ml-0 mt-[20.12px] rounded-[20px] w-[30px]" data-name="Rectangle" />
    </div>
  );
}

function Icon6() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.7)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[60px]" data-name="Icon">
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Icon5 />
    </div>
  );
}

function Item14() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(58,58,59,0.3)] grow min-h-px min-w-px relative rounded-[28px] shrink-0" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[10px] relative w-full">
          <Icon6 />
          <div className="basis-0 flex flex-col font-['outfit:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f6f7f9] text-[16px]">
            <p className="leading-[22px]" dir="auto">
              Pay a Bill
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function Icon7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[29.493px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(43, 70, 110, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
            <circle cx="14.7464" cy="14.7464" fill="var(--fill-0, #2B466E)" id="Ellipse 52" r="14.7464" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] ml-[6.38px] mt-[6.38px] relative size-[16.739px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <circle cx="8.36956" cy="8.36956" fill="url(#paint0_linear_4_2894)" id="Ellipse 53" r="8.36956" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_2894" x1="13.1522" x2="4.18478" y1="15.1449" y2="1.19565">
              <stop stopColor="#AFC5E6" />
              <stop offset="1" stopColor="#5F8CCE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex h-[28.189px] items-center justify-center ml-[7.57px] mt-[7.97px] relative w-[27.428px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[52.388deg]">
          <div className="h-[17.735px] relative w-[21.92px]">
            <div className="absolute inset-[3.35%_2.1%_3.16%_6.1%]" style={{ "--fill-0": "rgba(111, 151, 211, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 17">
                <g id="Vector 4" style={{ mixBlendMode: "plus-lighter" }}>
                  <path d={svgPaths.p3d5a1100} fill="var(--fill-0, #6F97D3)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.7)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[60px]" data-name="Icon">
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Icon7 />
    </div>
  );
}

function Item15() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(58,58,59,0.3)] grow min-h-px min-w-px relative rounded-[28px] shrink-0" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[10px] relative w-full">
          <Icon8 />
          <div className="basis-0 flex flex-col font-['outfit:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f6f7f9] text-[16px]">
            <p className="leading-[22px]" dir="auto">
              Add New Beneficiary
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function Icon9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="[grid-area:1_/_1] h-[27.79px] ml-[8.78px] mt-[0.32px] relative w-[22.105px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 28">
          <path d={svgPaths.p3b56f880} fill="url(#paint0_linear_4_2943)" id="Vector 9" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_2943" x1="16.7369" x2="0.631337" y1="4.7369" y2="26.5265">
              <stop stopColor="#A2D28A" />
              <stop offset="1" stopColor="#39834D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] mix-blend-multiply ml-[21.09px] mt-0 relative size-[10.105px]">
        <div className="absolute inset-[2.66%_2.66%_0_0]" style={{ "--fill-0": "rgba(153, 206, 127, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g id="Vector 10" style={{ mixBlendMode: "multiply" }}>
              <path d={svgPaths.p1dea1ff1} fill="var(--fill-0, #99CE7F)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[27.79px] mix-blend-screen ml-0 mt-[6.89px] relative w-[22.105px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 28">
          <g id="Vector 7" style={{ mixBlendMode: "screen" }}>
            <path d={svgPaths.p3b56f880} fill="url(#paint0_linear_4_4385)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_4385" x1="16.7369" x2="0.631337" y1="4.7369" y2="26.5265">
              <stop stopColor="#A2D28A" />
              <stop offset="1" stopColor="#39834D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] mix-blend-multiply ml-[12.32px] mt-[6.58px] relative size-[10.105px]">
        <div className="absolute inset-[2.66%_2.66%_0_0]" style={{ "--fill-0": "rgba(153, 206, 127, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g id="Vector 10" style={{ mixBlendMode: "multiply" }}>
              <path d={svgPaths.p1dea1ff1} fill="var(--fill-0, #99CE7F)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.7)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[60px]" data-name="Icon">
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Icon9 />
    </div>
  );
}

function Item16() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(58,58,59,0.3)] grow min-h-px min-w-px relative rounded-[28px] shrink-0" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[10px] relative w-full">
          <Icon10 />
          <div className="basis-0 flex flex-col font-['outfit:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f6f7f9] text-[16px]">
            <p className="leading-[22px]" dir="auto">
              Download Statement
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function QuickActions() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Quick Actions">
      <Item12 />
      <Item13 />
      <Item14 />
      <Item15 />
      <Item16 />
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute h-[270px] left-[-5px] top-[-1px] w-[370px]" data-name="BG">
      <div className="absolute inset-[-18.52%_-13.51%_-97.87%_-66.32%]" style={{ "--fill-0": "rgba(12, 13, 16, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 666 585">
          <g filter="url(#filter0_f_4_4459)" id="BG">
            <rect fill="#0C0D10" height="270" transform="translate(245.391 50)" width="370" />
            <path d={svgPaths.p35790a00} fill="var(--fill-0, #1E1E1E)" id="Blob" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="584.249" id="filter0_f_4_4459" width="665.391" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_4_4459" stdDeviation="25" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron down">
          <path d="M4 6L8 10L12 6" id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function AccountName() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Account Name">
      <p className="font-['outfit:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f6f7f9] text-[18px] text-nowrap">Operating Account</p>
      <ChevronDown />
    </div>
  );
}

function Button() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.5)] h-[26px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[14px] text-nowrap">
          <p className="leading-[18px]">Info</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e2f32] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Plus">
          <path d={svgPaths.p3b397100} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.5)] h-[26px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <Plus />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e2f32] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Action1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Action">
      <Button />
      <Button1 />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-0 relative w-full">
          <AccountName />
          <Action1 />
        </div>
      </div>
    </div>
  );
}

function Balance() {
  return (
    <div className="bg-[rgba(58,58,59,0.3)] h-[122px] relative rounded-[20px] shrink-0 w-full" data-name="Balance">
      <div aria-hidden="true" className="absolute border-[#747476] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full text-nowrap">
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#f6f7f9] text-[36px] tracking-[-0.72px]">28,432.00</p>
          <p className="font-['outfit:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#b9b9ba] text-[16px]">British Pound</p>
        </div>
      </div>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Arrow up-right">
          <path d={svgPaths.p2657d680} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.5)] h-[26px] relative rounded-[10px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-0 relative rounded-[inherit]">
        <ArrowUpRight />
        <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[14px] text-nowrap">
          <p className="leading-[18px]">Transfer</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ArrowDownRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow down-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Arrow down-right">
          <path d={svgPaths.p70e9a00} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.5)] h-[26px] relative rounded-[10px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-0 relative rounded-[inherit]">
        <ArrowDownRight />
        <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[14px] text-nowrap">
          <p className="leading-[18px]">Request</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Plus1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Plus">
          <path d={svgPaths.p3b397100} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.5)] h-[26px] relative rounded-[10px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[6px] py-0 relative rounded-[inherit]">
        <Plus1 />
        <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[14px] text-nowrap">
          <p className="leading-[18px]">Deposit</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Actions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Actions">
      <div className="size-full">
        <div className="content-stretch flex gap-[10px] items-start px-[8px] py-0 relative w-full">
          <Button2 />
          <Button3 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Account() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[28px] shrink-0" data-name="Account">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between px-[8px] py-[16px] relative size-full">
          <Bg />
          <Header />
          <Balance />
          <Actions />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(150,151,152,0.3)] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function Bg1() {
  return (
    <div className="absolute h-[270px] left-[-5.5px] top-[-1px] w-[370px]" data-name="BG">
      <div className="absolute inset-[-18.52%_-13.51%_-97.87%_-66.32%]" style={{ "--fill-0": "rgba(12, 13, 16, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 666 585">
          <g filter="url(#filter0_f_4_4459)" id="BG">
            <rect fill="#0C0D10" height="270" transform="translate(245.391 50)" width="370" />
            <path d={svgPaths.p35790a00} fill="var(--fill-0, #1E1E1E)" id="Blob" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="584.249" id="filter0_f_4_4459" width="665.391" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_4_4459" stdDeviation="25" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron down">
          <path d="M4 6L8 10L12 6" id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function AccountName1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Account Name">
      <p className="font-['outfit:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f6f7f9] text-[18px] text-nowrap">My Card</p>
      <ChevronDown1 />
    </div>
  );
}

function Button5() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.5)] h-[26px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[14px] text-nowrap">
          <p className="leading-[18px]">Details</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e2f32] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Plus2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Plus">
          <path d={svgPaths.p3b397100} id="Icon" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.5)] h-[26px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <Plus2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e2f32] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Action2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Action">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Header1() {
  return (
    <div className="relative w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <AccountName1 />
          <Action2 />
        </div>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-center relative w-full" data-name="Header">
      <div className="flex flex-col font-['outfit:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap">
        <p className="leading-[22px]" dir="auto">
          Cairo Amman Bank
        </p>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Number">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f6f7f9] text-[24px] text-nowrap">
        <p className="leading-[20px]" dir="auto">
          **** **** **** 5682
        </p>
      </div>
    </div>
  );
}

function CardNumber() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Number">
      <Number />
    </div>
  );
}

function Balance1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[70px] items-start relative w-full" data-name="Balance">
      <CardNumber />
    </div>
  );
}

function CardType() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32px]" data-name="Card Type">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20">
        <g id="Card Type">
          <circle cx="22" cy="10" fill="url(#paint0_linear_4_4480)" fillOpacity="0.6" id="Ellipse" r="10" />
          <circle cx="10" cy="10" fill="url(#paint1_linear_4_4480)" fillOpacity="0.6" id="Ellipse_2" r="10" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_4480" x1="22" x2="22" y1="0" y2="20">
            <stop stopColor="#C7C7C9" />
            <stop offset="1" stopColor="#C7C7C9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_4_4480" x1="10" x2="10" y1="0" y2="20">
            <stop stopColor="#C7C7C9" />
            <stop offset="1" stopColor="#C7C7C9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-full" data-name="Details">
      <div className="basis-0 flex flex-col font-['outfit:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f6f7f9] text-[18px]">
        <p className="leading-[20px]" dir="auto">
          Credit Card
        </p>
      </div>
      <CardType />
    </div>
  );
}

function Group1() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 235 176">
        <g id="Group" opacity="0.9" style={{ mixBlendMode: "plus-darker" }}>
          <path d={svgPaths.p3fdb6e00} fill="var(--fill-0, #F6F7F9)" id="Path 46" opacity="0.6" />
          <path d={svgPaths.p14425880} fill="var(--fill-0, #F6F7F9)" id="Path 47" opacity="0.5" />
          <path d={svgPaths.p5165880} fill="var(--fill-0, #F6F7F9)" id="Path 48" opacity="0.7" />
          <path d={svgPaths.p1e1a3e40} fill="var(--fill-0, #F6F7F9)" id="Path 49" opacity="0.8" />
          <path d={svgPaths.p344f7640} fill="var(--fill-0, #F6F7F9)" id="Path 46_2" />
        </g>
      </svg>
    </div>
  );
}

function BankCard() {
  return (
    <div className="bg-[rgba(58,58,59,0.3)] h-[209px] relative rounded-[20px] shrink-0 w-full" data-name="Bank card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[16px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
              <Header2 />
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
              <Balance1 />
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
              <Details />
            </div>
          </div>
          <div className="absolute flex inset-[15.79%_42.99%_0_-11.26%] items-center justify-center">
            <div className="flex-none h-[176px] rotate-[180deg] scale-y-[-100%] w-[234.488px]">
              <Group1 />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#747476] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Card1() {
  return (
    <div className="relative rounded-[28px] size-full" data-name="Card">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[8px] relative size-full">
          <Bg1 />
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
              <Header1 />
            </div>
          </div>
          <BankCard />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(22,47,26,0.5)] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function Account1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[292px] items-start relative shrink-0 w-full" data-name="Account">
      <Account />
      <div className="basis-0 flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] size-full">
          <Card1 />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex font-['outfit:Regular',sans-serif] items-center justify-between leading-[0] not-italic relative shrink-0 text-nowrap w-full" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#f6f7f9] text-[18px]">
        <p className="leading-[20px] text-nowrap">Pending Approvals</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#b9b9ba] text-[14px]">
        <p className="leading-[18px] text-nowrap">See All</p>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Title />
    </div>
  );
}

function Button7() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(240,112,46,0.6)] grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap">
            <p className="leading-[22px]">Pending</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button8() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(12,13,16,0.5)] grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap">
            <p className="leading-[22px]">Approved</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button9() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(12,13,16,0.5)] grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[16px] text-nowrap">
            <p className="leading-[22px]">Rejected</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Tags() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Tags">
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function DollarSign() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Dollar sign">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Dollar sign">
          <path d={svgPaths.p283eba00} id="Icon" stroke="var(--stroke-0, #B9B9BA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Amount">
      <DollarSign />
      <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b9b9ba] text-[14px] text-nowrap">
        <p className="leading-[18px]">Amount</p>
      </div>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chevron down">
          <path d="M5 7.5L10 12.5L15 7.5" id="Icon" stroke="var(--stroke-0, #B9B9BA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Amount1() {
  return (
    <div className="bg-[#17181b] relative rounded-[10px] self-stretch shrink-0 w-[122px]" data-name="Amount">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[inherit] size-full">
        <Amount />
        <ChevronDown2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#747476] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d={svgPaths.p3a9103f0} id="Icon" stroke="var(--stroke-0, #B9B9BA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Date">
      <Calendar />
      <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b9b9ba] text-[14px] text-nowrap">
        <p className="leading-[18px]">Date</p>
      </div>
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chevron down">
          <path d="M5 7.5L10 12.5L15 7.5" id="Icon" stroke="var(--stroke-0, #B9B9BA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Date1() {
  return (
    <div className="bg-[#17181b] relative rounded-[10px] self-stretch shrink-0 w-[103px]" data-name="Date">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[inherit] size-full">
        <Date />
        <ChevronDown3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#747476] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Search1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-end relative shrink-0 w-[339.5px]" data-name="Search">
      <Amount1 />
      <Date1 />
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Filters">
      <Tags />
      <Search1 />
    </div>
  );
}

function BgApproval() {
  return (
    <div className="h-[286.959px] relative w-[303px]" data-name="BG Approval">
      <div className="absolute inset-[-17.52%_-16.59%_-17.52%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354 388">
          <g clipPath="url(#clip0_4_4390)" filter="url(#filter0_fn_4_4390)" id="BG Approval">
            <path d={svgPaths.p240abe00} fill="var(--fill-0, #99CE7F)" fillOpacity="0.25" id="Blob" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="387.484" id="filter0_fn_4_4390" width="403.525" x="-50.2624" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_4_4390" stdDeviation="25.1312" />
              <feTurbulence baseFrequency="4.4884490966796875 4.4884490966796875" numOctaves="3" result="noise" seed="7962" stitchTiles="stitch" type="fractalNoise" />
              <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA type="discrete" />
              </feComponentTransfer>
              <feComposite in="coloredNoise1" in2="effect1_foregroundBlur_4_4390" operator="in" result="noise1Clipped" />
              <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
              <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
              <feMerge result="effect2_noise_4_4390">
                <feMergeNode in="effect1_foregroundBlur_4_4390" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
            <clipPath id="clip0_4_4390">
              <rect fill="white" height="286.959" transform="translate(0 50.2624)" width="303" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex font-['outfit:Regular',sans-serif] items-center justify-between not-italic relative shrink-0 text-[#f6f7f9] text-nowrap w-full" data-name="Title">
      <p className="leading-[20px] relative shrink-0 text-[18px]">{`Transfer `}</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[12px] tracking-[0.24px]">
        <p className="leading-[16px] text-nowrap" dir="auto">
          2 day ago
        </p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex font-['outfit:Regular',sans-serif] items-center justify-between leading-[0] not-italic relative shrink-0 text-[#99ce7f] text-[14px] text-nowrap w-full" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px] text-nowrap" dir="auto">
          Amount
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px] text-nowrap" dir="auto">
          70,500 USD
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex font-['outfit:Regular',sans-serif] items-center justify-between leading-[0] not-italic relative shrink-0 text-[#b9b9ba] text-[14px] text-nowrap w-full" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px] text-nowrap" dir="auto">
          Roll
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px] text-nowrap" dir="auto">
          Manager Approval
        </p>
      </div>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Details">
      <Text />
      <Text1 />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
      <Title1 />
      <Details1 />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Header4 />
    </div>
  );
}

function Ellipse() {
  return (
    <div className="relative shrink-0 size-[140px]" data-name="Ellipse">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 140">
        <g id="Ellipse">
          <g id="Subtract">
            <path d={svgPaths.p14b84c00} fill="#99CE7F" />
            <path d={svgPaths.pbfb48f0} fill="var(--fill-0, #2E2F32)" />
            <path d={svgPaths.p2a396080} fill="var(--fill-0, #2E2F32)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Steps() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Steps">
      <Ellipse />
      <div className="absolute flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-10.5px)] not-italic text-[#f6f7f9] text-[16px] text-nowrap top-[calc(50%+0.5px)] translate-y-[-50%]">
        <p className="leading-[22px]" dir="auto">
          1/3
        </p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[#7da867] grow h-[24px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-0 relative size-full">
          <p className="font-['outfit:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0c0d10] text-[12px] text-nowrap tracking-[0.24px]">Approve</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button11() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(12,13,16,0.5)] grow h-[24px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-0 relative size-full">
          <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[12px] text-nowrap tracking-[0.24px]">
            <p className="leading-[16px]">Details</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Action3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Action">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer">
      <Action3 />
    </div>
  );
}

function Approval() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 grow h-[319px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Approval">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[16px] relative size-full">
          <div className="absolute flex h-[303px] items-center justify-center left-[-20px] top-[16px] w-[286.959px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <BgApproval />
            </div>
          </div>
          <Header5 />
          <Steps />
          <Footer />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BgApproval1() {
  return (
    <div className="h-[286.959px] relative w-[303px]" data-name="BG Approval">
      <div className="absolute inset-[-17.52%_-16.59%_-17.52%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354 388">
          <g clipPath="url(#clip0_4_4390)" filter="url(#filter0_fn_4_4390)" id="BG Approval">
            <path d={svgPaths.p240abe00} fill="var(--fill-0, #99CE7F)" fillOpacity="0.25" id="Blob" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="387.484" id="filter0_fn_4_4390" width="403.525" x="-50.2624" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_4_4390" stdDeviation="25.1312" />
              <feTurbulence baseFrequency="4.4884490966796875 4.4884490966796875" numOctaves="3" result="noise" seed="7962" stitchTiles="stitch" type="fractalNoise" />
              <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA type="discrete" />
              </feComponentTransfer>
              <feComposite in="coloredNoise1" in2="effect1_foregroundBlur_4_4390" operator="in" result="noise1Clipped" />
              <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
              <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
              <feMerge result="effect2_noise_4_4390">
                <feMergeNode in="effect1_foregroundBlur_4_4390" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
            <clipPath id="clip0_4_4390">
              <rect fill="white" height="286.959" transform="translate(0 50.2624)" width="303" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex font-['outfit:Regular',sans-serif] items-center justify-between not-italic relative shrink-0 text-[#f6f7f9] text-nowrap w-full" data-name="Title">
      <p className="leading-[20px] relative shrink-0 text-[18px]">Payroll</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[12px] tracking-[0.24px]">
        <p className="leading-[16px] text-nowrap" dir="auto">
          6 day ago
        </p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex font-['outfit:Regular',sans-serif] items-center justify-between leading-[0] not-italic relative shrink-0 text-[#99ce7f] text-[14px] text-nowrap w-full" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px] text-nowrap" dir="auto">
          Amount
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px] text-nowrap" dir="auto">
          16,500 USD
        </p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex font-['outfit:Regular',sans-serif] items-center justify-between leading-[0] not-italic relative shrink-0 text-[#b9b9ba] text-[14px] text-nowrap w-full" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px] text-nowrap" dir="auto">
          Roll
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px] text-nowrap" dir="auto">
          Second Signatory
        </p>
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Details">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
      <Title2 />
      <Details2 />
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Header6 />
    </div>
  );
}

function Ellipse1() {
  return (
    <div className="relative shrink-0 size-[140px]" data-name="Ellipse">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 140">
        <g id="Ellipse">
          <g id="Subtract">
            <path d={svgPaths.p7457d00} fill="#99CE7F" />
            <path d={svgPaths.pa920200} fill="var(--fill-0, #2E2F32)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Steps1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Steps">
      <Ellipse1 />
      <div className="absolute flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-10.5px)] not-italic text-[#f6f7f9] text-[16px] text-nowrap top-[calc(50%+0.5px)] translate-y-[-50%]">
        <p className="leading-[22px]" dir="auto">
          1/2
        </p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[#7da867] grow h-[24px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-0 relative size-full">
          <p className="font-['outfit:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0c0d10] text-[12px] text-nowrap tracking-[0.24px]">Approve</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button13() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(12,13,16,0.5)] grow h-[24px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-0 relative size-full">
          <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[12px] text-nowrap tracking-[0.24px]">
            <p className="leading-[16px]">Details</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Action4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Action">
      <Button12 />
      <Button13 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer">
      <Action4 />
    </div>
  );
}

function Approval1() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 grow h-[319px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Approval">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[16px] relative size-full">
          <div className="absolute flex h-[303px] items-center justify-center left-[-20px] top-[16px] w-[286.959px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <BgApproval1 />
            </div>
          </div>
          <Header7 />
          <Steps1 />
          <Footer1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BgApproval2() {
  return (
    <div className="h-[286.959px] relative w-[303px]" data-name="BG Approval">
      <div className="absolute inset-[-17.52%_-16.59%_-17.52%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354 388">
          <g clipPath="url(#clip0_4_4390)" filter="url(#filter0_fn_4_4390)" id="BG Approval">
            <path d={svgPaths.p240abe00} fill="var(--fill-0, #99CE7F)" fillOpacity="0.25" id="Blob" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="387.484" id="filter0_fn_4_4390" width="403.525" x="-50.2624" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_4_4390" stdDeviation="25.1312" />
              <feTurbulence baseFrequency="4.4884490966796875 4.4884490966796875" numOctaves="3" result="noise" seed="7962" stitchTiles="stitch" type="fractalNoise" />
              <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA type="discrete" />
              </feComponentTransfer>
              <feComposite in="coloredNoise1" in2="effect1_foregroundBlur_4_4390" operator="in" result="noise1Clipped" />
              <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
              <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
              <feMerge result="effect2_noise_4_4390">
                <feMergeNode in="effect1_foregroundBlur_4_4390" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
            <clipPath id="clip0_4_4390">
              <rect fill="white" height="286.959" transform="translate(0 50.2624)" width="303" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex font-['outfit:Regular',sans-serif] items-center justify-between not-italic relative shrink-0 text-[#f6f7f9] text-nowrap w-full" data-name="Title">
      <p className="leading-[20px] relative shrink-0 text-[18px]">Credit Line</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[12px] tracking-[0.24px]">
        <p className="leading-[16px] text-nowrap" dir="auto">
          10/12/25
        </p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex font-['outfit:Regular',sans-serif] items-center justify-between leading-[0] not-italic relative shrink-0 text-[#99ce7f] text-[14px] text-nowrap w-full" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px] text-nowrap" dir="auto">
          Amount
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px] text-nowrap" dir="auto">
          4,200 USD
        </p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex font-['outfit:Regular',sans-serif] items-center justify-between leading-[0] not-italic relative shrink-0 text-[#b9b9ba] text-[14px] text-nowrap w-full" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px] text-nowrap" dir="auto">
          Roll
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px] text-nowrap" dir="auto">
          Final Authorization
        </p>
      </div>
    </div>
  );
}

function Details3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Details">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
      <Title3 />
      <Details3 />
    </div>
  );
}

function Header9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Header8 />
    </div>
  );
}

function Ellipse2() {
  return (
    <div className="relative shrink-0 size-[140px]" data-name="Ellipse">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 140">
        <g id="Ellipse">
          <path d={svgPaths.pe6aab00} fill="var(--fill-0, #2E2F32)" id="Ellipse (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Steps2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Steps">
      <Ellipse2 />
      <div className="absolute flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-10.5px)] not-italic text-[#f6f7f9] text-[16px] text-nowrap top-[calc(50%+0.5px)] translate-y-[-50%]">
        <p className="leading-[22px]" dir="auto">
          0/3
        </p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[#7da867] grow h-[24px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-0 relative size-full">
          <p className="font-['outfit:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0c0d10] text-[12px] text-nowrap tracking-[0.24px]">Approve</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button15() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(12,13,16,0.5)] grow h-[24px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-0 relative size-full">
          <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[12px] text-nowrap tracking-[0.24px]">
            <p className="leading-[16px]">Details</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Action5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Action">
      <Button14 />
      <Button15 />
    </div>
  );
}

function Footer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer">
      <Action5 />
    </div>
  );
}

function Approval2() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 grow h-[319px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Approval">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[16px] relative size-full">
          <div className="absolute flex h-[303px] items-center justify-center left-[-20px] top-[16px] w-[286.959px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <BgApproval2 />
            </div>
          </div>
          <Header9 />
          <Steps2 />
          <Footer2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Cards">
      <Approval />
      <Approval1 />
      <Approval2 />
    </div>
  );
}

function Approvals() {
  return (
    <div className="basis-0 bg-[#0c0d10] grow min-h-px min-w-px relative rounded-[28px] shrink-0 w-full" data-name="Approvals">
      <div aria-hidden="true" className="absolute border border-[#2e2f32] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[16px] relative size-full">
          <Header3 />
          <Filters />
          <Cards />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Main">
      <Account1 />
      <Approvals />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex font-['outfit:Regular',sans-serif] items-center justify-between leading-[0] not-italic relative shrink-0 text-nowrap w-full" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#f6f7f9] text-[18px]">
        <p className="leading-[20px] text-nowrap">Transactions</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#b9b9ba] text-[14px]">
        <p className="leading-[18px] text-nowrap">See All</p>
      </div>
    </div>
  );
}

function Apple() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Apple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Apple">
          <g id="Vector">
            <path d={svgPaths.p104b5f80} fill="var(--fill-0, #F6F7F9)" />
            <path d={svgPaths.p194f4900} fill="var(--fill-0, #F6F7F9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="bg-[#0c0d10] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Icon">
      <Apple />
    </div>
  );
}

function Details4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] relative shrink-0 text-nowrap" data-name="Details">
      <div className="flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#f6f7f9] text-[14px]">
        <p className="leading-[18px] text-nowrap" dir="auto">
          Apple Inc.
        </p>
      </div>
      <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#b9b9ba] text-[10px]">
        <p className="leading-[14px] text-nowrap" dir="auto">
          21 Sep, 15:27 PM
        </p>
      </div>
    </div>
  );
}

function Transfer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Transfer">
      <Icon11 />
      <Details4 />
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Amount">
      <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f40000] text-[14px] text-nowrap">
        <p className="leading-[18px]" dir="auto">
          -$31.99
        </p>
      </div>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative w-full">
          <Transfer />
          <Amount2 />
        </div>
      </div>
    </div>
  );
}

function Amazon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Amazon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Amazon">
          <path clipRule="evenodd" d={svgPaths.p218f4280} fill="var(--fill-0, #F6F7F9)" fillRule="evenodd" id="amazon-[#160]" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="bg-[#0c0d10] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Icon">
      <Amazon />
    </div>
  );
}

function Details5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="Details">
      <div className="flex flex-col font-['outfit:Medium',sans-serif] justify-center relative shrink-0 text-[#f6f7f9] text-[14px]">
        <p className="leading-[18px] text-nowrap" dir="auto">
          Amazon
        </p>
      </div>
      <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center relative shrink-0 text-[#b9b9ba] text-[10px]">
        <p className="leading-[14px] text-nowrap" dir="auto">
          21 Sep, 15:27 PM
        </p>
      </div>
    </div>
  );
}

function Transfer1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Transfer">
      <Icon12 />
      <Details5 />
    </div>
  );
}

function Amount3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Amount">
      <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f40000] text-[14px] text-nowrap">
        <p className="leading-[18px]" dir="auto">
          -$17.50
        </p>
      </div>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative w-full">
          <Transfer1 />
          <Amount3 />
        </div>
      </div>
    </div>
  );
}

function Bank() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Bank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Bank">
          <path d={svgPaths.p3b7db200} id="Vector" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="bg-[#0c0d10] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Icon">
      <Bank />
    </div>
  );
}

function Details6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="Details">
      <div className="flex flex-col font-['outfit:Medium',sans-serif] justify-center relative shrink-0 text-[#f6f7f9] text-[14px]">
        <p className="leading-[18px] text-nowrap" dir="auto">
          Cairo Amman Bank
        </p>
      </div>
      <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center relative shrink-0 text-[#b9b9ba] text-[10px]">
        <p className="leading-[14px] text-nowrap" dir="auto">
          21 Sep, 15:27 PM
        </p>
      </div>
    </div>
  );
}

function Transfer2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Transfer">
      <Icon13 />
      <Details6 />
    </div>
  );
}

function Amount4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Amount">
      <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99ce7f] text-[14px] text-nowrap">
        <p className="leading-[18px]" dir="auto">
          +$150.00
        </p>
      </div>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative w-full">
          <Transfer2 />
          <Amount4 />
        </div>
      </div>
    </div>
  );
}

function Transaction1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Transaction">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Transaction">
          <path d={svgPaths.p375ca30} id="Vector" stroke="var(--stroke-0, #F6F7F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="bg-[#0c0d10] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Icon">
      <Transaction1 />
    </div>
  );
}

function Details7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="Details">
      <div className="flex flex-col font-['outfit:Medium',sans-serif] justify-center relative shrink-0 text-[#f6f7f9] text-[14px]">
        <p className="leading-[18px] text-nowrap" dir="auto">
          SWIFT
        </p>
      </div>
      <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center relative shrink-0 text-[#b9b9ba] text-[10px]">
        <p className="leading-[14px] text-nowrap" dir="auto">
          21 Sep, 15:27 PM
        </p>
      </div>
    </div>
  );
}

function Transfer3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Transfer">
      <Icon14 />
      <Details7 />
    </div>
  );
}

function Amount5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Amount">
      <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#99ce7f] text-[14px] text-nowrap">
        <p className="leading-[18px]" dir="auto">
          +$76,850.00
        </p>
      </div>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative w-full">
          <Transfer3 />
          <Amount5 />
        </div>
      </div>
    </div>
  );
}

function Items3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Items">
      <MenuItem />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-0.5px_0_0_0]" style={{ "--stroke-0": "rgba(46, 47, 50, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
            <line id="Line" stroke="var(--stroke-0, #2E2F32)" strokeWidth="0.5" x2="348" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <MenuItem1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-0.5px_0_0_0]" style={{ "--stroke-0": "rgba(46, 47, 50, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
            <line id="Line" stroke="var(--stroke-0, #2E2F32)" strokeWidth="0.5" x2="348" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <MenuItem2 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-0.5px_0_0_0]" style={{ "--stroke-0": "rgba(46, 47, 50, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348 1">
            <line id="Line" stroke="var(--stroke-0, #2E2F32)" strokeWidth="0.5" x2="348" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <MenuItem3 />
    </div>
  );
}

function Transactions() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Transactions">
      <Title4 />
      <Items3 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex items-center px-0 py-[4px] relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[18px] text-nowrap">
        <p className="leading-[20px]">Exchange Rate</p>
      </div>
    </div>
  );
}

function Amount6() {
  return (
    <div className="content-stretch flex font-['outfit:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-nowrap w-[160px]" data-name="Amount">
      <div className="flex flex-col justify-center relative shrink-0 text-[#b9b9ba] text-[10px]">
        <p className="leading-[14px] text-nowrap">Amount</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#f6f7f9] text-[14px]">
        <p className="leading-[18px] text-nowrap">1.00</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[-3.13%_-6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.25px_0.625px] mask-size-[20px_20px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
        <g id="Group">
          <path d={svgPaths.p1b1ffcf0} fill="var(--fill-0, #231D9A)" id="Vector" />
          <path d={svgPaths.pf398c80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p30315000} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2e251080} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p157a4200} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p16db4800} fill="var(--fill-0, #F0263C)" id="Vector_6" />
          <path d={svgPaths.p12581d00} fill="var(--fill-0, #F0263C)" id="Vector_7" />
          <path d={svgPaths.pad23c00} fill="var(--fill-0, #F0263C)" id="Vector_8" />
          <path d={svgPaths.p3e30ee40} fill="var(--fill-0, #F0263C)" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p1867c300} fill="var(--fill-0, #F0263C)" fillRule="evenodd" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group2 />
    </div>
  );
}

function UnitedKingdom() {
  return (
    <div className="overflow-clip relative rounded-[1000px] shrink-0 size-[20px]" data-name="United Kingdom">
      <MaskGroup />
    </div>
  );
}

function ChevronDown4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chevron down">
          <path d="M5 7.5L10 12.5L15 7.5" id="Icon" stroke="var(--stroke-0, #B9B9BA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Currency() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Currency">
      <UnitedKingdom />
      <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[14px] text-nowrap">
        <p className="leading-[18px]">GBP</p>
      </div>
      <ChevronDown4 />
    </div>
  );
}

function Button16() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.5)] h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[4px] relative size-full">
          <Amount6 />
          <Currency />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Transaction2() {
  return (
    <div className="relative size-[20px]" data-name="Transaction">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Transaction">
          <path d={svgPaths.p375ca30} id="Vector" stroke="var(--stroke-0, #0C0D10)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[#99ce7f] content-stretch flex h-[28px] items-center justify-center px-[6px] py-0 relative rounded-[10px] shrink-0 w-[32px]" data-name="Icon">
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Transaction2 />
        </div>
      </div>
    </div>
  );
}

function Amount7() {
  return (
    <div className="content-stretch flex font-['outfit:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-nowrap w-[160px]" data-name="Amount">
      <div className="flex flex-col justify-center relative shrink-0 text-[#b9b9ba] text-[10px]">
        <p className="leading-[14px] text-nowrap">Converted</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#f6f7f9] text-[14px]">
        <p className="leading-[18px] text-nowrap">0.3864</p>
      </div>
    </div>
  );
}

function FlagsJo() {
  return (
    <div className="absolute inset-[0_-40.63%_0_0]" data-name="flags / JO">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 20">
        <g id="flags / JO">
          <rect fill="var(--fill-0, white)" height="19.5" id="Mask" rx="1.75" stroke="var(--stroke-0, #F5F5F5)" strokeWidth="0.5" width="27.625" x="0.25" y="0.25" />
          <mask height="20" id="mask0_4_2809" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="29" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="19.5" id="Mask_2" rx="1.75" stroke="var(--stroke-0, white)" strokeWidth="0.5" width="27.625" x="0.25" y="0.25" />
          </mask>
          <g mask="url(#mask0_4_2809)">
            <path clipRule="evenodd" d="M0 20H28.125V13.3333H0V20Z" fill="var(--fill-0, #199E56)" fillRule="evenodd" id="Rectangle 2" />
            <path clipRule="evenodd" d={svgPaths.p1dc9ce80} fill="var(--fill-0, #262626)" fillRule="evenodd" id="Rectangle 2_2" />
            <path clipRule="evenodd" d="M0 0L13.3929 10L0 20V0Z" fill="var(--fill-0, #E6223A)" fillRule="evenodd" id="Rectangle 83" />
            <path clipRule="evenodd" d={svgPaths.p3746e980} fill="var(--fill-0, white)" fillRule="evenodd" id="Star 27" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Jordan() {
  return (
    <div className="overflow-clip relative rounded-[40px] shrink-0 size-[20px]" data-name="Jordan">
      <FlagsJo />
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chevron down">
          <path d="M5 7.5L10 12.5L15 7.5" id="Icon" stroke="var(--stroke-0, #B9B9BA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Currency1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Currency">
      <Jordan />
      <div className="flex flex-col font-['outfit:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f6f7f9] text-[14px] text-nowrap">
        <p className="leading-[18px]">JOD</p>
      </div>
      <ChevronDown5 />
    </div>
  );
}

function Button17() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.5)] h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[4px] relative size-full">
          <Amount7 />
          <Currency1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Exchange() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Exchange">
      <Button16 />
      <Icon15 />
      <Button17 />
    </div>
  );
}

function Rate() {
  return (
    <div className="relative shrink-0 w-full" data-name="Rate">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-0 relative w-full">
          <Exchange />
          <p className="font-['outfit:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#b9b9ba] text-[14px] text-nowrap">1 GBP = 0.38 Omani Rial</p>
        </div>
      </div>
    </div>
  );
}

function Graph() {
  return (
    <div className="h-[114px] relative shrink-0 w-[265px]" data-name="Graph">
      <div className="absolute inset-[-0.88%_-2.4%_-0.88%_-0.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 273 116">
          <g id="Graph">
            <path d={svgPaths.p38ffec80} id="Vector" stroke="var(--stroke-0, #99CE7F)" strokeWidth="2" />
            <g id="Group">
              <path d={svgPaths.p25c75d00} fill="var(--fill-0, #99CE7F)" id="Vector_2" stroke="var(--stroke-0, #0D6826)" strokeOpacity="0.1" strokeWidth="8" />
              <path d={svgPaths.p25c75d00} id="Vector_3" stroke="var(--stroke-0, #0C0D10)" strokeWidth="1.1215" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex flex-col font-['outfit:Regular',sans-serif] gap-[24px] h-full items-start justify-center leading-[14px] not-italic relative shrink-0 text-[#b9b9ba] text-[10px] text-nowrap text-right" data-name="Number">
      <p className="relative shrink-0">0.94</p>
      <p className="relative shrink-0">0.38</p>
      <p className="relative shrink-0">0.21</p>
      <p className="relative shrink-0">0.16</p>
    </div>
  );
}

function Graph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Graph">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-0 relative w-full">
          <Graph />
          <div className="flex flex-row items-center self-stretch">
            <Number1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[0.28px_0px_0px] border-[rgba(118,142,156,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['outfit:Regular',sans-serif] items-center justify-between leading-[14px] not-italic pb-0 pt-[4px] px-[18px] relative text-[#b9b9ba] text-[10px] text-nowrap w-full">
          <p className="relative shrink-0">A month ago</p>
          <p className="relative shrink-0">Today</p>
        </div>
      </div>
    </div>
  );
}

function Graph2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Graph">
      <Graph1 />
      <Footer3 />
    </div>
  );
}

function Button18() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.5)] h-[26px] relative rounded-[10px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <p className="font-['outfit:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#b9b9ba] text-[14px] text-nowrap">48H</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button19() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.5)] h-[26px] relative rounded-[10px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <p className="font-['outfit:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#b9b9ba] text-[14px] text-nowrap">1W</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button20() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[#99ce7f] h-[26px] relative rounded-[10px] shrink-0 w-[37px]" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[6px] py-0 relative rounded-[inherit] size-full">
        <p className="font-['outfit:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0c0d10] text-[14px] text-nowrap">1M</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button21() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(12,13,16,0.5)] h-[26px] relative rounded-[10px] shrink-0" data-name="Button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <p className="font-['outfit:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#b9b9ba] text-[14px] text-nowrap">12M</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Duration() {
  return (
    <div className="relative shrink-0 w-full" data-name="Duration">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative w-full">
          <Button18 />
          <Button19 />
          <Button20 />
          <Button21 />
        </div>
      </div>
    </div>
  );
}

function Graph3() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(46,47,50,0.3)] content-stretch flex flex-col h-[400px] items-start justify-between px-0 py-[16px] relative rounded-[12px] shrink-0 w-[348px]" data-name="Graph">
      <div aria-hidden="true" className="absolute border-[#2e2f32] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Rate />
      <Graph2 />
      <Duration />
    </div>
  );
}

function ExchangeGraphs() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center min-h-px min-w-px relative rounded-[8.972px] shrink-0 w-full" data-name="Exchange Graphs">
      <Title5 />
      <Graph3 />
    </div>
  );
}

function Sidebar2() {
  return (
    <div className="bg-[#0c0d10] h-full relative rounded-[28px] shrink-0 w-[380px]" data-name="Sidebar">
      <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Transactions />
        <ExchangeGraphs />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2e2f32] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function Main1() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Main">
      <Main />
      <Sidebar2 />
    </div>
  );
}

function Main2() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[#17181b] grow h-full min-h-px min-w-px relative rounded-[36px] shrink-0" data-name="Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <TopBar />
          <QuickActions />
          <Main1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[36px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[#0c0d10] grow h-full min-h-px min-w-px relative rounded-[32px] shrink-0" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#0c0d10] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[8px] relative size-full">
          <Sidebar1 />
          <Main2 />
        </div>
      </div>
    </div>
  );
}

export default function DashboardDark() {
  return (
    <div className="bg-gradient-to-b from-[#2e2f32] relative size-full to-0% to-[#232426]" data-name="Dashboard-Dark">
      <div className="size-full">
        <div className="content-stretch flex items-start p-[16px] relative size-full">
          <Section />
        </div>
      </div>
    </div>
  );
}