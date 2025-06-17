
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Gift, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GrowthHackingWidgetProps {
  context?: 'skill-completed' | 'profile' | 'sidebar' | 'after-contact';
  skillTitle?: string;
}

const GrowthHackingWidget: React.FC<GrowthHackingWidgetProps> = ({ 
  context = 'sidebar', 
  skillTitle 
}) => {
  const navigate = useNavigate();

  const getContextualContent = () => {
    switch (context) {
      case 'skill-completed':
        return {
          title: "Bagikan Pencapaian Anda!",
          description: `Anda baru saja menyelesaikan "${skillTitle}". Ajak teman untuk belajar hal yang sama!`,
          buttonText: "Undang Teman Belajar",
          icon: <Star className="w-5 h-5" />
        };
      case 'after-contact':
        return {
          title: "Teman Anda Mungkin Tertarik!",
          description: `Skill "${skillTitle}" ini menarik. Bagikan ke teman yang mungkin membutuhkan.`,
          buttonText: "Bagikan ke Teman",
          icon: <Users className="w-5 h-5" />
        };
      case 'profile':
        return {
          title: "Undang Teman, Dapatkan Bonus!",
          description: "Dapatkan 100 poin untuk setiap teman yang bergabung melalui rujukan Anda.",
          buttonText: "Mulai Mengundang",
          icon: <Gift className="w-5 h-5" />
        };
      default:
        return {
          title: "Program Rujukan",
          description: "Undang teman dan dapatkan reward menarik!",
          buttonText: "Lihat Program",
          icon: <Users className="w-5 h-5" />
        };
    }
  };

  const content = getContextualContent();

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-xl transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
            {content.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 mb-1">{content.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{content.description}</p>
            <Button
              size="sm"
              onClick={() => navigate('/referral-program')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs px-3 py-1"
            >
              {content.buttonText}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GrowthHackingWidget;
