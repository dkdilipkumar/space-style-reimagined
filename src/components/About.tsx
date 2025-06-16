
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800 mb-6">
              About Luxe Interiors
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Luxe Interiors is a premier interior design firm with over 15 years of experience 
              in creating stunning, functional spaces. Our team of expert designers delivers 
              personalized solutions that transform houses into homes and spaces into experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that great design should reflect your unique personality while 
              enhancing your daily life. From intimate residential projects to grand commercial 
              spaces, we bring vision to life with meticulous attention to detail.
            </p>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3">
              Learn More
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Elegant interior design workspace"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-600 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
