
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ship, Globe, Users, Award, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy/90 to-steel-gray overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Global Shipping
              <span className="block text-teal">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Professional freight forwarding and logistics solutions connecting businesses worldwide with reliable, efficient shipping services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 text-white px-8 py-4 text-lg"
                onClick={() => scrollToSection('services')}
              >
                Explore Our Services
              </Button>
              <Link to="/container-specs">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-navy px-8 py-4 text-lg"
                >
                  Container Specifications
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </section>

      {/* About Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-navy mb-6">
                Your Trusted Global Logistics Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With decades of experience in international shipping and freight forwarding, 
                JM Global Logistics connects businesses across continents with reliable, 
                cost-effective transportation solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From container shipping to specialized cargo handling, we ensure your goods 
                reach their destination safely and on time, every time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal mb-2">50+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern logistics warehouse"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Ship,
                title: "Container Shipping",
                description: "Full container load (FCL) and less than container load (LCL) services worldwide"
              },
              {
                icon: Globe,
                title: "Freight Forwarding",
                description: "Air, sea, and land freight forwarding with real-time tracking and updates"
              },
              {
                icon: Users,
                title: "Customs Clearance",
                description: "Expert customs brokerage services to ensure smooth border crossings"
              },
              {
                icon: Award,
                title: "Specialized Cargo",
                description: "Handling of oversized, hazardous, and temperature-controlled shipments"
              },
              {
                icon: Ship,
                title: "Warehousing",
                description: "Secure storage facilities with inventory management and distribution"
              },
              {
                icon: Globe,
                title: "Supply Chain",
                description: "End-to-end supply chain optimization and logistics consulting"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-teal mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Global Network, Local Expertise</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Our worldwide network of partners and agents ensures seamless logistics 
            solutions across all major shipping routes and trade lanes.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Ports Worldwide" },
              { number: "24/7", label: "Customer Support" },
              { number: "99.8%", label: "On-Time Delivery" },
              { number: "30+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                <div className="text-4xl font-bold text-teal mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy mb-6">
            Ready to Ship Your Cargo?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a personalized quote for your shipping needs. Our experts are standing by 
            to help you find the most efficient and cost-effective solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal hover:bg-teal/90 text-white px-8 py-4 text-lg">
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
