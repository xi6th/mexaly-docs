// components/FAQSection.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';

// FAQ data type
type FAQ = {
  question: string;
  answer: string;
};

// Sample FAQ data
const faqs: FAQ[] = [
  {
    question: "How long does implementation typically take?",
    answer: "Most customers are up and running within 2-4 weeks. Our implementation team works closely with you to ensure a smooth transition and minimal disruption to your operations."
  },
  {
    question: "Can Invero integrate with our existing systems?",
    answer: "Yes! Invero is designed to integrate seamlessly with most major ERP, CRM, and other business systems. Our extensive API and pre-built connectors make integration straightforward."
  },
  {
    question: "Is Invero suitable for small businesses?",
    answer: "Absolutely. We offer scalable solutions that grow with your business. Our Starter plan is specifically designed for small businesses looking to begin their automation journey."
  },
  {
    question: "What kind of support is included?",
    answer: "All plans include access to our knowledge base and email support. Professional and Enterprise plans include priority support with faster response times. Enterprise customers receive dedicated support."
  }
];

const FAQItem: React.FC<{ faq: FAQ; isOpen: boolean; toggleOpen: () => void }> = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
      <button 
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-lg text-gray-900 flex items-center">
          <HelpCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
          {faq.question}
        </span>
        {isOpen ? 
          <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" /> : 
          <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
        }
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="p-5 bg-gray-50 border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Support</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about Invero's implementation, integration, and support.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              toggleOpen={() => toggleFAQ(index)} 
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/faqs" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition duration-150"
            >
              View all FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
            >
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;