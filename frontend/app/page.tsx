'use client';

import PriceTracker from '@/components/PriceTracker';
import { motion } from 'framer-motion';
import { FaChartLine, FaBell, FaCheck } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="space-y-16">
      <section id="home" className="pt-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Track Amazon Prices <span className="text-primary-600">Effortlessly</span>
          </h1>
          <p className="text-xl text-gray-600">
            Get notified when prices drop on your favorite Amazon products.
          </p>
        </motion.div>
      </section>
      
      <div className="max-w-4xl mx-auto">
        <PriceTracker />
      </div>
      
      <section id="features" className="pt-8">
        <motion.div 
          className="max-w-5xl mx-auto pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-primary-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <FaChartLine className="text-primary-600 h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">Monitor Amazon product prices in real-time with accurate data.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-accent-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <FaBell className="text-accent-600 h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Price Alerts</h3>
              <p className="text-gray-600">Get email notifications when prices drop below your target.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-green-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <FaCheck className="text-green-600 h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy to Use</h3>
              <p className="text-gray-600">Simple interface to quickly set up price monitoring for any product.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      <section id="how-it-works" className="pt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gray-100 rounded-2xl p-6 text-center">
                  <span className="text-5xl font-bold text-primary-600">1</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-2">Enter an Amazon product URL</h3>
                <p className="text-gray-600">Simply paste the URL of any Amazon product you want to track.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gray-100 rounded-2xl p-6 text-center">
                  <span className="text-5xl font-bold text-primary-600">2</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-2">Set your target price</h3>
                <p className="text-gray-600">Tell us what price you're willing to pay for the product.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gray-100 rounded-2xl p-6 text-center">
                  <span className="text-5xl font-bold text-primary-600">3</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-2">Get notified when the price drops</h3>
                <p className="text-gray-600">We'll send you an email as soon as the price falls below your target.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="pricing" className="pt-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Free</h3>
                <p className="text-4xl font-bold">$0<span className="text-sm text-gray-500">/month</span></p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Track up to 3 products</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Email notifications</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Basic price history</span>
                </li>
              </ul>
              <button className="w-full py-2 border border-primary-600 text-primary-600 rounded-xl hover:bg-primary-50 transition">
                Get Started
              </button>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-medium border-2 border-primary-600 relative"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <p className="text-4xl font-bold">$9<span className="text-sm text-gray-500">/month</span></p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Track up to 25 products</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Email & SMS notifications</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Detailed price history</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Price drop predictions</span>
                </li>
              </ul>
              <button className="w-full py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition">
                Start Free Trial
              </button>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Business</h3>
                <p className="text-4xl font-bold">$29<span className="text-sm text-gray-500">/month</span></p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Unlimited products</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>All notification channels</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>API access</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full py-2 border border-primary-600 text-primary-600 rounded-xl hover:bg-primary-50 transition">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}