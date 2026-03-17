import { useParams, Link, Navigate } from 'react-router';
import { insightsData } from '../data/insights-data';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChevronLeft } from 'lucide-react';

export function InsightDetailPage() {
  const { slug } = useParams();
  const article = insightsData.find(insight => insight.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <div className="bg-[#F8F9FA] pt-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] bg-[#0B1F33]">
        <div className="absolute inset-0 opacity-40">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link
            to="/insights"
            className="inline-flex items-center text-[#C8A96A] hover:text-[#0B1F33] transition-colors mb-12 group"
          >
            <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          {/* Meta */}
          <div className="mb-8">
            <span className="text-sm text-[#C8A96A] tracking-wide uppercase">{article.category}</span>
            <span className="text-sm text-gray-500 ml-4">{article.date}</span>
          </div>

          {/* Title */}
          <h1
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-5xl md:text-6xl text-[#0B1F33] mb-12 leading-tight"
          >
            {article.title}
          </h1>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              {article.content.introduction}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-16">
            {article.content.sections.map((section, index) => (
              <section key={index}>
                <h2
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-4xl text-[#0B1F33] mb-8 leading-tight"
                >
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-lg text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-16 pt-12 border-t border-gray-300">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl text-[#0B1F33] mb-8 leading-tight"
            >
              Conclusion
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>

          {/* Sources */}
          {article.content.sources && article.content.sources.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-300">
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-2xl text-[#0B1F33] mb-6"
              >
                Sources & References
              </h3>
              <ul className="space-y-3">
                {article.content.sources.map((source, index) => (
                  <li key={index} className="text-gray-600 text-sm leading-relaxed">
                    {source}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-16 pt-12 border-t border-gray-300">
            <p className="text-sm text-gray-500 leading-relaxed italic">
              <strong>Disclaimer:</strong> This article is provided for informational purposes only and does not constitute financial, investment, legal, or tax advice. The content represents general market observations and analysis based on publicly available information and industry research. Readers should conduct their own due diligence and consult with qualified professional advisors before making any investment or financial decisions. Past performance is not indicative of future results. Stonebridge Prime Capital Advisory Pty Limited does not guarantee the accuracy, completeness, or timeliness of the information presented.
            </p>
          </div>

          {/* Back to Insights */}
          <div className="mt-16 text-center">
            <Link
              to="/insights"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0B1F33] text-white hover:bg-[#C8A96A] transition-colors text-lg"
            >
              View All Insights
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}