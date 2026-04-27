import Link from "next/link";
import {
  Cat,
  Dog,
  Bird,
  Fish,
  Bone,
  Sparkles,
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
  { key: "litter", label: "Litter", Icon: Sparkles },
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

      {/* Top bar — slimmer, less chrome, more confident */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#1F1A14]/[0.06] bg-[#FFF8F0]/85 px-5 py-3.5 backdrop-blur-xl">
        <Link href="#" className="flex items-center gap-2">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full text-white"
            style={{ background: COLORS.ink }}
            aria-hidden
          >
            <Cat className="h-4 w-4" strokeWidth={2.2} />
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.01em]">
            Catey
          </span>
        </Link>
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#1F1A14]/65 active:scale-95"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#1F1A14]/80 active:scale-95"
          >
            <ShoppingCart className="h-[18px] w-[18px]" strokeWidth={1.8} />
            <span
              className="absolute right-0.5 top-0.5 flex h-[15px] min-w-[15px] items-center justify-center rounded-full px-[3px] text-[9px] font-bold text-white"
              style={{ background: COLORS.coral }}
            >
              2
            </span>
          </button>
        </div>
      </header>

      {/* Hero — editorial. Eyebrow pill, big serif/grotesque headline, subtle photo. */}
      <section className="px-5 pt-7 pb-10">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1F1A14]/12 bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F1A14]/70 backdrop-blur">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: COLORS.coral }}
          />
          Shop · Clinic
        </span>
        <h1 className="display mt-4 text-[40px] font-normal italic leading-[0.95] tracking-[-0.02em] text-[#1F1A14]">
          Everything
          <br />
          your pet
          <br />
          <span className="not-italic" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "-0.03em" }}>
            actually needs.
          </span>
        </h1>
        <p className="mt-4 max-w-[260px] text-[13px] leading-relaxed text-[#1F1A14]/60">
          Food, litter, supplements. A real vet clinic in Muscat. Same-day delivery across Oman.
        </p>

        <div className="mt-7 overflow-hidden rounded-[28px]">
          <div className="relative aspect-[4/5] w-full">
            <img
              src="/catey/photos/lifestyle.jpg"
              alt="Pet lifestyle"
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Subtle bottom glaze, not a full gradient wash */}
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

        <div className="mt-5 grid grid-cols-2 gap-2">
          <a
            href="#shop"
            className="flex items-center justify-center gap-1.5 rounded-full px-4 py-3 text-[13px] font-semibold text-white active:scale-[0.98]"
            style={{ background: COLORS.ink }}
          >
            <ShoppingBag className="h-[14px] w-[14px]" strokeWidth={2.2} />
            Shop
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-full border border-[#1F1A14]/15 bg-white px-4 py-3 text-[13px] font-semibold text-[#1F1A14] active:scale-[0.98]"
          >
            <Stethoscope className="h-[14px] w-[14px]" strokeWidth={2.2} />
            Book vet
          </a>
        </div>
      </section>

      {/* Categories — bigger pills, active dot pulse */}
      <section className="border-t border-[#1F1A14]/[0.06] bg-white py-5">
        <div className="flex items-end justify-between px-5 pb-3">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F1A14]/55">
            Browse
          </div>
          <a href="#" className="text-[11px] font-semibold text-[#1F1A14]/60">
            All categories
          </a>
        </div>
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
      </section>

      {/* Featured grid — two-tone cards. White image plate, cream price strip. */}
      <section id="shop" className="px-5 py-9">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <div
              className="text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: COLORS.coralDeep }}
            >
              Featured
            </div>
            <h2 className="display mt-1.5 text-[26px] font-normal italic leading-[1.05] tracking-[-0.01em]">
              Picks of the week
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1F1A14]/70"
          >
            See all
            <ArrowRight className="h-3 w-3" strokeWidth={2.4} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {featured.map((p, i) => (
            <article
              key={p.id}
              className="lift group flex flex-col overflow-hidden rounded-3xl border border-black/[0.05] bg-white"
            >
              {/* Image plate — uniform white, contained image, never crops */}
              <div className="relative aspect-square bg-white">
                <img
                  src={p.image}
                  alt={p.name}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-contain p-4"
                  style={{ mixBlendMode: "multiply" }}
                />
                {p.badge ? (
                  <span
                    className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#1F1A14] ring-1 ring-[#1F1A14]/8 backdrop-blur"
                  >
                    {p.badge}
                  </span>
                ) : null}
              </div>
              {/* Cream/tan price strip — unifies the visual rhythm across the grid */}
              <div
                className="flex flex-1 flex-col p-3"
                style={{ background: COLORS.warm }}
              >
                <div
                  className="text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: COLORS.brown }}
                >
                  {p.brand}
                </div>
                <h3 className="mt-1 line-clamp-2 text-[12px] font-semibold leading-snug tracking-[-0.005em] text-[#1F1A14]">
                  {p.name}
                </h3>
                <div className="mt-2.5 flex items-end justify-between gap-2">
                  <div>
                    <div className="text-[15px] font-bold leading-none tracking-[-0.01em] text-[#1F1A14]">
                      {p.price.toFixed(p.price < 10 ? 2 : 1)}
                      <span className="ml-0.5 text-[10px] font-medium text-[#1F1A14]/55">
                        OMR
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Add ${p.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white shadow-sm active:scale-90"
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

      {/* Clinic band — its own story. Asymmetric: one feature card large, two stacked. */}
      <section
        id="clinic"
        className="px-5 py-10 text-white"
        style={{ background: COLORS.ink }}
      >
        <div
          className="text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: COLORS.coral }}
        >
          The clinic
        </div>
        <h2 className="display mt-2 text-[28px] font-normal italic leading-[1] tracking-[-0.01em]">
          Full care,
          <br />
          one roof.
        </h2>
        <p className="mt-3 max-w-[260px] text-[12px] leading-relaxed text-white/65">
          Visit our clinic in Al Mabila, or book on WhatsApp. Real vets, real follow-ups.
        </p>

        <div className="mt-6 grid gap-3">
          {/* Feature card */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="lift relative overflow-hidden rounded-3xl p-5 ring-1 ring-white/10"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div
              className="flex h-11 w-11 items-center justify-center rounded-2xl text-white"
              style={{ background: COLORS.coral }}
            >
              <featureService.Icon className="h-[20px] w-[20px]" strokeWidth={2} />
            </div>
            <div className="mt-4 text-[15px] font-semibold tracking-[-0.01em]">
              {featureService.title}
            </div>
            <p className="mt-1.5 text-[12px] leading-relaxed text-white/60">
              {featureService.desc}
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white">
              {featureService.cta}
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
            </div>
          </a>

          {/* Two stacked secondary services */}
          <div className="grid grid-cols-2 gap-3">
            {subServices.map(({ title, desc, Icon }) => (
              <a
                key={title}
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="lift rounded-3xl p-4 ring-1 ring-white/10"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-white"
                  style={{ background: "rgba(240,135,98,0.18)", color: COLORS.coral }}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </div>
                <div className="mt-3 text-[13px] font-semibold tracking-[-0.005em]">
                  {title}
                </div>
                <div className="mt-1 text-[11px] leading-snug text-white/55">
                  {desc}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews — two large quote cards, no slider */}
      <section className="px-5 py-10" style={{ background: COLORS.warm }}>
        <div className="flex items-center gap-1.5 text-[#1F1A14]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5"
              fill={COLORS.coral}
              color={COLORS.coral}
            />
          ))}
          <span className="ml-1 text-[11px] font-semibold tracking-[-0.005em]">
            4.9 from 2,000+ pet families
          </span>
        </div>

        <div className="mt-5 grid gap-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-3xl border border-[#1F1A14]/8 bg-white p-5"
            >
              <div
                className="display text-[28px] leading-none italic"
                style={{ color: COLORS.coralDeep }}
                aria-hidden
              >
                &ldquo;
              </div>
              <blockquote className="mt-1 text-[14px] leading-[1.45] tracking-[-0.005em] text-[#1F1A14]/90">
                {r.quote}
              </blockquote>
              <figcaption className="mt-3 flex items-center gap-2 text-[11px] text-[#1F1A14]/55">
                <span className="font-semibold text-[#1F1A14]/80">{r.name}</span>
                <span className="h-1 w-1 rounded-full bg-[#1F1A14]/25" />
                <span>{r.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA — editorial, simpler */}
      <section
        className="px-6 py-12 text-white"
        style={{ background: COLORS.coral }}
      >
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85">
          WhatsApp
        </div>
        <h3 className="display mt-3 text-[32px] font-normal italic leading-[0.98] tracking-[-0.015em]">
          Just message us.
        </h3>
        <p className="mt-3 max-w-[240px] text-[12px] leading-relaxed text-white/85">
          We deliver across Oman, usually same day in Muscat.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-[#1F1A14] shadow-lg shadow-black/10 active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2} />
          Chat with Catey
        </a>
      </section>

      {/* Footer — minimal, three columns max, Apple-clean */}
      <footer
        className="px-5 pb-8 pt-9 text-white/65"
        style={{ background: COLORS.ink }}
      >
        <div className="flex items-center gap-2">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full"
            style={{ background: COLORS.coral }}
            aria-hidden
          >
            <Cat className="h-4 w-4 text-white" strokeWidth={2.2} />
          </span>
          <span className="text-[14px] font-semibold tracking-[-0.01em] text-white">
            Catey
          </span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4 text-[11px]">
          <div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Shop
            </div>
            <a href="#shop" className="mt-2 block text-white/75 hover:text-white">
              All products
            </a>
            <a href="#shop" className="mt-1.5 block text-white/75 hover:text-white">
              Brands
            </a>
          </div>
          <div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Clinic
            </div>
            <a href="#clinic" className="mt-2 block text-white/75 hover:text-white">
              Services
            </a>
            <a href={WA} className="mt-1.5 block text-white/75 hover:text-white">
              Book
            </a>
          </div>
          <div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Catey
            </div>
            <a href={WA} className="mt-2 block text-white/75 hover:text-white">
              Contact
            </a>
            <a href="#" className="mt-1.5 block text-white/75 hover:text-white">
              About
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-[10px] text-white/40">
          © {new Date().getFullYear()} Catey. Al Mabila, Sib, Oman.
        </div>
      </footer>
    </div>
  );
}
