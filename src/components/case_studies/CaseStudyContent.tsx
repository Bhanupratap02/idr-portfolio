import { caseStudiesData } from '../../data/caseStudiesData';
import case_study_4 from "../../assets/case_study/case-study-4.png";
import case_study_5 from "../../assets/case_study/case-study-5.png";
import case_study_6 from "../../assets/case_study/case-study-6.png";
import Image from 'next/image';
interface CaseStudyContentProps {
  slug: string;
}

export default function CaseStudyContent({ slug }: CaseStudyContentProps) {
  // Find the case study based on slug
  const caseStudy = caseStudiesData.find(study => study.slug === slug);
  
  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  const { content } = caseStudy;

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with avatar and title */}
        <div className="flex items-center space-x-6 mb-16">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ab10950e41ead24bff21209ad5685642d20cd80d?width=200"
              alt="Case study author"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-gray-900 text-3xl font-semibold leading-tight">
            {content.title}
          </h1>
        </div>

        {/* Header line */}
        <div className="w-full h-px bg-gray-900 mb-16"></div>

        {/* Client details - stacked vertically */}
        <div className="space-y-3 mb-16">
          {content.relationshipScope && (
            <div className="text-gray-900 text-lg leading-relaxed">
              <span className="font-semibold">Relationship Scope:</span>
              <span className="ml-2">{content.relationshipScope}</span>
            </div>
          )}
          {content.Services && (
            <div className="text-gray-900 text-lg leading-relaxed">
              <span className="font-semibold">Services:</span>
              <span className="ml-2">{content.Services}</span>
            </div>
          )}
          {content.client && (
            <div className="text-gray-900 text-lg leading-relaxed">
              <span className="font-semibold">Client:</span>
              <span className="ml-2">{content.client}</span>
            </div>
          )}
          {content.property && (
            <div className="text-gray-900 text-lg leading-relaxed">
              <span className="font-semibold">Property:</span>
              <span className="ml-2">{content.property}</span>
            </div>
          )}
          {content.challenge && (
            <div className="text-gray-900 text-lg leading-relaxed">
              <span className="font-semibold">Challenge:</span>
              <span className="ml-2">{content.challenge}</span>
            </div>
          )}
          {content.solution && (
            <div className="text-gray-900 text-lg leading-relaxed">
              <span className="font-semibold">Solution:</span>
              <span className="ml-2">{content.solution}</span>
            </div>
          )}
        </div>

        {/* Case study details */}
        <div className="space-y-16">
          {/* Main description */}
          {content.description && (
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.description}
              </p>
            </div>
          )}

          {/* Additional Info Sections */}
          {content.additionalInfo && content.additionalInfo.map((section, index) => (
            <div key={index} className="space-y-6">
              {section.heading && (
                <h2 className="text-gray-900 text-3xl font-semibold leading-tight">
                  {section.heading}
                </h2>
              )}
              {section.subheading && (
                <h3 className="text-gray-900 text-xl font-medium">
                  {section.subheading}
                </h3>
              )}
              {section.description && (
                <p className="text-gray-600 text-lg leading-relaxed">
                  {section.description}
                </p>
              )}
              {section.items && section.items.length > 0 && (
                <div className="text-gray-600 text-lg leading-relaxed space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <p key={itemIndex}>• {item}</p>
                  ))}
                </div>
              )}
              {section.note && (
                <p className="text-gray-600 text-lg leading-relaxed italic">
                  {section.note}
                </p>
              )}
              {section.idrNote && (
                <blockquote className="text-gray-600 text-lg leading-relaxed border-l-4 border-gray-300 pl-4">
                  <p className="mb-2">{section.idrNote}</p>
                  {section.idrNoteBy && (
                    <footer className="text-gray-500 text-base">
                      {section.idrNoteBy}
                    </footer>
                  )}
                </blockquote>
              )}
            </div>
          ))}
         {/* Project Highlights (if available) */}
          {content.projectHighlights && (
            <div className="space-y-6">
              <h2 className="text-gray-900 text-3xl font-semibold leading-tight">
                Project Highlights
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Project
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Highlights
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {content.projectHighlights.map((project, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-900 font-medium">
                          {project.project}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {project.location}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {project.highlights}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {/* Images */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Image 
                src={case_study_4.src}
                alt="Main security installation"
                width={1485}
                height={990}
                className="w-full h-auto rounded"
              />
            </div>
            <div className="space-y-6">
              <Image 
                src={case_study_5.src}
                alt="Security reader close-up"
                width={708}
                height={472}
                className="w-full h-auto rounded"
              />
              <Image 
                src={case_study_6.src}
                alt="Access control device"
                width={708}
                height={472}
                className="w-full h-auto rounded"
              />
            </div>
          </div>

          {/* Results */}
          {content.result && (
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.result}
              </p>
            </div>
          )}

          {/* Client Feedback */}
          {content.feedback && (
            <div className="space-y-6">
              <h2 className="text-gray-900 text-3xl font-semibold leading-tight">
                Client Feedback
              </h2>
              <blockquote className="text-gray-600 text-lg leading-relaxed">
                <p className="mb-4">
                  &quot;{content.feedback}&quot;
                </p>
                {content.feedbackBy && (
                  <footer className="text-gray-900 text-lg">
                    {content.feedbackBy}
                  </footer>
                )}
              </blockquote>
            </div>
          )}



          {/* Why It Matters (if available) */}
          {content.whyItMatters && (
            <div className="space-y-6">
              <h2 className="text-gray-900 text-3xl font-semibold leading-tight">
                Why It Matters
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.whyItMatters}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}