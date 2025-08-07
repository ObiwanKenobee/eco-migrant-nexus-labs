import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface PillarCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  metrics: string;
  color: "rebuild" | "reclaim" | "reimagine" | "regenerate";
}

const colorClasses = {
  rebuild: "border-l-4 border-l-primary bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-activist",
  reclaim: "border-l-4 border-l-accent bg-gradient-to-br from-accent/5 to-accent/10 hover:shadow-energy",
  reimagine: "border-l-4 border-l-energy bg-gradient-to-br from-energy/5 to-energy/10 hover:shadow-energy",
  regenerate: "border-l-4 border-l-primary-vibrant bg-gradient-to-br from-primary-vibrant/5 to-primary-vibrant/10 hover:shadow-activist"
};

export const PillarCard = ({ title, description, icon, metrics, color }: PillarCardProps) => {
  return (
    <Card className={`p-6 transition-all duration-300 hover:scale-105 ${colorClasses[color]}`}>
      <div className="flex items-start gap-4">
        <div className="text-3xl">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
          <div className="text-sm font-medium text-primary">
            {metrics}
          </div>
        </div>
      </div>
    </Card>
  );
};