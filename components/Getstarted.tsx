// components/GetStartedCTA.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronRight, Calendar } from 'lucide-react';

const GetStartedCTA: React.FC = () => {
  // List of benefits to display
  const benefits = [
    "Automate repetitive workflows",
    "Reduce operational costs by 35%",
    "Full onboarding support included"
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-indigo-300/30 blur-3xl"></div>
      </div>
      
      <div className="relative flex flex-col lg:flex-row">
        {/* Left content section */}
        <div className="lg:w-3/5 p-8 md:p-12 lg:p-16">
          <div className="inline-block px-3 py-1 bg-blue-500/30 text-blue-50 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-400/20">
            Limited time offer
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Transform Your Business Operations Today
          </h2>
          
          <p className="text-blue-100 text-lg mb-8 max-w-lg">
            Join 5,000+ businesses that are streamlining operations, reducing costs, and scaling efficiently with Invero's intelligent automation platform.
          </p>
          
          {/* Benefits list */}
          <div className="mb-8">
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-blue-50">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-200 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link 
              href="/signup" 
              className="group bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/demo" 
              className="group bg-blue-700/30 border border-blue-400/30 backdrop-blur-sm text-white hover:bg-blue-700/50 px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Demo
              <ChevronRight className="h-5 w-5 ml-1 opacity-70 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col space-y-4">
            <p className="text-blue-200 text-sm flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-blue-200" />
              No credit card required. 14-day free trial.
            </p>
            
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-blue-600 overflow-hidden">
                    <img 
                      src={`/api/placeholder/100/100`} 
                      alt="Customer avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-blue-100">
                <span className="font-medium">500+</span> customers joined this month
              </div>
            </div>
          </div>
        </div>
        
        {/* Right image section with enhanced visuals */}
        <div className="hidden lg:block lg:w-2/5 relative">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 via-blue-700/40 to-transparent z-10"></div>
          
          {/* Main image */}
          <img 
            src="/api/placeholder/600/800" 
            alt="Invero Dashboard Preview" 
            className="w-full h-full object-cover"
          />
          
          {/* Floating UI elements for visual interest */}
          <div className="absolute top-1/4 right-8 bg-white/95 rounded-lg shadow-xl p-3 z-20 transform rotate-3 w-40">
            <div className="h-2 w-16 bg-blue-500 rounded mb-2"></div>
            <div className="h-2 w-12 bg-gray-200 rounded mb-4"></div>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded bg-blue-100"></div>
              <div className="ml-2">
                <div className="h-2 w-12 bg-gray-400 rounded"></div>
                <div className="h-2 w-8 bg-gray-300 rounded mt-1"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 right-12 bg-blue-800/90 backdrop-blur-md rounded-lg shadow-xl p-4 z-20 transform -rotate-2 w-48 border border-blue-400/20">
            <div className="flex justify-between items-center mb-3">
              <div className="h-3 w-20 bg-blue-300/50 rounded"></div>
              <div className="h-6 w-6 rounded-full bg-blue-400/50"></div>
            </div>
            <div className="h-2 w-full bg-blue-500/40 rounded mb-3"></div>
            <div className="h-2 w-3/4 bg-blue-500/40 rounded mb-5"></div>
            <div className="flex justify-between">
              <div className="h-6 w-16 rounded bg-blue-500/60"></div>
              <div className="h-6 w-6 rounded-full bg-blue-400/50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedCTA;