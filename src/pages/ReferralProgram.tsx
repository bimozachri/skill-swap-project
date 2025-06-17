
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Gift, Star, Crown, Zap, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import InviteFriends from '../components/InviteFriends';
import ReferralCard from '../components/ReferralCard';

const ReferralProgram = () => {
  const navigate = useNavigate();
  const [showInviteModal, setShowInviteModal] = useState(false);

  const rewardTiers = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Bronze Member",
      requirement: "1-4 rujukan berhasil",
      rewards: ["100 poin per rujukan", "Badge Bronze", "Akses konten eksklusif"],
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Silver Member",
      requirement: "5-9 rujukan berhasil",
      rewards: ["150 poin per rujukan", "Badge Silver", "Premium 1 bulan gratis", "Prioritas customer service"],
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Gold Member",
      requirement: "10+ rujukan berhasil",
      rewards: ["200 poin per rujukan", "Badge Gold", "Premium 3 bulan gratis", "Fitur beta akses", "Sertifikat rujukan"],
      color: "from-yellow-400 to-yellow-600"
    }
  ];

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

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Program Rujukan SkillSwap
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Dapatkan reward menarik dengan mengundang teman bergabung di SkillSwap
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setShowInviteModal(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg px-8"
            >
              <Users className="w-5 h-5 mr-2" />
              Undang Teman Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-200 hover:bg-purple-50"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Bagikan Link Rujukan
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Referral Stats */}
          <div className="lg:col-span-1">
            <ReferralCard />
          </div>

          {/* How It Works */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Cara Kerja Program Rujukan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Undang Teman</h3>
                      <p className="text-gray-600">Kirim undangan via email atau bagikan link rujukan Anda ke teman-teman</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Teman Bergabung</h3>
                      <p className="text-gray-600">Ketika teman mendaftar menggunakan link rujukan Anda dan menyelesaikan profil</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Dapatkan Reward</h3>
                      <p className="text-gray-600">Anda dan teman sama-sama mendapat bonus poin dan benefit eksklusif</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reward Tiers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            Tingkatan Reward
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {rewardTiers.map((tier, index) => (
              <Card key={index} className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center text-white mb-4 mx-auto`}>
                    {tier.icon}
                  </div>
                  <CardTitle className="text-center text-xl">{tier.title}</CardTitle>
                  <p className="text-center text-sm text-gray-600">{tier.requirement}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tier.rewards.map((reward, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Gift className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{reward}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pertanyaan Sering Diajukan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Bagaimana cara melacak rujukan saya?</h3>
                <p className="text-gray-600">Anda dapat melihat statistik rujukan di dashboard atau halaman program rujukan ini.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Kapan saya mendapat reward?</h3>
                <p className="text-gray-600">Reward akan diberikan setelah teman yang dirujuk menyelesaikan pendaftaran dan verifikasi email.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Apakah ada batas rujukan?</h3>
                <p className="text-gray-600">Tidak ada batas! Semakin banyak teman yang Anda rujuk, semakin banyak reward yang didapat.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <InviteFriends onClose={() => setShowInviteModal(false)} />
        </div>
      )}
    </div>
  );
};

export default ReferralProgram;
