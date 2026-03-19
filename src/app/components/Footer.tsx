import { Link } from 'react-router';
import { Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B1F33] text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider mb-6 text-[#C8A96A]">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider mb-6 text-[#C8A96A]">LOCATIONS</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-300">Australia</li>
              <li className="text-sm text-gray-300">Hong Kong</li>
              <li>
                <Link to="/th" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Thailand
                </Link>
              </li>
              <li>
                <Link to="/cn" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Greater China
                </Link>
              </li>
              <li className="text-sm text-gray-300">Asia-Pacific</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider mb-6 text-[#C8A96A]">CONTACT</h3>
            <a
              href="mailto:info@stonebridgeprimecapital.com.au"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              info@stonebridgeprimecapital.com.au
            </a>
            <div className="mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Legal Entities */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider mb-6 text-[#C8A96A]">LEGAL ENTITIES</h3>
            <div className="space-y-4">
              <div>
                <div style={{ fontFamily: 'var(--font-display)' }} className="text-base font-semibold mb-1 text-white">
                  Stonebridge Prime Capital
                </div>
                <p className="text-sm text-gray-400">
                  Advisory Pty Ltd (AU)
                </p>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)' }} className="text-base font-semibold mb-1 text-white">
                  Stonebridge Prime Capital
                </div>
                <p className="text-sm text-gray-400">
                  Advisory Limited (HK)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Stonebridge Prime Capital Advisory Pty Ltd (AU) | Stonebridge Prime Capital Advisory Limited (HK)
            </p>
            <p className="text-xs text-gray-500">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}