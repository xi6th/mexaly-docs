import { useState } from 'react';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: "⚡",
    title: "Increased Productivity",
    description: "Automate routine tasks to focus on strategic initiatives that drive growth."
  },
  {
    icon: "✅",
    title: "Enhanced Accuracy",
    description: "Minimize errors through consistent automated processes and validations."
  },
  {
    icon: "💰",
    title: "Cost Reduction",
    description: "Lower operational expenses by streamlining workflows and reducing waste."
  },
  {
    icon: "📈",
    title: "Improved Scalability",
    description: "Support business growth without proportional resource increases."
  },
  {
    icon: "🧠",
    title: "Data-Driven Decisions",
    description: "Access real-time insights for more informed strategic decision-making."
  },
  {
    icon: "😊",
    title: "Customer Satisfaction",
    description: "Deliver faster, more accurate service to increase customer loyalty."
  }
];

const Benefits = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-300 opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div 
            className="md:w-2/5 transition-all duration-700 transform translate-y-0 opacity-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Business Automation Matters
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              In today's competitive landscape, automation isn't just a luxury—it's essential for staying ahead. Invero helps you transform your operations while delivering substantial ROI.
            </p>
            
            <div className="p-6 backdrop-blur-lg bg-white bg-opacity-20 rounded-xl border border-white border-opacity-30 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">The Invero Advantage</h3>
                  <p className="text-gray-700">Our platform combines enterprise-grade automation with user-friendly interfaces to deliver immediate results without complex implementation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`backdrop-blur-lg bg-white bg-opacity-20 p-6 rounded-xl border border-white border-opacity-30 shadow-md transition-all duration-500 transform ${hoveredIndex === index ? 'scale-105 shadow-xl' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
                
                <div className={`w-full h-1 mt-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transform origin-left transition-transform duration-500 ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;