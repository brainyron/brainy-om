"use client";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  asButton?: boolean;
  disabled?: boolean;
}

export function PrimaryButton({ 
  children, 
  href = "#assessment", 
  onClick, 
  type = "button",
  asButton = false,
  className = "",
  disabled = false,
  ...props 
}: PrimaryButtonProps) {
  const { isRTL, language } = useLanguage();

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const baseClasses = `bg-[#009689] content-stretch flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-[8px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[8px] shrink-0 transition-all duration-300 ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg'} group ${className}`;

  const arrowElement = (
    <ArrowRight 
      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} text-white`}
      style={{
        transform: isRTL ? 'rotate(180deg)' : 'rotate(0deg)'
      }}
    />
  );

  const textElement = (
    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[-0.4395px]">
      {children}
    </p>
  );

  // If used as a submit button in a form
  if (type === 'submit' || asButton) {
    return (
      <button
        type={type}
        onClick={handleClick}
        className={baseClasses}
        disabled={disabled}
        {...props}
      >
        {textElement}
        {arrowElement}
      </button>
    );
  }

  // Default anchor link
  return (
    <a
      href={href}
      onClick={handleClick}
      className={baseClasses}
    >
      {textElement}
      {arrowElement}
    </a>
  );
}