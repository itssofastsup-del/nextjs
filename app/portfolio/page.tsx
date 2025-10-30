export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured online store with payment integration and inventory management",
      image: "🛍️",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Healthcare App",
      category: "Mobile App",
      description: "Telemedicine platform connecting patients with healthcare providers",
      image: "🏥",
      tags: ["React Native", "Firebase", "Video SDK"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Analytics Dashboard",
      category: "Web Application",
      description: "Real-time data visualization and reporting platform for businesses",
      image: "📊",
      tags: ["React", "D3.js", "Node.js"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Food Delivery App",
      category: "Mobile App",
      description: "Location-based food ordering and delivery service",
      image: "🍔",
      tags: ["Flutter", "Google Maps", "Stripe"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Social Network",
      category: "Web Platform",
      description: "Community platform for creators and enthusiasts",
      image: "👥",
      tags: ["Next.js", "GraphQL", "MongoDB"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Fitness Tracker",
      category: "Mobile App",
      description: "Personal workout and nutrition tracking application",
      image: "💪",
      tags: ["Swift", "HealthKit", "CoreData"],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-purple-100">
              Showcasing our best work and successful client projects
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 -mt-10">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Projects Completed", value: "150+" },
            { label: "Happy Clients", value: "80+" },
            { label: "Countries Served", value: "25+" },
            { label: "Team Members", value: "30+" }
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-8xl`}>
                {project.image}
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-600 transition-colors shadow-lg">
            Load More Projects
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                quote: "Outstanding work! They delivered beyond our expectations.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Founder, AppCo",
                quote: "Professional, responsive, and highly skilled team.",
                rating: 5
              },
              {
                name: "Emily Davis",
                role: "CTO, DataFlow",
                quote: "Best development partner we've ever worked with.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
