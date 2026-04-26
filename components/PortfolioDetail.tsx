"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { NextProject } from "./NextProject";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const cabStatic = "/assets/545f36efbeb9e7c15a31d9096bfaddcd645ecf24.png";
interface PortfolioProject {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  heroImage: string;
  role?: string;
  year?: string;
  platform?: string;
  sections: {
    en: {
      overview?: string;
      challenge?: string;
      solution?: string;
      result?: string;
      images?: string[];
    };
    ar: {
      overview?: string;
      challenge?: string;
      solution?: string;
      result?: string;
      images?: string[];
    };
  };
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: 'fontfella',
    titleEn: 'FontFella',
    titleAr: 'فونت فيلا',
    descriptionEn: 'AI-powered typography platform for discovering, pairing, and identifying fonts.',
    descriptionAr: 'منصة طباعة مدعومة بالذكاء الاصطناعي لاكتشاف الخطوط ومطابقتها وتحديدها',
    heroImage: 'https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2NjY0NjQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    role: 'UX/UI Design',
    year: '2024',
    platform: 'Web & Mobile',
    sections: {
      en: {
        overview: 'FontFella is an AI-powered typography platform that revolutionizes how designers discover, pair, and identify fonts. The platform combines machine learning with an intuitive interface to make font selection effortless.',
        challenge: 'Designers often struggle with finding the perfect font combinations and identifying fonts they see in the wild. Traditional font libraries lack intelligent pairing suggestions and visual search capabilities.',
        solution: 'We developed an AI-driven platform that analyzes font characteristics and suggests optimal pairings. The visual search feature allows users to upload images and identify fonts instantly. The interface was designed to be both powerful and approachable for designers of all skill levels.',
        result: 'FontFella has achieved 200% increase in designer engagement with an average session time of 12 minutes. The AI pairing feature reduced font selection time by 65%, significantly improving designer productivity.',
        images: [
          'https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2NjY0NjQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        ],
      },
      ar: {
        overview: 'فونت فيلا هي منصة طباعة مدعومة بالذكاء الاصطناعي تحدث ثورة في طريقة اكتشاف المصممين للخطوط ومطابقتها وتحديدها. تجمع المنصة بين التعلم الآلي والواجهة البديهية لجعل اختيار الخطوط سهلاً.',
        challenge: 'غالبًا ما يواجه المصممون صعوبة في العثور على تركيبات الخطوط المثالية وتحديد الخطوط التي يرونها. تفتقر مكتبات الخطوط التقليدية إلى اقتراحات المطابقة الذكية وإمكانيات البحث المرئي.',
        solution: 'طورنا منصة مدعومة بالذكاء الاصطناعي تحلل خصائص الخطوط وتقترح المطابقات المثلى. تتيح ميزة البحث المرئي للمستخدمين تحميل الصور وتحديد الخطوط على الفور. تم تصميم الواجهة لتكون قوية وسهلة المنال للمصممين من جميع مستويات المهارة.',
        result: 'حققت فونت فيلا زيادة بنسبة 200% في تفاعل المصممين مع متوسط وقت جلسة 12 دقيقة. قللت ميزة المطابقة بالذكاء الاصطناعي من وقت اختيار الخط بنسبة 65%، مما حسن إنتاجية المصممين بشكل كبير.',
        images: [
          'https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2NjY0NjQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        ],
      },
    },
  },
  {
    id: 'cairo-amman-bank',
    titleEn: 'Cairo Amman Bank',
    titleAr: 'بنك القاهرة عمان',
    descriptionEn: 'Online adoption up 80% through UX redesign',
    descriptionAr: 'زيادة التبني الرقمي بنسبة 80% من خلال إعادة تصميم تجربة المستخدم',
    heroImage: cabStatic,
    role: 'UX/UI Design',
    year: '2023',
    platform: 'Web & Mobile Banking',
    sections: {
      en: {
        overview: 'Cairo Amman Bank needed a complete digital transformation to meet modern banking standards and improve customer satisfaction.',
        challenge: 'The existing platform had a 68% abandonment rate during online transactions, with customers citing confusion and lack of trust as primary concerns.',
        solution: 'We redesigned the entire user experience with a focus on clarity, security indicators, and simplified workflows. The new design reduced the number of steps for common tasks by 40%.',
        result: 'Online adoption increased by 80%, transaction completion rate improved to 92%, and customer satisfaction scores rose from 3.2 to 4.7 out of 5.',
        images: [cabStatic],
      },
      ar: {
        overview: 'احتاج بنك القاهرة عمان إلى تحول رقمي كامل لتلبية معايير الخدمات المصرفية الحديثة وتحسين رضا العملاء.',
        challenge: 'كانت المنصة الحالية تعاني من معدل تخلي بنسبة 68% أثناء المعاملات عبر الإنترنت، مع إشارة العملاء إلى الارتباك وانعدام الثقة كمخاوف رئيسية.',
        solution: 'أعدنا تصميم تجربة المستخدم بالكامل مع التركيز على الوضوح ومؤشرات الأمان وسير العمل المبسط. قلل التصميم الجديد عدد الخطوات للمهام الشائعة بنسبة 40%.',
        result: 'زاد التبني الرقمي بنسبة 80%، وتحسن معدل إتمام المعاملات إلى 92%، وارتفعت درجات رضا العملاء من 3.2 إلى 4.7 من 5.',
        images: [cabStatic],
      },
    },
  },
];

export function PortfolioDetail() {
  const params = useParams<{ projectId: string }>();
  const projectId = params?.projectId;
  const router = useRouter();
  const { language } = useLanguage();

  const project = portfolioProjects.find(p => p.id === projectId);

  useEffect(() => {
    if (!project) {
      router.replace("/");
    }
  }, [project, router]);

  if (!project) {
    return null;
  }

  // Get next project (loop to first if at end)
  const currentIndex = portfolioProjects.findIndex(p => p.id === projectId);
  const nextIndex = (currentIndex + 1) % portfolioProjects.length;
  const nextProject = portfolioProjects[nextIndex];

  const title = language === 'ar' ? project.titleAr : project.titleEn;
  const description = language === 'ar' ? project.descriptionAr : project.descriptionEn;
  const sections = language === 'ar' ? project.sections.ar : project.sections.en;

  // Labels
  const labels = {
    role: language === 'ar' ? 'الدور' : 'Role',
    year: language === 'ar' ? 'السنة' : 'Year',
    platform: language === 'ar' ? 'المنصة' : 'Platform',
    overview: language === 'ar' ? 'نظرة عامة' : 'Overview',
    challenge: language === 'ar' ? 'التحدي' : 'The Challenge',
    solution: language === 'ar' ? 'الحل' : 'The Solution',
    result: language === 'ar' ? 'النتيجة' : 'The Result',
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[112px] pt-32 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {/* Title & Description */}
            <div className="flex flex-col gap-4 max-w-[800px]">
              <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1e1e1e] text-[36px] sm:text-[48px] lg:text-[56px] leading-tight">
                {title}
              </h1>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5a5a5a] text-[18px] sm:text-[20px] leading-relaxed">
                {description}
              </p>
            </div>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-[#e5e5e5]">
              {project.role && (
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-['Inter:Medium',sans-serif] text-[#5a5a5a] uppercase tracking-wide">
                    {labels.role}
                  </span>
                  <span className="text-[16px] font-['Inter:Regular',sans-serif] text-[#1e1e1e]">
                    {project.role}
                  </span>
                </div>
              )}
              {project.year && (
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-['Inter:Medium',sans-serif] text-[#5a5a5a] uppercase tracking-wide">
                    {labels.year}
                  </span>
                  <span className="text-[16px] font-['Inter:Regular',sans-serif] text-[#1e1e1e]">
                    {project.year}
                  </span>
                </div>
              )}
              {project.platform && (
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-['Inter:Medium',sans-serif] text-[#5a5a5a] uppercase tracking-wide">
                    {labels.platform}
                  </span>
                  <span className="text-[16px] font-['Inter:Regular',sans-serif] text-[#1e1e1e]">
                    {project.platform}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full bg-white pb-16">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[112px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[12px] overflow-hidden"
          >
            <ImageWithFallback
              src={project.heroImage}
              alt={title}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="w-full bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[112px] py-16">
          <div className="flex flex-col gap-16">
            {/* Overview */}
            {sections.overview && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4 max-w-[800px]"
              >
                <h2 className="font-['Inter:Medium',sans-serif] font-medium text-[#1e1e1e] text-[24px] sm:text-[28px]">
                  {labels.overview}
                </h2>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5a5a5a] text-[16px] sm:text-[18px] leading-relaxed">
                  {sections.overview}
                </p>
              </motion.div>
            )}

            {/* Challenge */}
            {sections.challenge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4 max-w-[800px]"
              >
                <h2 className="font-['Inter:Medium',sans-serif] font-medium text-[#1e1e1e] text-[24px] sm:text-[28px]">
                  {labels.challenge}
                </h2>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5a5a5a] text-[16px] sm:text-[18px] leading-relaxed">
                  {sections.challenge}
                </p>
              </motion.div>
            )}

            {/* Solution */}
            {sections.solution && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4 max-w-[800px]"
              >
                <h2 className="font-['Inter:Medium',sans-serif] font-medium text-[#1e1e1e] text-[24px] sm:text-[28px]">
                  {labels.solution}
                </h2>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5a5a5a] text-[16px] sm:text-[18px] leading-relaxed">
                  {sections.solution}
                </p>
              </motion.div>
            )}

            {/* Images */}
            {sections.images && sections.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 gap-8"
              >
                {sections.images.map((image, idx) => (
                  <div key={idx} className="rounded-[12px] overflow-hidden">
                    <ImageWithFallback
                      src={image}
                      alt={`${title} - Image ${idx + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </motion.div>
            )}

            {/* Result */}
            {sections.result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4 max-w-[800px] p-8 bg-[#f5f5f5] rounded-[12px]"
              >
                <h2 className="font-['Inter:Medium',sans-serif] font-medium text-[#1e1e1e] text-[24px] sm:text-[28px]">
                  {labels.result}
                </h2>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5a5a5a] text-[16px] sm:text-[18px] leading-relaxed">
                  {sections.result}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <NextProject
        projectId={nextProject.id}
        titleEn={nextProject.titleEn}
        titleAr={nextProject.titleAr}
        image={nextProject.heroImage}
      />
    </div>
  );
}