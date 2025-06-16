
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Modern Living Room",
      category: "Residential",
      description: "Minimalist design with natural tones and luxury finishes"
    },
    {
      image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Executive Office",
      category: "Commercial",
      description: "Contemporary workspace design for productivity and style"
    },
    {
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Luxury Kitchen",
      category: "Residential",
      description: "Gourmet kitchen with premium materials and smart storage"
    },
    {
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Boutique Hotel Lobby",
      category: "Commercial",
      description: "Elegant hospitality design creating memorable experiences"
    },
    {
      image: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Master Bedroom Suite",
      category: "Residential",
      description: "Serene bedroom retreat with custom built-ins"
    },
    {
      image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Restaurant Interior",
      category: "Commercial",
      description: "Atmospheric dining space with curated lighting and textures"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800 mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our portfolio of exceptional interior design projects that showcase our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-medium text-amber-300 uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm opacity-90">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
            See Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
