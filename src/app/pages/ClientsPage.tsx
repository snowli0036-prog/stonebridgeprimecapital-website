import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ClientsPage() {
  return (
    <div className="bg-[#F8F9FA] pt-20">
      {/* Hero */}
      <section className="py-32 md:py-40 px-6 lg:px-12 bg-[#0B1F33] relative overflow-hidden">
        {/* Subtle background pattern - Sydney Harbour Bridge */}
        <div className="absolute inset-0 opacity-[0.08]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760129744152-14bbc87f21b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBoYXJib3VyJTIwYnJpZGdlJTIwc2lsaG91dHRlJTIwYXJjaGl0ZWN0dXJhbHxlbnwxMHx8fHwxNzczMzg5MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            Clients
          </h1>
          <p className="text-2xl text-[#C8A96A] max-w-3xl leading-relaxed">
            Serving a diverse range of clients across borders and asset classes
          </p>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-32 md:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-5xl md:text-6xl text-[#0B1F33] mb-20 text-center leading-tight"
          >
            Client Types
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="p-12 border border-gray-200 hover:border-[#C8A96A] transition-all">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl text-[#0B1F33] mb-8">International Investors</h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                High-net-worth individuals and families seeking investment and financing opportunities in Australia and the Asia-Pacific region.
              </p>
              <ul className="space-y-4 text-gray-700 text-base">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Cross-border property investment</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Business investment financing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>International lending solutions</span>
                </li>
              </ul>
            </div>

            <div className="p-12 border border-gray-200 hover:border-[#C8A96A] transition-all">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl text-[#0B1F33] mb-8">Corporate Clients</h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Private companies and corporate groups seeking strategic capital advisory and financing solutions.
              </p>
              <ul className="space-y-4 text-gray-700 text-base">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Corporate debt structuring</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Growth capital</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Acquisition financing</span>
                </li>
              </ul>
            </div>

            <div className="p-12 border border-gray-200 hover:border-[#C8A96A] transition-all">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl text-[#0B1F33] mb-8">Property Investors</h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Sophisticated property investors and developers requiring specialist financing and capital solutions.
              </p>
              <ul className="space-y-4 text-gray-700 text-base">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Portfolio financing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Development finance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Commercial property lending</span>
                </li>
              </ul>
            </div>

            <div className="p-12 border border-gray-200 hover:border-[#C8A96A] transition-all">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl text-[#0B1F33] mb-8">Family Offices</h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Single-family offices and multi-family offices requiring strategic capital advisory and investment coordination.
              </p>
              <ul className="space-y-4 text-gray-700 text-base">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Capital structuring and strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Investment opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Professional coordination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="py-32 md:py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-5xl md:text-6xl text-[#0B1F33] mb-20 text-center leading-tight"
          >
            Geographic Focus
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center p-10 bg-white border border-gray-200">
              <div className="text-7xl text-[#C8A96A] mb-6">•</div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-3">Australia</h3>
              <p className="text-gray-700">Primary market focus</p>
            </div>
            <div className="text-center p-10 bg-white border border-gray-200">
              <div className="text-7xl text-[#C8A96A] mb-6">•</div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-3">Hong Kong</h3>
              <p className="text-gray-700">Regional office</p>
            </div>
            <div className="text-center p-10 bg-white border border-gray-200">
              <div className="text-7xl text-[#C8A96A] mb-6">•</div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-3">Greater China</h3>
              <p className="text-gray-700">Key client base</p>
            </div>
            <div className="text-center p-10 bg-white border border-gray-200">
              <div className="text-7xl text-[#C8A96A] mb-6">•</div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-3">Asia-Pacific</h3>
              <p className="text-gray-700">Extended network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Areas */}
      <section className="py-32 md:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-5xl md:text-6xl text-[#0B1F33] mb-20 text-center leading-tight"
          >
            Investment Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="p-10 border border-gray-200 hover:border-[#C8A96A] transition-all">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Real Estate</h3>
              <ul className="space-y-3 text-gray-700 text-base">
                <li>Residential property</li>
                <li>Commercial property</li>
                <li>Development projects</li>
                <li>Property portfolios</li>
              </ul>
            </div>
            <div className="p-10 border border-gray-200 hover:border-[#C8A96A] transition-all">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Private Equity</h3>
              <ul className="space-y-3 text-gray-700 text-base">
                <li>Growth capital</li>
                <li>Buyouts and acquisitions</li>
                <li>Strategic investments</li>
                <li>Joint ventures</li>
              </ul>
            </div>
            <div className="p-10 border border-gray-200 hover:border-[#C8A96A] transition-all">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-6">Corporate</h3>
              <ul className="space-y-3 text-gray-700 text-base">
                <li>Business financing</li>
                <li>Working capital</li>
                <li>Corporate restructuring</li>
                <li>M&A financing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}