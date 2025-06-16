
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space? Let's discuss your vision and bring it to life together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Start Your Project Today
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="border-gray-300 focus:border-amber-500"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="border-gray-300 focus:border-amber-500"
                />
              </div>
              <Input
                placeholder="Phone Number"
                className="border-gray-300 focus:border-amber-500"
              />
              <Textarea
                placeholder="Tell us about your project..."
                rows={6}
                className="border-gray-300 focus:border-amber-500"
              />
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                <p className="text-gray-600">
                  123 Design Street<br />
                  New York, NY 10001
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                <p className="text-gray-600">hello@luxeinteriors.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Business Hours</h4>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-12 pb-8 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="text-2xl font-serif font-bold text-gray-800 mb-4">
                Luxe Interiors
              </div>
              <p className="text-gray-600">
                Transforming spaces with elegance and expertise since 2008.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-600 hover:text-amber-600 transition-colors">Home</a>
                <a href="#about" className="block text-gray-600 hover:text-amber-600 transition-colors">About</a>
                <a href="#services" className="block text-gray-600 hover:text-amber-600 transition-colors">Services</a>
                <a href="#portfolio" className="block text-gray-600 hover:text-amber-600 transition-colors">Portfolio</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">Pinterest</a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-600 mt-8 pt-8 border-t border-gray-200">
            © 2024 Luxe Interiors. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
