
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-dark-steel">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 stormy-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-soft-grey">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 stormy-text-shadow">
              Contact
              <span className="block text-cargo-red">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-steel-gray max-w-3xl mx-auto">
              Get in touch with our logistics experts for personalized solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-dark-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <Card className="shadow-xl bg-card border-cool-gray">
                <CardHeader>
                  <CardTitle className="text-2xl text-soft-grey">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-soft-grey">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="bg-dark-steel border-cool-gray text-soft-grey placeholder:text-steel-gray"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-soft-grey">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="bg-dark-steel border-cool-gray text-soft-grey placeholder:text-steel-gray"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-soft-grey">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="bg-dark-steel border-cool-gray text-soft-grey placeholder:text-steel-gray"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-soft-grey">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your logistics needs..."
                        rows={6}
                        className="bg-dark-steel border-cool-gray text-soft-grey placeholder:text-steel-gray"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-cargo-red hover:bg-cargo-red/80 text-white transition-all duration-300">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-soft-grey mb-6">Get in Touch</h2>
                <p className="text-lg text-steel-gray mb-8">
                  Ready to streamline your global logistics? Our team of experts is here to help 
                  you navigate the complexities of international shipping and find the perfect 
                  solution for your business needs.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow bg-card border-cool-gray">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-cargo-red/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-cargo-red" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-soft-grey">Email Us</h3>
                        <p className="text-steel-gray">info@jmgloballogistics.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow bg-card border-cool-gray">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-cargo-red/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-cargo-red" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-soft-grey">Call Us</h3>
                        <p className="text-steel-gray">+91-9896318688</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow bg-card border-cool-gray">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-cargo-red/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-cargo-red" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-soft-grey">Visit Us</h3>
                        <p className="text-steel-gray">Global Logistics Hub</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Logistics Image */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Logistics operations center"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-steel/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-12 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 stormy-overlay-light"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cool-gray/20 h-96 rounded-xl flex items-center justify-center">
            <div className="text-center text-steel-gray">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-cargo-red" />
              <p className="text-lg text-soft-grey">Interactive Map Coming Soon</p>
              <p className="text-sm">Google Maps integration placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
