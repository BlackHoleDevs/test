import React from 'react';
import { Video, Mic, Share2, Calendar, Zap, Globe, ChevronRight } from 'lucide-react';

const features = [
  { icon: Video, title: 'AI-Powered Video Creation', description: 'Transform your text into engaging videos effortlessly' },
  { icon: Mic, title: 'Professional Voice-Over', description: 'Add high-quality voice-overs to your videos with ease' },
  { icon: Share2, title: 'Multi-Platform Sharing', description: 'Post to all major social media platforms in one click' },
  { icon: Calendar, title: 'Smart Scheduling', description: 'Plan and schedule your posts for optimal engagement' },
  { icon: Zap, title: 'Bulk Creation & Posting', description: 'Save time with our powerful bulk creation and posting tools' },
  { icon: Globe, title: 'Global Reach', description: 'Expand your audience across all social media channels' },
];

const testimonials = [
  { name: 'Sarah Johnson', role: 'Content Creator', quote: 'This platform has tripled my content output and engagement!' },
  { name: 'Mike Chen', role: 'Social Media Manager', quote: 'The bulk posting feature is a game-changer for my agency.' },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
        <div className="transition-all duration-1000 transform translate-y-0 opacity-100">
          <h1 className="text-6xl font-bold mb-6 text-blue-900 leading-tight">
            Create<span className="text-teal-500">.</span> Schedule<span className="text-teal-500">.</span> Dominate<span className="text-teal-500">.</span>
          </h1>
          <p className="text-2xl mb-10 text-blue-700">Transform your content into viral videos and conquer social media</p>
          <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-teal-500 hover:to-blue-600 transition duration-300 shadow-lg transform hover:scale-105">
            Start Creating Now <ChevronRight className="inline-block ml-2" />
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-[-1] opacity-50">
          <div className="absolute w-64 h-64 rounded-full bg-teal-300 top-10 left-10 animate-pulse"></div>
          <div className="absolute w-48 h-48 rounded-full bg-blue-300 bottom-10 right-10 animate-pulse delay-1000"></div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-blue-900">Unleash Your Content Potential</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <feature.icon className="w-16 h-16 mx-auto mb-6 text-teal-500" />
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">{feature.title}</h3>
                <p className="text-blue-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
            {[
              { step: 1, text: 'Create your text' },
              { step: 2, text: 'Generate video with AI' },
              { step: 3, text: 'Schedule and post' },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition duration-300 transform group-hover:scale-110">
                  <span className="text-3xl font-bold">{item.step}</span>
                </div>
                <p className="text-xl">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-blue-900">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <p className="text-blue-700 mb-6 text-lg italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-blue-900">{testimonial.name}</p>
                    <p className="text-teal-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Revolutionize Your Content Strategy?</h2>
          <p className="text-xl mb-10">Join thousands of content creators and social media managers who are scaling their impact</p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-blue-50 transition duration-300 shadow-lg transform hover:scale-105">
            Get Started for Free <ChevronRight className="inline-block ml-2" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;