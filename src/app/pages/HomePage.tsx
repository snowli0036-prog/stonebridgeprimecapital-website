import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChevronRight, Shield, Globe2, Users, Target } from 'lucide-react';

export function HomePage() {
  return (
    <div className="bg-[#F8F9FA]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#0B1F33] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1668934805874-a3303d3f64ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBjYmQlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3MzM2NjMzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sydney CBD skyline"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-40">
          <div className="max-w-4xl">
            <h1
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-6xl md:text-7xl lg:text-8xl text-white mb-10 leading-tight"
            >
              Stonebridge Prime Capital
            </h1>
            <div className="mb-8">
              <p className="text-3xl md:text-4xl text-[#C8A96A] font-light" style={{ fontWeight: 500 }}>
                Cross-Border Capital Advisory
              </p>
              <p className="text-xl text-gray-300 mt-4">
                Australia <span className="text-[#C8A96A]">•</span> Hong Kong <span className="text-[#C8A96A]">•</span> Asia-Pacific
              </p>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-14 max-w-2xl">
              Independent advisory for cross-border financing, capital structuring, strategic investment and legal support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#C8A96A] text-[#0B1F33] hover:bg-[#C8A96A]/90 transition-colors text-sm tracking-wide font-medium"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white hover:bg-white/10 transition-colors text-sm tracking-wide font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-5xl md:text-6xl text-[#0B1F33] mb-10 leading-tight"
              >
                About the Firm
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Stonebridge Prime Capital is an independent capital advisory firm specialising in cross-border financing and strategic advisory.
                </p>
                <p>
                  Partnered with extensive network of Australian leading banks and financial institutions, legal advisors and industry specialists, we provide cross-border financing, capital structuring, strategic investment advisory and legal services for our international investors, corporate partners and family offices seeking financing solutions and investment opportunities in Australia and the Asia-Pacific region.
                </p>
              </div>
            </div>
            <div className="relative h-[600px]">
              <ImageWithFallback
                src="https://i.imgur.com/8ZLYgkZ.jpeg"
                alt="Sydney Harbour Bridge at night"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl md:text-6xl text-[#0B1F33] mb-6 leading-tight"
            >
              Our Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Service 1 */}
            <div className="bg-white p-12 border border-gray-200 hover:border-[#C8A96A] transition-all">
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl text-[#0B1F33] mb-8"
              >
                Lending Advisory
              </h3>
              <ul className="space-y-4 text-gray-700 text-base">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Residential mortgages</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Commercial property financing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Investment property loans</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Refinancing strategy</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-12 border border-gray-200 hover:border-[#C8A96A] transition-all">
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl text-[#0B1F33] mb-8"
              >
                Capital Advisory
              </h3>
              <ul className="space-y-4 text-gray-700 text-base">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Debt structuring</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Capital strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Investment introductions</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-12 border border-gray-200 hover:border-[#C8A96A] transition-all">
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl text-[#0B1F33] mb-8"
              >
                Cross-Border Advisory
              </h3>
              <ul className="space-y-4 text-gray-700 text-base">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>International investor financing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Cross-border capital strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Investment coordination</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-12 border border-gray-200 hover:border-[#C8A96A] transition-all">
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl text-[#0B1F33] mb-8"
              >
                Legal Service Consulting
              </h3>
              <ul className="space-y-4 text-gray-700 text-base">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Banking & finance law</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Property law advisory</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Conveyancing services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Legal network & referrals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 md:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl md:text-6xl text-[#0B1F33] mb-6 leading-tight"
            >
              Our Clients
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-10 border border-gray-200">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33]">International Investors</h3>
            </div>
            <div className="text-center p-10 border border-gray-200">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33]">Corporate Clients</h3>
            </div>
            <div className="text-center p-10 border border-gray-200">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33]">Property Investors</h3>
            </div>
            <div className="text-center p-10 border border-gray-200">
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33]">Family Offices</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Focus Section */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl md:text-6xl text-[#0B1F33] mb-6 leading-tight"
            >
              Geographic Focus
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-8xl text-[#C8A96A] mb-6">•</div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33]">Australia</h3>
            </div>
            <div className="text-center">
              <div className="text-8xl text-[#C8A96A] mb-6">•</div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33]">Hong Kong</h3>
            </div>
            <div className="text-center">
              <div className="text-8xl text-[#C8A96A] mb-6">•</div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33]">Greater China</h3>
            </div>
            <div className="text-center">
              <div className="text-8xl text-[#C8A96A] mb-6">•</div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33]">Asia-Pacific</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stonebridge Section */}
      <section className="py-16 md:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl md:text-6xl text-[#0B1F33] mb-6 leading-tight"
            >
              Why Stonebridge
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#0B1F33] mx-auto mb-8 flex items-center justify-center group-hover:bg-[#C8A96A] transition-colors">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-4">Independent Advisory</h3>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#0B1F33] mx-auto mb-8 flex items-center justify-center group-hover:bg-[#C8A96A] transition-colors">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-4">International Perspective</h3>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#0B1F33] mx-auto mb-8 flex items-center justify-center group-hover:bg-[#C8A96A] transition-colors">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-4">Trusted Professional Network</h3>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#0B1F33] mx-auto mb-8 flex items-center justify-center group-hover:bg-[#C8A96A] transition-colors">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-4">Strategic Capital Solutions</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-6 lg:px-12 bg-[#0B1F33]">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-5xl md:text-6xl text-white mb-10 leading-tight"
          >
            Start a confidential discussion with our advisory team.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-5 bg-[#C8A96A] text-[#0B1F33] hover:bg-[#C8A96A]/90 transition-colors text-sm tracking-wide font-medium"
          >
            Contact Us
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}