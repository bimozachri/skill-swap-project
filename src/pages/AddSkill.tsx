import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddSkill = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    level: '',
    schedule: '',
    tags: '',
    requirements: ''
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Data keterampilan:', formData);
    alert('Keterampilan berhasil ditambahkan!');
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
              <Plus className="w-6 h-6 text-blue-600" />
              Tambah Keterampilan Baru
            </CardTitle>
            <p className="text-gray-600">
              Bagikan keterampilan Anda dengan komunitas dan bantu sesama belajar!
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Judul Keterampilan *
                </label>
                <Input
                  name="title"
                  placeholder="Contoh: Belajar React untuk Pemula"
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
                    Level *
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
                  Deskripsi *
                </label>
                <textarea
                  name="description"
                  className="w-full p-3 border border-gray-200 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Jelaskan apa yang akan dipelajari dan metode pengajaran Anda..."
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jadwal Tersedia *
                </label>
                <Input
                  name="schedule"
                  placeholder="Contoh: Sabtu & Minggu, 10:00-12:00"
                  value={formData.schedule}
                  onChange={handleInputChange}
                  className="border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (pisahkan dengan koma)
                </label>
                <Input
                  name="tags"
                  placeholder="Contoh: React, JavaScript, Frontend"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Persyaratan (opsional)
                </label>
                <textarea
                  name="requirements"
                  className="w-full p-3 border border-gray-200 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Apa yang perlu disiapkan peserta sebelum belajar..."
                  value={formData.requirements}
                  onChange={handleInputChange}
                />
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
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                >
                  Tambah Keterampilan
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddSkill;
