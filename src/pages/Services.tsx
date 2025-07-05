
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Ship, FileCheck, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Air & Ocean Freight",
      description: "As an international freight carrier, we specialize in air import and export. We are also flexible and dynamic in our work procedures, keeping us ahead in our field.",
      image: "/lovable-uploads/50ff5509-7a4a-4d98-8ca4-88b3c88bfe74.png"
    },
    {
      icon: FileCheck,
      title: "Custom Clearance",
      description: "Customs clearance includes port customs declaration, inspection, tax processing, and legal release — a critical part of international logistics.",
      image: "/lovable-uploads/39626c44-3908-4eae-ba0b-c119d31f555f.png"
    },
    {
      icon: Ship,
      title: "Freight Forwarding",
      description: "We organize and manage shipments for individuals or corporations to ensure timely and cost-effective delivery.",
      image: "/lovable-uploads/5c7d94bf-c3ff-4eeb-8e2f-8c1e3d31dec8.png"
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#05112F] via-[#05112F]/90 to-steel-gray overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/lovable-uploads/692f9298-1fe1-476e-935a-879332e1f38b.png')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our
              <span className="block text-teal">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to your global shipping needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05112F]/60 to-transparent"></div>
                  <service.icon className="absolute bottom-4 right-4 h-8 w-8 text-white" />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#05112F] group-hover:text-teal transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/service-details">
                    <Button variant="outline" className="group/btn hover:bg-teal hover:text-white hover:border-teal">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Beliefs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#05112F] mb-8">Our Beliefs</h2>
              <div className="space-y-4">
                {beliefs.map((belief, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-slide-in-right" style={{animationDelay: `${index * 0.1}s`}}>
                    <CheckCircle className="h-6 w-6 text-teal mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{belief}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/ad92db34-e678-4e35-9221-9ebc1204adb8.png"
                alt="Global logistics network - aerial port view"
                className="rounded-lg shadow-xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05112F]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#05112F] text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/lovable-uploads/774518d2-c85a-49a1-a6d0-1a5b7723cc90.png')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience World-Class Logistics?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us handle your shipping needs with our expertise and dedication to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="border-white text-white hover:bg-white hover:text-[#05112F] px-8 py-4 text-lg bg-transparent border-2 transition-all duration-300">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
