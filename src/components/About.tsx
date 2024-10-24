import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-20 bg-gray-50">
      <h1 className="text-5xl font-extrabold mb-12 text-blue-900 text-center">About VideoAI</h1>

      <div className="flex flex-col lg:flex-row lg:items-center mb-12">
        <img
          src="https://example.com/image.jpg"
          alt="AI Illustration"
          className="w-full lg:w-1/2 rounded-lg shadow-lg mb-8 lg:mb-0 lg:mr-8"
        />
        <div className="lg:w-1/2">
          <p className="text-2xl mb-6 text-blue-700">
            VideoAI is a cutting-edge platform designed to revolutionize content creation and social media management.
            Our mission is to empower creators and businesses to produce high-quality, engaging video content effortlessly.
          </p>
          <p className="text-2xl mb-6 text-blue-700">
            With our AI-powered tools, you can transform your ideas into captivating videos, complete with professional voice-overs,
            in just a few clicks. Our platform streamlines the entire process from creation to distribution,
            allowing you to reach your audience across multiple social media platforms simultaneously.
          </p>
          <p className="text-2xl mb-6 text-blue-700">
            Whether you're a solo content creator, a social media manager, or part of a large marketing team,
            VideoAI provides the tools you need to scale your content production and maximize your online presence.
          </p>
        </div>
      </div>

      <div className="bg-blue-100 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-900">Our Core Values</h2>
        <ul className="list-disc list-inside text-blue-700 space-y-4">
          <li>Innovation: Constantly pushing the boundaries of AI and video technology</li>
          <li>Simplicity: Making advanced technology accessible to everyone</li>
          <li>Quality: Delivering top-notch results that elevate your brand</li>
          <li>Efficiency: Saving you time and resources in content creation</li>
          <li>Growth: Helping you expand your reach and impact online</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">Why Choose VideoAI?</h2>
        <p className="text-xl mb-6 text-blue-700">
          Our AI tools are designed to adapt to your specific needs, whether you're creating short social media clips,
          full-length presentations, or promotional videos. We offer a flexible and intuitive interface, allowing anyone to produce
          professional-grade content without needing a technical background.
        </p>
        <a href="/signup" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 transition duration-300">
          Get Started Now
        </a>
      </div>
    </div>
  );
}

export default About;
