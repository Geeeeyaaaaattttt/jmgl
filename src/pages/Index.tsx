
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ship, Globe, Users, Award, ArrowDown, Plane, Truck, Package } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with MSC Container Ship */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/8c4a26f8-efe4-41e1-8f7e-e8438fd104b7.png')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Global Shipping
              <span className="block text-teal">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Professional freight forwarding and logistics solutions connecting businesses worldwide with reliable, efficient shipping services across land, sea, and air.
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

      {/* Services Section with Transport Mode Images */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Transport Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions across all transport modes
            </p>
          </div>
          
          {/* Main Transport Modes */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Sea Freight */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/lovable-uploads/5c7d94bf-c3ff-4eeb-8e2f-8c1e3d31dec8.png"
                  alt="UASC Container Ship - Sea Freight Services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
                <Ship className="absolute bottom-4 right-4 h-10 w-10 text-white" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-teal transition-colors">Sea Freight</h3>
                <p className="text-gray-600 mb-4">Full container load (FCL) and less than container load (LCL) services with major shipping lines like MSC, UASC, and Maersk.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Container shipping worldwide</li>
                  <li>• Port-to-port delivery</li>
                  <li>• Special cargo handling</li>
                </ul>
              </CardContent>
            </Card>

            {/* Air Freight */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/lovable-uploads/50ff5509-7a4a-4d98-8ca4-88b3c88bfe74.png"
                  alt="British Airways Aircraft - Air Freight Services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
                <Plane className="absolute bottom-4 right-4 h-10 w-10 text-white" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-teal transition-colors">Air Freight</h3>
                <p className="text-gray-600 mb-4">Fast and reliable air cargo services with premium airlines for time-sensitive shipments worldwide.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Express air cargo</li>
                  <li>• Temperature controlled</li>
                  <li>• Same-day delivery options</li>
                </ul>
              </CardContent>
            </Card>

            {/* Land Transport */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/lovable-uploads/692f9298-1fe1-476e-935a-879332e1f38b.png"
                  alt="Container Trucks at Port - Land Transport Services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
                <Truck className="absolute bottom-4 right-4 h-10 w-10 text-white" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-teal transition-colors">Land Transport</h3>
                <p className="text-gray-600 mb-4">Comprehensive road and rail transport solutions for domestic and cross-border deliveries.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Trucking services</li>
                  <li>• Cross-border transport</li>
                  <li>• Last-mile delivery</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Specialized Cargo",
                description: "Tank containers, oversized cargo, and hazardous materials handling",
                image: "/lovable-uploads/774518d2-c85a-49a1-a6d0-1a5b7723cc90.png"
              },
              {
                icon: Globe,
                title: "Customs Clearance",
                description: "Expert customs brokerage services for smooth border crossings",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                icon: Users,
                title: "Supply Chain Management",
                description: "End-to-end supply chain optimization and consulting services",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                  <service.icon className="absolute bottom-4 right-4 h-8 w-8 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-teal transition-colors">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Port Operations */}
      <section className="py-20 bg-gray-50">
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
                reach their destination safely and on time, every time. Our global network 
                spans major ports, airports, and logistics hubs worldwide.
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
                src="/lovable-uploads/39626c44-3908-4eae-ba0b-c119d31f555f.png"
                alt="Port operations with container cranes at dusk"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Section with Aerial Port View */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/ad92db34-e678-4e35-9221-9ebc1204adb8.png')"
          }}
        />
        <div className="absolute inset-0 bg-navy/85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Global Network, Local Expertise</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Our worldwide network of partners and agents ensures seamless logistics 
            solutions across all major shipping routes, ports, and airports.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Ports & Airports" },
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
            to help you find the most efficient and cost-effective solution for sea, air, or land transport.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-teal hover:bg-teal/90 text-white px-8 py-4 text-lg">
                Request Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg">
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
