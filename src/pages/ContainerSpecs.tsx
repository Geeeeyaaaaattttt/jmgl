
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Ruler, Weight, Package, DoorOpen, Thermometer, Anchor } from "lucide-react";
import { containerData } from "../data/containerData";

const ContainerSpecs = () => {
  const [selectedUnit, setSelectedUnit] = useState<'imperial' | 'metric'>('imperial');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Containers', color: 'bg-gray-100' },
    { id: 'standard', label: 'Standard', color: 'bg-blue-100 text-blue-800' },
    { id: 'high-cube', label: 'High Cube', color: 'bg-purple-100 text-purple-800' },
    { id: 'refrigerated', label: 'Refrigerated', color: 'bg-cyan-100 text-cyan-800' },
    { id: 'flat-rack', label: 'Flat Rack', color: 'bg-orange-100 text-orange-800' },
    { id: 'platform', label: 'Platform', color: 'bg-green-100 text-green-800' },
    { id: 'open-top', label: 'Open Top', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'tank', label: 'Tank', color: 'bg-red-100 text-red-800' }
  ];

  const filteredContainers = selectedCategory === 'all' 
    ? containerData 
    : containerData.filter(container => container.category === selectedCategory);

  const getSpecIcon = (specType: string) => {
    switch (specType) {
      case 'length':
      case 'height':
      case 'width':
        return <Ruler className="h-4 w-4" />;
      case 'weight':
        return <Weight className="h-4 w-4" />;
      case 'volume':
        return <Package className="h-4 w-4" />;
      case 'door':
        return <DoorOpen className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">Container Specifications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Detailed specifications for all container types. Choose your preferred units and filter by container category.
          </p>
          
          {/* Unit Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm border">
              <Button
                variant={selectedUnit === 'imperial' ? 'default' : 'ghost'}
                onClick={() => setSelectedUnit('imperial')}
                className="px-6"
              >
                Imperial (ft/lbs)
              </Button>
              <Button
                variant={selectedUnit === 'metric' ? 'default' : 'ghost'}
                onClick={() => setSelectedUnit('metric')}
                className="px-6"
              >
                Metric (m/kg)
              </Button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="text-sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Container Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredContainers.map((container) => (
            <Card 
              key={container.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-navy mb-2">
                      {container.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {container.description}
                    </CardDescription>
                  </div>
                  <Badge className={getCategoryColor(container.category)}>
                    {container.category.replace('-', ' ')}
                  </Badge>
                </div>
                
                {/* Container Icon/Visual */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg flex items-center justify-center">
                  {container.category === 'refrigerated' ? (
                    <Thermometer className="h-16 w-16 text-cyan-600" />
                  ) : container.category === 'tank' ? (
                    <Anchor className="h-16 w-16 text-red-600" />
                  ) : (
                    <Package className="h-16 w-16 text-navy" />
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Dimensions */}
                <div>
                  <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                    <Ruler className="h-4 w-4" />
                    Dimensions
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-medium text-gray-700">Length (Inside)</div>
                      <div className="text-navy font-semibold">
                        {selectedUnit === 'imperial' 
                          ? container.specs.imperial.dimensions.length.inside 
                          : container.specs.metric.dimensions.length.inside}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-medium text-gray-700">Height (Inside)</div>
                      <div className="text-navy font-semibold">
                        {selectedUnit === 'imperial' 
                          ? container.specs.imperial.dimensions.height.inside 
                          : container.specs.metric.dimensions.height.inside}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-medium text-gray-700">Width (Inside)</div>
                      <div className="text-navy font-semibold">
                        {selectedUnit === 'imperial' 
                          ? container.specs.imperial.dimensions.width.inside 
                          : container.specs.metric.dimensions.width.inside}
                      </div>
                    </div>
                    {container.specs.imperial.doorOpening.height !== '-' && (
                      <div className="bg-gray-50 p-2 rounded">
                        <div className="font-medium text-gray-700">Door Height</div>
                        <div className="text-navy font-semibold">
                          {selectedUnit === 'imperial' 
                            ? container.specs.imperial.doorOpening.height 
                            : container.specs.metric.doorOpening.height}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Weight & Capacity */}
                <div>
                  <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                    <Weight className="h-4 w-4" />
                    Weight & Capacity
                  </h4>
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                      <span className="font-medium text-gray-700">Tare Weight</span>
                      <span className="text-navy font-semibold">
                        {selectedUnit === 'imperial' 
                          ? container.specs.imperial.tareWeight 
                          : container.specs.metric.tareWeight}
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                      <span className="font-medium text-gray-700">Max Cargo</span>
                      <span className="text-navy font-semibold">
                        {selectedUnit === 'imperial' 
                          ? container.specs.imperial.maxCargo 
                          : container.specs.metric.maxCargo}
                      </span>
                    </div>
                    {container.specs.imperial.volume !== '-' && (
                      <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                        <span className="font-medium text-gray-700">Volume</span>
                        <span className="text-navy font-semibold">
                          {selectedUnit === 'imperial' 
                            ? container.specs.imperial.volume 
                            : container.specs.metric.volume}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredContainers.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No containers found</h3>
            <p className="text-gray-500">Try selecting a different category filter.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm border">
          <h3 className="text-2xl font-bold text-navy mb-4">Need Help Choosing?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our logistics experts can help you select the right container type for your specific cargo requirements.
          </p>
          <Button size="lg" className="bg-teal hover:bg-teal/90 text-white">
            Contact Our Experts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContainerSpecs;
