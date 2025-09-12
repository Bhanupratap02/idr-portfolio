// File: app/case-studies/[slug]/page.tsx
import { caseStudiesData } from "@/data/caseStudiesData";
import { notFound } from "next/navigation";
import HeroSection from "@/components/case_studies/HeroSection";
import ImageGallery from "@/components/case_studies/ImageGallery";
import CaseStudyContent from "@/components/case_studies/CaseStudyContent";
import CaseStudyCards from "@/components/case_studies/CaseStudyCards";
import type { CaseStudy } from "@/types/case-studies";

// Generate static params for build optimization
export async function generateStaticParams() {
  return caseStudiesData.map((item) => ({
    slug: item.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudiesData.find((item) => item.slug === slug);
  
  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: study.hero.heading,
    description: study.hero.paragraph,
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudiesData.find((item) => item.slug === slug);
  
  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cream font-inter">
      <HeroSection {...study.hero} />
      <ImageGallery  />
      <CaseStudyContent slug={slug} />
      <CaseStudyCards />
    </div>
  );
}