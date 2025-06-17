
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Users, Gift, X, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InviteFriendsProps {
  onClose?: () => void;
  skillTitle?: string;
}

const InviteFriends: React.FC<InviteFriendsProps> = ({ onClose, skillTitle }) => {
  const { toast } = useToast();
  const [emails, setEmails] = useState<string[]>(['']);
  const [message, setMessage] = useState(
    skillTitle 
      ? `Halo! Saya menemukan keterampilan "${skillTitle}" yang menarik di SkillSwap. Yuk bergabung dan belajar bersama!`
      : 'Halo! Saya menggunakan SkillSwap untuk bertukar keterampilan. Platform ini sangat membantu untuk belajar hal baru. Yuk gabung!'
  );

  const addEmailField = () => {
    setEmails([...emails, '']);
  };

  const removeEmailField = (index: number) => {
    const newEmails = emails.filter((_, i) => i !== index);
    setEmails(newEmails.length > 0 ? newEmails : ['']);
  };

  const updateEmail = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleSendInvitations = () => {
    const validEmails = emails.filter(email => email.trim() && email.includes('@'));
    
    if (validEmails.length === 0) {
      toast({
        title: "Error",
        description: "Masukkan minimal satu email yang valid",
        variant: "destructive"
      });
      return;
    }

    // Simulasi pengiriman email
    console.log('Sending invitations to:', validEmails);
    console.log('Message:', message);
    
    toast({
      title: "Undangan Terkirim!",
      description: `${validEmails.length} undangan berhasil dikirim ke teman-teman Anda`,
    });

    // Reset form
    setEmails(['']);
    setMessage(skillTitle 
      ? `Halo! Saya menemukan keterampilan "${skillTitle}" yang menarik di SkillSwap. Yuk bergabung dan belajar bersama!`
      : 'Halo! Saya menggunakan SkillSwap untuk bertukar keterampilan. Platform ini sangat membantu untuk belajar hal baru. Yuk gabung!'
    );

    if (onClose) onClose();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2 text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <Users className="w-6 h-6 text-blue-600" />
              Undang Teman
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Dapatkan reward ketika teman Anda bergabung dengan SkillSwap!
            </p>
          </div>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
        
        <div className="flex gap-2 mt-4">
          <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-0">
            <Gift className="w-3 h-3 mr-1" />
            Bonus Poin +100
          </Badge>
          <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-0">
            Akses Premium 1 Bulan
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Email Teman-teman Anda
          </label>
          <div className="space-y-2">
            {emails.map((email, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="contoh@email.com"
                  value={email}
                  onChange={(e) => updateEmail(index, e.target.value)}
                  className="flex-1 border-gray-200 focus:ring-2 focus:ring-blue-500"
                />
                {emails.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeEmailField(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addEmailField}
            className="mt-2 border-dashed"
          >
            <Plus className="w-4 h-4 mr-1" />
            Tambah Email
          </Button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pesan Undangan
          </label>
          <textarea
            className="w-full p-3 border border-gray-200 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis pesan personal untuk teman-teman Anda..."
          />
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">Keuntungan Mengundang Teman:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Dapatkan 100 poin bonus untuk setiap teman yang bergabung</li>
            <li>• Akses premium gratis 1 bulan jika 5 teman bergabung</li>
            <li>• Bangun komunitas belajar yang lebih kuat</li>
          </ul>
        </div>

        <div className="flex gap-3">
          {onClose && (
            <Button
              variant="outline"
              className="flex-1 border-gray-200"
              onClick={onClose}
            >
              Batal
            </Button>
          )}
          <Button
            onClick={handleSendInvitations}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
          >
            <Mail className="w-4 h-4 mr-2" />
            Kirim Undangan
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InviteFriends;
