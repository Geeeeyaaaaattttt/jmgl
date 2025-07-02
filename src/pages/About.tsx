
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ship, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy via-navy/90 to-steel-gray overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to
              <span className="block text-teal">JMGL</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Delivering The World To Our Customers with innovative logistics solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                JMGL under the leadership of Mr. Ashwani Jindal having a team of young and 
                experienced professionals team to Deliver The World To Our Customers. The aim 
                of JMGL is to provide International Logistics solutions designed to redefine 
                the level of customer satisfaction, reduce the cost and the time gap between 
                the origin & destination of any consignment.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We commit ourselves to offer innovative quality services keeping in mind the 
                safety, and deadline of any consignment. We strive to work in an environment 
                having a good blend of planning and execution to meet the challenges of today's 
                competitive & demanding world.
              </p>
              <div className="bg-teal/10 p-6 rounded-lg border-l-4 border-teal">
                <p className="text-xl font-semibold text-navy">
                  We go Extra Mile every time to serve YOU.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Global logistics operations"
                className="rounded-lg shadow-xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Vision & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building a brand name in the world of International Logistics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Our Goal",
                description: "We are flexible but tough when it comes to meeting deadlines. Our aim is to make JMGL a brand name in the world of International Logistics."
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "With a commitment of Delivering Logistics Perfectly to its valuable customers, JMGL is customizing the services across India in a Perfect Way."
              },
              {
                icon: Award,
                title: "Quality Commitment",
                description: "We commit ourselves to offer innovative quality services keeping in mind the safety and deadline of any consignment."
              },
              {
                icon: Ship,
                title: "Global Reach",
                description: "Commitment to Deliver The World with international logistics solutions that redefine customer satisfaction."
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-teal mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Port operations with cargo containers"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Commitment to Deliver The World...</h3>
                <Button className="bg-teal hover:bg-teal/90 text-white">
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
