import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ServicesPage() {
  return (
    <div className="bg-[#F8F9FA] pt-20">
      {/* Hero */}
      <section className="py-32 md:py-40 px-6 lg:px-12 bg-[#0B1F33] relative overflow-hidden">
        {/* Subtle background pattern - Sydney Harbour Bridge */}
        <div className="absolute inset-0 opacity-[0.08]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760129744152-14bbc87f21b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBoYXJib3VyJTIwYnJpZGdlJTIwc2lsaG91dHRlJTIwYXJjaGl0ZWN0dXJhb8ZW58MXx8fHwxNzczMzg5MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            Services
          </h1>
          <p className="text-2xl text-[#C8A96A] max-w-3xl leading-relaxed">
            Comprehensive capital advisory solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Mortgage Advisory */}
      <section className="py-32 md:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl md:text-6xl text-[#0B1F33] mb-10 leading-tight"
            >
              Mortgage Advisory
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-16">
              Specialist mortgage and lending advisory for residential and commercial property financing across Australia.
            </p>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="p-10 border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Residential Mortgages</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Owner-occupied and investment property financing solutions tailored to your circumstances.
                </p>
              </div>
              <div className="p-10 border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Commercial Financing</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Commercial property and business lending across all asset classes and structures.
                </p>
              </div>
              <div className="p-10 border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Investment Property</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Strategic financing for property investment portfolios and development projects.
                </p>
              </div>
              <div className="p-10 border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Refinancing</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Portfolio review and refinancing strategy to optimize existing debt structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Advisory */}
      <section className="py-32 md:py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl md:text-6xl text-[#0B1F33] mb-10 leading-tight"
            >
              Capital Advisory
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-16">
              Strategic capital structuring and advisory for businesses and investment entities.
            </p>
            <div className="space-y-10">
              <div className="p-10 bg-white border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Debt Structuring</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Optimal debt architecture for corporate entities, property groups, and investment structures including senior debt, mezzanine, and hybrid instruments.
                </p>
              </div>
              <div className="p-10 bg-white border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Capital Strategy</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Long-term capital planning and structuring aligned with business growth objectives and investment strategies.
                </p>
              </div>
              <div className="p-10 bg-white border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Investment Introductions</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Facilitating connections between capital seekers and institutional investors, family offices, and strategic partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Border Advisory */}
      <section className="py-32 md:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl md:text-6xl text-[#0B1F33] mb-10 leading-tight"
            >
              Cross-Border Advisory
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-16">
              Specialist advisory for international investors and cross-border capital transactions.
            </p>
            <div className="space-y-10">
              <div className="p-10 border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">International Investor Financing</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Tailored financing solutions for international clients investing in Australian property and businesses, including foreign income assessment and structuring.
                </p>
              </div>
              <div className="p-10 border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Cross-Border Capital Strategy</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Strategic advisory on cross-border capital flows, currency considerations, tax structuring, and regulatory compliance.
                </p>
              </div>
              <div className="p-10 border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Investment Coordination</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  End-to-end coordination of cross-border investments including legal, tax, and professional advisor engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Service Consulting */}
      <section className="py-32 md:py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl md:text-6xl text-[#0B1F33] mb-10 leading-tight"
            >
              Legal Service Consulting
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-16">
              Specialist legal advisory and referral services provided by our principal, a qualified Australian solicitor with expertise in finance and property law.
            </p>
            <div className="space-y-10">
              <div className="p-10 bg-white border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Banking & Finance Law</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Expert guidance on banking and finance law matters, including loan documentation, security arrangements, and financing structures.
                </p>
              </div>
              <div className="p-10 bg-white border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Commercial & Residential Property Law</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Comprehensive property law advisory covering commercial and residential transactions, leasing, and property development matters.
                </p>
              </div>
              <div className="p-10 bg-white border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Conveyancing Law</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Professional conveyancing services and advisory for property transfers, settlements, and due diligence processes.
                </p>
              </div>
              <div className="p-10 bg-white border border-gray-200 hover:border-[#C8A96A] transition-all">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Legal Network & Referrals</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Extensive partnerships with leading Australian law firms enabling seamless client referrals and integrated legal solutions across all practice areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Advisory Coordination */}
      <section className="py-32 md:py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl md:text-6xl text-[#0B1F33] mb-10 leading-tight"
            >
              Professional Advisory Coordination
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-16">
              We work with leading professional advisors to provide integrated solutions across all aspects of capital and investment advisory.
            </p>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="p-10 bg-white">
                <ul className="space-y-5 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2.5 mr-4 flex-shrink-0" />
                    <span>Legal advisors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2.5 mr-4 flex-shrink-0" />
                    <span>Tax advisors and accountants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2.5 mr-4 flex-shrink-0" />
                    <span>Financial planners</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 bg-white">
                <ul className="space-y-5 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2.5 mr-4 flex-shrink-0" />
                    <span>Property advisors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2.5 mr-4 flex-shrink-0" />
                    <span>Investment managers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2.5 mr-4 flex-shrink-0" />
                    <span>Banking partners</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}