import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Sprout } from "lucide-react";

const labs = [
  {
    id: 1,
    name: "Sundarbans Restoration Lab",
    location: "Bangladesh",
    coordinates: { x: 70, y: 45 },
    members: 45,
    hectares: 12,
    status: "active"
  },
  {
    id: 2,
    name: "Sahel Wildlife Corridor",
    location: "Nigeria",
    coordinates: { x: 30, y: 35 },
    members: 32,
    hectares: 8,
    status: "active"
  },
  {
    id: 3,
    name: "Orangutan Edge Communities",
    location: "Indonesia",
    coordinates: { x: 85, y: 65 },
    members: 28,
    hectares: 15,
    status: "planning"
  },
  {
    id: 4,
    name: "Border Migrant Shelters",
    location: "Mexico",
    coordinates: { x: 15, y: 50 },
    members: 67,
    hectares: 5,
    status: "active"
  },
  {
    id: 5,
    name: "Maasai Climate Adaptation",
    location: "Kenya",
    coordinates: { x: 55, y: 60 },
    members: 39,
    hectares: 22,
    status: "active"
  },
  {
    id: 6,
    name: "Mediterranean Landing Zones",
    location: "Italy/Greece",
    coordinates: { x: 40, y: 25 },
    members: 51,
    hectares: 7,
    status: "planning"
  }
];

export const LabMap = () => {
  return (
    <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-bold text-foreground">Live Lab Tracker</h3>
        <Badge variant="secondary" className="ml-auto">
          {labs.filter(lab => lab.status === 'active').length} Active Labs
        </Badge>
      </div>
      
      <div className="relative bg-gradient-to-br from-muted/50 to-secondary/30 rounded-lg h-80 overflow-hidden">
        {/* World map placeholder */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M10,20 Q25,15 40,25 Q55,35 70,30 Q85,25 95,35 L95,80 Q80,85 65,75 Q50,65 35,70 Q20,75 5,80 Z"
              fill="currentColor"
              className="text-primary"
            />
          </svg>
        </div>
        
        {/* Lab pins */}
        {labs.map((lab) => (
          <div
            key={lab.id}
            className="absolute group cursor-pointer"
            style={{
              left: `${lab.coordinates.x}%`,
              top: `${lab.coordinates.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className={`w-4 h-4 rounded-full ${
              lab.status === 'active' ? 'bg-accent' : 'bg-energy'
            } border-2 border-background shadow-lg animate-pulse-grow`}>
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-card border rounded-lg p-3 shadow-lg min-w-48 z-10">
              <h4 className="font-semibold text-foreground">{lab.name}</h4>
              <p className="text-sm text-muted-foreground mb-2">{lab.location}</p>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {lab.members}
                </div>
                <div className="flex items-center gap-1">
                  <Sprout className="w-3 h-3" />
                  {lab.hectares}ha
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-accent"></div>
          <span className="text-muted-foreground">Active Labs</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-energy"></div>
          <span className="text-muted-foreground">Planning Phase</span>
        </div>
      </div>
    </Card>
  );
};