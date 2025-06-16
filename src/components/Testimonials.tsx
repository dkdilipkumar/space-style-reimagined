
import { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "The team at Luxe Interiors transformed our home into a masterpiece. Their attention to detail and creative vision exceeded all our expectations.",
      author: "Sarah Johnson",
      role: "Homeowner",
      location: "Manhattan, NY"
    },
    {
      text: "Working with Luxe Interiors was an absolute pleasure. They perfectly captured our brand identity in our new office space. Highly recommended!",
      author: "Michael Chen",
      role: "CEO",
      location: "Tech Startup"
    },
    {
      text: "From the initial consultation to the final reveal, every step was handled with professionalism and creativity. Our restaurant looks absolutely stunning!",
      author: "Elena Rodriguez",
      role: "Restaurant Owner",
      location: "Downtown District"
    }
  ];

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <div className="mb-8">
              <div className="text-xl font-semibold text-amber-400 mb-1">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="text-gray-400">
                {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-amber-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
