import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, MessageCircle, Share, ExternalLink } from "lucide-react";

const mediaItems = [
  {
    id: 1,
    type: "video",
    title: "Youth Climate Court: Bangladesh Flood Policy Hearing",
    platform: "TikTok",
    views: "2.3M",
    engagement: "89K",
    thumbnail: "🌊"
  },
  {
    id: 2,
    type: "post",
    title: "Mangrove restoration success: 500 seedlings planted",
    platform: "Threads",
    views: "456K",
    engagement: "23K",
    thumbnail: "🌱"
  },
  {
    id: 3,
    type: "radio",
    title: "EcoMigrant Labs on BBC World Service",
    platform: "BBC",
    views: "1.8M",
    engagement: "67K",
    thumbnail: "📻"
  },
  {
    id: 4,
    type: "testimony",
    title: "Maria's Story: From Climate Refugee to Lab Leader",
    platform: "YouTube",
    views: "890K",
    engagement: "45K",
    thumbnail: "🎬"
  }
];

export const MediaFeed = () => {
  return (
    <Card className="p-6 bg-gradient-to-br from-energy/5 to-accent/5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Media & Impact Stories</h3>
        <Badge variant="secondary">50M+ Annual Views</Badge>
      </div>
      
      <div className="space-y-4">
        {mediaItems.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="text-2xl bg-muted rounded-lg p-2 flex-shrink-0">
                {item.thumbnail}
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground truncate">{item.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">{item.platform}</Badge>
                  <span className="text-sm text-muted-foreground">{item.views} views</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 flex-shrink-0">
                {item.type === "video" && <Play className="w-4 h-4 text-primary" />}
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{item.engagement}</span>
                <Button size="sm" variant="ghost">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            "We are not the problem. We are the solution displaced."
          </p>
          <Button variant="outline" size="sm" className="gap-2">
            <Share className="w-4 h-4" />
            Share Campaign
          </Button>
        </div>
      </div>
    </Card>
  );
};