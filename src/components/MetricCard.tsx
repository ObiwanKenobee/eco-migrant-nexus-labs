import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  description: string;
  color?: "primary" | "accent" | "energy";
}

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  trend, 
  description,
  color = "primary" 
}: MetricCardProps) => {
  const colorClasses = {
    primary: "border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10",
    accent: "border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10",
    energy: "border-energy/20 bg-gradient-to-br from-energy/5 to-energy/10"
  };

  return (
    <Card className={`p-6 transition-all duration-300 hover:scale-105 ${colorClasses[color]}`}>
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="flex items-end gap-2">
          <p className="text-3xl font-bold text-foreground">{value}</p>
          <div className={`flex items-center gap-1 text-sm ${
            trend === 'up' ? 'text-accent' : 'text-destructive'
          }`}>
            {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {change}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};