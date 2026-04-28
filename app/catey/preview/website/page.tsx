import Link from "next/link";
import {
  Cat,
  Dog,
  Bird,
  Fish,
  Bone,
  PawPrint,
  Scissors,
  Stethoscope,
  Syringe,
  ShoppingBag,
  ShoppingCart,
  Search,
  MessageCircle,
  Plus,
  Star,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

// English-only Catey shop preview, designed for narrow viewports (320 to 360px),
// rendered inside a phone frame on the proposal page. Pure server component so
// the first paint shows up instantly inside the iframe. No client hydration gate,
// no useSearchParams suspense boundary, no motion-on-mount blocking content.
//
// Visual brief: 2026 editorial. Sculpted negative space, big type contrast,
// architectural confidence. References: Apple product pages, Aesop, Catbird,
// Allbirds. Less gradient washes, more deliberate composition.

const WA = "https://wa.me/96892602691";

// Catey palette
const COLORS = {
  bg: "#FFF8F0", // cream base
  ink: "#1F1A14", // near-black
  warm: "#FBEBD8", // warm tan
  peach: "#FCD7C4", // light peach
  coral: "#F08762", // accent
  coralDeep: "#D26B49", // deep accent
  brown: "#7A4A2B", // warm brown
};

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  badge?: string;
};

const featured: Product[] = [
  {
    id: 31753,
    name: "Brit VD Cat Hypoallergenic 2kg",
    brand: "Brit",
    price: 13.5,
    image: "/catey/preview-shop/products/brit-hypo.webp",
    badge: "Vet pick",
  },
  {
    id: 30490,
    name: "Schesir Kitten Chicken 1.5kg",
    brand: "Schesir",
    price: 10.0,
    image: "/catey/preview-shop/products/schesir-kitten.jpg",
  },
  {
    id: 32391,
    name: "Pramy Kitten Mousse 70g",
    brand: "Pramy",
    price: 7.5,
    image: "/catey/preview-shop/products/pramy-kitten.jpg",
    badge: "New",
  },
  {
    id: 31789,
    name: "Carnilove Beef Adult Dog 11.4kg",
    brand: "Carnilove",
    price: 35.0,
    image: "/catey/preview-shop/products/carnilove-beef.png",
  },
  {
    id: 32244,
    name: "Beaphar Salmon Oil",
    brand: "Beaphar",
    price: 10.0,
    image: "/catey/preview-shop/products/beaphar-salmon-oil.jpg",
    badge: "Best seller",
  },
  {
    id: 30593,
    name: "Bioline Tofu Litter 7L",
    brand: "Bioline",
    price: 4.4,
    image: "/catey/preview-shop/products/bioline-tofu.png",
  },
  {
    id: 32178,
    name: "WANPY Lickable Chicken & Crab",
    brand: "WANPY",
    price: 1.2,
    image: "/catey/preview-shop/products/wanpy-chicken-crab.jpg",
  },
  {
    id: 32035,
    name: "Catey Mug, Cream",
    brand: "Catey",
    price: 5.0,
    image: "/catey/preview-shop/products/catey-mug.jpg",
    badge: "Original",
  },
];

const categories = [
  { key: "cats", label: "Cats", Icon: Cat },
  { key: "dogs", label: "Dogs", Icon: Dog },
  { key: "treats", label: "Treats", Icon: Bone },
  { key: "litter", label: "Litter", Icon: PawPrint },
  { key: "grooming", label: "Grooming", Icon: Scissors },
  { key: "birds", label: "Birds", Icon: Bird },
  { key: "fish", label: "Fish", Icon: Fish },
];

// One feature service rendered larger, two stacked smaller. Asymmetric grid
// gives the clinic band an editorial hierarchy instead of a flat list.
const featureService = {
  title: "Vet checkup",
  desc: "Same-day visits at our Al Mabila clinic. General health, diagnostics, and follow-ups.",
  Icon: Stethoscope,
  cta: "Book a visit",
};

const subServices = [
  {
    title: "Grooming",
    desc: "Bath, brush, nail trim.",
    Icon: Scissors,
  },
  {
    title: "Vaccinations",
    desc: "Core shots with reminders.",
    Icon: Syringe,
  },
];

const reviews = [
  {
    quote:
      "Ordered food for my dog at noon. It arrived in two hours. The team even called to confirm the size.",
    name: "Ahmed",
    place: "Salalah",
  },
  {
    quote:
      "The vet was patient with my anxious cat. First time she did not hide for hours after a checkup.",
    name: "Mariam",
    place: "Muscat",
  },
];

export default function CateyShopPreview() {
  return (
    <div
      dir="ltr"
      lang="en"
      className="catey-preview-root min-h-screen w-full bg-[#FFF8F0] text-[#1F1A14] antialiased"
      style={{
        fontFamily:
          "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Hide native scrollbars on the iframed body so the phone frame looks like a real device */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html, body { background:#FFF8F0; }
            html { scrollbar-width: none; -ms-overflow-style: none; }
            html::-webkit-scrollbar, body::-webkit-scrollbar { display: none; width: 0; height: 0; }
            body { scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; }
            * { -webkit-tap-highlight-color: transparent; }
            .cat-pill::-webkit-scrollbar { display: none; }
            .cat-pill { scrollbar-width: none; -ms-overflow-style: none; }
            .display { font-family: var(--font-display), Georgia, 'Times New Roman', serif; font-feature-settings: "ss01", "ss02"; }
            /* Subtle motion only; no entrance animations that delay paint */
            @media (prefers-reduced-motion: no-preference) {
              .lift { transition: transform 220ms cubic-bezier(.2,.7,.2,1), box-shadow 220ms cubic-bezier(.2,.7,.2,1); }
              .lift:hover { transform: translateY(-2px); box-shadow: 0 18px 40px -24px rgba(31,26,20,0.25); }
              @keyframes activeDot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .55; transform: scale(.7); } }
              .pulse-dot { animation: activeDot 1.8s ease-in-out infinite; }
            }
          `,
        }}
      />

      {/* Top bar , slimmer, less chrome, more confident. Desktop adds a real nav row. */}
      <header className="sticky top-0 z-30 border-b border-[#1F1A14]/[0.06] bg-[#FFF8F0]/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-3.5 md:px-8 md:py-4">
          <Link href="#" className="flex items-center gap-2">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full text-white md:h-8 md:w-8"
              style={{ background: COLORS.ink }}
              aria-hidden
            >
              <Cat className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={2.2} />
            </span>
            <span className="text-[15px] font-semibold tracking-[-0.01em] md:text-[17px]">
              Catey
            </span>
          </Link>
          {/* Desktop primary nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {[
              { href: "#shop", label: "Shop" },
              { href: "#shop", label: "Brands" },
              { href: "#clinic", label: "Clinic" },
              { href: "#clinic", label: "Vet" },
              { href: "#", label: "About" },
            ].map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-[13px] font-medium tracking-[-0.005em] text-[#1F1A14]/75 transition hover:text-[#1F1A14]"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-0.5 md:gap-1">
            <button
              type="button"
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#1F1A14]/65 active:scale-95 md:h-10 md:w-10"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              aria-label="Cart"
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#1F1A14]/80 active:scale-95 md:h-10 md:w-10"
            >
              <ShoppingCart className="h-[18px] w-[18px]" strokeWidth={1.8} />
              <span
                className="absolute right-0.5 top-0.5 flex h-[15px] min-w-[15px] items-center justify-center rounded-full px-[3px] text-[9px] font-bold text-white"
                style={{ background: COLORS.coral }}
              >
                2
              </span>
            </button>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 hidden items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition active:scale-[0.98] md:inline-flex"
              style={{ background: COLORS.ink }}
            >
              <MessageCircle className="h-[14px] w-[14px]" strokeWidth={2.2} />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero , editorial. Eyebrow pill, big serif/grotesque headline, subtle photo. */}
      <section className="mx-auto w-full max-w-[1280px] px-5 pt-7 pb-10 md:grid md:grid-cols-[1fr_1.05fr] md:items-center md:gap-12 md:px-8 md:pt-16 md:pb-20 lg:gap-16 lg:pt-20 lg:pb-24">
        <div className="md:order-1">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1F1A14]/12 bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F1A14]/70 backdrop-blur md:text-[11px] md:tracking-[0.22em]">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: COLORS.coral }}
            />
            Shop · Clinic
          </span>
          <h1 className="display mt-4 text-[40px] font-normal italic leading-[0.95] tracking-[-0.02em] text-[#1F1A14] md:mt-6 md:text-[64px] md:leading-[0.96] lg:text-[76px]">
            Everything
            <br />
            your pet
            <br />
            <span className="not-italic" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "-0.03em" }}>
              actually needs.
            </span>
          </h1>
          <p className="mt-4 max-w-[260px] text-[13px] leading-relaxed text-[#1F1A14]/60 md:mt-6 md:max-w-[420px] md:text-[15px] md:leading-[1.55]">
            Food, litter, supplements. A real vet clinic in Muscat. Same-day delivery across Oman.
          </p>

          {/* Mobile-only image , desktop renders it on the right column */}
          <div className="mt-7 overflow-hidden rounded-[28px] md:hidden">
            <div className="relative aspect-[4/5] w-full">
              <img
                src="/catey/photos/website-hero.jpg"
                alt="Catey clinic and shop"
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1F1A14]/35 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="text-white">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                    Featured
                  </div>
                  <div className="display mt-1 text-[20px] italic leading-tight">
                    Bath season
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Open featured story"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1F1A14] active:scale-95"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 md:mt-9 md:flex md:flex-wrap md:gap-3">
            <a
              href="#shop"
              className="flex items-center justify-center gap-1.5 rounded-full px-4 py-3 text-[13px] font-semibold text-white active:scale-[0.98] md:px-6 md:py-3.5 md:text-[14px]"
              style={{ background: COLORS.ink }}
            >
              <ShoppingBag className="h-[14px] w-[14px]" strokeWidth={2.2} />
              Shop the store
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-full border border-[#1F1A14]/15 bg-white px-4 py-3 text-[13px] font-semibold text-[#1F1A14] active:scale-[0.98] md:px-6 md:py-3.5 md:text-[14px]"
            >
              <Stethoscope className="h-[14px] w-[14px]" strokeWidth={2.2} />
              Book vet
            </a>
          </div>

          {/* Desktop-only trust strip */}
          <div className="mt-10 hidden items-center gap-7 text-[12px] text-[#1F1A14]/55 md:flex">
            <div className="flex items-center gap-2">
              <Star className="h-3.5 w-3.5" fill={COLORS.coral} color={COLORS.coral} />
              <span><strong className="text-[#1F1A14]/85">4.9</strong> · 2,000+ pet families</span>
            </div>
            <div className="h-3.5 w-px bg-[#1F1A14]/15" />
            <div>Same-day delivery across Muscat</div>
          </div>
        </div>

        {/* Desktop image , large editorial photo on the right */}
        <div className="hidden md:order-2 md:block">
          <div className="relative overflow-hidden rounded-[36px] shadow-[0_30px_80px_-30px_rgba(31,26,20,0.35)]">
            <div className="relative aspect-[5/6] w-full lg:aspect-[4/5]">
              <img
                src="/catey/photos/website-hero.jpg"
                alt="Catey clinic and shop"
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1F1A14]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="text-white">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
                    Featured
                  </div>
                  <div className="display mt-1 text-[26px] italic leading-tight">
                    Bath season
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Open featured story"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1F1A14] active:scale-95"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories , bigger pills, active dot pulse. Mobile: horizontal scroll with edge fade. Desktop: wrap onto one line. */}
      <section className="border-t border-[#1F1A14]/[0.06] bg-white py-5 md:py-7">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
          <div className="flex items-end justify-between pb-3 md:pb-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F1A14]/55 md:text-[11px] md:tracking-[0.22em]">
              Browse
            </div>
            <a href="#" className="text-[11px] font-semibold text-[#1F1A14]/60 md:text-[12px]">
              All categories
            </a>
          </div>
        </div>
        {/* Mobile track: fades on the right edge to signal more content */}
        <div className="relative md:hidden">
          <div
            className="cat-pill flex gap-2 overflow-x-auto px-5 pb-1"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
            }}
          >
            {categories.map(({ key, label, Icon }, i) => {
              const active = i === 0;
              return (
                <button
                  key={key}
                  type="button"
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 active:scale-95 ${
                    active
                      ? "border-[#1F1A14] bg-[#1F1A14] text-white"
                      : "border-[#1F1A14]/12 bg-[#FFF8F0] text-[#1F1A14]"
                  }`}
                  style={{ scrollSnapAlign: "start" }}
                >
                  <Icon className="h-[14px] w-[14px]" strokeWidth={2} />
                  <span className="text-[12px] font-semibold tracking-[-0.005em]">
                    {label}
                  </span>
                  {active ? (
                    <span
                      className="pulse-dot ml-0.5 h-1.5 w-1.5 rounded-full"
                      style={{ background: COLORS.coral }}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
          {/* Edge fade hints that the row scrolls */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />
        </div>
        {/* Desktop track: all categories on one row, no scroll */}
        <div className="mx-auto hidden w-full max-w-[1280px] px-8 md:flex md:flex-wrap md:gap-2.5">
          {categories.map(({ key, label, Icon }, i) => {
            const active = i === 0;
            return (
              <button
                key={key}
                type="button"
                className={`flex items-center gap-2 rounded-full border px-5 py-3 transition active:scale-95 ${
                  active
                    ? "border-[#1F1A14] bg-[#1F1A14] text-white"
                    : "border-[#1F1A14]/12 bg-[#FFF8F0] text-[#1F1A14] hover:border-[#1F1A14]/30 hover:bg-white"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
                <span className="text-[13px] font-semibold tracking-[-0.005em]">
                  {label}
                </span>
                {active ? (
                  <span
                    className="pulse-dot ml-0.5 h-1.5 w-1.5 rounded-full"
                    style={{ background: COLORS.coral }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured grid , two-tone cards. White image plate, cream price strip. */}
      <section id="shop" className="mx-auto w-full max-w-[1280px] px-5 py-9 md:px-8 md:py-16">
        <div className="mb-5 flex items-end justify-between md:mb-8">
          <div>
            <div
              className="text-[10px] font-semibold uppercase tracking-[0.2em] md:text-[11px] md:tracking-[0.22em]"
              style={{ color: COLORS.coralDeep }}
            >
              Featured
            </div>
            <h2 className="display mt-1.5 text-[26px] font-normal italic leading-[1.05] tracking-[-0.01em] md:mt-2 md:text-[40px] lg:text-[48px]">
              Picks of the week
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1F1A14]/70 md:text-[13px]"
          >
            See all
            <ArrowRight className="h-3 w-3 md:h-4 md:w-4" strokeWidth={2.4} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {featured.map((p, i) => (
            <article
              key={p.id}
              className="lift group flex flex-col overflow-hidden rounded-3xl border border-black/[0.05] bg-white"
            >
              {/* Image plate , uniform white, contained image, never crops */}
              <div className="relative aspect-square bg-white">
                <img
                  src={p.image}
                  alt={p.name}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-contain p-4 md:p-6"
                  style={{ mixBlendMode: "multiply" }}
                />
                {p.badge ? (
                  <span
                    className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#1F1A14] ring-1 ring-[#1F1A14]/8 backdrop-blur md:left-3 md:top-3 md:px-2.5 md:py-1 md:text-[10px]"
                  >
                    {p.badge}
                  </span>
                ) : null}
              </div>
              {/* Cream/tan price strip , unifies the visual rhythm across the grid */}
              <div
                className="flex flex-1 flex-col p-3 md:p-4"
                style={{ background: COLORS.warm }}
              >
                <div
                  className="text-[9px] font-semibold uppercase tracking-[0.14em] md:text-[10px]"
                  style={{ color: COLORS.brown }}
                >
                  {p.brand}
                </div>
                <h3 className="mt-1 line-clamp-2 text-[12px] font-semibold leading-snug tracking-[-0.005em] text-[#1F1A14] md:mt-1.5 md:text-[14px]">
                  {p.name}
                </h3>
                <div className="mt-2.5 flex items-end justify-between gap-2 md:mt-4">
                  <div>
                    <div className="text-[15px] font-bold leading-none tracking-[-0.01em] text-[#1F1A14] md:text-[18px]">
                      {p.price.toFixed(p.price < 10 ? 2 : 1)}
                      <span className="ml-0.5 text-[10px] font-medium text-[#1F1A14]/55 md:text-[11px]">
                        OMR
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Add ${p.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white shadow-sm active:scale-90 md:h-9 md:w-9"
                    style={{ background: COLORS.ink }}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.6} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Clinic band , its own story. Asymmetric: one feature card large, two stacked. Desktop spreads onto a 3-up row. */}
      <section
        id="clinic"
        className="px-5 py-10 text-white md:py-20"
        style={{ background: COLORS.ink }}
      >
        <div className="mx-auto w-full max-w-[1280px] md:px-8">
          <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-12 md:items-end">
            <div>
              <div
                className="text-[10px] font-semibold uppercase tracking-[0.22em] md:text-[11px]"
                style={{ color: COLORS.coral }}
              >
                The clinic
              </div>
              <h2 className="display mt-2 text-[28px] font-normal italic leading-[1] tracking-[-0.01em] md:mt-3 md:text-[52px] lg:text-[60px]">
                Full care,
                <br />
                one roof.
              </h2>
              <p className="mt-3 max-w-[260px] text-[12px] leading-relaxed text-white/65 md:max-w-[360px] md:text-[15px] md:leading-[1.55]">
                Visit our clinic in Al Mabila, or book on WhatsApp. Real vets, real follow-ups.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:mt-12 md:grid-cols-3 md:gap-5">
            {/* Feature card */}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="lift relative overflow-hidden rounded-3xl p-5 ring-1 ring-white/10 md:p-7"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl text-white md:h-12 md:w-12"
                style={{ background: COLORS.coral }}
              >
                <featureService.Icon className="h-[20px] w-[20px]" strokeWidth={2} />
              </div>
              <div className="mt-4 text-[15px] font-semibold tracking-[-0.01em] md:text-[18px]">
                {featureService.title}
              </div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/60 md:text-[13px]">
                {featureService.desc}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white md:text-[12px]">
                {featureService.cta}
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
              </div>
            </a>

            {/* Two stacked secondary services , on desktop they sit alongside the feature card */}
            <div className="grid grid-cols-2 gap-3 md:contents">
              {subServices.map(({ title, desc, Icon }) => (
                <a
                  key={title}
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift rounded-3xl p-4 ring-1 ring-white/10 md:p-7"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-white md:h-12 md:w-12 md:rounded-2xl"
                    style={{ background: "rgba(240,135,98,0.18)", color: COLORS.coral }}
                  >
                    <Icon className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={2} />
                  </div>
                  <div className="mt-3 text-[13px] font-semibold tracking-[-0.005em] md:mt-4 md:text-[18px]">
                    {title}
                  </div>
                  <div className="mt-1 text-[11px] leading-snug text-white/55 md:mt-1.5 md:text-[13px] md:leading-relaxed">
                    {desc}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews , two large quote cards, no slider. Desktop centers and widens. */}
      <section className="px-5 py-10 md:py-20" style={{ background: COLORS.warm }}>
        <div className="mx-auto w-full max-w-[1280px] md:px-8">
          <div className="flex items-center gap-1.5 text-[#1F1A14]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 md:h-4 md:w-4"
                fill={COLORS.coral}
                color={COLORS.coral}
              />
            ))}
            <span className="ml-1 text-[11px] font-semibold tracking-[-0.005em] md:text-[13px]">
              4.9 from 2,000+ pet families
            </span>
          </div>

          <div className="mt-5 grid gap-3 md:mt-8 md:grid-cols-2 md:gap-6">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="rounded-3xl border border-[#1F1A14]/8 bg-white p-5 md:p-8"
              >
                <div
                  className="display text-[28px] leading-none italic md:text-[40px]"
                  style={{ color: COLORS.coralDeep }}
                  aria-hidden
                >
                  &ldquo;
                </div>
                <blockquote className="mt-1 text-[14px] leading-[1.45] tracking-[-0.005em] text-[#1F1A14]/90 md:mt-2 md:text-[18px] md:leading-[1.5]">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-3 flex items-center gap-2 text-[11px] text-[#1F1A14]/55 md:mt-5 md:text-[13px]">
                  <span className="font-semibold text-[#1F1A14]/80">{r.name}</span>
                  <span className="h-1 w-1 rounded-full bg-[#1F1A14]/25" />
                  <span>{r.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA , editorial, simpler. Desktop centers and balances headline + button on a row. */}
      <section
        className="px-6 py-12 text-white md:py-20"
        style={{ background: COLORS.coral }}
      >
        <div className="mx-auto w-full max-w-[1280px] md:flex md:items-end md:justify-between md:gap-12 md:px-8">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 md:text-[11px]">
              WhatsApp
            </div>
            <h3 className="display mt-3 text-[32px] font-normal italic leading-[0.98] tracking-[-0.015em] md:text-[56px] lg:text-[68px]">
              Just message us.
            </h3>
            <p className="mt-3 max-w-[240px] text-[12px] leading-relaxed text-white/85 md:max-w-[420px] md:text-[15px]">
              We deliver across Oman, usually same day in Muscat.
            </p>
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-[#1F1A14] shadow-lg shadow-black/10 active:scale-[0.98] md:mt-0 md:shrink-0 md:px-7 md:py-4 md:text-[15px]"
          >
            <MessageCircle className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
            Chat with Catey
          </a>
        </div>
      </section>

      {/* Footer , minimal, three columns max, Apple-clean. Desktop adds a 4th column and a wider container. */}
      <footer
        className="px-5 pb-8 pt-9 text-white/65 md:px-8 md:pb-12 md:pt-16"
        style={{ background: COLORS.ink }}
      >
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="md:flex md:items-start md:justify-between md:gap-12">
            <div className="flex items-center gap-2 md:max-w-[280px]">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full md:h-9 md:w-9"
                style={{ background: COLORS.coral }}
                aria-hidden
              >
                <Cat className="h-4 w-4 text-white md:h-[18px] md:w-[18px]" strokeWidth={2.2} />
              </span>
              <span className="text-[14px] font-semibold tracking-[-0.01em] text-white md:text-[16px]">
                Catey
              </span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-[11px] md:mt-0 md:grid-cols-4 md:gap-12 md:text-[13px]">
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40 md:text-[10px]">
                  Shop
                </div>
                <a href="#shop" className="mt-2 block text-white/75 hover:text-white md:mt-3">
                  All products
                </a>
                <a href="#shop" className="mt-1.5 block text-white/75 hover:text-white md:mt-2">
                  Brands
                </a>
              </div>
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40 md:text-[10px]">
                  Clinic
                </div>
                <a href="#clinic" className="mt-2 block text-white/75 hover:text-white md:mt-3">
                  Services
                </a>
                <a href={WA} className="mt-1.5 block text-white/75 hover:text-white md:mt-2">
                  Book
                </a>
              </div>
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40 md:text-[10px]">
                  Catey
                </div>
                <a href={WA} className="mt-2 block text-white/75 hover:text-white md:mt-3">
                  Contact
                </a>
                <a href="#" className="mt-1.5 block text-white/75 hover:text-white md:mt-2">
                  About
                </a>
              </div>
              <div className="hidden md:block">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Visit
                </div>
                <div className="mt-3 text-white/75">Al Mabila, Sib</div>
                <div className="mt-2 text-white/55">Sun – Thu, 9 am – 9 pm</div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-4 text-[10px] text-white/40 md:mt-12 md:pt-6 md:text-[11px]">
            © {new Date().getFullYear()} Catey. Al Mabila, Sib, Oman.
          </div>
        </div>
      </footer>
    </div>
  );
}
