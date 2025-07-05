
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Ship, FileCheck, CheckCircle, ArrowLeft, Globe, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = [
    {
      icon: Plane,
      title: "Air & Ocean Freight",
      description: "Comprehensive air and ocean freight solutions connecting global markets with speed and reliability.",
      image: "/lovable-uploads/50ff5509-7a4a-4d98-8ca4-88b3c88bfe74.png",
      features: [
        "Express air cargo services worldwide",
        "Full container load (FCL) and less container load (LCL)",
        "Temperature-controlled shipments",
        "Dangerous goods handling",
        "Door-to-door delivery options",
        "Real-time tracking and monitoring"
      ],
      benefits: [
        "Fastest transit times for urgent shipments",
        "Global network of airline and shipping partnerships",
        "Competitive rates for all cargo volumes",
        "24/7 customer support and updates"
      ]
    },
    {
      icon: FileCheck,
      title: "Custom Clearance",
      description: "Expert customs brokerage services ensuring smooth border crossings and regulatory compliance.",
      image: "/lovable-uploads/39626c44-3908-4eae-ba0b-c119d31f555f.png",
      features: [
        "Import and export documentation",
        "Duty and tax calculation",
        "Regulatory compliance management",
        "Customs inspection coordination",
        "Trade consulting services",
        "Electronic filing systems"
      ],
      benefits: [
        "Reduced clearance times and delays",
        "Expert knowledge of international trade regulations",
        "Minimized duty and tax liabilities",
        "Full compliance with customs requirements"
      ]
    },
    {
      icon: Ship,
      title: "Freight Forwarding",
      description: "End-to-end freight forwarding solutions managing every aspect of your cargo movement.",
      image: "/lovable-uploads/5c7d94bf-c3ff-4eeb-8e2f-8c1e3d31dec8.png",
      features: [
        "Multi-modal transportation coordination",
        "Cargo consolidation services",
        "Insurance and risk management",
        "Warehousing and distribution",
        "Supply chain optimization",
        "Project cargo handling"
      ],
      benefits: [
        "Single point of contact for all logistics needs",
        "Cost-effective shipping solutions",
        "Reduced administrative burden",
        "Enhanced supply chain visibility"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#05112F] via-[#05112F]/90 to-steel-gray overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/lovable-uploads/ad92db34-e678-4e35-9221-9ebc1204adb8.png')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#05112F] mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Button>
            </Link>
          </div>
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Service
              <span className="block text-teal">Details</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive information about our logistics solutions and capabilities
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceDetails.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-teal mr-4" />
                    <h2 className="text-4xl font-bold text-[#05112F]">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-[#05112F] mb-4 flex items-center">
                      <CheckCircle className="h-6 w-6 text-teal mr-2" />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-2 w-2 bg-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#05112F] mb-4 flex items-center">
                      <Globe className="h-6 w-6 text-teal mr-2" />
                      Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-teal mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#05112F] mb-4">Why Choose JM Global Logistics?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the logistics industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Timely Delivery",
                description: "99.8% on-time delivery rate with real-time tracking and proactive communication throughout the shipping process."
              },
              {
                icon: Shield,
                title: "Secure Handling",
                description: "Advanced security protocols and comprehensive insurance coverage to protect your valuable cargo at every stage."
              },
              {
                icon: Globe,
                title: "Global Network",
                description: "Extensive worldwide network of trusted partners and agents ensuring seamless logistics solutions globally."
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-teal mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-[#05112F]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our logistics experts to discuss your specific shipping requirements and get a customized solution.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-teal hover:bg-teal/90 text-white px-8 py-4 text-lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
