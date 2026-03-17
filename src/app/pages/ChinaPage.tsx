import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Building2, Globe2, Scale, TrendingUp } from 'lucide-react';

export function ChinaPage() {
  return (
    <div className="bg-[#D6D8DB] pt-20">
      {/* Hero Section */}
      <section className="py-32 md:py-40 px-6 lg:px-12 bg-[#0B1F33] relative overflow-hidden">
        {/* Subtle background pattern */}
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
            className="text-5xl md:text-6xl text-white mb-6 leading-tight"
          >
            斯通博智资本
          </h1>
          <p
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-3xl md:text-4xl text-white/90 mb-8 leading-tight"
          >
            Stonebridge Prime Capital Advisory Limited
          </p>
          <p className="text-xl md:text-2xl text-[#C8A96A] max-w-3xl leading-relaxed mb-4">
            澳洲持牌贷款顾问｜香港跨境资本策略｜法律事务协作
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            专注资产配置、商业住宅贷款、跨境客户方案、财富规划
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl md:text-5xl text-[#0B1F33] mb-12 text-center"
          >
            关于我们
          </h2>
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              斯通博智资本是一家专注于跨境资本配置与融资顾问服务的专业机构。
            </p>
            <p>
              公司立足澳大利亚与香港两大国际金融市场，为全球投资者及企业客户提供贷款顾问、跨境资本策略及法律事务协作等专业服务。
            </p>
            <p>
              我们专注于住宅及商业贷款融资、跨境客户综合解决方案及财富规划，通过整合金融机构与专业服务资源，为客户提供稳健、高效且值得信赖的资本顾问支持。
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-[#CACDD1]">
        <div className="max-w-7xl mx-auto">
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl md:text-5xl text-[#0B1F33] mb-20 text-center"
          >
            核心服务
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            {/* Lending Advisory */}
            <div className="group">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-[#0B1F33] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A96A] transition-colors">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-2xl md:text-3xl text-[#0B1F33] mb-4"
                  >
                    贷款顾问服务
                  </h3>
                  <p className="text-sm text-[#C8A96A] mb-4 tracking-wider">LENDING ADVISORY</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                为住宅及商业物业提供全方位融资解决方案。我们的持牌贷款顾问团队深谙澳洲金融市场，为客户匹配最优贷款产品。
              </p>
              <ul className="space-y-3 text-base text-gray-600">
                <li>• 住宅物业融资</li>
                <li>• 商业地产贷款</li>
                <li>• 投资物业融资</li>
                <li>• 再融资方案</li>
              </ul>
            </div>

            {/* Capital Advisory */}
            <div className="group">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-[#0B1F33] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A96A] transition-colors">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-2xl md:text-3xl text-[#0B1F33] mb-4"
                  >
                    资本策略顾问
                  </h3>
                  <p className="text-sm text-[#C8A96A] mb-4 tracking-wider">CAPITAL ADVISORY</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                提供企业融资、资本结构优化及财富管理策略，助力客户实现长期财务目标。
              </p>
              <ul className="space-y-3 text-base text-gray-600">
                <li>• 企业融资方案</li>
                <li>• 资本结构规划</li>
                <li>• 财富配置策略</li>
                <li>• 投资组合管理</li>
              </ul>
            </div>

            {/* Cross-Border Advisory */}
            <div className="group">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-[#0B1F33] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A96A] transition-colors">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-2xl md:text-3xl text-[#0B1F33] mb-4"
                  >
                    跨境资本顾问
                  </h3>
                  <p className="text-sm text-[#C8A96A] mb-4 tracking-wider">CROSS-BORDER ADVISORY</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                专为大中华区及亚太地区客户设计的跨境资本配置方案，助力国际投资与资产布局。
              </p>
              <ul className="space-y-3 text-base text-gray-600">
                <li>• 跨境融资架构</li>
                <li>• 海外资产配置</li>
                <li>• 国际税务筹划</li>
                <li>• 移民投资方案</li>
              </ul>
            </div>

            {/* Legal Service Consulting */}
            <div className="group">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-[#0B1F33] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A96A] transition-colors">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-2xl md:text-3xl text-[#0B1F33] mb-4"
                  >
                    法律事务协作
                  </h3>
                  <p className="text-sm text-[#C8A96A] mb-4 tracking-wider">LEGAL SERVICE CONSULTING</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                整合专业法律资源，为资本交易提供全方位法律支持，确保交易合规与风险可控。
              </p>
              <ul className="space-y-3 text-base text-gray-600">
                <li>• 银行与金融法</li>
                <li>• 商业及住宅地产法</li>
                <li>• 产权转让法律服务</li>
                <li>• 交易文件审核</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Presence */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-[#D6D8DB]">
        <div className="max-w-7xl mx-auto">
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl md:text-5xl text-[#0B1F33] mb-20 text-center"
          >
            市场布局
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-[#CACDD1] p-12">
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl text-[#0B1F33] mb-6"
              >
                澳大利亚
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                作为澳洲持牌金融服务机构，我们深耕悉尼CBD核心金融区，为本地及海外客户提供专业的融资顾问服务。
              </p>
              <p className="text-sm text-[#C8A96A] tracking-wider">
                Stonebridge Prime Capital Advisory Pty Ltd
              </p>
            </div>

            <div className="bg-[#CACDD1] p-12">
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl text-[#0B1F33] mb-6"
              >
                香港
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                立足香港国际金融中心，服务大中华区及亚太地区客户，提供跨境资本配置与财富管理解决方案。
              </p>
              <p className="text-sm text-[#C8A96A] tracking-wider">
                Stonebridge Prime Capital Advisory Limited
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-6 lg:px-12 bg-[#0B1F33]">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl md:text-5xl text-white mb-8"
          >
            开启跨境资本配置之旅
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            我们的专业团队期待与您展开保密咨询，为您量身定制资本解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="px-10 py-4 bg-[#C8A96A] text-white hover:bg-[#C8A96A]/90 transition-colors text-base tracking-wide"
            >
              联系我们
            </Link>
            <Link
              to="/services"
              className="px-10 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0B1F33] transition-colors text-base tracking-wide"
            >
              了解更多服务
            </Link>
          </div>
        </div>
      </section>

      {/* Language Switch Notice */}
      <section className="py-12 px-6 lg:px-12 bg-[#CACDD1] border-t border-gray-400">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            <Link to="/" className="text-[#C8A96A] hover:underline">
              Switch to English
            </Link>
            {' '}| 中文简体
          </p>
        </div>
      </section>
    </div>
  );
}