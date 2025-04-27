// components/Pricing.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const tiers: PricingTier[] = [
    {
      name: "Starter",
      price: isAnnual ? "$249" : "$299",
      description: "Perfect for small businesses just getting started with automation.",
      features: [
        "Core inventory management",
        "Basic shipment tracking",
        "5 user accounts",
        "Email support",
        "Basic reporting",
        "1 integration"
      ],
      cta: "Start with Starter"
    },
    {
      name: "Professional",
      price: isAnnual ? "$499" : "$599",
      description: "Ideal for growing businesses with more complex operational needs.",
      features: [
        "Advanced inventory optimization",
        "Real-time shipment monitoring",
        "20 user accounts",
        "Priority support",
        "Advanced analytics & reporting",
        "Up to 5 integrations",
        "API access"
      ],
      cta: "Choose Professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations requiring comprehensive automation solutions.",
      features: [
        "Full supply chain automation",
        "Custom workflow automation",
        "Unlimited user accounts",
        "24/7 dedicated support",
        "Custom reporting & dashboards",
        "Unlimited integrations",
        "Advanced API access",
        "Dedicated account manager"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 mb-8">Choose the plan that works best for your business needs.</p>
          
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle annual billing</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
            <span className={`ml-3 font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual <span className="text-green-600 text-sm">(Save 20%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl overflow-hidden border ${tier.popular ? 'border-blue-600 shadow-xl' : 'border-gray-200 shadow-sm'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && (
                    <span className="text-gray-500">/month</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <a 
                  href={tier.name === "Enterprise" ? "/contact" : "/signup"} 
                  className={`block text-center py-2 px-4 rounded-lg font-medium mb-6 
                    ${tier.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-100 hover:bg-blue-200 text-blue-700'} 
                    transition-colors`}
                >
                  {tier.cta}
                </a>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution for your specific business challenges?</p>
          <a href="/contact" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800">
            Contact our solutions team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Pricing
