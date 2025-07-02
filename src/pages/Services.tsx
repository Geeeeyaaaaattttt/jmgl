
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Ship, FileCheck, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Air & Ocean Freight",
      description: "As an international freight carrier, we specialize in air import and export. We are also flexible and dynamic in our work procedures, keeping us ahead in our field.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FileCheck,
      title: "Custom Clearance",
      description: "Customs clearance includes port customs declaration, inspection, tax processing, and legal release — a critical part of international logistics.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Ship,
      title: "Freight Forwarding",
      description: "We organize and manage shipments for individuals or corporations to ensure timely and cost-effective delivery.",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const beliefs = [
    "Serving Locally – Servicing Globally",
    "Your Local Partner for Worldwide Logistics Needs",
    "Provide customized value-added solutions through innovative techniques to reduce logistics cost",
    "Enhance customer satisfaction/experience",
    "Ensure result-driven culture"
  ];

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
              Our
              <span className="block text-cargo-red">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-steel-gray max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to your global shipping needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-card border-cool-gray">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-steel/80 to-transparent"></div>
                  <service.icon className="absolute bottom-4 right-4 h-8 w-8 text-cargo-red" />
                </div>
                <CardHeader>
                  <CardTitle className="text-soft-grey group-hover:text-cargo-red transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-steel-gray mb-4">{service.description}</p>
                  <Button variant="outline" className="group/btn hover:bg-cargo-red hover:text-white hover:border-cargo-red border-cool-gray text-soft-grey transition-all duration-300">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Beliefs Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 stormy-overlay-light"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-soft-grey mb-8">Our Beliefs</h2>
              <div className="space-y-4">
                {beliefs.map((belief, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-slide-in-right" style={{animationDelay: `${index * 0.1}s`}}>
                    <CheckCircle className="h-6 w-6 text-cargo-red mt-1 flex-shrink-0" />
                    <p className="text-lg text-steel-gray">{belief}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Global logistics network"
                className="rounded-xl shadow-xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-steel/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-steel relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-soft-grey mb-6">
            Ready to Experience World-Class Logistics?
          </h2>
          <p className="text-xl text-steel-gray mb-8">
            Let us handle your shipping needs with our expertise and dedication to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cargo-red hover:bg-cargo-red/80 text-white px-8 py-4 text-lg transition-all duration-300">
              Get Quote Now
            </Button>
            <Button size="lg" variant="outline" className="border-soft-grey text-soft-grey hover:bg-soft-grey hover:text-dark-steel px-8 py-4 text-lg transition-all duration-300">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
