
import { Home, Users, FileText, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Interior Design",
      description: "Transform your home into a personalized sanctuary with our comprehensive residential design services."
    },
    {
      icon: Users,
      title: "Commercial Interior Design",
      description: "Create inspiring work environments that enhance productivity and reflect your brand identity."
    },
    {
      icon: FileText,
      title: "Custom Furniture Design",
      description: "Bespoke furniture pieces crafted to perfectly fit your space and complement your aesthetic."
    },
    {
      icon: Search,
      title: "Space Planning & Consultation",
      description: "Expert guidance to optimize your space layout and functionality for maximum impact."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800 mb-6">
            Our Interior Design Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive design services tailored to your unique vision and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 group-hover:bg-amber-200 transition-colors">
                <service.icon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
