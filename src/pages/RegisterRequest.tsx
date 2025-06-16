import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RegisterRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    level: '',
    budget: '',
    timeline: '',
    learningStyle: '',
    goals: ''
  });

  const categories = [
    'Pemrograman',
    'Desain',
    'Bahasa',
    'Musik',
    'Fotografi',
    'Akademik',
    'Bisnis',
    'Olahraga',
    'Kuliner',
    'Lainnya'
  ];

  const levels = [
    'Pemula',
    'Menengah',
    'Lanjut',
    'Semua Level'
  ];

  const learningStyles = [
    'Visual (gambar, diagram)',
    'Auditori (mendengar, diskusi)',
    'Kinestetik (praktik langsung)',
    'Campuran'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Data permintaan:', formData);
    alert('Permintaan berhasil didaftarkan! Kami akan mencarikan mentor yang sesuai.');
    navigate('/skill-exchange');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/20"
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

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <Search className="w-6 h-6 text-blue-600" />
              Daftarkan Permintaan Belajar
            </CardTitle>
            <p className="text-gray-600">
              Beritahu kami keterampilan apa yang ingin Anda pelajari, dan kami akan mencarikan mentor yang tepat!
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Keterampilan yang Ingin Dipelajari *
                </label>
                <Input
                  name="title"
                  placeholder="Contoh: Belajar Fotografi Portrait"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategori *
                  </label>
                  <select
                    name="category"
                    className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Pilih Kategori</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Level Saat Ini *
                  </label>
                  <select
                    name="level"
                    className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.level}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Pilih Level</option>
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi Detail *
                </label>
                <textarea
                  name="description"
                  className="w-full p-3 border border-gray-200 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Jelaskan apa yang ingin Anda pelajari, tingkat kemampuan saat ini, dan harapan Anda..."
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget (Opsional)
                  </label>
                  <Input
                    name="budget"
                    placeholder="Contoh: Rp 200.000/bulan"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Waktu *
                  </label>
                  <Input
                    name="timeline"
                    placeholder="Contoh: 3 bulan"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gaya Belajar Preferensi *
                </label>
                <select
                  name="learningStyle"
                  className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.learningStyle}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Pilih Gaya Belajar</option>
                  {learningStyles.map((style) => (
                    <option key={style} value={style}>
                      {style}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tujuan Belajar *
                </label>
                <textarea
                  name="goals"
                  className="w-full p-3 border border-gray-200 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Apa yang ingin Anda capai setelah mempelajari keterampilan ini?"
                  value={formData.goals}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Yang Akan Terjadi Selanjutnya:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Kami akan mencarikan mentor yang sesuai dengan kebutuhan Anda</li>
                  <li>• Mentor yang tertarik akan menghubungi Anda dalam 1-3 hari</li>
                  <li>• Anda dapat memilih mentor yang paling cocok</li>
                  <li>• Mulai pembelajaran sesuai jadwal yang disepakati</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-gray-200"
                  onClick={() => navigate('/skill-exchange')}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg"
                >
                  Daftarkan Permintaan
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterRequest;
