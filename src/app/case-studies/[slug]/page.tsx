import data from "@/data/caseStudiesData.json";
import { notFound } from "next/navigation";
import HeroSection from "@/components/case_studies/HeroSection";
import ImageGallery from "@/components/case_studies/ImageGallery";
import CaseStudyContent from "@/components/case_studies/CaseStudyContent";
import CaseStudyCards from "@/components/case_studies/CaseStudyCards";

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const study = data.find((item) => item.slug === params.slug);

  if (!study) notFound();

  return (
    <div className="min-h-screen bg-cream font-inter">
      <HeroSection {...study.hero} />
      <ImageGallery images={study.galleryImages} />
      {/* <ImageGallery images={study.galleryImages} />
      <CaseStudyContent {...study.content} />
      <CaseStudyCards cards={study.cards} /> */}
    </div>
  );
}
