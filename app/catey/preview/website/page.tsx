"use client";

import { useLanguage } from "../../../../context/LanguageContext";
import { Pumo } from "../../_components/Pumo";
import { ShoppingBag, Stethoscope, Scissors, Syringe, Star, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function CateyWebsitePreview() {
  const { language, isRTL } = useLanguage();
  const isAr = language === "ar";

  const t = isAr
    ? {
        nav: { shop: "تسوّق", clinic: "العيادة", about: "من نحن", whatsapp: "واتساب" },
        hero: {
          headline: "كل ما يحتاجه حيوانك الأليف، في مكان واحد",
          sub: "متجر ومستلزمات وعيادة بيطرية. نتولى الباقي.",
          shop: "تسوّق الآن",
          book: "احجز زيارة بيطرية",
        },
        featured: { label: "منتجات مميزة", add: "أضف للسلة" },
        services: {
          label: "خدمات العيادة",
          items: [
            { title: "فحص بيطري", desc: "فحص شامل لحيوانك." },
            { title: "العناية", desc: "حمام وتنظيف وقص شعر." },
            { title: "تطعيمات", desc: "تطعيمات أساسية ودورية." },
          ],
        },
        why: {
          label: "ليش Catey",
          items: [
            { title: "خدمة سريعة", desc: "طلب وتوصيل في نفس اليوم." },
            { title: "فريق مختص", desc: "أطباء بيطريون وموظفون يعرفون مهنتهم." },
            { title: "منتجات أصلية", desc: "علامات موثوقة فقط." },
          ],
        },
        testimonials: {
          label: "قصص عملاء",
          items: [
            { quote: "خدمة ممتازة وفريق ودود. قطّي يحب يجي العيادة.", author: "ليلى، مسقط" },
            { quote: "طلبت طعام لكلبي ووصلني في ساعتين. شكرًا Catey.", author: "أحمد، صلالة" },
            { quote: "تطعيمات بأسعار معقولة وتذكير على واتساب. ممتاز.", author: "سارة، نزوى" },
          ],
        },
        cta: {
          title: "محتاج مساعدة سريعة؟",
          sub: "كلّمنا على واتساب نرد فورًا.",
          button: "تواصل معنا",
        },
        footer: { tagline: "مع Catey، حيوانك في أيدٍ أمينة." },
      }
    : {
        nav: { shop: "Shop", clinic: "Clinic", about: "About", whatsapp: "WhatsApp" },
        hero: {
          headline: "Everything your pet needs, in one place",
          sub: "A pet shop, supplies, and a vet clinic. We handle the rest.",
          shop: "Shop now",
          book: "Book a vet visit",
        },
        featured: { label: "Featured products", add: "Add to cart" },
        services: {
          label: "Clinic services",
          items: [
            { title: "Vet Checkup", desc: "Full health check for your pet." },
            { title: "Grooming", desc: "Bath, brush, and trim." },
            { title: "Vaccinations", desc: "Core and routine vaccines." },
          ],
        },
        why: {
          label: "Why Catey",
          items: [
            { title: "Fast service", desc: "Same-day order and delivery." },
            { title: "Expert team", desc: "Vets and staff who know their craft." },
            { title: "Genuine products", desc: "Trusted brands only." },
          ],
        },
        testimonials: {
          label: "What our families say",
          items: [
            { quote: "Excellent service and a friendly team. My cat actually likes the clinic.", author: "Layla, Muscat" },
            { quote: "Ordered food for my dog. Arrived in two hours. Thank you Catey.", author: "Ahmed, Salalah" },
            { quote: "Affordable vaccinations and WhatsApp reminders. Great.", author: "Sarah, Nizwa" },
          ],
        },
        cta: {
          title: "Need quick help?",
          sub: "Message us on WhatsApp. We reply right away.",
          button: "Message us",
        },
        footer: { tagline: "With Catey, your pet is in safe hands." },
      };

  const products = [
    { name: isAr ? "طعام للقطط" : "Cat food", price: "OMR 4.5", color: "#FCD7C4", icon: "🥫" },
    { name: isAr ? "حلويات" : "Treats", price: "OMR 2.1", color: "#D7EDDF", icon: "🍪" },
    { name: isAr ? "ألعاب" : "Toy ball", price: "OMR 1.8", color: "#F4C674", icon: "🎾" },
    { name: isAr ? "مستلزمات عناية" : "Grooming kit", price: "OMR 6.0", color: "#FFE9DC", icon: "🪥" },
  ];

  const services = [
    { ...t.services.items[0], Icon: Stethoscope },
    { ...t.services.items[1], Icon: Scissors },
    { ...t.services.items[2], Icon: Syringe },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen w-full bg-[#FFF8F0] text-[#1F1A14] dark:bg-[#161310] dark:text-white"
      style={{ fontFamily: isAr ? "Cairo, sans-serif" : undefined }}
    >
      {/* Sticky nav */}
      <nav className="sticky top-0 z-30 border-b border-[#1F1A14]/10 bg-[#FFF8F0]/90 backdrop-blur dark:border-white/10 dark:bg-[#161310]/90">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F08762] text-white">
              <span className="text-sm font-bold">C</span>
            </div>
            <span className="text-base font-bold tracking-tight">Catey</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-[#3A322A]/80 sm:flex dark:text-white/70">
            <a href="#shop" className="transition hover:text-[#D26B49]">{t.nav.shop}</a>
            <a href="#clinic" className="transition hover:text-[#D26B49]">{t.nav.clinic}</a>
            <a href="#about" className="transition hover:text-[#D26B49]">{t.nav.about}</a>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#7BB89C] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#3F8D6D] sm:text-sm"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            {t.nav.whatsapp}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "radial-gradient(120% 80% at 50% 0%, #FCD7C4 0%, #FFF8F0 60%)" }}
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div className="text-center lg:text-start">
            <h1 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t.hero.headline}
            </h1>
            <p className="mt-4 text-base text-[#3A322A]/75 sm:text-lg dark:text-white/70">{t.hero.sub}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 rounded-full bg-[#1F1A14] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D26B49] dark:bg-white dark:text-[#1F1A14]"
              >
                <ShoppingBag className="h-4 w-4" />
                {t.hero.shop}
              </a>
              <a
                href="#clinic"
                className="inline-flex items-center gap-2 rounded-full border border-[#1F1A14]/15 bg-white px-5 py-3 text-sm font-semibold text-[#1F1A14] transition hover:bg-[#FFF8F0] dark:border-white/15 dark:bg-white/10 dark:text-white"
              >
                <Stethoscope className="h-4 w-4" />
                {t.hero.book}
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-full bg-[#7BB89C]/30 blur-2xl" />
              <Pumo className="h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section id="shop" className="bg-white dark:bg-[#1A1612]">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">{t.featured.label}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div
                key={p.name}
                className="group overflow-hidden rounded-2xl border border-[#1F1A14]/10 bg-[#FFF8F0] transition hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div
                  className="flex aspect-square items-center justify-center text-5xl"
                  style={{ background: p.color }}
                >
                  <span>{p.icon}</span>
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="mt-1 text-xs text-[#3A322A]/70 dark:text-white/60">{p.price}</div>
                  <button className="mt-3 w-full rounded-full bg-[#1F1A14] py-2 text-xs font-semibold text-white transition hover:bg-[#D26B49] dark:bg-white dark:text-[#1F1A14]">
                    {t.featured.add}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="clinic" className="bg-[#FFF8F0] dark:bg-[#161310]">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">{t.services.label}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-[#1F1A14]/10 bg-white p-5 transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D7EDDF] text-[#3F8D6D] dark:bg-[#7BB89C]/20 dark:text-[#7BB89C]">
                  <s.Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-base font-semibold">{s.title}</div>
                <div className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Catey */}
      <section id="about" className="bg-white dark:bg-[#1A1612]">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">{t.why.label}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {t.why.items.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-[#1F1A14]/10 bg-[#FFF8F0] p-5 dark:border-white/10 dark:bg-white/5"
              >
                <div className="text-base font-semibold">{w.title}</div>
                <div className="mt-1 text-sm text-[#3A322A]/70 dark:text-white/60">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#FFF8F0] dark:bg-[#161310]">
        <div className="mx-auto w-full max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">{t.testimonials.label}</h2>
          <div className="rounded-3xl border border-[#1F1A14]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/5">
            <div className="mb-3 flex justify-center gap-1 text-[#F4C674]">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-[#1F1A14] dark:text-white">
              &ldquo;{t.testimonials.items[activeTestimonial].quote}&rdquo;
            </p>
            <div className="mt-3 text-sm font-medium text-[#D26B49]">
              {t.testimonials.items[activeTestimonial].author}
            </div>
            <div className="mt-5 flex justify-center gap-2">
              {t.testimonials.items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeTestimonial ? "w-6 bg-[#F08762]" : "w-2 bg-[#1F1A14]/20 dark:bg-white/20"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp banner */}
      <section className="bg-gradient-to-br from-[#F08762] to-[#D26B49]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-white sm:flex-row sm:px-6 sm:py-10 sm:text-start">
          <div>
            <div className="text-xl font-bold sm:text-2xl">{t.cta.title}</div>
            <div className="mt-1 text-sm text-white/80">{t.cta.sub}</div>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#D26B49] transition hover:bg-[#FFF8F0]"
          >
            <MessageCircle className="h-4 w-4" />
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F1A14] text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs sm:flex-row sm:px-6 sm:text-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F08762]">
              <span className="text-xs font-bold">C</span>
            </div>
            <span className="font-bold">Catey</span>
          </div>
          <div className="text-white/60">{t.footer.tagline}</div>
          <div className="text-white/40">© {new Date().getFullYear()} Catey</div>
        </div>
      </footer>
    </div>
  );
}
