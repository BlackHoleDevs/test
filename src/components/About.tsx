import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-blue-900">About VideoAI</h1>
      <p className="text-xl mb-6 text-blue-700">
        VideoAI is a cutting-edge platform designed to revolutionize content creation and social media management. Our mission is to empower creators and businesses to produce high-quality, engaging video content effortlessly.
      </p>
      <p className="text-xl mb-6 text-blue-700">
        With our AI-powered tools, you can transform your ideas into captivating videos, complete with professional voice-overs, in just a few clicks. Our platform streamlines the entire process from creation to distribution, allowing you to reach your audience across multiple social media platforms simultaneously.
      </p>
      <p className="text-xl mb-6 text-blue-700">
        Whether you're a solo content creator, a social media manager, or part of a large marketing team, VideoAI provides the tools you need to scale your content production and maximize your online presence.
      </p>
      <div className="bg-blue-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Our Core Values</h2>
        <ul className="list-disc list-inside text-blue-700">
          <li>Innovation: Constantly pushing the boundaries of AI and video technology</li>
          <li>Simplicity: Making advanced technology accessible to everyone</li>
          <li>Quality: Delivering top-notch results that elevate your brand</li>
          <li>Efficiency: Saving you time and resources in content creation</li>
          <li>Growth: Helping you expand your reach and impact online</li>
        </ul>
      </div>
    </div>
  );
}

export default About;