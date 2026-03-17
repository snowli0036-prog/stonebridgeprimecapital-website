import { Mail, Linkedin, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="bg-[#F8F9FA] pt-20">
      {/* Hero */}
      <section className="py-32 md:py-40 px-6 lg:px-12 bg-[#0B1F33]">
        <div className="max-w-7xl mx-auto">
          <h1
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-6xl md:text-7xl text-white mb-8 leading-tight"
          >
            Contact
          </h1>
          <p className="text-2xl text-[#C8A96A] max-w-3xl leading-relaxed">
            Begin a confidential discussion with our advisory team
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 md:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Contact Form */}
            <div>
              <h2
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-4xl text-[#0B1F33] mb-10"
              >
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-base text-gray-700 mb-3">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full border-gray-300 focus:border-[#0B1F33] h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base text-gray-700 mb-3">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full border-gray-300 focus:border-[#0B1F33] h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-base text-gray-700 mb-3">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-gray-300 focus:border-[#0B1F33] h-12"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-base text-gray-700 mb-3">
                    Company / Organization
                  </label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full border-gray-300 focus:border-[#0B1F33] h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base text-gray-700 mb-3">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full border-gray-300 focus:border-[#0B1F33]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-10 py-4 bg-[#0B1F33] text-white hover:bg-[#0B1F33]/90 transition-colors text-sm tracking-wide"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-16">
              <div>
                <h2
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-4xl text-[#0B1F33] mb-10"
                >
                  Contact Information
                </h2>
              </div>

              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#0B1F33] text-white flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-[#0B1F33] mb-3">Email</h3>
                    <a
                      href="mailto:admin@stonebridgeprimecapital.com"
                      className="text-gray-700 hover:text-[#C8A96A] transition-colors text-lg"
                    >
                      admin@stonebridgeprimecapital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#0B1F33] text-white flex-shrink-0">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-[#0B1F33] mb-3">LinkedIn</h3>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#C8A96A] transition-colors text-lg"
                    >
                      Connect with us on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-gray-200">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-[#0B1F33] mb-8 flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  Office Locations
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-[#0B1F33] mb-3">Australia</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Sydney, New South Wales<br />
                      Australia
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-[#0B1F33] mb-3">Hong Kong</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Central, Hong Kong SAR
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-gray-200">
                <p className="text-base text-gray-600 leading-relaxed">
                  All inquiries are treated with strict confidentiality. We will respond to your message within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}