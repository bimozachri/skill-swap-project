
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Gift, Trophy, Share2 } from "lucide-react";

const ReferralCard = () => {
  const referralStats = {
    totalReferrals: 12,
    successfulReferrals: 8,
    bonusPoints: 800,
    currentStreak: 3
  };

  const copyReferralLink = () => {
    const referralLink = `https://skillswap.com/ref/user123`;
    navigator.clipboard.writeText(referralLink);
    // Toast notification would be shown here
    console.log('Referral link copied:', referralLink);
  };

  return (
    <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          <Trophy className="w-5 h-5 text-blue-600" />
          Statistik Rujukan Anda
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-white/50 rounded-lg">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {referralStats.totalReferrals}
            </div>
            <div className="text-sm text-gray-600">Total Undangan</div>
          </div>
          
          <div className="text-center p-3 bg-white/50 rounded-lg">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {referralStats.successfulReferrals}
            </div>
            <div className="text-sm text-gray-600">Bergabung</div>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-orange-500" />
            <span className="font-medium">Bonus Poin</span>
          </div>
          <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 border-0">
            {referralStats.bonusPoints} Poin
          </Badge>
        </div>

        <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-500" />
            <span className="font-medium">Streak Bulanan</span>
          </div>
          <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0">
            {referralStats.currentStreak} Bulan
          </Badge>
        </div>

        <Button
          onClick={copyReferralLink}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Salin Link Rujukan
        </Button>

        <div className="text-xs text-gray-500 text-center">
          Link rujukan: skillswap.com/ref/user123
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralCard;
