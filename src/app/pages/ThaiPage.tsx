import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Building2, Globe2, Scale, TrendingUp } from 'lucide-react';

export function ThaiPage() {
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
            สโตนบริดจ์ ไพรม์ แคปปิตอล
          </h1>
          <p
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-3xl md:text-4xl text-white/90 mb-8 leading-tight"
          >
            Stonebridge Prime Capital Advisory Limited
          </p>
          <p className="text-xl md:text-2xl text-[#C8A96A] max-w-3xl leading-relaxed mb-4">
            ที่ปรึกษาสินเชื่อออสเตรเลีย | กลยุทธ์เงินทุนข้ามพรมแดนฮ่องกง | บริการให้คำปรึกษาทางกฎหมาย
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            เชี่ยวชาญด้านการจัดสรรสินทรัพย์ สินเชื่อพาณิชย์และที่อยู่อาศัย โซลูชั่นลูกค้าข้ามพรมแดน การวางแผนความมั่งคั่ง
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
            เกี่ยวกับเรา
          </h2>
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              สโตนบริดจ์ ไพรม์ แคปปิตอล เป็นสถาบันมืออาชีพที่เชี่ยวชาญด้านการจัดสรรเงินทุนข้ามพรมแดนและบริการที่ปรึกษาด้านการเงิน
            </p>
            <p>
              บริษัทตั้งอยู่ในตลาดการเงินระหว่างประเทศสองแห่งหลักคือออสเตรเลียและฮ่องกง ให้บริการที่ปรึกษาด้านสินเชื่อ กลยุทธ์เงินทุนข้ามพรมแดน และความร่วมมือด้านกฎหมายแก่นักลงทุนและลูกค้าองค์กรทั่วโลก
            </p>
            <p>
              เรามุ่งเน้นไปที่การจัดหาเงินกู้ที่อยู่อาศัยและพาณิชยกรรม โซลูชั่นครบวงจรสำหรับลูกค้าข้ามพรมแดน และการวางแผนความมั่งคั่ง โดยบูรณาการทรัพยากรสถาบันการเงินและบริการมืออาชีพ เพื่อมอบการสนับสนุนที่ปรึกษาด้านเงินทุนที่มั่นคง มีประสิทธิภาพ และน่าเชื่อถือแก่ลูกค้า
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
            บริการหลัก
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
                    บริการที่ปรึกษาสินเชื่อ
                  </h3>
                  <p className="text-sm text-[#C8A96A] mb-4 tracking-wider">LENDING ADVISORY</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                ให้บริการโซลูชั่นการจัดหาเงินทุนแบบครบวงจรสำหรับอสังหาริมทรัพย์ที่อยู่อาศัยและพาณิชยกรรม ทีมที่ปรึกษาสินเชื่อที่ได้รับใบอนุญาตของเรามีความเชี่ยวชาญในตลาดการเงินออสเตรเลีย เพื่อจับคู่ผลิตภัณฑ์สินเชื่อที่ดีที่สุดให้กับลูกค้า
              </p>
              <ul className="space-y-3 text-base text-gray-600">
                <li>• การจัดหาเงินทุนอสังหาริมทรัพย์ที่อยู่อาศัย</li>
                <li>• สินเชื่ออสังหาริมทรัพย์เชิงพาณิชย์</li>
                <li>• การจัดหาเงินทุนอสังหาริมทรัพย์เพื่อการลงทุน</li>
                <li>• โซลูชั่นการรีไฟแนนซ์</li>
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
                    ที่ปรึกษากลยุทธ์เงินทุน
                  </h3>
                  <p className="text-sm text-[#C8A96A] mb-4 tracking-wider">CAPITAL ADVISORY</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                ให้บริการด้านการจัดหาเงินทุนองค์กร การเพิ่มประสิทธิภาพโครงสร้างเงินทุน และกลยุทธ์การบริหารความมั่งคั่ง เพื่อช่วยให้ลูกค้าบรรลุเป้าหมายทางการเงินระยะยาว
              </p>
              <ul className="space-y-3 text-base text-gray-600">
                <li>• โซลูชั่นการจัดหาเงินทุนองค์กร</li>
                <li>• การวางแผนโครงสร้างเงินทุน</li>
                <li>• กลยุทธ์การจัดสรรความมั่งคั่ง</li>
                <li>• การจัดการพอร์ตการลงทุน</li>
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
                    ที่ปรึกษาเงินทุนข้ามพรมแดน
                  </h3>
                  <p className="text-sm text-[#C8A96A] mb-4 tracking-wider">CROSS-BORDER ADVISORY</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                โซลูชั่นการจัดสรรเงินทุนข้ามพรมแดนที่ออกแบบเฉพาะสำหรับลูกค้าในพื้นที่จีนและเอเชียแปซิฟิก เพื่อส่งเสริมการลงทุนระหว่างประเทศและการจัดสรรสินทรัพย์
              </p>
              <ul className="space-y-3 text-base text-gray-600">
                <li>• โครงสร้างการจัดหาเงินทุนข้ามพรมแดน</li>
                <li>• การจัดสรรสินทรัพย์ต่างประเทศ</li>
                <li>• การวางแผนภาษีระหว่างประเทศ</li>
                <li>• โซลูชั่นการลงทุนเพื่อการย้ายถิ่นฐาน</li>
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
                    ความร่วมมือด้านกฎหมาย
                  </h3>
                  <p className="text-sm text-[#C8A96A] mb-4 tracking-wider">LEGAL SERVICE CONSULTING</p>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                บูรณาการทรัพยากรทางกฎหมายมืออาชีพ เพื่อให้การสนับสนุนทางกฎหมายแบบครบวงจรสำหรับธุรกรรมเงินทุน เพื่อให้มั่นใจในการปฏิบัติตามกฎระเบียบและควบคุมความเสี่ยงของธุรกรรม
              </p>
              <ul className="space-y-3 text-base text-gray-600">
                <li>• กฎหมายธนาคารและการเงิน</li>
                <li>• กฎหมายอสังหาริมทรัพย์เชิงพาณิชย์และที่อยู่อาศัย</li>
                <li>• บริการกฎหมายการโอนกรรมสิทธิ์</li>
                <li>• การตรวจสอบเอกสารธุรกรรม</li>
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
            การขยายตลาด
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-[#CACDD1] p-12">
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl text-[#0B1F33] mb-6"
              >
                ออสเตรเลีย
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                ในฐานะสถาบันบริการทางการเงินที่ได้รับใบอนุญาตในออสเตรเลีย เรามีรากฐานที่แข็งแกร่งในเขตการเงินหลักของซิดนีย์ CBD ให้บริการที่ปรึกษาด้านการเงินมืออาชีพแก่ลูกค้าทั้งในประเทศและต่างประเทศ
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
                ฮ่องกง
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                ตั้งอยู่ในศูนย์กลางการเงินระหว่างประเทศของฮ่องกง ให้บริการลูกค้าในพื้นที่จีนและเอเชียแปซิฟิก ด้วยโซลูชั่นการจัดสรรเงินทุนข้ามพรมแดนและการบริหารความมั่งคั่ง
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
            เริ่มต้นการเดินทางด้านการจัดสรรเงินทุนข้ามพรมแดน
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            ทีมมืออาชีพของเราพร้อมให้คำปรึกษาแบบเป็นความลับ และออกแบบโซลูชั่นด้านเงินทุนที่เหมาะสมสำหรับคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="px-10 py-4 bg-[#C8A96A] text-white hover:bg-[#C8A96A]/90 transition-colors text-base tracking-wide"
            >
              ติดต่อเรา
            </Link>
            <Link
              to="/services"
              className="px-10 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0B1F33] transition-colors text-base tracking-wide"
            >
              เรียนรู้เพิ่มเติมเกี่ยวกับบริการ
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
            {' | '}
            <Link to="/cn" className="text-[#C8A96A] hover:underline">
              中文简体
            </Link>
            {' '}| ภาษาไทย
          </p>
        </div>
      </section>
    </div>
  );
}
