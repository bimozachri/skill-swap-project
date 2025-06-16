
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Clock, Calendar, MessageCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ContactMentor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState('');

  // Mock data untuk mentor
  const mentorData = {
    name: 'Budi Santoso',
    title: 'Belajar Python untuk Pemula',
    category: 'Pemrograman',
    rating: 4.8,
    studentsCount: 24,
    description: 'Dasar-dasar Python, struktur data, dan algoritma sederhana untuk pemula.',
    schedule: 'Sabtu & Minggu',
    flexibility: 'Fleksibel (Senin-Jumat)',
    tags: ['Python', 'Coding', 'Pemula'],
    about: 'Saya adalah software engineer dengan 5 tahun pengalaman. Saya senang mengajar dan membantu pemula memulai perjalanan programming mereka.',
    experience: '5 tahun sebagai Software Engineer di berbagai startup dan perusahaan teknologi.',
    achievements: ['Mentor terbaik 2024', 'Telah mengajar 200+ siswa', 'Certified Python Developer']
  };

  const handleSendMessage = () => {
    // Logic untuk mengirim pesan
    console.log('Pesan dikirim:', message);
    alert('Pesan berhasil dikirim ke mentor!');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-blue-500"
              onClick={() => navigate('/skill-exchange')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/5b54b9bc-9177-48ec-9d85-67f3b98721b5.png" 
                alt="SkillSwap Logo" 
                className="w-8 h-8"
              />
              <span className="text-lg font-bold">SkillSwap</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mentor Profile */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">
                        {mentorData.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">{mentorData.name}</h1>
                      <p className="text-gray-600">{mentorData.experience}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{mentorData.rating}</span>
                        <span className="text-gray-500">({mentorData.studentsCount} ulasan)</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">
                    {mentorData.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h2 className="text-xl font-semibold text-blue-600 mb-2">
                  {mentorData.title}
                </h2>
                <p className="text-gray-600 mb-4">{mentorData.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {mentorData.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{mentorData.flexibility}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{mentorData.schedule}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tentang Mentor</h3>
                    <p className="text-gray-600">{mentorData.about}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pencapaian</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {mentorData.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Hubungi Mentor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan Anda
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md resize-none"
                    rows={6}
                    placeholder="Tulis pesan Anda untuk mentor..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                >
                  Kirim Pesan
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Mentor biasanya merespons dalam 24 jam
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Jadwal Tersedia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Sabtu</span>
                    <span className="text-green-600">Tersedia</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Minggu</span>
                    <span className="text-green-600">Tersedia</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Senin-Jumat</span>
                    <span className="text-gray-600">Fleksibel</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMentor;
