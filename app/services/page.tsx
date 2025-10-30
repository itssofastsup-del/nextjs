export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: "💻",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure & Scalable"]
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱",
      features: ["iOS & Android", "Cloud Integration", "Push Notifications", "Offline Support"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that delight your customers",
      icon: "🎨",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "E-Commerce",
      description: "Complete online store solutions with payment processing and inventory",
      icon: "🛒",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services",
      icon: "☁️",
      features: ["AWS/Azure/GCP", "Auto-scaling", "Load Balancing", "24/7 Monitoring"]
    },
    {
      title: "Consulting",
      description: "Expert technical guidance and strategic planning for your projects",
      icon: "🎯",
      features: ["Architecture Design", "Code Review", "Performance Audit", "Team Training"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive solutions to bring your digital vision to life
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-shadow">
              Contact Us
            </button>
            <button className="px-8 py-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
