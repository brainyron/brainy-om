"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Instrument_Serif, Cairo } from "next/font/google";
import {
  ShoppingBag,
  Search,
  ShoppingCart,
  MessageCircle,
  Stethoscope,
  Scissors,
  Syringe,
  Star,
  Truck,
  ShieldCheck,
  Clock,
  Heart,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Cat,
  Dog,
  Bird,
  Fish,
  Bone,
  Sparkles,
} from "lucide-react";

// Display serif for hero accent
const displaySerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

// Arabic-friendly font
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

// WhatsApp link to Catey
const WA = "https://wa.me/96897522009";

// Catey brand palette (sampled from /public/catey/brand/color-0X.svg)
// #DA9552 tan, #100E0B ink, #F8E1AC cream-gold, #FFFCF9 paper, #764C24 coffee

type Product = {
  id: number;
  slug: string;
  nameEn: string;
  nameAr: string;
  brand: string;
  category: "cat" | "dog" | "litter" | "treats" | "supplements" | "accessories";
  price: number; // OMR
  image: string;
  badge?: { en: string; ar: string };
};

// Real products scraped from cateyom.com (WooCommerce store API)
const products: Product[] = [
  {
    id: 31789,
    slug: "carnilove-grain-free-true-fresh-beef-adult-dry-dog-food-11-4kg",
    nameEn: "Carnilove Grain-Free Beef Adult Dog 11.4kg",
    nameAr: "كارنيلوف لحم بقر للكلاب البالغين 11.4 كغ",
    brand: "Carnilove",
    category: "dog",
    price: 35.0,
    image: "/catey/preview-shop/products/carnilove-beef.png",
    badge: { en: "Premium", ar: "بريميوم" },
  },
  {
    id: 31792,
    slug: "carnilove-true-fresh-chicken-senior",
    nameEn: "Carnilove Chicken Senior & Healthy Weight 11.4kg",
    nameAr: "كارنيلوف دجاج كبار ووزن صحي 11.4 كغ",
    brand: "Carnilove",
    category: "dog",
    price: 35.0,
    image: "/catey/preview-shop/products/carnilove-chicken.png",
  },
  {
    id: 31753,
    slug: "brit-grain-free-vd-cat-hypoallergenic-2kg",
    nameEn: "Brit VD Cat Hypoallergenic 2kg",
    nameAr: "بريت طبي للقطط ضد الحساسية 2 كغ",
    brand: "Brit",
    category: "cat",
    price: 13.5,
    image: "/catey/preview-shop/products/brit-hypo.webp",
    badge: { en: "Vet recommended", ar: "بتوصية بيطرية" },
  },
  {
    id: 31746,
    slug: "brit-grain-free-vd-cat-renal-2-kg",
    nameEn: "Brit VD Cat Renal 2kg",
    nameAr: "بريت طبي للقطط للكلى 2 كغ",
    brand: "Brit",
    category: "cat",
    price: 14.5,
    image: "/catey/preview-shop/products/brit-renal.jpg",
  },
  {
    id: 30490,
    slug: "schesir-dry-food-kitten-chicken-1-5kg",
    nameEn: "Schesir Kitten Rich in Chicken 1.5kg",
    nameAr: "شيسير للقطط الصغيرة بالدجاج 1.5 كغ",
    brand: "Schesir",
    category: "cat",
    price: 10.0,
    image: "/catey/preview-shop/products/schesir-kitten.jpg",
  },
  {
    id: 32391,
    slug: "pramy-cv10-kitten-chicken-mousse",
    nameEn: "Pramy Kitten Chicken Mousse with Colostrum 70g",
    nameAr: "برامي موس دجاج للقطط الصغيرة 70 غ",
    brand: "Pramy",
    category: "treats",
    price: 7.5,
    image: "/catey/preview-shop/products/pramy-kitten.jpg",
    badge: { en: "New", ar: "جديد" },
  },
  {
    id: 32385,
    slug: "pramy-bone-joint-tuna-shirasu",
    nameEn: "Pramy Bone & Joint Tuna in Shirasu",
    nameAr: "برامي تونة بالشيراسو لصحة المفاصل",
    brand: "Pramy",
    category: "treats",
    price: 7.5,
    image: "/catey/preview-shop/products/pramy-bone-joint.jpg",
  },
  {
    id: 32178,
    slug: "wanpy-creamy-lickable-chicken-crab",
    nameEn: "WANPY Creamy Lickable Chicken & Crab",
    nameAr: "وانبي كريمة دجاج وسلطعون قابلة للعق",
    brand: "WANPY",
    category: "treats",
    price: 1.2,
    image: "/catey/preview-shop/products/wanpy-chicken-crab.jpg",
  },
  {
    id: 32244,
    slug: "beaphar-salmon-oil",
    nameEn: "Beaphar Salmon Oil for Dogs & Cats",
    nameAr: "بيفار زيت سلمون للكلاب والقطط",
    brand: "Beaphar",
    category: "supplements",
    price: 10.0,
    image: "/catey/preview-shop/products/beaphar-salmon-oil.jpg",
    badge: { en: "Best seller", ar: "الأكثر مبيعاً" },
  },
  {
    id: 29742,
    slug: "pado-corridor-litter-box-blue",
    nameEn: "Pado Corridor Cat Litter Box, Blue",
    nameAr: "بادو صندوق رمل قطط ممر، أزرق",
    brand: "Pado",
    category: "litter",
    price: 18.0,
    image: "/catey/preview-shop/products/pado-litter-box.png",
  },
  {
    id: 30593,
    slug: "bioline-tofu-litter-baby-powder-7l",
    nameEn: "Bioline Tofu Litter 7L + Scoop",
    nameAr: "بيولاين رمل توفو 7 لتر مع المغرفة",
    brand: "Bioline",
    category: "litter",
    price: 4.4,
    image: "/catey/preview-shop/products/bioline-tofu.png",
  },
  {
    id: 32035,
    slug: "catey-mug-cream",
    nameEn: "Catey Mug, Cream",
    nameAr: "كوب Catey، كريمي",
    brand: "Catey",
    category: "accessories",
    price: 5.0,
    image: "/catey/preview-shop/products/catey-mug.jpg",
    badge: { en: "Catey original", ar: "أصلي من Catey" },
  },
];

const categories = [
  { key: "cat", en: "Cats", ar: "قطط", Icon: Cat },
  { key: "dog", en: "Dogs", ar: "كلاب", Icon: Dog },
  { key: "treats", en: "Treats", ar: "حلويات", Icon: Bone },
  { key: "litter", en: "Litter", ar: "رمل", Icon: Sparkles },
  { key: "supplements", en: "Supplements", ar: "مكملات", Icon: Heart },
  { key: "accessories", en: "Accessories", ar: "إكسسوارات", Icon: ShoppingBag },
  { key: "birds", en: "Birds", ar: "طيور", Icon: Bird },
  { key: "fish", en: "Fish", ar: "أسماك", Icon: Fish },
] as const;

function PreviewInner() {
  const sp = useSearchParams();
  const lang = sp.get("lang") === "ar" ? "ar" : "en";
  const isAr = lang === "ar";
  const isRTL = isAr;

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [cart, setCart] = useState<number[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const t = isAr
    ? {
        nav: {
          shop: "تسوّق",
          clinic: "العيادة",
          about: "من نحن",
          contact: "تواصل",
          search: "بحث",
          order: "اطلب على واتساب",
          freeShip: "توصيل مجاني للطلبات فوق 15 ر.ع",
        },
        hero: {
          eyebrow: "متجر وعيادة بيطرية في عُمان",
          headlineMain: "كل ما يحتاجه",
          headlineAccent: "حيوانك الأليف",
          headlineEnd: "في مكان واحد.",
          sub: "طعام، رمل، مكملات، وعيادة بيطرية. نوصّل لمسقط وكل عُمان بسرعة وبكل ثقة.",
          shop: "تسوّق الآن",
          book: "احجز زيارة بيطرية",
          stat1: { value: "+2,000", label: "عائلة عُمانية تثق بنا" },
          stat2: { value: "+30", label: "علامة تجارية موثوقة" },
          stat3: { value: "نفس اليوم", label: "توصيل في مسقط" },
        },
        catLabel: "تسوّق حسب الفئة",
        featured: {
          eyebrow: "منتجات مميزة",
          title: "اختيارات مفضلة من عائلات عُمانية",
          sub: "علامات أصلية، أسعار صادقة، توصيل سريع.",
          add: "أضف للسلة",
          all: "الكل",
        },
        services: {
          eyebrow: "العيادة البيطرية",
          title: "العناية الكاملة لحيوانك الأليف",
          sub: "نخدم في عيادتنا بالمعبيلة. احجز عبر واتساب.",
          items: [
            { title: "فحص بيطري شامل", desc: "تشخيص مبكر، صحة دائمة.", price: "5 ر.ع", image: "/catey/preview-shop/services/checkup.jpg" },
            { title: "العناية والاستحمام", desc: "حمام، تنظيف، قص أظافر.", price: "5 ر.ع", image: "/catey/preview-shop/services/grooming.jpg" },
            { title: "تطعيمات أساسية", desc: "تطعيمات أساسية ودورية مع تذكير.", price: "احجز", image: "/catey/preview-shop/services/vaccinations.jpg" },
          ],
          book: "احجز الآن",
        },
        why: {
          eyebrow: "ليش Catey",
          title: "أكثر من متجر مستلزمات",
          items: [
            { title: "متجر + عيادة في مكان واحد", desc: "علاج وطعام وعناية بدون تنقّل.", Icon: ShieldCheck },
            { title: "توصيل سريع لكل عُمان", desc: "نفس اليوم في مسقط، خلال 48 ساعة لباقي المحافظات.", Icon: Truck },
            { title: "طلب سريع عبر واتساب", desc: "كلّمنا، نرد بسرعة، ونرسل لك مباشرة.", Icon: Clock },
          ],
        },
        testimonials: {
          eyebrow: "قصص عملاء",
          title: "ما يقوله عملاؤنا",
          items: [
            { quote: "خدمة ممتازة وفريق ودود. قطّي يحب يجي العيادة.", author: "ليلى", city: "مسقط" },
            { quote: "طلبت طعام لكلبي ووصلني في ساعتين. شكرًا Catey.", author: "أحمد", city: "صلالة" },
            { quote: "أسعار معقولة وتذكير على واتساب. ممتاز.", author: "سارة", city: "نزوى" },
          ],
        },
        cta: {
          title: "عندك سؤال أو طلب خاص؟",
          sub: "كلّمنا على واتساب، نرد فورًا.",
          button: "تواصل معنا",
        },
        footer: {
          tagline: "مع Catey، حيوانك في أيدٍ أمينة.",
          shop: "تسوّق",
          clinic: "العيادة",
          about: "من نحن",
          contact: "تواصل",
          rights: "جميع الحقوق محفوظة",
          address: "المعبيلة، السيب، عُمان",
          email: "hello@cateyom.com",
        },
      }
    : {
        nav: {
          shop: "Shop",
          clinic: "Clinic",
          about: "About",
          contact: "Contact",
          search: "Search",
          order: "Order on WhatsApp",
          freeShip: "Free delivery on orders above 15 OMR",
        },
        hero: {
          eyebrow: "Pet shop and vet clinic in Oman",
          headlineMain: "Everything your",
          headlineAccent: "pet needs",
          headlineEnd: "in one place.",
          sub: "Food, litter, supplements, and a real vet clinic. Same-day delivery in Muscat and trusted across Oman.",
          shop: "Shop now",
          book: "Book a vet visit",
          stat1: { value: "2,000+", label: "Pet families served" },
          stat2: { value: "30+", label: "Trusted brands" },
          stat3: { value: "Same-day", label: "Delivery in Muscat" },
        },
        catLabel: "Shop by category",
        featured: {
          eyebrow: "Featured",
          title: "Picked by Oman pet families",
          sub: "Genuine brands, honest prices, fast delivery.",
          add: "Add to cart",
          all: "All",
        },
        services: {
          eyebrow: "Pet Clinic",
          title: "Full care, under one roof",
          sub: "Visit our clinic in Al Mabila. Book on WhatsApp.",
          items: [
            { title: "Vet Checkup", desc: "Early diagnosis, lasting health.", price: "5 OMR", image: "/catey/preview-shop/services/checkup.jpg" },
            { title: "Grooming & Bath", desc: "Bath, brush, and nail trim.", price: "5 OMR", image: "/catey/preview-shop/services/grooming.jpg" },
            { title: "Vaccinations", desc: "Core and routine, with reminders.", price: "Book", image: "/catey/preview-shop/services/vaccinations.jpg" },
          ],
          book: "Book now",
        },
        why: {
          eyebrow: "Why Catey",
          title: "More than a pet store",
          items: [
            { title: "Shop + clinic in one place", desc: "Care, food, and grooming without juggling vendors.", Icon: ShieldCheck },
            { title: "Fast delivery across Oman", desc: "Same-day in Muscat, 48 hours to the rest.", Icon: Truck },
            { title: "Order quickly on WhatsApp", desc: "Message us, we reply fast, we deliver.", Icon: Clock },
          ],
        },
        testimonials: {
          eyebrow: "What pet families say",
          title: "Loved across Oman",
          items: [
            { quote: "Excellent service and a friendly team. My cat actually likes the clinic.", author: "Layla", city: "Muscat" },
            { quote: "Ordered food for my dog. Arrived in two hours. Thank you Catey.", author: "Ahmed", city: "Salalah" },
            { quote: "Affordable vaccinations and WhatsApp reminders. Great.", author: "Sarah", city: "Nizwa" },
          ],
        },
        cta: {
          title: "Have a question or a special request?",
          sub: "Message us on WhatsApp. We reply right away.",
          button: "Message us",
        },
        footer: {
          tagline: "With Catey, your pet is in safe hands.",
          shop: "Shop",
          clinic: "Clinic",
          about: "About",
          contact: "Contact",
          rights: "All rights reserved",
          address: "Al Mabila, Sib, Oman",
          email: "hello@cateyom.com",
        },
      };

  const visibleProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={`${isAr ? cairo.className : ""} min-h-screen w-full bg-[#FFFCF9] text-[#100E0B] antialiased`}
    >
      {/* Top promo bar */}
      <div className="border-b border-[#100E0B]/10 bg-[#100E0B] text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-2 px-4 py-2 text-[11px] sm:text-xs">
          <Truck className="h-3 w-3" />
          <span>{t.nav.freeShip}</span>
        </div>
      </div>

      {/* Sticky nav */}
      <header className="sticky top-0 z-40 border-b border-[#100E0B]/8 bg-[#FFFCF9]/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
          {/* Logo */}
          <Link href="#" className="flex shrink-0 items-center gap-2">
            <div className="relative h-8 w-24 sm:h-9 sm:w-28">
              <Image
                src="/catey/brand/catey-logo.svg"
                alt="Catey"
                fill
                className="object-contain object-start"
                priority
              />
            </div>
          </Link>

          {/* Nav links */}
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#100E0B]/80 lg:flex">
            <a href="#shop" className="transition hover:text-[#DA9552]">
              {t.nav.shop}
            </a>
            <a href="#clinic" className="transition hover:text-[#DA9552]">
              {t.nav.clinic}
            </a>
            <a href="#about" className="transition hover:text-[#DA9552]">
              {t.nav.about}
            </a>
            <a href="#contact" className="transition hover:text-[#DA9552]">
              {t.nav.contact}
            </a>
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              aria-label={t.nav.search}
              className="hidden h-9 w-9 items-center justify-center rounded-full text-[#100E0B]/70 transition hover:bg-[#F8E1AC]/40 hover:text-[#100E0B] sm:inline-flex"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Cart"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-[#100E0B]/70 transition hover:bg-[#F8E1AC]/40 hover:text-[#100E0B]"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -end-0.5 -top-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#DA9552] px-1 text-[10px] font-bold text-white">
                {cart.length}
              </span>
            </button>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-1 inline-flex items-center gap-1.5 rounded-full bg-[#100E0B] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#DA9552] sm:ms-2 sm:px-4 sm:text-sm"
            >
              <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">{t.nav.order}</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFCF9]">
        {/* Soft gradient orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -end-32 h-[420px] w-[420px] rounded-full bg-[#F8E1AC] opacity-60 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -start-32 h-[360px] w-[360px] rounded-full bg-[#DA9552]/30 opacity-70 blur-3xl"
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#100E0B]/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#764C24]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DA9552]" />
              {t.hero.eyebrow}
            </span>

            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[#100E0B] sm:text-5xl lg:text-[64px]">
              {t.hero.headlineMain}{" "}
              <span
                className={`${isAr ? "" : displaySerif.className} italic font-normal text-[#DA9552]`}
              >
                {t.hero.headlineAccent}
              </span>
              <br className="hidden sm:block" /> {t.hero.headlineEnd}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#100E0B]/70 sm:text-lg">
              {t.hero.sub}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 rounded-full bg-[#100E0B] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#100E0B]/15 transition hover:bg-[#DA9552] hover:shadow-[#DA9552]/30"
              >
                <ShoppingBag className="h-4 w-4" />
                {t.hero.shop}
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#100E0B]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#100E0B] transition hover:border-[#DA9552] hover:text-[#DA9552]"
              >
                <Stethoscope className="h-4 w-4" />
                {t.hero.book}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-[#100E0B]/10 pt-6">
              {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-bold text-[#100E0B] sm:text-2xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] leading-tight text-[#100E0B]/55 sm:text-xs">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] bg-[#F8E1AC] shadow-2xl shadow-[#100E0B]/10 sm:rounded-[36px]">
                <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                  <Image
                    src="/catey/option-3/feature-01.jpg"
                    alt="Pet lifestyle"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating product chip */}
                <div className="absolute bottom-5 start-5 flex max-w-[80%] items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur sm:bottom-6 sm:start-6">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-[#FFFCF9]">
                    <Image
                      src="/catey/preview-shop/products/pramy-kitten.jpg"
                      alt=""
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-xs font-semibold text-[#100E0B]">
                      Pramy Kitten Mousse
                    </div>
                    <div className="text-[11px] text-[#764C24]">7.50 OMR</div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#F8E1AC] px-2 py-1 text-[10px] font-semibold text-[#764C24]">
                    <Star className="h-3 w-3 fill-current" />
                    4.9
                  </div>
                </div>
              </div>

              {/* Decorative tag */}
              <div className="absolute -top-4 -end-2 hidden rotate-6 rounded-2xl bg-[#100E0B] px-4 py-2 text-xs font-semibold text-white shadow-lg sm:block">
                {isAr ? "توصيل في مسقط نفس اليوم" : "Same-day Muscat delivery"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="border-y border-[#100E0B]/8 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#764C24]">
              {t.catLabel}
            </h2>
          </div>
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((c) => {
              const Icon = c.Icon;
              const active = activeCategory === c.key;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setActiveCategory(active ? "all" : c.key)}
                  className={`group flex shrink-0 flex-col items-center gap-2 rounded-2xl border px-4 py-3 transition sm:px-5 ${
                    active
                      ? "border-[#100E0B] bg-[#100E0B] text-white"
                      : "border-[#100E0B]/10 bg-[#FFFCF9] text-[#100E0B] hover:border-[#DA9552] hover:bg-white"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                      active
                        ? "bg-white/15 text-white"
                        : "bg-[#F8E1AC]/60 text-[#764C24] group-hover:bg-[#F8E1AC]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold sm:text-sm">
                    {isAr ? c.ar : c.en}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section id="shop" className="bg-[#FFFCF9]">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-wrap items-end justify-between gap-4"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#DA9552]">
                {t.featured.eyebrow}
              </span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#100E0B] sm:text-4xl">
                {t.featured.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[#100E0B]/65 sm:text-base">
                {t.featured.sub}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`hidden rounded-full px-3.5 py-1.5 text-xs font-semibold sm:inline-flex ${
                activeCategory === "all"
                  ? "bg-[#100E0B] text-white"
                  : "border border-[#100E0B]/15 bg-white text-[#100E0B] hover:border-[#DA9552]"
              }`}
            >
              {t.featured.all}
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
            className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
            {visibleProducts.map((p) => (
              <motion.article
                key={p.id}
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#100E0B]/8 bg-white transition hover:-translate-y-0.5 hover:border-[#DA9552]/40 hover:shadow-xl hover:shadow-[#100E0B]/5"
              >
                <div className="relative aspect-square overflow-hidden bg-[#F8E1AC]/30">
                  <Image
                    src={p.image}
                    alt={isAr ? p.nameAr : p.nameEn}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-contain p-3 transition duration-500 group-hover:scale-105 sm:p-5"
                  />
                  {p.badge ? (
                    <span className="absolute start-3 top-3 inline-flex items-center rounded-full bg-[#100E0B] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                      {isAr ? p.badge.ar : p.badge.en}
                    </span>
                  ) : null}
                  <button
                    type="button"
                    aria-label="Wishlist"
                    className="absolute end-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#100E0B]/60 opacity-0 backdrop-blur transition group-hover:opacity-100 hover:text-[#DA9552]"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#764C24]/80">
                    {p.brand}
                  </div>
                  <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#100E0B]">
                    {isAr ? p.nameAr : p.nameEn}
                  </h3>
                  <div className="mt-3 flex items-center gap-1 text-[11px] text-[#100E0B]/60">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-[#DA9552] text-[#DA9552]" />
                    ))}
                    <span className="ms-1">(120)</span>
                  </div>
                  <div className="mt-auto flex items-end justify-between gap-2 pt-4">
                    <div>
                      <div className="text-base font-bold text-[#100E0B] sm:text-lg">
                        {p.price.toFixed(p.price < 10 ? 2 : 1)}
                        <span className="ms-1 text-xs font-medium text-[#100E0B]/55">
                          OMR
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCart((c) => [...c, p.id])}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#100E0B] text-white transition hover:bg-[#DA9552]"
                      aria-label={t.featured.add}
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clinic services */}
      <section id="clinic" className="bg-[#100E0B] text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#DA9552]">
              {t.services.eyebrow}
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.services.title}
            </h2>
            <p className="mt-3 text-sm text-white/65 sm:text-base">{t.services.sub}</p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {t.services.items.map((s, i) => {
              const Icon = [Stethoscope, Scissors, Syringe][i];
              return (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1612]">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100E0B] via-[#100E0B]/30 to-transparent" />
                    <div className="absolute start-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#DA9552] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="absolute end-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#100E0B]">
                      {s.price}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="text-sm text-white/65">{s.desc}</p>
                    <a
                      href={WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#100E0B] transition hover:bg-[#DA9552] hover:text-white"
                    >
                      {t.services.book}
                      <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Catey */}
      <section id="about" className="bg-[#FFFCF9]">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#DA9552]">
              {t.why.eyebrow}
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#100E0B] sm:text-4xl">
              {t.why.title}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {t.why.items.map((w, i) => {
              const Icon = w.Icon;
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-3xl border border-[#100E0B]/8 bg-white p-6 transition hover:border-[#DA9552]/30 hover:shadow-lg sm:p-8"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8E1AC]/60 text-[#764C24]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#100E0B]">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#100E0B]/65">
                    {w.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F8E1AC]/40">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#DA9552]">
            {t.testimonials.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#100E0B] sm:text-4xl">
            {t.testimonials.title}
          </h2>

          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 rounded-3xl border border-[#100E0B]/8 bg-white p-7 sm:p-10"
          >
            <div className="mb-3 flex justify-center gap-1 text-[#DA9552]">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p
              className={`text-xl leading-relaxed text-[#100E0B] sm:text-2xl ${
                isAr ? "" : displaySerif.className
              }`}
            >
              &ldquo;{t.testimonials.items[activeTestimonial].quote}&rdquo;
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8E1AC] text-[#764C24]">
                <Cat className="h-5 w-5" />
              </div>
              <div className="text-start">
                <div className="text-sm font-semibold text-[#100E0B]">
                  {t.testimonials.items[activeTestimonial].author}
                </div>
                <div className="text-xs text-[#100E0B]/55">
                  {t.testimonials.items[activeTestimonial].city}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 flex justify-center gap-2">
            {t.testimonials.items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveTestimonial(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeTestimonial
                    ? "w-8 bg-[#DA9552]"
                    : "w-2 bg-[#100E0B]/20 hover:bg-[#100E0B]/40"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#DA9552] to-[#764C24] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -end-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:flex-row lg:py-16">
          <div className="text-center lg:text-start">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.cta.title}
            </h3>
            <p className="mt-2 text-sm text-white/80 sm:text-base">{t.cta.sub}</p>
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#100E0B] shadow-xl transition hover:bg-[#100E0B] hover:text-white"
          >
            <MessageCircle className="h-4 w-4" />
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#100E0B] text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-4">
            <div>
              <div className="relative h-9 w-28">
                <Image
                  src="/catey/brand/catey-logo.svg"
                  alt="Catey"
                  fill
                  className="object-contain object-start invert"
                />
              </div>
              <p className="mt-4 max-w-xs text-sm text-white/60">{t.footer.tagline}</p>
              <div className="mt-5 flex items-center gap-2">
                <a
                  href="https://instagram.com/catey_om"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#DA9552]"
                >
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#DA9552]"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#DA9552]">
                {t.footer.shop}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">{isAr ? "طعام القطط" : "Cat Food"}</a></li>
                <li><a href="#" className="hover:text-white">{isAr ? "طعام الكلاب" : "Dog Food"}</a></li>
                <li><a href="#" className="hover:text-white">{isAr ? "حلويات" : "Treats"}</a></li>
                <li><a href="#" className="hover:text-white">{isAr ? "رمل" : "Litter"}</a></li>
                <li><a href="#" className="hover:text-white">{isAr ? "إكسسوارات" : "Accessories"}</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#DA9552]">
                {t.footer.clinic}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">{isAr ? "فحص بيطري" : "Vet Checkup"}</a></li>
                <li><a href="#" className="hover:text-white">{isAr ? "العناية" : "Grooming"}</a></li>
                <li><a href="#" className="hover:text-white">{isAr ? "تطعيمات" : "Vaccinations"}</a></li>
                <li><a href="#" className="hover:text-white">{isAr ? "احجز موعد" : "Book a visit"}</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#DA9552]">
                {t.footer.contact}
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#DA9552]" />
                  <span>{t.footer.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#DA9552]" />
                  <a href={WA} className="hover:text-white">+968 9752 2009</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#DA9552]" />
                  <a href={`mailto:${t.footer.email}`} className="hover:text-white">
                    {t.footer.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
            <div>© {new Date().getFullYear()} Catey. {t.footer.rights}.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">{isAr ? "الخصوصية" : "Privacy"}</a>
              <a href="#" className="hover:text-white">{isAr ? "الشروط" : "Terms"}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function CateyWebsitePreview() {
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-[#FFFCF9]" />}>
      <PreviewInner />
    </Suspense>
  );
}
