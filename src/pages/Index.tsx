import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PillarCard } from "@/components/PillarCard";
import { MetricCard } from "@/components/MetricCard";
import { LabMap } from "@/components/LabMap";
import { MediaFeed } from "@/components/MediaFeed";
import { 
  Sprout, 
  Scale, 
  Palette, 
  Zap, 
  Users, 
  Globe,
  TrendingUp,
  Heart,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/ecomigrant-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-earth opacity-90" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <Badge className="mb-6 text-sm px-4 py-2 bg-accent/10 text-accent border-accent/20">
              People Without Borders • Planet Without Borders
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              EcoMigrant Labs
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Empowering youth and climate migrants to co-create local labs that restore ecosystems, 
              redesign migration policy, and generate sustainable livelihoods.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-energy">
                Start a Lab <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                View Impact Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <MetricCard
              title="Labs Worldwide"
              value="24"
              change="+8 this month"
              trend="up"
              description="Active restoration hubs"
              color="primary"
            />
            <MetricCard
              title="Hectares Restored"
              value="156"
              change="+23 this quarter"
              trend="up"
              description="Ecosystem recovery area"
              color="accent"
            />
            <MetricCard
              title="Youth & Migrants"
              value="1,247"
              change="+156 this month"
              trend="up"
              description="Community members"
              color="energy"
            />
            <MetricCard
              title="Media Reach"
              value="12.4M"
              change="+2.1M this month"
              trend="up"
              description="Annual social impact"
              color="primary"
            />
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Four Pillars of Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach combines ecosystem restoration, policy innovation, 
              creative storytelling, and sustainable economics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PillarCard
              title="REBUILD"
              description="Restore degraded ecosystems through mangrove replanting, forest edge recovery, and floodplain rehabilitation using seed banks, reforestation drones, and soil carbon technology."
              icon={<Sprout className="w-8 h-8 text-primary" />}
              metrics="156 hectares restored • 12 active sites"
              color="rebuild"
            />
            
            <PillarCard
              title="RECLAIM"
              description="Host Civic Climate Courts where youth and migrants propose new migration and climate laws, developing mock legal frameworks to present to local and global institutions."
              icon={<Scale className="w-8 h-8 text-accent" />}
              metrics="8 policy proposals • 3 local ordinances"
              color="reclaim"
            />
            
            <PillarCard
              title="REIMAGINE"
              description="Create art and technology labs featuring AR/VR climate migration storytelling, digital murals, mobile apps, and serious games that shift public narrative."
              icon={<Palette className="w-8 h-8 text-energy" />}
              metrics="15 digital projects • 12.4M reach"
              color="reimagine"
            />
            
            <PillarCard
              title="REGENERATE"
              description="Build sustainable cooperatives in agroforestry, solar-powered microgrids, and eco-tourism services that create lasting employment for youth and migrants."
              icon={<Zap className="w-8 h-8 text-primary-vibrant" />}
              metrics="67 jobs created • 12 co-ops launched"
              color="regenerate"
            />
          </div>
        </div>
      </section>

      {/* Lab Tracker & Media */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LabMap />
            <MediaFeed />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-hope">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            "We are not the problem. We are the solution displaced."
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join the movement. Start a lab. Change the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-activist">
              <Users className="mr-2 w-5 h-5" />
              Become a Volunteer
            </Button>
            <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-activist">
              <Globe className="mr-2 w-5 h-5" />
              Start Your Lab
            </Button>
            <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-activist">
              <Heart className="mr-2 w-5 h-5" />
              Support the Mission
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
