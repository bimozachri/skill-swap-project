
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
      'Pemrograman': 'bg-blue-100 text-blue-800',
      'Desain': 'bg-purple-100 text-purple-800',
      'Bahasa': 'bg-green-100 text-green-800',
      'Musik': 'bg-yellow-100 text-yellow-800',
      'Fotografi': 'bg-pink-100 text-pink-800',
      'Akademik': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge className={getCategoryColor(category)}>
            {category}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <CardTitle className="text-lg font-bold text-blue-600 hover:text-blue-800 cursor-pointer">
          {title}
        </CardTitle>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium">{mentor.name.charAt(0)}</span>
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
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
