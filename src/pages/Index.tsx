
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
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SkillSwap</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#signup" className="text-gray-700 hover:text-blue-600 transition-colors">Sign Up</a>
          </nav>
          
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Learn New Skills with 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Mentors & Study Buddies!</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with experienced mentors and find the perfect study partners. SkillSwap helps students grow together through skill exchange, real projects, and gamified learning experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
              Join for Free
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 text-lg">
              Watch Demo
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SkillSwap?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover powerful features designed to accelerate your learning journey and connect you with the right people.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🔄</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Skill Exchange</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Trade skills with fellow students. Teach what you know, learn what you need.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 hover:border-purple-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎓</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Find a Mentor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Connect with experienced mentors in various fields to guide your learning path.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 hover:border-green-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🚀</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Real Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Practice skills with hands-on projects that build your portfolio and experience.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 hover:border-orange-300 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🔥</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Gamified Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Stay motivated with challenges, rewards, and progress tracking that makes learning fun.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600">Real success stories from our community</p>
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
                    <p className="text-sm text-gray-600">Computer Science Student</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"SkillSwap helped me find an amazing mentor who guided me through my first coding project. The gamified challenges kept me motivated throughout!"</p>
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
                    <p className="text-sm text-gray-600">Business Student</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"I traded my marketing skills for coding lessons. Now I can build my own websites! The skill exchange feature is brilliant."</p>
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
                    <p className="text-sm text-gray-600">Design Student</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"The real projects feature helped me build an impressive portfolio. I landed my dream internship thanks to SkillSwap!"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Start free and upgrade as you grow</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-blue-300 transition-all duration-300 relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Free Plan</CardTitle>
                <CardDescription className="text-gray-600">Perfect for getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">✓ Basic community access</li>
                  <li className="flex items-center">✓ Limited skill exchanges</li>
                  <li className="flex items-center">✓ Basic profile features</li>
                  <li className="flex items-center">✓ Community forums</li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Get Started Free</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 relative scale-105 shadow-lg">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Pro Plan</CardTitle>
                <CardDescription className="text-gray-600">For serious learners</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$19</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">✓ Premium mentor access</li>
                  <li className="flex items-center">✓ Unlimited skill exchanges</li>
                  <li className="flex items-center">✓ Real project assignments</li>
                  <li className="flex items-center">✓ Gamification features</li>
                  <li className="flex items-center">✓ Priority support</li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Start Pro Trial
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-purple-300 transition-all duration-300 relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Team Plan</CardTitle>
                <CardDescription className="text-gray-600">For study groups & universities</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$49</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">✓ Everything in Pro</li>
                  <li className="flex items-center">✓ Team management tools</li>
                  <li className="flex items-center">✓ Advanced analytics</li>
                  <li className="flex items-center">✓ Custom integrations</li>
                  <li className="flex items-center">✓ Dedicated support</li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="signup" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of students who are already accelerating their skills with SkillSwap. Start your journey today!
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold">
            Start Learning Today!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <span className="text-xl font-bold">SkillSwap</span>
              </div>
              <p className="text-gray-400">Connecting students for collaborative learning and skill development.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
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
            <p>&copy; 2024 SkillSwap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
