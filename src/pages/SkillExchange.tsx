
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Plus, Users, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SkillCard from '../components/SkillCard';

const SkillExchange = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('available');
  const [searchQuery, setSearchQuery] = useState('');

  const skillsData = [
    {
      id: '1',
      title: 'Belajar Python untuk Pemula',
      category: 'Pemrograman',
      description: 'Dasar-dasar Python, struktur data, dan algoritma sederhana untuk pemula.',
      mentor: {
        name: 'Budi Santoso',
        studentsCount: 24
      },
      rating: 4.8,
      schedule: 'Sabtu & Minggu',
      flexibility: 'Fleksibel (Senin-Jumat)',
      tags: ['Python', 'Coding', 'Pemula'],
      level: 'Pemula'
    },
    {
      id: '2',
      title: 'UI/UX Design dengan Figma',
      category: 'Desain',
      description: 'Belajar dasar-dasar UI/UX design dan implementasinya menggunakan Figma.',
      mentor: {
        name: 'Siti Rahma',
        studentsCount: 32
      },
      rating: 4.9,
      schedule: 'Sabtu & Minggu',
      flexibility: 'Menengah',
      tags: ['UI/UX', 'Figma', 'Design'],
      level: 'Menengah'
    },
    {
      id: '3',
      title: 'Percakapan Bahasa Inggris Bisnis',
      category: 'Bahasa',
      description: 'Tingkatkan kemampuan bahasa Inggris Anda untuk konteks bisnis dan profesional.',
      mentor: {
        name: 'Dian Permata',
        studentsCount: 18
      },
      rating: 4.7,
      schedule: 'Selasa & Kamis (19:00-20:00)',
      flexibility: 'Menengah-Lanjut',
      tags: ['English', 'Business', 'Communication'],
      level: 'Menengah-Lanjut'
    },
    {
      id: '4',
      title: 'Belajar Gitar Akustik',
      category: 'Musik',
      description: 'Dari dasar hingga lagu-lagu populer, belajar gitar akustik dengan mudah.',
      mentor: {
        name: 'Andi Wijaya',
        studentsCount: 15
      },
      rating: 4.6,
      schedule: 'Fleksibel',
      flexibility: 'Pemula-Menengah',
      tags: ['Musik', 'Gitar', 'Instrumen'],
      level: 'Pemula-Menengah'
    },
    {
      id: '5',
      title: 'Fotografi Produk untuk E-commerce',
      category: 'Fotografi',
      description: 'Teknik fotografi produk yang menarik untuk meningkatkan penjualan online.',
      mentor: {
        name: 'Maya Putri',
        studentsCount: 27
      },
      rating: 4.9,
      schedule: 'Minggu (10:00-13:00)',
      flexibility: 'Semua Level',
      tags: ['Fotografi', 'E-commerce', 'Editing'],
      level: 'Semua Level'
    },
    {
      id: '6',
      title: 'Kalkulus untuk Mahasiswa Teknik',
      category: 'Akademik',
      description: 'Penjelasan konsep kalkulus dan aplikasinya di bidang teknik.',
      mentor: {
        name: 'Dr. Hadi Wijaya',
        studentsCount: 31
      },
      rating: 4.8,
      schedule: 'Rabu & Jumat (15:00-17:00)',
      flexibility: 'Menengah',
      tags: ['Matematika', 'Kalkulus', 'Teknik'],
      level: 'Menengah'
    }
  ];

  const filteredSkills = skillsData.filter(skill =>
    skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    skill.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/5b54b9bc-9177-48ec-9d85-67f3b98721b5.png" 
                alt="SkillSwap Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">SkillSwap</span>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => navigate('/')} className="hover:text-blue-200 transition-colors">Beranda</button>
              <button className="text-yellow-300 font-medium">Pertukaran Keterampilan</button>
              <button className="hover:text-blue-200 transition-colors">Forum</button>
              <button className="hover:text-blue-200 transition-colors">Komunitas</button>
            </nav>
            
            <Button 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg"
              onClick={() => navigate('/register-request')}
            >
              Tawarkan Keterampilan
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Cari keterampilan, topik, atau mentor..."
              className="pl-10 py-6 border-gray-200 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 border-gray-200 shadow-sm">
            <Filter className="w-4 h-4" />
            Kategori
          </Button>
          <Button 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white flex items-center gap-2 shadow-lg"
            onClick={() => navigate('/add-skill')}
          >
            <Plus className="w-4 h-4" />
            Tambah Keterampilan
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-8 border-b border-gray-200">
          <button
            className={`pb-2 px-1 ${activeTab === 'available' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            onClick={() => setActiveTab('available')}
          >
            Keterampilan Tersedia
          </button>
          <button
            className={`pb-2 px-1 ${activeTab === 'requested' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            onClick={() => setActiveTab('requested')}
          >
            Keterampilan Dicari
          </button>
          <button
            className={`pb-2 px-1 ${activeTab === 'forum' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            onClick={() => setActiveTab('forum')}
          >
            Forum Diskusi
          </button>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Keterampilan Tersedia</h2>
          <span className="text-gray-600">{filteredSkills.length} hasil ditemukan</span>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 text-center border border-gray-100">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Tidak menemukan keterampilan yang Anda cari?
          </h3>
          <p className="text-gray-600 mb-6">
            Daftarkan keterampilan yang ingin Anda pelajari dan biarkan komunitas kami membantu Anda.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 shadow-lg"
            onClick={() => navigate('/register-request')}
          >
            Daftarkan Permintaan →
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/5b54b9bc-9177-48ec-9d85-67f3b98721b5.png" 
                alt="SkillSwap Logo" 
                className="w-8 h-8"
              />
              <span className="text-lg font-bold">SkillSwap</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-200 transition-colors">Tentang</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Blog</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Pusat Bantuan</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Kebijakan Privasi</a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-300">
            <p>© 2025 SkillSwap. Hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkillExchange;
