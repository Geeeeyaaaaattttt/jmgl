
export interface ContainerSpecs {
  imperial: {
    dimensions: {
      length: { inside: string; outside: string };
      height: { inside: string; outside: string };
      width: { inside: string; outside: string };
    };
    doorOpening: { height: string; width: string };
    tareWeight: string;
    volume: string;
    maxCargo: string;
  };
  metric: {
    dimensions: {
      length: { inside: string; outside: string };
      height: { inside: string; outside: string };
      width: { inside: string; outside: string };
    };
    doorOpening: { height: string; width: string };
    tareWeight: string;
    volume: string;
    maxCargo: string;
  };
}

export interface Container {
  id: string;
  name: string;
  description: string;
  category: string;
  specs: ContainerSpecs;
}

export const containerData: Container[] = [
  {
    id: '20ft-standard',
    name: '20ft Standard Container',
    description: 'Conventional end opening container for general cargo',
    category: 'standard',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "19' 4\"", outside: "20' 0\"" },
          height: { inside: "7' 10\"", outside: "8' 6\"" },
          width: { inside: "7' 8\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "7' 6\"", width: "7' 8\"" },
        tareWeight: "4900 lbs",
        volume: "1170 Cft",
        maxCargo: "48058 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "5.867 m", outside: "6.058 m" },
          height: { inside: "2.35 m", outside: "2.591 m" },
          width: { inside: "2.33 m", outside: "2.438 m" }
        },
        doorOpening: { height: "2.261 m", width: "2.286 m" },
        tareWeight: "2200 kg",
        volume: "33.2 Cum",
        maxCargo: "21800 kg"
      }
    }
  },
  {
    id: '40ft-standard',
    name: '40ft Standard Container',
    description: 'Conventional end opening container for larger cargo loads',
    category: 'standard',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "39' 5\"", outside: "40' 0\"" },
          height: { inside: "7' 10\"", outside: "8' 6\"" },
          width: { inside: "7' 8\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "7' 6\"", width: "7' 8\"" },
        tareWeight: "8200 lbs",
        volume: "2389 Cft",
        maxCargo: "59000 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "11.998 m", outside: "12.192 m" },
          height: { inside: "2.35 m", outside: "2.591 m" },
          width: { inside: "2.33 m", outside: "2.438 m" }
        },
        doorOpening: { height: "2.261 m", width: "2.286 m" },
        tareWeight: "3720 kg",
        volume: "67.60 Cum",
        maxCargo: "26760 kg"
      }
    }
  },
  {
    id: '20ft-high-cube',
    name: '20ft High Cube Container',
    description: 'Extra height container for voluminous cargo',
    category: 'high-cube',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "19' 4\"", outside: "19' 10\"" },
          height: { inside: "8' 10\"", outside: "9' 6\"" },
          width: { inside: "7' 8\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "8' 6\"", width: "7' 8\"" },
        tareWeight: "5290 lbs",
        volume: "1320 Cft",
        maxCargo: "47610 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "5.867 m", outside: "6.058 m" },
          height: { inside: "2.70 m", outside: "2.9 m" },
          width: { inside: "2.33 m", outside: "2.438 m" }
        },
        doorOpening: { height: "2.58 m", width: "2.286 m" },
        tareWeight: "2400 kg",
        volume: "39.6 Cum",
        maxCargo: "21600 kg"
      }
    }
  },
  {
    id: '40ft-high-cube',
    name: '40ft High Cube Container',
    description: 'Large volume container for lightweight, bulky cargo',
    category: 'high-cube',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "39' 5\"", outside: "40' 0\"" },
          height: { inside: "8' 10\"", outside: "9' 6\"" },
          width: { inside: "7' 8\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "8' 6\"", width: "7' 8\"" },
        tareWeight: "8800 lbs",
        volume: "2693 Cft",
        maxCargo: "58400 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "11.998 m", outside: "12.192 m" },
          height: { inside: "2.70 m", outside: "2.9 m" },
          width: { inside: "2.33 m", outside: "2.438 m" }
        },
        doorOpening: { height: "2.58 m", width: "2.286 m" },
        tareWeight: "4000 kg",
        volume: "76.3 Cum",
        maxCargo: "26480 kg"
      }
    }
  },
  {
    id: '20ft-side-access',
    name: '20ft Side Access Container',
    description: 'Container with side door access for easier loading',
    category: 'standard',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "19' 4\"", outside: "20' 0\"" },
          height: { inside: "8' 10\"", outside: "9' 6\"" },
          width: { inside: "7' 8\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "8' 6\"", width: "7' 8\"" },
        tareWeight: "5030 lbs",
        volume: "1320 Cft",
        maxCargo: "47870 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "5.867 m", outside: "6.058 m" },
          height: { inside: "2.70 m", outside: "2.9 m" },
          width: { inside: "2.33 m", outside: "2.438 m" }
        },
        doorOpening: { height: "2.58 m", width: "2.286 m" },
        tareWeight: "2280 kg",
        volume: "39.6 Cum",
        maxCargo: "21720 kg"
      }
    }
  },
  {
    id: '20ft-refrigerated',
    name: '20ft Refrigerated Container',
    description: 'Temperature controlled container for perishable goods',
    category: 'refrigerated',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "17' 8\"", outside: "19' 10\"" },
          height: { inside: "7' 5\"", outside: "8' 6\"" },
          width: { inside: "7' 5\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "7' 3\"", width: "7' 5\"" },
        tareWeight: "7000 lbs",
        volume: "1010 Cft",
        maxCargo: "60200 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "5.385 m", outside: "6.058 m" },
          height: { inside: "2.26 m", outside: "2.591 m" },
          width: { inside: "2.26 m", outside: "2.438 m" }
        },
        doorOpening: { height: "2.21 m", width: "2.26 m" },
        tareWeight: "3200 kg",
        volume: "28.6 Cum",
        maxCargo: "27280 kg"
      }
    }
  },
  {
    id: '40ft-refrigerated',
    name: '40ft Refrigerated Container',
    description: 'Large temperature controlled container for perishables',
    category: 'refrigerated',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "37' 8\"", outside: "40' 0\"" },
          height: { inside: "7' 2\"", outside: "8' 6\"" },
          width: { inside: "7' 5\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "7' 0\"", width: "7' 5\"" },
        tareWeight: "9590 lbs",
        volume: "2051 Cft",
        maxCargo: "57610 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "11.480 m", outside: "12.192 m" },
          height: { inside: "2.184 m", outside: "2.591 m" },
          width: { inside: "2.26 m", outside: "2.438 m" }
        },
        doorOpening: { height: "2.134 m", width: "2.26 m" },
        tareWeight: "4350 kg",
        volume: "58.1 Cum",
        maxCargo: "26130 kg"
      }
    }
  },
  {
    id: '40ft-hc-refrigerated',
    name: '40ft HC Refrigerated Container',
    description: 'High cube refrigerated container for maximum volume',
    category: 'refrigerated',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "37' 8\"", outside: "40' 0\"" },
          height: { inside: "8' 2\"", outside: "9' 6\"" },
          width: { inside: "7' 5\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "8' 0\"", width: "7' 6\"" },
        tareWeight: "9900 lbs",
        volume: "2351 Cft",
        maxCargo: "30480 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "11.480 m", outside: "12.192 m" },
          height: { inside: "2.489 m", outside: "2.9 m" },
          width: { inside: "2.26 m", outside: "2.438 m" }
        },
        doorOpening: { height: "2.438 m", width: "2.286 m" },
        tareWeight: "4420 kg",
        volume: "66.58 Cum",
        maxCargo: "26060 kg"
      }
    }
  },
  {
    id: '20ft-flat-rack',
    name: '20ft Flat Rack Container',
    description: 'Open container for oversized cargo loading',
    category: 'flat-rack',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "18' 5\"", outside: "19' 10\"" },
          height: { inside: "7' 4\"", outside: "8' 6\"" },
          width: { inside: "7' 3\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "5600 lbs",
        volume: "-",
        maxCargo: "47900 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "5.613 m", outside: "6.058 m" },
          height: { inside: "2.235 m", outside: "2.591 m" },
          width: { inside: "2.209 m", outside: "2.438 m" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "2500 kg",
        volume: "-",
        maxCargo: "21500 kg"
      }
    }
  },
  {
    id: '40ft-flat-rack',
    name: '40ft Flat Rack Container',
    description: 'Large flat rack for heavy and oversized cargo',
    category: 'flat-rack',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "39' 7\"", outside: "40' 0\"" },
          height: { inside: "6' 5\"", outside: "8' 6\"" },
          width: { inside: "6' 10\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "12080 lbs",
        volume: "-",
        maxCargo: "85800 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "12.065 m", outside: "12.192 m" },
          height: { inside: "1.956 m", outside: "2.591 m" },
          width: { inside: "2.083 m", outside: "2.438 m" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "5440 kg",
        volume: "-",
        maxCargo: "39000 kg"
      }
    }
  },
  {
    id: '20ft-flat-rack-collapsible',
    name: '20ft Flat Rack Collapsible',
    description: 'Collapsible flat rack for flexible cargo handling',
    category: 'flat-rack',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "18' 6\"", outside: "19' 10\"" },
          height: { inside: "7' 4\"", outside: "8' 6\"" },
          width: { inside: "7' 3\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "6060 lbs",
        volume: "-",
        maxCargo: "49937 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "5.638 m", outside: "6.058 m" },
          height: { inside: "2.235 m", outside: "2.591 m" },
          width: { inside: "2.209 m", outside: "2.438 m" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "2750 kg",
        volume: "-",
        maxCargo: "22650 kg"
      }
    }
  },
  {
    id: '40ft-flat-rack-collapsible',
    name: '40ft Flat Rack Collapsible',
    description: 'Large collapsible flat rack for heavy cargo',
    category: 'flat-rack',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "39' 7\"", outside: "40' 0\"" },
          height: { inside: "6' 5\"", outside: "8' 6\"" },
          width: { inside: "6' 10\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "12800 lbs",
        volume: "-",
        maxCargo: "85800 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "12.065 m", outside: "12.192 m" },
          height: { inside: "1.956 m", outside: "2.591 m" },
          width: { inside: "2.083 m", outside: "2.438 m" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "5800 kg",
        volume: "-",
        maxCargo: "39000 kg"
      }
    }
  },
  {
    id: '20ft-platform',
    name: '20ft Platform Container',
    description: 'Low-profile platform for heavy machinery transport',
    category: 'platform',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "-", outside: "19' 10\"" },
          height: { inside: "-", outside: "1' 10\"" },
          width: { inside: "-", outside: "8' 0\"" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "6060 lbs",
        volume: "-",
        maxCargo: "52900 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "-", outside: "6.058 m" },
          height: { inside: "-", outside: "0.55 m" },
          width: { inside: "-", outside: "2.438 m" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "2750 kg",
        volume: "-",
        maxCargo: "23800 kg"
      }
    }
  },
  {
    id: '40ft-platform',
    name: '40ft Platform Container',
    description: 'Large platform for heavy and oversized equipment',
    category: 'platform',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "-", outside: "40' 0\"" },
          height: { inside: "-", outside: "1' 10\"" },
          width: { inside: "-", outside: "8' 0\"" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "12800 lbs",
        volume: "-",
        maxCargo: "86400 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "-", outside: "12.192 m" },
          height: { inside: "-", outside: "0.55 m" },
          width: { inside: "-", outside: "2.438 m" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "5800 kg",
        volume: "-",
        maxCargo: "38900 kg"
      }
    }
  },
  {
    id: '20ft-open-top',
    name: '20ft Open Top Container',
    description: 'Container with removable top for top-loading cargo',
    category: 'open-top',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "19' 4\"", outside: "20' 0\"" },
          height: { inside: "7' 8\"", outside: "8' 6\"" },
          width: { inside: "7' 7\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "7' 2\"", width: "7' 6\"" },
        tareWeight: "5300 lbs",
        volume: "1100 Cft",
        maxCargo: "47600 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "5.867 m", outside: "6.058 m" },
          height: { inside: "2.35 m", outside: "2.591 m" },
          width: { inside: "2.33 m", outside: "2.438 m" }
        },
        doorOpening: { height: "2.134 m", width: "2.286 m" },
        tareWeight: "2400 kg",
        volume: "34.2 Cum",
        maxCargo: "21600 kg"
      }
    }
  },
  {
    id: '40ft-open-top',
    name: '40ft Open Top Container',
    description: 'Large open top container for bulky cargo',
    category: 'open-top',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "39' 5\"", outside: "40' 0\"" },
          height: { inside: "7' 8\"", outside: "8' 6\"" },
          width: { inside: "7' 8\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "7' 5\"", width: "7' 8\"" },
        tareWeight: "8500 lbs",
        volume: "2300 Cft",
        maxCargo: "58700 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "11.998 m", outside: "12.192 m" },
          height: { inside: "2.35 m", outside: "2.591 m" },
          width: { inside: "2.33 m", outside: "2.438 m" }
        },
        doorOpening: { height: "2.261 m", width: "2.286 m" },
        tareWeight: "3800 kg",
        volume: "70.5 Cum",
        maxCargo: "26500 kg"
      }
    }
  },
  {
    id: '20ft-tank',
    name: '20ft Tank Container',
    description: 'Specialized container for liquid and gas transport',
    category: 'tank',
    specs: {
      imperial: {
        dimensions: {
          length: { inside: "20' 0\"", outside: "20' 0\"" },
          height: { inside: "8' 6\"", outside: "9' 6\"" },
          width: { inside: "8' 0\"", outside: "8' 0\"" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "8800 lbs",
        volume: "900 Cft",
        maxCargo: "52900 lbs"
      },
      metric: {
        dimensions: {
          length: { inside: "6.058 m", outside: "6.058 m" },
          height: { inside: "2.591 m", outside: "2.9 m" },
          width: { inside: "2.438 m", outside: "2.438 m" }
        },
        doorOpening: { height: "-", width: "-" },
        tareWeight: "4000 kg",
        volume: "27.0 Cum",
        maxCargo: "24000 kg"
      }
    }
  }
];
