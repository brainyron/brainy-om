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
} from "lucide-react";

// English-only Catey shop preview, designed for narrow viewports (320-360px),
// rendered inside a phone frame on the proposal page. Server component so the
// first paint shows up instantly inside the iframe — no client hydration gate,
// no useSearchParams suspense boundary, no motion-on-mount blocking content.

const WA = "https://wa.me/96892602691";

const accent = "#F08762";

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

const services = [
  {
    title: "Vet checkup",
    desc: "Same-day visits in Al Mabila.",
    Icon: Stethoscope,
  },
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

export default function CateyShopPreview() {
  return (
    <div
      dir="ltr"
      lang="en"
      className="min-h-screen w-full bg-[#FFF8F0] text-[#1F1A14] antialiased"
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
          `,
        }}
      />

      {/* Top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#1F1A14]/8 bg-[#FFF8F0]/90 px-4 py-3 backdrop-blur-md">
        <Link href="#" className="flex items-center gap-1.5">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full text-white"
            style={{ background: "#1F1A14" }}
            aria-hidden
          >
            <Cat className="h-4 w-4" strokeWidth={2.2} />
          </span>
          <span className="text-base font-semibold tracking-tight">Catey</span>
        </Link>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#1F1A14]/70 active:scale-95"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#1F1A14]/80 active:scale-95"
          >
            <ShoppingCart className="h-4 w-4" />
            <span
              className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white"
              style={{ background: accent }}
            >
              2
            </span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 pb-7 pt-5">
        <span
          className="inline-flex items-center gap-1.5 rounded-full border border-[#1F1A14]/10 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1F1A14]/70"
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: accent }}
          />
          Pet shop and clinic, Oman
        </span>
        <h1 className="mt-3 text-[28px] font-semibold leading-[1.05] tracking-tight">
          Everything your
          <br />
          pet needs.
        </h1>
        <p className="mt-2 text-[13px] leading-relaxed text-[#1F1A14]/65">
          Food, litter, supplements, and a real vet clinic. Same-day in Muscat.
        </p>

        <div className="mt-5 overflow-hidden rounded-3xl bg-[#FBEBD8]">
          <img
            src="/catey/photos/lifestyle.jpg"
            alt="Pet lifestyle"
            loading="eager"
            decoding="async"
            className="block h-56 w-full object-cover"
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <a
            href="#shop"
            className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-md active:scale-[0.98]"
            style={{ background: "#1F1A14" }}
          >
            <ShoppingBag className="h-4 w-4" />
            Shop now
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-[#1F1A14]/15 bg-white px-5 py-3 text-sm font-semibold text-[#1F1A14] active:scale-[0.98]"
          >
            <Stethoscope className="h-4 w-4" />
            Book a vet visit
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-[#1F1A14]/8 bg-white py-4">
        <div className="px-4 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F1A14]/55">
          Shop by category
        </div>
        <div
          className="cat-pill mt-2 flex gap-2 overflow-x-auto px-4 pb-1"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "x mandatory",
          }}
        >
          {categories.map(({ key, label, Icon }) => (
            <button
              key={key}
              type="button"
              className="flex shrink-0 flex-col items-center gap-1.5 rounded-2xl border border-[#1F1A14]/10 bg-[#FFF8F0] px-3.5 py-2.5 active:scale-95"
              style={{ scrollSnapAlign: "start" }}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{ background: "#FBEBD8", color: "#7A4A2B" }}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-[11px] font-semibold">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured grid */}
      <section id="shop" className="px-4 py-7">
        <div className="mb-3 flex items-end justify-between">
          <div>
            <div
              className="text-[10px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: accent }}
            >
              Featured
            </div>
            <h2 className="text-xl font-semibold tracking-tight">
              Pet picks for you
            </h2>
          </div>
          <a href="#" className="text-xs font-semibold text-[#1F1A14]/70">
            See all
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {featured.map((p, i) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#1F1A14]/8 bg-white"
            >
              <div className="relative aspect-square bg-[#FBEBD8]/50">
                <img
                  src={p.image}
                  alt={p.name}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-contain p-3"
                />
                {p.badge ? (
                  <span
                    className="absolute left-2 top-2 rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white"
                    style={{ background: "#1F1A14" }}
                  >
                    {p.badge}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-3">
                <div className="text-[9px] font-semibold uppercase tracking-wider text-[#1F1A14]/55">
                  {p.brand}
                </div>
                <h3 className="mt-0.5 line-clamp-2 text-[12px] font-semibold leading-snug">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <div>
                    <div className="text-sm font-bold">
                      {p.price.toFixed(p.price < 10 ? 2 : 1)}
                      <span className="ml-0.5 text-[10px] font-medium text-[#1F1A14]/55">
                        OMR
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Add ${p.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white active:scale-90"
                    style={{ background: accent }}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.6} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Clinic services band */}
      <section
        id="clinic"
        className="px-4 py-8 text-white"
        style={{ background: "#1F1A14" }}
      >
        <div
          className="text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: accent }}
        >
          Pet clinic
        </div>
        <h2 className="mt-1 text-xl font-semibold tracking-tight">
          Full care, under one roof.
        </h2>
        <p className="mt-1.5 text-[12px] text-white/65">
          Visit our clinic in Al Mabila. Book on WhatsApp.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-2.5">
          {services.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ background: accent }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-semibold">{title}</div>
                <div className="text-[11px] text-white/60">{desc}</div>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#1F1A14] active:scale-95"
              >
                Book
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews mini band */}
      <section className="px-4 py-8" style={{ background: "#FBEBD8" }}>
        <div className="flex items-center gap-1 text-[#1F1A14]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5"
              fill={accent}
              color={accent}
            />
          ))}
          <span className="ml-1 text-[11px] font-semibold">4.9 from 2,000+ pet families</span>
        </div>
        <p className="mt-2 text-[14px] leading-relaxed text-[#1F1A14]/85">
          &ldquo;Ordered food for my dog. Arrived in two hours. Thank you Catey.&rdquo;
        </p>
        <div className="mt-2 text-[11px] text-[#1F1A14]/55">Ahmed, Salalah</div>
      </section>

      {/* WhatsApp CTA */}
      <section
        className="px-5 py-9 text-white"
        style={{ background: accent }}
      >
        <h3 className="text-[22px] font-semibold leading-tight tracking-tight">
          Order on WhatsApp.
        </h3>
        <p className="mt-1.5 text-[12px] text-white/85">
          Message us and we deliver across Oman.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1F1A14] shadow-lg active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" />
          Chat with us
        </a>
      </section>

      {/* Footer */}
      <footer
        className="px-4 py-7 text-white/70"
        style={{ background: "#1F1A14" }}
      >
        <div className="flex items-center gap-1.5">
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full"
            style={{ background: accent }}
            aria-hidden
          >
            <Cat className="h-3.5 w-3.5 text-white" strokeWidth={2.2} />
          </span>
          <span className="text-sm font-semibold text-white">Catey</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3 text-[11px]">
          <a href="#shop" className="hover:text-white">Shop</a>
          <a href="#clinic" className="hover:text-white">Clinic</a>
          <a href={WA} className="hover:text-white">Contact</a>
        </div>
        <div className="mt-5 border-t border-white/10 pt-3 text-[10px] text-white/45">
          © {new Date().getFullYear()} Catey. Al Mabila, Sib, Oman.
        </div>
      </footer>
    </div>
  );
}
