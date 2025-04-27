// components/Testimonials.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Invero has transformed how we manage our supply chain. We've reduced inventory costs by 23% while improving fulfillment speed.",
    author: "Sarah Johnson",
    position: "VP of Operations",
    company: "Global Retail Inc."
  },
  {
    quote: "The automation capabilities have freed up our team to focus on strategic initiatives. Implementation was smooth and ROI was immediate.",
    author: "Michael Chen",
    position: "CTO",
    company: "Logistics Solutions"
  },
  {
    quote: "As a healthcare provider, accuracy and compliance are critical. Invero helps us maintain both while significantly reducing manual work.",
    author: "Dr. Alicia Rodriguez",
    position: "Director of Operations",
    company: "Metro Health Systems"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">Hear from businesses that have transformed their operations with Invero.</p>
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : 20,
                    position: activeIndex === index ? 'relative' : 'absolute'
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
                  style={{ display: activeIndex === index ? 'block' : 'none' }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/4 flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-blue-100 rounded-full mb-4 flex items-center justify-center text-blue-600 text-xl font-bold">
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                    <div className="md:w-3/4">
                      <svg className="h-10 w-10 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-lg text-gray-700 mb-4">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="text-yellow-500 flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to see results?</h3>
              <p className="text-blue-100 mb-8">Join thousands of businesses that have transformed their operations with Invero.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/signup" className="bg-white text-blue-700 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center">
                  Start Free Trial
                </a>
                <a href="/demo" className="border border-blue-300 text-white hover:bg-blue-700 font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center">
                  Schedule Demo
                </a>
              </div>
            </div>
            <div className="md:w-1/2 bg-blue-800 p-8 md:p-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-blue-700">
                <h4 className="text-xl font-semibold text-white mb-4">Success by the numbers</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-white">63%</p>
                    <p className="text-blue-200 text-sm">Average increase in operational efficiency</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">89%</p>
                    <p className="text-blue-200 text-sm">Of customers implement in under 30 days</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">42%</p>
                    <p className="text-blue-200 text-sm">Average reduction in manual processes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">11x</p>
                    <p className="text-blue-200 text-sm">Average ROI in the first year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
