import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { insightsData } from '../data/insights-data';
import { Link } from 'react-router';

export function InsightsPage() {
  return (
    <div className="bg-[#F8F9FA] pt-20">
      {/* Hero */}
      <section className="py-32 md:py-40 px-6 lg:px-12 bg-[#0B1F33] relative overflow-hidden">
        {/* Subtle background pattern - Sydney Harbour Bridge */}
        <div className="absolute inset-0 opacity-[0.08]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760129744152-14bbc87f21b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBoYXJib3VyJTIwYnJpZGdlJTIwc2lsaG91ZXR0ZSUyMGFyY2hpdGVjdHVyYWx8ZW58MXx8fHwxNzczMzg5MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sydney Harbour Bridge"
            className="w-full h-full object-cover"
            style={{ objectPosition: '30% center' }}
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-6xl md:text-7xl text-white mb-8 leading-tight"
          >
            Insights
          </h1>
          <p className="text-2xl text-[#C8A96A] max-w-3xl leading-relaxed">
            Market perspectives, trends and strategic insights from our advisory team
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-32 md:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {insightsData.map((insight) => (
              <Link 
                key={insight.slug} 
                to={`/insights/${insight.slug}`}
                className="group cursor-pointer"
              >
                <article>
                  <div className="relative h-80 mb-8 overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-[#C8A96A] tracking-wide uppercase">{insight.category}</span>
                    <span className="text-sm text-gray-500 ml-4">{insight.date}</span>
                  </div>
                  <h3
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-3xl text-[#0B1F33] mb-5 group-hover:text-[#C8A96A] transition-colors leading-tight"
                  >
                    {insight.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {insight.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}