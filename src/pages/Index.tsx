
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
    <div className="min-h-screen bg-dark-steel">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-parallax-zoom"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 stormy-overlay"></div>
        <div className="relative z-10 text-center text-soft-grey px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight stormy-text-shadow">
              Global Shipping
              <span className="block text-cargo-red">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-steel-gray max-w-2xl mx-auto stormy-text-shadow">
              Professional freight forwarding and logistics solutions connecting businesses worldwide with reliable, efficient shipping services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-cargo-red hover:bg-cargo-red/80 text-white px-8 py-4 text-lg transition-all duration-300"
                onClick={() => scrollToSection('services')}
              >
                Explore Our Services
              </Button>
              <Link to="/container-specs">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-soft-grey text-soft-grey hover:bg-soft-grey hover:text-dark-steel px-8 py-4 text-lg transition-all duration-300"
                >
                  Container Specifications
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-steel-gray" />
        </div>
      </section>

      {/* About Section */}
      <section id="services" className="py-20 bg-dark-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-soft-grey mb-6">
                Your Trusted Global Logistics Partner
              </h2>
              <p className="text-lg text-steel-gray mb-6">
                With decades of experience in international shipping and freight forwarding, 
                JM Global Logistics connects businesses across continents with reliable, 
                cost-effective transportation solutions.
              </p>
              <p className="text-lg text-steel-gray mb-8">
                From container shipping to specialized cargo handling, we ensure your goods 
                reach their destination safely and on time, every time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cargo-red mb-2">50+</div>
                  <div className="text-sm text-steel-gray">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cargo-red mb-2">1000+</div>
                  <div className="text-sm text-steel-gray">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern logistics warehouse with containers"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-steel/40 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 stormy-overlay-light"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-soft-grey mb-4">Our Services</h2>
            <p className="text-xl text-steel-gray max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Ship,
                title: "Container Shipping",
                description: "Full container load (FCL) and less than container load (LCL) services worldwide",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                icon: Globe,
                title: "Freight Forwarding",
                description: "Air, sea, and land freight forwarding with real-time tracking and updates",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                icon: Users,
                title: "Customs Clearance",
                description: "Expert customs brokerage services to ensure smooth border crossings",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                icon: Award,
                title: "Specialized Cargo",
                description: "Handling of oversized, hazardous, and temperature-controlled shipments",
                image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                icon: Ship,
                title: "Warehousing",
                description: "Secure storage facilities with inventory management and distribution",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                icon: Globe,
                title: "Supply Chain",
                description: "End-to-end supply chain optimization and logistics consulting",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-card border-cool-gray">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-steel/80 to-transparent"></div>
                  <service.icon className="absolute bottom-4 right-4 h-8 w-8 text-cargo-red" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-soft-grey mb-3 group-hover:text-cargo-red transition-colors">{service.title}</h3>
                  <p className="text-steel-gray">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-dark-steel relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-soft-grey mb-6">Global Network, Local Expertise</h2>
          <p className="text-xl text-steel-gray mb-12 max-w-3xl mx-auto">
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
                <div className="text-4xl font-bold text-cargo-red mb-2">{stat.number}</div>
                <div className="text-steel-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-steel">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-soft-grey mb-6">
            Ready to Ship Your Cargo?
          </h2>
          <p className="text-xl text-steel-gray mb-8">
            Get a personalized quote for your shipping needs. Our experts are standing by 
            to help you find the most efficient and cost-effective solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-cargo-red hover:bg-cargo-red/80 text-white px-8 py-4 text-lg transition-all duration-300">
                Request Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-soft-grey text-soft-grey hover:bg-soft-grey hover:text-dark-steel px-8 py-4 text-lg transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
