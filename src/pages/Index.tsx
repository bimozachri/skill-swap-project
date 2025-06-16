
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Instagram, Linkedin, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/5b54b9bc-9177-48ec-9d85-67f3b98721b5.png" 
              alt="SkillSwap Logo" 
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-gray-900">SkillSwap</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Fitur</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimoni</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Harga</a>
            <a href="#signup" className="text-gray-700 hover:text-blue-600 transition-colors">Daftar</a>
          </nav>
          
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            Mulai Sekarang
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Pelajari Keterampilan Baru dengan 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Mentor & Teman Belajar!</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Terhubung dengan mentor berpengalaman dan temukan teman belajar yang sempurna. SkillSwap membantu mahasiswa berkembang bersama melalui pertukaran keterampilan, proyek nyata, dan pengalaman belajar yang gamifikasi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
              Bergabung Gratis
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 text-lg">
              Tonton Demo
            </Button>
          </div>
        </div>
        
        <div className="mt-16">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Students collaborating" 
            className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih SkillSwap?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan fitur-fitur canggih yang dirancang untuk mempercepat perjalanan belajar Anda dan menghubungkan Anda dengan orang-orang yang tepat.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🔄</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Pertukaran Keterampilan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Tukar keterampilan dengan sesama mahasiswa. Ajarkan yang Anda kuasai, pelajari yang Anda butuhkan.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 hover:border-purple-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎓</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Temukan Mentor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Terhubung dengan mentor berpengalaman di berbagai bidang untuk membimbing jalur belajar Anda.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 hover:border-green-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🚀</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Proyek Nyata</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Praktikkan keterampilan dengan proyek langsung yang membangun portofolio dan pengalaman Anda.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 hover:border-orange-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🔥</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Belajar Gamifikasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Tetap termotivasi dengan tantangan, hadiah, dan pelacakan kemajuan yang membuat belajar menyenangkan.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apa Kata Mahasiswa</h2>
            <p className="text-xl text-gray-600">Kisah sukses nyata dari komunitas kami</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Sarah Chen" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                    <p className="text-sm text-gray-600">Mahasiswa Ilmu Komputer</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"SkillSwap membantu saya menemukan mentor luar biasa yang membimbing saya melalui proyek coding pertama. Tantangan gamifikasi membuat saya tetap termotivasi sepanjang waktu!"</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Marcus Johnson" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Marcus Johnson</h4>
                    <p className="text-sm text-gray-600">Mahasiswa Bisnis</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"Saya menukar keterampilan marketing dengan pelajaran coding. Sekarang saya bisa membuat website sendiri! Fitur pertukaran keterampilan benar-benar brilian."</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Emma Rodriguez" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Emma Rodriguez</h4>
                    <p className="text-sm text-gray-600">Mahasiswa Desain</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"Fitur proyek nyata membantu saya membangun portofolio yang mengesankan. Saya mendapatkan magang impian berkat SkillSwap!"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pilih Paket Anda</h2>
            <p className="text-xl text-gray-600">Mulai gratis dan upgrade seiring berkembang</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-blue-300 transition-all duration-300 relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Paket Gratis</CardTitle>
                <CardDescription className="text-gray-600">Sempurna untuk memulai</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">Rp0</span>
                  <span className="text-gray-600">/bulan</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">✓ Akses komunitas dasar</li>
                  <li className="flex items-center">✓ Pertukaran keterampilan terbatas</li>
                  <li className="flex items-center">✓ Fitur profil dasar</li>
                  <li className="flex items-center">✓ Forum komunitas</li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Mulai Gratis</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 relative scale-105 shadow-lg">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Paling Populer
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Paket Pro</CardTitle>
                <CardDescription className="text-gray-600">Untuk pelajar serius</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">Rp299</span>
                  <span className="text-gray-600">/bulan</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">✓ Akses mentor premium</li>
                  <li className="flex items-center">✓ Pertukaran keterampilan tak terbatas</li>
                  <li className="flex items-center">✓ Tugas proyek nyata</li>
                  <li className="flex items-center">✓ Fitur gamifikasi</li>
                  <li className="flex items-center">✓ Dukungan prioritas</li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Mulai Uji Coba Pro
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-purple-300 transition-all duration-300 relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Paket Tim</CardTitle>
                <CardDescription className="text-gray-600">Untuk kelompok belajar & universitas</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">Rp799</span>
                  <span className="text-gray-600">/bulan</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">✓ Semua fitur Pro</li>
                  <li className="flex items-center">✓ Alat manajemen tim</li>
                  <li className="flex items-center">✓ Analitik lanjutan</li>
                  <li className="flex items-center">✓ Integrasi kustom</li>
                  <li className="flex items-center">✓ Dukungan khusus</li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Hubungi Penjualan</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="signup" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Mengubah Cara Belajar Anda?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Bergabunglah dengan ribuan mahasiswa yang sudah mempercepat keterampilan mereka dengan SkillSwap. Mulai perjalanan Anda hari ini!
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold">
            Mulai Belajar Hari Ini!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/5b54b9bc-9177-48ec-9d85-67f3b98721b5.png" 
                  alt="SkillSwap Logo" 
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold">SkillSwap</span>
              </div>
              <p className="text-gray-400">Menghubungkan mahasiswa untuk pembelajaran kolaboratif dan pengembangan keterampilan.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Dukungan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Pusat Bantuan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Syarat Layanan</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SkillSwap. Hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
