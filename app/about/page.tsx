export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-indigo-100">
              Building the future of digital experiences, one project at a time
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 space-y-6">
            <p className="text-lg leading-relaxed">
              Founded in 2020, we started with a simple mission: to help businesses thrive in the digital age. 
              What began as a small team of passionate developers has grown into a full-service digital agency 
              serving clients worldwide.
            </p>
            <p className="text-lg leading-relaxed">
              We believe in the power of technology to transform businesses and improve lives. Our approach 
              combines cutting-edge technology with creative design to deliver solutions that not only meet 
              but exceed expectations.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we're proud to have helped over 80 clients achieve their digital goals, from startups 
              to Fortune 500 companies. Our success is measured by the success of our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We strive for excellence in everything we do, never settling for good enough.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Great things happen when talented people work together toward a common goal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We embrace new technologies and methodologies to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "Alex Morgan", role: "CEO & Founder", emoji: "👨‍💼" },
            { name: "Sarah Chen", role: "CTO", emoji: "👩‍💻" },
            { name: "Mike Johnson", role: "Lead Designer", emoji: "👨‍🎨" },
            { name: "Emily Davis", role: "Project Manager", emoji: "👩‍💼" }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 text-6xl">
                {member.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
              <div className="flex gap-2 justify-center mt-3">
                <button className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center text-sm">
                  in
                </button>
                <button className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center text-sm">
                  tw
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "150+", label: "Projects Delivered" },
              { value: "80+", label: "Happy Clients" },
              { value: "30+", label: "Team Members" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Want to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always looking for exciting new projects and partnerships
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-shadow">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
