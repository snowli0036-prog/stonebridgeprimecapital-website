import { CheckCircle } from 'lucide-react';

export function About() {
  const achievements = [
    'Award-winning design team',
    '10+ years of industry experience',
    'Trusted by Fortune 500 companies',
    'Global presence in 25+ countries'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-blue-600 text-sm font-medium">About Us</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              We're passionate about creating
              <span className="block text-blue-600 mt-2">exceptional experiences</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Since our founding, we've been dedicated to pushing the boundaries of design 
              and technology. Our team of experts combines creativity with strategic thinking 
              to deliver solutions that drive real business results.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that great design is more than just aesthetics—it's about creating 
              meaningful connections between brands and their audiences.
            </p>

            <div className="space-y-4 pt-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">
              <div className="text-5xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg -mt-8">
              <div className="text-5xl font-bold text-pink-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
