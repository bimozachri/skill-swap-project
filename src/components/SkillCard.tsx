
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SkillCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  mentor: {
    name: string;
    studentsCount: number;
  };
  rating: number;
  schedule: string;
  flexibility: string;
  tags: string[];
  level: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  id,
  title,
  category,
  description,
  mentor,
  rating,
  schedule,
  flexibility,
  tags,
  level
}) => {
  const navigate = useNavigate();

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Pemrograman': 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800',
      'Desain': 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800',
      'Bahasa': 'bg-gradient-to-r from-green-100 to-green-200 text-green-800',
      'Musik': 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800',
      'Fotografi': 'bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800',
      'Akademik': 'bg-gradient-to-r from-red-100 to-red-200 text-red-800'
    };
    return colors[category] || 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800';
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge className={getCategoryColor(category) + ' border-0'}>
            {category}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <CardTitle className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 cursor-pointer">
          {title}
        </CardTitle>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{mentor.name.charAt(0)}</span>
            </div>
            <div>
              <p className="font-medium">{mentor.name}</p>
              <p className="text-xs">{mentor.studentsCount} ulasan</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{flexibility}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{schedule}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs border-gray-200">
                {tag}
              </Badge>
            ))}
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
            onClick={() => navigate(`/contact-mentor/${id}`)}
          >
            Hubungi Mentor
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
