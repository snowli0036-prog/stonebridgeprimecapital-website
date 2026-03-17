import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="bg-[#F8F9FA] pt-20">
      {/* Hero */}
      <section className="py-32 md:py-40 px-6 lg:px-12 bg-[#0B1F33] relative overflow-hidden">
        {/* Subtle background pattern - Sydney Harbour Bridge */}
        <div className="absolute inset-0 opacity-[0.08]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760129744152-14bbc87f21b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBoYXJib3VyJTIwYnJpZGdlJTIwc2lsaG91dHRlJTIwYXJjaGl0ZWN0dXJhbCUyMGZpbmFuY2V8ZW58MXx8fHwxNzczMzg5MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            About
          </h1>
          <p className="text-2xl text-[#C8A96A] max-w-3xl leading-relaxed">
            Independent capital and legal advisory with a cross-border focus
          </p>
        </div>
      </section>

      {/* Firm Overview */}
      <section className="py-32 md:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-5xl md:text-6xl text-[#0B1F33] mb-10 leading-tight"
              >
                Firm Overview
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Stonebridge Prime Capital Advisory Pty Limited is an independent capital advisory firm headquartered in Australia with operations in Hong Kong.
                </p>
                <p>
                  We specialise in cross-border financing, capital structuring, strategic investment advisory and legal services for international investors, family offices, and corporate clients.
                </p>
                <p>
                  Led by a qualified Australian solicitor and licensed mortgage broker, our firm provides independent, conflict-free advisory services across finance and law, focused on delivering optimal solutions and investment opportunities in the Australia and Asia-Pacific region.
                </p>
              </div>
            </div>
            <div className="relative h-[600px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1622006642275-6266a6e8c013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25nJTIwa29uZyUyMGNiZCUyMHNreXNjcmFwZXJzJTIwbmlnaHR8ZW58MXx8fHwxNzczNzQ1MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hong Kong Victoria Harbour night skyline"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32 md:py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-5xl md:text-6xl text-[#0B1F33] mb-20 text-center leading-tight"
          >
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div>
              <div className="w-16 h-1 bg-[#C8A96A] mb-8" />
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl text-[#0B1F33] mb-6">Independent</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                We maintain complete independence, ensuring our advice is always aligned with our clients' best interests without conflicts of interest.
              </p>
            </div>
            <div>
              <div className="w-16 h-1 bg-[#C8A96A] mb-8" />
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl text-[#0B1F33] mb-6">Strategic</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our strategic approach focuses on long-term value creation, structuring solutions that align with broader business and investment objectives.
              </p>
            </div>
            <div>
              <div className="w-16 h-1 bg-[#C8A96A] mb-8" />
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl text-[#0B1F33] mb-6">Global</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                With expertise in cross-border transactions, we navigate the complexities of international finance and regulatory environments.
              </p>
            </div>
            <div>
              <div className="w-16 h-1 bg-[#C8A96A] mb-8" />
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl text-[#0B1F33] mb-6">Integrated</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Combining finance and legal expertise, we deliver comprehensive solutions across capital advisory and legal services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Network */}
      <section className="py-32 md:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px] order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1704652329540-851160c7741f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VyJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWxzJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb24lMjBjb2xvcnxlbnwxfHx8fDE3NzMzOTAwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business professionals collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-5xl md:text-6xl text-[#0B1F33] mb-10 leading-tight"
              >
                Professional Network
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Our extensive professional network includes leading financial institutions, legal advisors, and industry specialists across Australia and the Asia-Pacific region.
                </p>
                <p>
                  These relationships enable us to provide comprehensive solutions and access to premier financing sources for our clients.
                </p>
                <p>
                  We work closely with trusted partners to deliver integrated advisory services that address all aspects of our clients' capital and investment needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}