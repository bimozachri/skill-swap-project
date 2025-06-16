
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

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-blue-700">
              <Search className="w-6 h-6" />
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
                    className="w-full p-2 border border-gray-300 rounded-md"
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
                    className="w-full p-2 border border-gray-300 rounded-md"
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
                  className="w-full p-3 border border-gray-300 rounded-md resize-none"
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
                  className="w-full p-2 border border-gray-300 rounded-md"
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
                  className="w-full p-3 border border-gray-300 rounded-md resize-none"
                  rows={3}
                  placeholder="Apa yang ingin Anda capai setelah mempelajari keterampilan ini?"
                  value={formData.goals}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">Yang Akan Terjadi Selanjutnya:</h3>
                <ul className="text-sm text-blue-700 space-y-1">
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
                  className="flex-1"
                  onClick={() => navigate('/skill-exchange')}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
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
