"use client";
import svgPaths from "./svg-asb0w7wv1u";

function Group() {
  return (
    <div className="absolute contents inset-[0_0.5%_0.09%_0]" data-name="Group">
      <div className="absolute inset-[33.06%_0.5%_0.09%_0]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6082 15.7704">
            <path d={svgPaths.p3d2ea000} fill="var(--fill-0, #1E1E1E)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0_0.5%_66.71%_0.06%]" data-name="Vector_2">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5966 7.85248">
            <path d={svgPaths.p1d7c1780} fill="var(--fill-0, #1E1E1E)" id="Vector_2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[23.59px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Group">
      <Icon />
    </div>
  );
}